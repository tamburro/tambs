'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import * as THREE from 'three'
import gsap from 'gsap'
import { projectsData } from '@/utlits/fackData/projectData'
import { useLanguage } from '@/context/LanguageContext'

export const GALLERY_ORDER = [16, 11, 12, 13, 14, 1, 15, 6, 2, 7, 5, 4, 3, 8, 9, 10]

export function getGalleryProjects() {
    return GALLERY_ORDER
        .map(id => projectsData.find(p => p.id === id))
        .filter(Boolean)
}

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
                ctx.font = '400 26px "Space Mono", monospace'
                ctx.fillStyle = 'rgba(255,255,255,0.6)'
                ctx.fillText((project.category || '').toUpperCase(), 4, LABEL_H / 2)
                ctx.font = '700 30px "Space Mono", monospace'
                ctx.fillStyle = 'rgba(255,255,255,0.95)'
                const title = (project.title || '').toUpperCase()
                ctx.fillText(title, LABEL_W - ctx.measureText(title).width - 4, LABEL_H / 2)
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

        const loader = new THREE.TextureLoader()
        const tiles = []
        let loadedCount = 0
        const totalTiles = ROWS.length * COLS

        // assign projects so no tile repeats its left or upper neighbor
        const assignments = []
        ROWS.forEach((_, rowIdx) => {
            assignments[rowIdx] = []
            for (let c = 0; c < COLS; c++) {
                let idx = (rowIdx * 5 + c * 3) % projects.length
                const left = assignments[rowIdx][(c - 1 + COLS) % COLS]
                const above = rowIdx > 0 ? assignments[rowIdx - 1][c] : -1
                while (idx === left || idx === above || (c === COLS - 1 && idx === assignments[rowIdx][0])) {
                    idx = (idx + 1) % projects.length
                }
                assignments[rowIdx][c] = idx
            }
        })

        const topTexCache = {}
        const bottomTexCache = {}

        function makeStripMesh(tex, lon, thetaStart, height) {
            const geo = new THREE.SphereGeometry(
                RADIUS, 12, 2,
                lon - TILE_PHI / 2, TILE_PHI * 0.92,
                thetaStart, height
            )
            const mat = new THREE.MeshBasicMaterial({
                map: tex,
                side: THREE.BackSide,
                transparent: true,
                opacity: 0,
            })
            return new THREE.Mesh(geo, mat)
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
                const mat = new THREE.MeshBasicMaterial({
                    color: 0xffffff,
                    side: THREE.BackSide,
                    transparent: true,
                    opacity: 0,
                })
                loader.load(project.src, tex => {
                    tex.colorSpace = THREE.SRGBColorSpace
                    tex.wrapS = THREE.RepeatWrapping
                    tex.repeat.x = -1
                    mat.map = tex
                    mat.needsUpdate = true
                    loadedCount++
                    if (loadedCount === totalTiles) startIntro()
                })
                const mesh = new THREE.Mesh(geo, mat)
                mesh.userData = {
                    project,
                    lat,
                    centerDir: new THREE.Vector3().setFromSphericalCoords(1, thetaCenter, lon).normalize(),
                    baseOpacity: 0,
                    hoverBoost: 0,
                    filterDim: 1,
                    filterActive: true,
                    introDone: false,
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
            moved = 0
            lastX = downX = e.clientX
            lastY = downY = e.clientY
            downTime = performance.now()
            velocity.x = velocity.y = 0
            mount.style.cursor = 'grabbing'
            if (introComplete) {
                gsap.to(camera, {
                    fov: 76, duration: 0.6, ease: 'power2.out', overwrite: 'auto',
                    onUpdate: () => camera.updateProjectionMatrix(),
                })
            }
        }

        function onPointerMove(e) {
            const rect = mount.getBoundingClientRect()
            pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
            pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1

            if (labelRef.current) {
                labelRef.current.style.transform = `translate(${e.clientX + 18}px, ${e.clientY + 18}px)`
            }

            if (!dragging) return
            const dx = e.clientX - lastX
            const dy = e.clientY - lastY
            moved += Math.abs(dx) + Math.abs(dy)
            lastX = e.clientX
            lastY = e.clientY

            const speed = 0.0035
            target.y -= dx * speed
            target.x -= dy * speed
            target.x = THREE.MathUtils.clamp(target.x, -MAX_PITCH, MAX_PITCH)
            velocity.y = -dx * speed
            velocity.x = -dy * speed
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
            if (dist < 8 && dt < 350 && hovered && introComplete && !transitioning) {
                openProject(hovered)
            }
        }

        function openProject(tile) {
            transitioning = true
            gsap.killTweensOf(camera)
            const { project } = tile.userData
            mount.style.cursor = 'default'
            if (labelRef.current) labelRef.current.style.opacity = 0

            // rotate so the tile faces the camera, then zoom in
            const dir = tile.userData.centerDir
            const targetY = Math.atan2(dir.x, -dir.z) * -1
            const targetX = Math.asin(dir.y)

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

        mount.style.cursor = 'grab'
        mount.addEventListener('pointerdown', onPointerDown)
        window.addEventListener('pointermove', onPointerMove)
        window.addEventListener('pointerup', onPointerUp)

        function onResize() {
            camera.aspect = mount.clientWidth / mount.clientHeight
            camera.updateProjectionMatrix()
            renderer.setSize(mount.clientWidth, mount.clientHeight)
        }
        window.addEventListener('resize', onResize)

        const forward = new THREE.Vector3()
        const tileWorldDir = new THREE.Vector3()

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
            if (!dragging && !transitioning) {
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
                            labelRef.current.textContent = hovered.userData.project.title
                            labelRef.current.style.opacity = 1
                        }
                        mount.style.cursor = 'pointer'
                    } else {
                        if (labelRef.current) labelRef.current.style.opacity = 0
                        mount.style.cursor = 'grab'
                    }
                }
            }

            // angular opacity falloff (tiles dim toward edges of view)
            camera.getWorldDirection(forward)
            tiles.forEach(tile => {
                tileWorldDir.copy(tile.userData.centerDir).applyQuaternion(group.quaternion)
                const dot = tileWorldDir.dot(forward)
                const falloff = THREE.MathUtils.smoothstep(dot, -0.1, 0.75)
                const base = tile.userData.baseOpacity * (0.18 + falloff * 0.82) * tile.userData.filterDim
                tile.material.opacity = Math.min(1, base + tile.userData.hoverBoost * 0.35)
                tile.userData.labelMeshes.forEach(label => {
                    label.material.opacity = tile.material.opacity * 0.85
                })
            })

            renderer.render(scene, camera)
        }
        animate()

        return () => {
            cancelAnimationFrame(rafId)
            mount.removeEventListener('pointerdown', onPointerDown)
            window.removeEventListener('pointermove', onPointerMove)
            window.removeEventListener('pointerup', onPointerUp)
            window.removeEventListener('resize', onResize)
            tiles.forEach(tile => {
                tile.geometry.dispose()
                if (tile.material.map) tile.material.map.dispose()
                tile.material.dispose()
                tile.userData.labelMeshes.forEach(label => {
                    label.geometry.dispose()
                    label.material.dispose()
                })
            })
            Object.values(topTexCache).forEach(tex => tex.dispose())
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
                <p className="sphere-gallery-hint">{t.gallery.hint}</p>
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
