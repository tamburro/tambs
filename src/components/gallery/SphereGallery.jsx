'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import * as THREE from 'three'
import gsap from 'gsap'
import { projectsData } from '@/utlits/fackData/projectData'
import { useLanguage } from '@/context/LanguageContext'
import { luminance } from '@/components/projects/ProjectHero'

export const GALLERY_ORDER = [22, 23, 21, 18, 19, 20, 17, 16, 11, 12, 13, 14, 1, 15, 6, 2, 7, 5, 4, 3, 8, 9, 10]

export function getGalleryProjects() {
    return GALLERY_ORDER
        .map(id => projectsData.find(p => p.id === id))
        .filter(Boolean)
}

// resized cover served by the Next image optimizer, instead of the 1920px original
export const coverUrl = (src, width = 828) => `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=75`

const RADIUS = 30
const ROWS = [-0.68, -0.34, 0, 0.34, 0.68] // latitudes in radians
const COLS = 12
const TILE_PHI = 0.42   // tile width (radians of longitude)
const TILE_THETA = 0.26 // tile height (radians of latitude)

export default function SphereGallery({ activeFilter = null }) {
    const mountRef = useRef(null)
    const labelRef = useRef(null)
    const overlayRef = useRef(null)
    const overlayTitleRef = useRef(null)
    const tilesRef = useRef([])
    const router = useRouter()
    const { t } = useLanguage()
    const [ready, setReady] = useState(false)
    const [coarse, setCoarse] = useState(false)

    useEffect(() => {
        setCoarse(window.matchMedia('(pointer: coarse)').matches)
    }, [])

    useEffect(() => {
        const projects = getGalleryProjects()

        const mount = mountRef.current
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(70, mount.clientWidth / mount.clientHeight, 0.1, 100)
        camera.position.set(0, 0, 0.01)

        const renderer = new THREE.WebGLRenderer({ antialias: true })
        renderer.setSize(mount.clientWidth, mount.clientHeight)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        renderer.setClearColor(0x161616)
        mount.appendChild(renderer.domElement)

        const group = new THREE.Group()
        scene.add(group)

        // latitude grid lines (phantom.land style arcs)
        const gridMat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.06 })
        const gridLats = []
        ROWS.forEach(lat => {
            gridLats.push(lat + TILE_THETA / 2 + 0.045, lat - TILE_THETA / 2 - 0.045)
        })
        gridLats.forEach(lat => {
            const pts = []
            const y = RADIUS * Math.sin(lat)
            const r = RADIUS * Math.cos(lat)
            for (let i = 0; i <= 128; i++) {
                const a = (i / 128) * Math.PI * 2
                pts.push(new THREE.Vector3(r * Math.cos(a), y, r * Math.sin(a)))
            }
            const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), gridMat)
            group.add(line)
        })

        // label strips: top = category + title, bottom = tag chips + year
        const LABEL_W = 1024
        const LABEL_H = 64
        function makeStripTexture(draw) {
            const cv = document.createElement('canvas')
            cv.width = LABEL_W
            cv.height = LABEL_H
            const ctx = cv.getContext('2d')
            draw(ctx)
            const tex = new THREE.CanvasTexture(cv)
            tex.colorSpace = THREE.SRGBColorSpace
            tex.wrapS = THREE.RepeatWrapping
            tex.repeat.x = -1
            return tex
        }

        function makeTopTexture(project) {
            return makeStripTexture(ctx => {
                ctx.textBaseline = 'middle'
                ctx.font = '700 30px "Space Mono", monospace'
                ctx.fillStyle = 'rgba(255,255,255,0.95)'
                const title = (project.title || '').toUpperCase()
                const titleX = LABEL_W - ctx.measureText(title).width - 4
                ctx.fillText(title, titleX, LABEL_H / 2)
                // the category gives way when a long title needs the room
                ctx.font = '400 26px "Space Mono", monospace'
                ctx.fillStyle = 'rgba(255,255,255,0.6)'
                let category = (project.category || '').toUpperCase()
                while (category && ctx.measureText(category).width > titleX - 40) {
                    category = category.slice(0, category.lastIndexOf(' '))
                }
                ctx.fillText(category.replace(/[\s·&]+$/, ''), 4, LABEL_H / 2)
            })
        }

        function makeBottomTexture(project) {
            return makeStripTexture(ctx => {
                ctx.textBaseline = 'middle'
                let x = 4
                const tags = (project.tags || []).slice(0, 2)
                tags.forEach(tag => {
                    const text = tag.toUpperCase()
                    ctx.font = '400 24px "Space Mono", monospace'
                    const w = ctx.measureText(text).width + 36
                    ctx.strokeStyle = 'rgba(255,255,255,0.4)'
                    ctx.lineWidth = 2
                    ctx.beginPath()
                    ctx.roundRect(x, 4, w, LABEL_H - 8, (LABEL_H - 8) / 2)
                    ctx.stroke()
                    ctx.fillStyle = 'rgba(255,255,255,0.78)'
                    ctx.fillText(text, x + 18, LABEL_H / 2 + 1)
                    x += w + 12
                })
                ctx.font = '400 26px "Space Mono", monospace'
                ctx.fillStyle = 'rgba(255,255,255,0.6)'
                const year = project.year || ''
                ctx.fillText(year, LABEL_W - ctx.measureText(year).width - 4, LABEL_H / 2)
            })
        }

        // per-pixel dimming by angle from the view axis, so tiles darken along the sphere's curve
        function applyAngularFalloff(mat) {
            mat.userData.hover = { value: 0 }
            mat.onBeforeCompile = shader => {
                shader.uniforms.uHover = mat.userData.hover
                shader.vertexShader = shader.vertexShader
                    .replace('#include <common>', '#include <common>\nvarying vec3 vViewPos;')
                    .replace('#include <project_vertex>', '#include <project_vertex>\nvViewPos = mvPosition.xyz;')
                shader.fragmentShader = shader.fragmentShader
                    .replace('#include <common>', '#include <common>\nvarying vec3 vViewPos;\nuniform float uHover;')
                    .replace('#include <dithering_fragment>', `
                        float viewDot = -normalize(vViewPos).z;
                        float falloff = smoothstep(0.45, 0.97, viewDot);
                        falloff = mix(falloff, 1.0, uHover * 0.6);
                        gl_FragColor.a *= 0.16 + 0.84 * falloff;
                        #include <dithering_fragment>`)
            }
            return mat
        }

        const loader = new THREE.TextureLoader()
        // one texture per project, shared by every tile that repeats it
        const coverCache = {}
        function withCover(project, onReady) {
            let entry = coverCache[project.id]
            if (!entry) {
                entry = coverCache[project.id] = { tex: null, waiting: [] }
                loader.load(coverUrl(project.src), tex => {
                    tex.colorSpace = THREE.SRGBColorSpace
                    tex.wrapS = THREE.RepeatWrapping
                    tex.repeat.x = -1
                    entry.tex = tex
                    entry.waiting.forEach(fn => fn(tex))
                })
            }
            if (entry.tex) onReady(entry.tex)
            else entry.waiting.push(onReady)
        }
        const tiles = []
        let loadedCount = 0
        const totalTiles = ROWS.length * COLS

        // assign projects by proximity to the view axis: the tile facing the camera on load gets the
        // first project of GALLERY_ORDER, its neighbours the next ones, and so on around the sphere.
        // a project is never repeated on tiles close to each other.
        const tileDir = (rowIdx, c) => {
            const lat = ROWS[rowIdx]
            const lon = (c / COLS) * Math.PI * 2 + (rowIdx % 2 === 0 ? 0 : Math.PI / COLS)
            return new THREE.Vector3(-Math.cos(lon) * Math.cos(lat), Math.sin(lat), Math.sin(lon) * Math.cos(lat))
        }
        const front = new THREE.Vector3(0, 0, -1)
        const slots = []
        ROWS.forEach((_, rowIdx) => {
            for (let c = 0; c < COLS; c++) slots.push({ rowIdx, c, dir: tileDir(rowIdx, c) })
        })
        // ties go to the upper tiles, which the bottom chrome doesn't cover
        const rank = slot => Math.round(slot.dir.dot(front) * 1000)
        slots.sort((a, b) => rank(b) - rank(a) || b.dir.y - a.dir.y)

        const assignments = ROWS.map(() => [])
        const placed = []
        let next = 0
        slots.forEach(slot => {
            const nearby = placed.filter(p => p.dir.dot(slot.dir) > 0.73).map(p => p.idx)
            let idx = next % projects.length
            while (nearby.includes(idx)) idx = (idx + 1) % projects.length
            next++
            assignments[slot.rowIdx][slot.c] = idx
            placed.push({ dir: slot.dir, idx })
        })

        const topTexCache = {}
        const bottomTexCache = {}

        function makeStripMesh(tex, lon, thetaStart, height) {
            const geo = new THREE.SphereGeometry(
                RADIUS, 12, 2,
                lon - TILE_PHI / 2, TILE_PHI * 0.92,
                thetaStart, height
            )
            const mat = applyAngularFalloff(new THREE.MeshBasicMaterial({
                map: tex,
                side: THREE.BackSide,
                transparent: true,
                opacity: 0,
            }))
            return new THREE.Mesh(geo, mat)
        }

        // blurred copy of the cover, shown behind the whole cell on hover
        const CELL_PHI = (Math.PI * 2) / COLS
        const CELL_THETA = 0.34
        const blurTexCache = {}
        function makeBlurTexture(image) {
            const small = document.createElement('canvas')
            small.width = 24
            small.height = 16
            const scale = Math.max(small.width / image.width, small.height / image.height)
            const w = image.width * scale
            const h = image.height * scale
            small.getContext('2d').drawImage(image, (small.width - w) / 2, (small.height - h) / 2, w, h)

            const cv = document.createElement('canvas')
            cv.width = 192
            cv.height = 128
            const ctx = cv.getContext('2d')
            ctx.filter = 'blur(10px)'
            ctx.drawImage(small, -16, -12, cv.width + 32, cv.height + 24)
            const tex = new THREE.CanvasTexture(cv)
            tex.colorSpace = THREE.SRGBColorSpace
            tex.wrapS = THREE.RepeatWrapping
            tex.repeat.x = -1
            return tex
        }

        ROWS.forEach((lat, rowIdx) => {
            const rowOffset = rowIdx % 2 === 0 ? 0 : Math.PI / COLS
            for (let c = 0; c < COLS; c++) {
                const project = projects[assignments[rowIdx][c]]
                const lon = (c / COLS) * Math.PI * 2 + rowOffset

                // theta in SphereGeometry: 0 at north pole; convert latitude
                const thetaCenter = Math.PI / 2 - lat
                const geo = new THREE.SphereGeometry(
                    RADIUS, 16, 12,
                    lon - TILE_PHI / 2, TILE_PHI,
                    thetaCenter - TILE_THETA / 2, TILE_THETA
                )
                const mat = applyAngularFalloff(new THREE.MeshBasicMaterial({
                    color: 0xffffff,
                    side: THREE.BackSide,
                    transparent: true,
                    opacity: 0,
                }))
                // dimmed so the white labels stay readable on top
                const bgMat = new THREE.MeshBasicMaterial({
                    color: 0x707070,
                    side: THREE.BackSide,
                    transparent: true,
                    opacity: 0,
                    depthWrite: false,
                })
                const bg = new THREE.Mesh(new THREE.SphereGeometry(
                    RADIUS + 0.5, 12, 8,
                    lon - CELL_PHI / 2, CELL_PHI,
                    thetaCenter - CELL_THETA / 2, CELL_THETA
                ), bgMat)
                bg.renderOrder = -1
                bg.visible = false
                group.add(bg)

                withCover(project, tex => {
                    mat.map = tex
                    mat.needsUpdate = true
                    if (!blurTexCache[project.id]) blurTexCache[project.id] = makeBlurTexture(tex.image)
                    bgMat.map = blurTexCache[project.id]
                    bgMat.needsUpdate = true
                    loadedCount++
                    if (loadedCount === totalTiles) startIntro()
                })
                const mesh = new THREE.Mesh(geo, mat)
                mesh.userData = {
                    project,
                    lat,
                    // same axis convention as SphereGeometry (phi = 0 points to -x)
                    centerDir: new THREE.Vector3(
                        -Math.cos(lon) * Math.sin(thetaCenter),
                        Math.cos(thetaCenter),
                        Math.sin(lon) * Math.sin(thetaCenter)
                    ),
                    baseOpacity: 0,
                    hoverBoost: 0,
                    filterDim: 1,
                    filterActive: true,
                    introDone: false,
                    bg,
                }
                group.add(mesh)
                tiles.push(mesh)

                if (!topTexCache[project.id]) topTexCache[project.id] = makeTopTexture(project)
                if (!bottomTexCache[project.id]) bottomTexCache[project.id] = makeBottomTexture(project)

                const STRIP_H = 0.022
                const topMesh = makeStripMesh(topTexCache[project.id], lon, thetaCenter - TILE_THETA / 2 - 0.008 - STRIP_H, STRIP_H)
                const bottomMesh = makeStripMesh(bottomTexCache[project.id], lon, thetaCenter + TILE_THETA / 2 + 0.008, STRIP_H)
                mesh.userData.labelMeshes = [topMesh, bottomMesh]
                group.add(topMesh)
                group.add(bottomMesh)
            }
        })
        tilesRef.current = tiles

        // ---- interaction state ----
        const rot = { x: 0, y: 0 }          // current
        const target = { x: 0, y: 0 }       // target
        const velocity = { x: 0, y: 0 }
        let dragging = false
        let touchDrag = false
        let moved = 0
        let lastX = 0, lastY = 0
        let downX = 0, downY = 0, downTime = 0
        let hovered = null
        let transitioning = false
        let introComplete = false

        const MAX_PITCH = 0.55

        const raycaster = new THREE.Raycaster()
        const pointer = new THREE.Vector2()

        function startIntro() {
            setReady(true)
            camera.fov = 95
            camera.updateProjectionMatrix()
            gsap.to(camera, {
                fov: 70, duration: 1.6, ease: 'power3.out',
                onUpdate: () => camera.updateProjectionMatrix(),
                onComplete: () => { introComplete = true },
            })
            tiles.forEach(tile => {
                gsap.to(tile.userData, {
                    baseOpacity: 1,
                    duration: 1.1,
                    delay: 0.15 + Math.random() * 0.7,
                    ease: 'power2.out',
                    onComplete: () => { tile.userData.introDone = true },
                })
            })
        }

        function onPointerDown(e) {
            if (transitioning) return
            dragging = true
            touchDrag = e.pointerType !== 'mouse'
            moved = 0
            lastX = downX = e.clientX
            lastY = downY = e.clientY
            downTime = performance.now()
            velocity.x = velocity.y = 0
            updatePointer(e)
            try { mount.setPointerCapture(e.pointerId) } catch {}
            mount.style.cursor = 'grabbing'
            if (introComplete) {
                gsap.to(camera, {
                    fov: 76, duration: 0.6, ease: 'power2.out', overwrite: 'auto',
                    onUpdate: () => camera.updateProjectionMatrix(),
                })
            }
        }

        function updatePointer(e) {
            const rect = mount.getBoundingClientRect()
            pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
            pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1
        }

        function onPointerMove(e) {
            updatePointer(e)

            if (labelRef.current && e.pointerType === 'mouse') {
                labelRef.current.style.transform = `translate(${e.clientX + 18}px, ${e.clientY + 18}px)`
            }

            if (!dragging) return
            const dx = e.clientX - lastX
            const dy = e.clientY - lastY
            moved += Math.abs(dx) + Math.abs(dy)
            lastX = e.clientX
            lastY = e.clientY

            const speed = touchDrag ? 0.005 : 0.0035
            const speedY = touchDrag ? 0.0028 : 0.0035
            target.y -= dx * speed
            target.x -= dy * speedY
            target.x = THREE.MathUtils.clamp(target.x, -MAX_PITCH, MAX_PITCH)
            velocity.y = -dx * speed
            velocity.x = -dy * speedY
        }

        function onPointerUp(e) {
            if (!dragging) return
            dragging = false
            mount.style.cursor = 'grab'
            if (introComplete && !transitioning) {
                gsap.to(camera, {
                    fov: 70, duration: 0.9, ease: 'power2.out', overwrite: 'auto',
                    onUpdate: () => camera.updateProjectionMatrix(),
                })
            }

            // inertia
            target.y += velocity.y * 14
            target.x = THREE.MathUtils.clamp(target.x + velocity.x * 14, -MAX_PITCH, MAX_PITCH)

            // click detection
            const dist = Math.abs(e.clientX - downX) + Math.abs(e.clientY - downY)
            const dt = performance.now() - downTime
            let picked = hovered
            if (touchDrag) {
                updatePointer(e)
                raycaster.setFromCamera(pointer, camera)
                const hits = raycaster.intersectObjects(tiles)
                picked = hits.length && hits[0].object.userData.filterActive ? hits[0].object : null
            }
            const slop = touchDrag ? 16 : 8
            const maxTime = touchDrag ? 500 : 350
            if (dist < slop && dt < maxTime && picked && introComplete && !transitioning) {
                openProject(picked)
            }
            touchDrag = false
        }

        function onPointerCancel() {
            if (!dragging) return
            dragging = false
            touchDrag = false
            mount.style.cursor = 'grab'
        }

        function openProject(tile) {
            transitioning = true
            gsap.killTweensOf(camera)
            const { project } = tile.userData
            mount.style.cursor = 'default'
            if (labelRef.current) labelRef.current.style.opacity = 0

            // rotate so the tile faces the camera, then zoom in
            const dir = tile.userData.centerDir
            const targetY = Math.atan2(dir.x, -dir.z)
            const targetX = -Math.asin(dir.y)

            // shortest path for longitude
            let ty = targetY
            while (ty - rot.y > Math.PI) ty -= Math.PI * 2
            while (ty - rot.y < -Math.PI) ty += Math.PI * 2

            if (overlayTitleRef.current) {
                overlayTitleRef.current.textContent = project.title
            }

            const tl = gsap.timeline({
                onComplete: () => router.push(`/works/${project.slug}`),
            })
            tl.to(target, { x: targetX, y: ty, duration: 0.9, ease: 'power3.inOut' }, 0)
            tl.to(camera, {
                fov: 26, duration: 1.1, ease: 'power3.inOut',
                onUpdate: () => camera.updateProjectionMatrix(),
            }, 0.15)
            tl.to(overlayRef.current, { opacity: 1, duration: 0.7, ease: 'power2.inOut' }, 0.55)
            tl.fromTo(overlayTitleRef.current,
                { opacity: 0, y: 28 },
                { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, 0.75)
            tl.to({}, { duration: 0.35 }) // hold
        }

        // wheel / trackpad rotates the sphere, like dragging sideways
        function onWheel(e) {
            if (e.ctrlKey) return // pinch-zoom
            e.preventDefault()
            if (transitioning || !introComplete) return
            const unit = e.deltaMode === 1 ? 16 : 1
            target.y += (e.deltaX + e.deltaY) * unit * 0.0012
        }

        mount.style.cursor = 'grab'
        mount.addEventListener('wheel', onWheel, { passive: false })
        mount.addEventListener('pointerdown', onPointerDown)
        window.addEventListener('pointermove', onPointerMove)
        window.addEventListener('pointerup', onPointerUp)
        window.addEventListener('pointercancel', onPointerCancel)

        function onResize() {
            camera.aspect = mount.clientWidth / mount.clientHeight
            camera.updateProjectionMatrix()
            renderer.setSize(mount.clientWidth, mount.clientHeight)
        }
        window.addEventListener('resize', onResize)

        let rafId
        function animate() {
            rafId = requestAnimationFrame(animate)
            frame()
        }

        if (process.env.NODE_ENV === 'development') {
            let simTime = null
            window.__sg = {
                camera, group, tiles, rot, target, gsap,
                step: (ms = 16) => {
                    if (simTime === null) simTime = gsap.ticker.time
                    simTime += ms / 1000
                    gsap.updateRoot(simTime)
                    frame()
                },
            }
        }

        function frame() {
            // idle drift
            if (!dragging && !transitioning && introComplete) {
                target.y += 0.00045
            }

            // lenis-style easing
            rot.x += (target.x - rot.x) * 0.06
            rot.y += (target.y - rot.y) * 0.06
            group.rotation.x = rot.x
            group.rotation.y = rot.y

            // hover raycast
            if (!dragging && !transitioning && !touchDrag) {
                raycaster.setFromCamera(pointer, camera)
                const hits = raycaster.intersectObjects(tiles)
                const hit = hits.length && hits[0].object.userData.filterActive ? hits[0].object : null
                if (hit !== hovered) {
                    if (hovered) {
                        gsap.to(hovered.userData, { hoverBoost: 0, duration: 0.4, ease: 'power2.out' })
                    }
                    hovered = hit
                    if (hovered) {
                        gsap.to(hovered.userData, { hoverBoost: 1, duration: 0.4, ease: 'power2.out' })
                        if (labelRef.current) {
                            const accent = hovered.userData.project.accentColor
                            labelRef.current.textContent = hovered.userData.project.title
                            labelRef.current.style.background = accent || ''
                            labelRef.current.style.color = accent && luminance(accent) <= 0.22 ? '#FAFAFA' : ''
                            labelRef.current.style.opacity = 1
                        }
                        mount.style.cursor = 'pointer'
                    } else {
                        if (labelRef.current) labelRef.current.style.opacity = 0
                        mount.style.cursor = 'grab'
                    }
                }
            }

            // angular falloff itself happens per pixel in the shader (applyAngularFalloff)
            tiles.forEach(tile => {
                tile.material.opacity = tile.userData.baseOpacity * tile.userData.filterDim
                tile.material.userData.hover.value = tile.userData.hoverBoost
                tile.userData.labelMeshes.forEach(label => {
                    label.material.opacity = tile.material.opacity * 0.85
                    label.material.userData.hover.value = tile.userData.hoverBoost
                })
                tile.userData.bg.visible = tile.userData.hoverBoost > 0.001
                tile.userData.bg.material.opacity = tile.material.opacity * tile.userData.hoverBoost
            })

            renderer.render(scene, camera)
        }
        animate()

        return () => {
            cancelAnimationFrame(rafId)
            mount.removeEventListener('wheel', onWheel)
            mount.removeEventListener('pointerdown', onPointerDown)
            window.removeEventListener('pointermove', onPointerMove)
            window.removeEventListener('pointerup', onPointerUp)
            window.removeEventListener('pointercancel', onPointerCancel)
            window.removeEventListener('resize', onResize)
            tiles.forEach(tile => {
                tile.geometry.dispose()
                if (tile.material.map) tile.material.map.dispose()
                tile.material.dispose()
                tile.userData.bg.geometry.dispose()
                tile.userData.bg.material.dispose()
                tile.userData.labelMeshes.forEach(label => {
                    label.geometry.dispose()
                    label.material.dispose()
                })
            })
            Object.values(topTexCache).forEach(tex => tex.dispose())
            Object.values(blurTexCache).forEach(tex => tex.dispose())
            Object.values(bottomTexCache).forEach(tex => tex.dispose())
            renderer.dispose()
            if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement)
            tilesRef.current = []
        }
    }, [router])

    // dim tiles that don't match the active filter
    useEffect(() => {
        tilesRef.current.forEach(tile => {
            const { project } = tile.userData
            const match = !activeFilter
                || project.category === activeFilter
                || (project.tags || []).includes(activeFilter)
            tile.userData.filterActive = match
            gsap.to(tile.userData, {
                filterDim: match ? 1 : 0.06,
                duration: 0.7,
                ease: 'power2.inOut',
            })
        })
    }, [activeFilter])

    return (
        <div className="sphere-gallery-root">
            <div ref={mountRef} className="sphere-gallery-canvas" />

            {/* vignette */}
            <div className="sphere-gallery-vignette" />

            {/* heading */}
            <div className={`sphere-gallery-ui ${ready ? 'is-ready' : ''}`}>
                <p className="sphere-gallery-eyebrow">{t.gallery.eyebrow}</p>
                <p className="sphere-gallery-hint">{coarse ? t.gallery.hintTouch : t.gallery.hint}</p>
            </div>

            {/* cursor label */}
            <div ref={labelRef} className="sphere-gallery-label" />

            {/* transition overlay */}
            <div ref={overlayRef} className="sphere-gallery-overlay">
                <h2 ref={overlayTitleRef} className="sphere-gallery-overlay-title" />
            </div>
        </div>
    )
}
