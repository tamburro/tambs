// src/utlits/fackData/projectData.js

export const projectsData = [
    {
        id: 18,
        slug: "profissoes-teste-de-conhecimentos",
        pageType: "rich",
        src: "/images/projects/profissoes/capa.jpg",
        category: "Product Design & Full-Stack",
        tags: ["Product Design", "Full-Stack", "Game Design"],
        title: "Profissões",
        tagline: "Teste o quanto você realmente sabe da sua profissão — jogando.",
        tagline_en: "Test how much you really know about your profession — by playing.",
        description: "Um Duolingo para profissões: você testa seus conhecimentos de UX, front-end ou marketing em desafios diários de cinco minutos, vê seu nível real por competência num mapa visual e volta todo dia para subir esse nível. Feedback imediato, gamificação de verdade (XP, ofensiva, conquistas, ranking) e 100% gratuito, sem paywall nem limite diário.",
        description_en: "A Duolingo for professions: you test your knowledge of UX, front-end, or marketing in five-minute daily challenges, see your real level per competency on a visual map, and come back every day to raise it. Immediate feedback, real gamification (XP, streak, achievements, leaderboard), and 100% free — no paywall, no daily limit.",
        year: "2026",
        role: "Product Designer & AI Engineer",
        timeline: "Concept a produção · pivô para gratuito",
        timeline_en: "Concept to production · pivot to free",
        team: "Solo",
        client: "Produto próprio",
        tools: ["Next.js", "Prisma", "Auth.js", "Three.js"],
        liveDemoLink: "https://duolingo-profissoes.vercel.app/",
        sections: [
            {
                title: "O Problema",
                title_en: "The Problem",
                type: "text",
                content: "Quem estuda ou já atua numa profissão não sabe o quanto realmente domina dela. Cursos de quarenta horas morrem no módulo dois, certificados atestam presença e não competência, e a maioria dos produtos de aprendizado esconde o conteúdo mais útil atrás de paywall. Falta um jeito rápido, honesto e gratuito de responder uma pergunta simples: onde estão as minhas lacunas? O desafio de design era transformar autoavaliação em algo que a pessoa quisesse fazer todo dia, sem a fadiga de vídeo-aulas nem a culpa de mais uma assinatura parada no cartão.",
                content_en: "People studying or already working in a profession don't know how much they truly master it. Forty-hour courses die at module two, certificates attest to attendance rather than competence, and most learning products hide the most useful content behind a paywall. What's missing is a fast, honest, and free way to answer one simple question: where are my gaps? The design challenge was to turn self-assessment into something people would want to do every day, without the fatigue of video lessons or the guilt of yet another idle subscription on the card."
            },
            {
                title: "Landing",
                title_en: "Landing",
                type: "image",
                src: "/images/projects/profissoes/capa.jpg",
                caption: "Landing dark com orb WebGL (Three.js) e tipografia display animada em GSAP",
                caption_en: "Dark landing with a WebGL orb (Three.js) and GSAP-animated display typography"
            },
            {
                title: "Pesquisa & Direção",
                title_en: "Research & Direction",
                type: "research",
                methods: ["Benchmark de apps de microlearning e hábito (Duolingo, Sololearn, Brilliant)", "Análise de trilhas e certificações de UX, front-end e marketing", "Mapeamento do loop de hábito: gatilho, ação, recompensa variável"],
                methods_en: ["Benchmark of microlearning and habit apps (Duolingo, Sololearn, Brilliant)", "Analysis of UX, front-end, and marketing tracks and certifications", "Habit-loop mapping: trigger, action, variable reward"],
                content: "O Duolingo provou que a ofensiva diária e o feedback imediato viciam mais que qualquer curso longo, mas trata idioma como trilha linear. Para profissão, competência não é linear: alguém pode mandar bem em UI e patinar em pesquisa. A direção foi um mapa de competências (não uma trilha), onde cada skill tem uma barra de domínio de 0 a 100 que é a própria medida de quanto você sabe. A escolha de abrir tudo de graça foi deliberada: conhecimento não devia ter catraca, e a retenção viria do hábito e do progresso visível, não de um gate.",
                content_en: "Duolingo proved that the daily streak and immediate feedback are more addictive than any long course, but it treats language as a linear track. For a profession, competence isn't linear: someone can nail UI and struggle with research. The direction was a competency map (not a track), where each skill has a 0-to-100 mastery bar that is itself the measure of how much you know. Making everything free was deliberate: knowledge shouldn't have a turnstile, and retention would come from habit and visible progress, not from a gate.",
                highlights: [
                    "Competência não é linear: o produto é um mapa de skills, não uma trilha única",
                    "A barra de domínio (0–100) por skill É a métrica de quanto a pessoa sabe",
                    "Ofensiva, XP e conquistas movem o hábito diário sem depender de conteúdo novo",
                    "100% gratuito por princípio: sem paywall, sem limite diário, sem plano pago"
                ],
                highlights_en: [
                    "Competence isn't linear: the product is a skill map, not a single track",
                    "The per-skill mastery bar (0–100) IS the metric of how much you know",
                    "Streak, XP, and achievements drive the daily habit without needing new content",
                    "Free by principle: no paywall, no daily limit, no paid plan"
                ]
            },
            {
                title: "Solução & Produto",
                title_en: "Solution & Product",
                type: "text",
                content: "Profissões entrega um loop diário curto: o mapa mostra suas competências com barra de domínio, ofensiva e XP; você escolhe uma skill, encara um desafio de cinco minutos e recebe feedback na hora a cada resposta; ao concluir, vê o XP somar, o domínio subir e a ofensiva avançar. O onboarding é uma autoavaliação leve que posiciona o ponto de partida de cada skill, então ninguém começa do zero absoluto. Toda a UI do app adota uma direção editorial em papel (fundo creme, tipografia display Unbounded, hairlines e micro-labels verdes), em contraste proposital com a landing dark e cinética.",
                content_en: "Profissões delivers a short daily loop: the map shows your competencies with a mastery bar, streak, and XP; you pick a skill, take a five-minute challenge, and get feedback on the spot with every answer; on completion, you watch XP add up, mastery rise, and the streak advance. Onboarding is a light self-assessment that positions each skill's starting point, so no one begins from absolute zero. The whole app UI adopts an editorial paper direction (cream background, Unbounded display type, hairlines, and green micro-labels), a deliberate contrast to the dark, kinetic landing."
            },
            {
                title: "Mapa de competências",
                title_en: "Competency map",
                type: "image",
                src: "/images/projects/profissoes/dashboard.png",
                caption: "Dashboard editorial em papel: nível, meta diária, ofensiva e domínio por competência",
                caption_en: "Editorial paper dashboard: level, daily goal, streak, and per-competency mastery"
            },
            {
                title: "Onboarding & autoavaliação",
                title_en: "Onboarding & self-assessment",
                type: "image",
                src: "/images/projects/profissoes/onboarding.png",
                caption: "Autoavaliação posiciona o domínio inicial de cada skill no mapa",
                caption_en: "Self-assessment positions each skill's initial mastery on the map"
            },
            {
                title: "Cinco formatos de desafio",
                title_en: "Five challenge formats",
                type: "research",
                methods: ["Escolha única", "Múltipla (crítica/decisão)", "Ordenar (drag-and-drop)", "Combinar pares", "Verdadeiro ou falso"],
                methods_en: ["Single choice", "Multiple (critique/decision)", "Order (drag-and-drop)", "Match pairs", "True or false"],
                content: "Cada formato testa um tipo diferente de conhecimento e mantém o ritmo variado ao longo dos passos de um desafio. A avaliação é imediata e client-side (a resposta correta vem no payload do passo), enquanto XP, domínio e ofensiva são aplicados no servidor ao concluir. Um combo de acertos consecutivos dá aquele empurrão extra de dopamina. São 3 profissões, 10 competências e 30 desafios em três níveis (iniciante, intermediário e avançado).",
                content_en: "Each format tests a different kind of knowledge and keeps the pace varied across a challenge's steps. Evaluation is immediate and client-side (the correct answer ships in the step payload), while XP, mastery, and streak are applied on the server upon completion. A combo of consecutive correct answers delivers that extra dopamine push. There are 3 professions, 10 competencies, and 30 challenges across three levels (beginner, intermediate, and advanced).",
                highlights: [
                    "Feedback imediato com explicação a cada resposta, dentro do próprio passo",
                    "Ordenar usa drag-and-drop nativo com alternativa por setas (acessível no toque)",
                    "Combo de acertos e ofensiva diária como recompensa variável",
                    "30 desafios em 3 níveis, do iniciante ao avançado, por competência"
                ],
                highlights_en: [
                    "Immediate feedback with an explanation on every answer, within the step itself",
                    "Order uses native drag-and-drop with an arrow fallback (touch-accessible)",
                    "Answer combo and daily streak as a variable reward",
                    "30 challenges across 3 levels, beginner to advanced, per competency"
                ]
            },
            {
                title: "Player & celebração",
                title_en: "Player & celebration",
                type: "gallery",
                columns: 2,
                images: [
                    { src: "/images/projects/profissoes/player.png", caption: "Player do desafio: enunciado display, opções em hairline e barra de progresso", caption_en: "Challenge player: display prompt, hairline options, and progress bar" },
                    { src: "/images/projects/profissoes/resultado.png", caption: "Tela de resultado: XP, domínio e ofensiva animados, com confete no acerto total", caption_en: "Result screen: animated XP, mastery, and streak, with confetti on a perfect run" }
                ]
            },
            {
                title: "No celular",
                title_en: "On mobile",
                type: "screens",
                images: [
                    { src: "/images/projects/profissoes/m_dashboard.png", caption: "Mapa" , caption_en: "Map" },
                    { src: "/images/projects/profissoes/m_player.png", caption: "Desafio", caption_en: "Challenge" }
                ]
            },
            {
                title: "Arquitetura & IA",
                title_en: "Architecture & AI",
                type: "text",
                content: "Construído com AI coding (Claude como pair programmer, do shaping ao deploy). Stack: Next.js 16 (App Router, Turbopack), Prisma + PostgreSQL (Neon) para profissões, skills, desafios e progresso, Auth.js v5 para login, TanStack Query no cliente, Three.js e GSAP na landing. O produto nasceu de um processo de shaping (requisitos, breadboard e fatias verticais) documentado no repositório, e passou por um pivô importante: começou freemium com Stripe e virou 100% gratuito, o que exigiu arrancar o paywall, o limite diário e o enum de planos sem quebrar o loop central. Deploy contínuo na Vercel, com um modo demo que abre o app inteiro via login de visitante.",
                content_en: "Built with AI coding (Claude as pair programmer, from shaping to deployment). Stack: Next.js 16 (App Router, Turbopack), Prisma + PostgreSQL (Neon) for professions, skills, challenges, and progress, Auth.js v5 for login, TanStack Query on the client, Three.js and GSAP on the landing. The product grew out of a shaping process (requirements, breadboard, and vertical slices) documented in the repo, and went through a major pivot: it started freemium with Stripe and became 100% free, which required ripping out the paywall, the daily limit, and the plan enum without breaking the core loop. Continuous deployment on Vercel, with a demo mode that opens the whole app via guest login."
            },
            {
                title: "Resultados & Aprendizados",
                title_en: "Results & Learnings",
                type: "outcomes",
                metrics: [
                    { value: "R$ 0", label: "gratuito de verdade, sem paywall nem limite diário" },
                    { value: "5", label: "formatos de desafio, em 3 níveis de dificuldade" },
                    { value: "30", label: "desafios em 10 competências e 3 profissões" }
                ],
                metrics_en: [
                    { value: "R$ 0", label: "truly free, no paywall or daily limit" },
                    { value: "5", label: "challenge formats, across 3 difficulty levels" },
                    { value: "30", label: "challenges across 10 competencies and 3 professions" }
                ],
                content: "O aprendizado central foi que o produto não vende conteúdo, vende autoconhecimento com hábito. A decisão mais importante foi medir domínio por competência num mapa, em vez de empilhar aulas numa trilha, e deixar a gamificação (ofensiva, combo, conquistas) carregar a retenção. O pivô para gratuito reforçou a proposta: sem a fricção de um paywall, a única razão para voltar é o próprio progresso, o que elevou a régua do design de feedback e recompensa. Tecnicamente, separar avaliação imediata no cliente da aplicação de XP no servidor manteve o feedback instantâneo sem abrir mão de um placar confiável.",
                content_en: "The core learning was that the product doesn't sell content, it sells self-knowledge with a habit. The most important decision was to measure mastery per competency on a map, instead of stacking lessons on a track, and to let gamification (streak, combo, achievements) carry retention. The pivot to free reinforced the proposition: without the friction of a paywall, the only reason to return is progress itself, which raised the bar for feedback and reward design. Technically, separating immediate client-side evaluation from server-side XP application kept feedback instant without giving up a trustworthy scoreboard."
            }
        ]
    },
    {
        id: 19,
        slug: "maestria-avaliacao-competencias-ux",
        pageType: "rich",
        src: "/images/projects/maestria/maestria_landing_hero.png",
        category: "Product Design & Full-Stack",
        tags: ["Product Design", "Full-Stack"],
        title: "Maestria",
        tagline: "SaaS B2B de avaliação de competências: radar, senioridade e PDI 70-20-10 para designers e times de UX.",
        tagline_en: "B2B SaaS for competency assessment: radar, seniority and 70-20-10 development plans for UX designers and teams.",
        description: "SaaS português-first de avaliação e desenvolvimento de competências de UX/Product Design. A pessoa se avalia contra um framework de 14 competências e ~88 habilidades na escala Dreyfus de 6 níveis, recebe um radar, uma estimativa de senioridade na régua brasileira e um plano de desenvolvimento 70-20-10. O mesmo framework serve ao gestor: gap autoavaliação × gestor, radar agregado do time e PDI por pessoa.",
        description_en: "Portuguese-first SaaS for assessing and developing UX/Product Design competencies. You assess yourself against a framework of 14 competencies and ~88 skills on the 6-level Dreyfus scale, and get a radar, a seniority estimate on the Brazilian ladder and a 70-20-10 development plan. The same framework serves managers: self × manager gap, aggregate team radar and per-person development plans.",
        year: "2026",
        role: "Product Designer & Full-Stack",
        timeline: "3 dias · MVP + módulo B2B",
        timeline_en: "3 days · MVP + B2B module",
        team: "Solo",
        client: "Produto próprio",
        tools: ["Next.js", "Prisma", "Stripe", "GSAP"],
        liveDemoLink: "https://maestria-eta.vercel.app/",
        accent: "#6A4CF5",
        accentColor: "#6A4CF5",
        sections: [
            {
                type: "text",
                title: "O Problema",
                title_en: "The Problem",
                content: "Profissionais de UX no Brasil não têm uma forma estruturada, confiável e barata de responder três perguntas: onde estou? O que me falta para o próximo nível? E como um gestor calibra isso de forma justa entre pessoas diferentes? Hoje isso é resolvido com planilhas soltas, autoavaliações informais e réguas de senioridade que variam de empresa para empresa. Para a pessoa, o custo é um plano de desenvolvimento genérico e negociações de senioridade sem argumento. Para o gestor, é decisão no feeling — promoções injustas, PDIs de copiar e colar, turnover. As ferramentas globais que atacam o problema (Uxcel, TalentGuard, Leapsome) são caras, em inglês e genéricas demais para a realidade brasileira.",
                content_en: "UX professionals in Brazil have no structured, trustworthy and affordable way to answer three questions: where am I? What's missing for the next level? And how does a manager calibrate this fairly across different people? Today this is solved with loose spreadsheets, informal self-assessments and seniority ladders that change from company to company. For the individual, the cost is a generic development plan and seniority negotiations without arguments. For the manager, it's gut-feeling decisions — unfair promotions, copy-paste development plans, turnover. The global tools attacking the problem (Uxcel, TalentGuard, Leapsome) are expensive, English-only and too generic for the Brazilian reality."
            },
            {
                type: "image",
                fullWidth: true,
                src: "/images/projects/maestria/maestria_landing_hero.png",
                caption: "Landing: o 'radar vivo' desenha-se e morfa continuamente entre perfis Júnior → Pleno → Sênior.",
                caption_en: "Landing: the 'living radar' draws itself and continuously morphs between Junior → Mid → Senior profiles."
            },
            {
                type: "research",
                title: "Pesquisa",
                title_en: "Research",
                methods: ["Fundamentação do framework no modelo Dreyfus de aquisição de habilidade (6 níveis com âncoras comportamentais)", "Literatura de viés em autoavaliação (efeito Dunning-Kruger) e mitigações de produto", "Benchmark competitivo: Uxcel, TalentGuard, Leapsome, planilhas NN/g e matrizes da comunidade", "Mercado BR: salários por senioridade (CAGED, Glassdoor), régua Júnior→Especialista e sensibilidade a preço em BRL"],
                methods_en: ["Framework grounded in the Dreyfus model of skill acquisition (6 levels with behavioral anchors)", "Self-assessment bias literature (Dunning-Kruger effect) and product mitigations", "Competitive benchmark: Uxcel, TalentGuard, Leapsome, NN/g spreadsheets and community matrices", "Brazilian market: salaries by seniority (CAGED, Glassdoor), the Junior->Specialist ladder and BRL price sensitivity"],
                content: "A pesquisa apontou duas verdades que moldaram o produto. Primeira: autoavaliação sofre de viés sistemático — iniciantes superestimam, experientes subestimam — então uma nota isolada vale pouco; o antídoto é âncora comportamental em cada nível e o confronto com a leitura do gestor. Segunda: o motor de receita não é o indivíduo, é o time — o gestor que precisa calibrar senioridade e conduzir 1:1s com dado é quem paga. O indivíduo é topo de funil. Nenhum concorrente combina framework real de UX, português, régua brasileira e preço em BRL.",
                content_en: "Research surfaced two truths that shaped the product. First: self-assessment carries systematic bias — beginners overestimate, experts underestimate — so an isolated score is worth little; the antidote is a behavioral anchor at every level plus confrontation with the manager's reading. Second: the revenue engine is not the individual, it's the team — the manager who needs to calibrate seniority and run data-driven 1:1s is the one who pays. The individual is top of funnel. No competitor combines a real UX framework, Portuguese, the Brazilian ladder and BRL pricing.",
                highlights: ["N/A nunca é zero: quem não faz motion não é punido — 'não se aplica' sai da média, nunca conta como nota baixa", "Senioridade é estimativa: o resultado é sempre rotulado como sugestão orientativa, ponto de partida de conversa, não veredito", "O gap é a feature: a divergência entre autoavaliação e leitura do gestor é o artefato central da calibração"],
                highlights_en: ["N/A is never zero: someone who doesn't do motion isn't punished — 'not applicable' leaves the average, never counts as a low score", "Seniority is an estimate: the result is always labeled an orientative suggestion, a conversation starter, not a verdict", "The gap is the feature: the divergence between self-assessment and the manager's reading is the core calibration artifact"]
            },
            {
                type: "gallery",
                title: "Do fluxo de avaliação ao radar",
                title_en: "From assessment flow to radar",
                columns: 2,
                images: [
                    { src: "/images/projects/maestria/maestria_fluxo_avaliacao.png", caption: "Fluxo editorial: uma competência por vez, âncora Dreyfus visível em cada nível, autosave.", caption_en: "Editorial flow: one competency at a time, Dreyfus anchor visible at every level, autosave." },
                    { src: "/images/projects/maestria/maestria_dashboard.png", caption: "Dashboard: radar do último ciclo e estimativa de senioridade.", caption_en: "Dashboard: latest cycle radar and seniority estimate." }
                ]
            },
            {
                type: "image",
                fullWidth: true,
                src: "/images/projects/maestria/maestria_resultado_heatmap.png",
                caption: "O toggle obrigatório: radar para a síntese, heatmap por habilidade para a nuance — a pesquisa mostra que o radar sozinho esconde onde agir.",
                caption_en: "The mandatory toggle: radar for synthesis, per-skill heatmap for nuance — research shows the radar alone hides where to act."
            },
            {
                type: "text",
                title: "Modo Time: o motor de receita",
                title_en: "Team Mode: the revenue engine",
                content: "O gestor cria um time, convida por link e avalia cada pessoa com o mesmo fluxo da autoavaliação. O sistema então confronta as duas leituras: o gap autoavaliação × gestor por competência e por habilidade, ordenado pelas maiores divergências — divergência negativa significa que a pessoa se avaliou acima da leitura do gestor, e é exatamente por aí que a conversa de calibração começa. Completam o módulo o radar agregado do time (forças e lacunas coletivas) e o PDI por pessoa, gerado do mesmo motor 70-20-10 do plano individual: 70% prática no trabalho, 20% aprendizado social, 10% estudo formal.",
                content_en: "The manager creates a team, invites by link and assesses each person with the same flow as the self-assessment. The system then confronts both readings: the self × manager gap per competency and per skill, sorted by the largest divergences — a negative divergence means the person rated themselves above the manager's reading, and that's exactly where the calibration conversation starts. The module is completed by the aggregate team radar (collective strengths and gaps) and a per-person development plan generated by the same 70-20-10 engine as the individual plan: 70% on-the-job practice, 20% social learning, 10% formal study."
            },
            {
                type: "image",
                fullWidth: true,
                src: "/images/projects/maestria/maestria_gap_membro.png",
                caption: "Gap autoavaliação × gestor: duas séries no radar e as maiores divergências com delta numérico — o antídoto ao viés Dunning-Kruger.",
                caption_en: "Self × manager gap: two radar series and the largest divergences with numeric deltas — the antidote to Dunning-Kruger bias."
            },
            {
                type: "gallery",
                title: "Painel do gestor",
                title_en: "Manager's panel",
                columns: 2,
                images: [
                    { src: "/images/projects/maestria/maestria_time_painel.png", caption: "Radar agregado do time e senioridade média.", caption_en: "Aggregate team radar and average seniority." },
                    { src: "/images/projects/maestria/maestria_time_membros.png", caption: "Status de preenchimento por pessoa: autoavaliação e avaliação do gestor.", caption_en: "Per-person completion status: self-assessment and manager assessment." }
                ]
            },
            {
                type: "image",
                fullWidth: true,
                src: "/images/projects/maestria/maestria_plano.png",
                caption: "Plano 70-20-10: as maiores lacunas viram ações concretas de prática, mentoria e estudo.",
                caption_en: "70-20-10 plan: the biggest gaps become concrete practice, mentoring and study actions."
            },
            {
                type: "text",
                title: "Design system 'Cinematic Gradient'",
                title_en: "'Cinematic Gradient' design system",
                content: "A linguagem visual nasceu de um estudo de DESIGN.md públicos (base Framer): canvas near-black, superfícies charcoal separadas por hairlines, tipografia display comprimida (Space Grotesk) e uma atmosfera gradient violeta→magenta→laranja usada como momento, nunca como fundo. Tudo é governado por um arquivo único de tokens que gera o CSS — zero hex hardcoded em componentes, com verificação no CI. A rampa de 6 cores dos níveis tem semântica própria (calor = em desenvolvimento, família da marca = proficiente+) e nunca comunica nível só por cor: o número mono está sempre junto. Na landing, GSAP conduz um scrollytelling contínuo e o 'radar vivo' em SVG morfa entre perfis de senioridade.",
                content_en: "The visual language came from a study of public DESIGN.md files (Framer base): near-black canvas, charcoal surfaces separated by hairlines, compressed display typography (Space Grotesk) and a violet->magenta->orange gradient atmosphere used as a moment, never as a background. Everything is governed by a single token file that generates the CSS — zero hardcoded hex in components, enforced in CI. The 6-color level ramp carries its own semantics (warmth = developing, brand family = proficient+) and never communicates level by color alone: the mono number is always beside it. On the landing, GSAP drives continuous scrollytelling and the SVG 'living radar' morphs between seniority profiles."
            },
            {
                type: "image",
                fullWidth: true,
                src: "/images/projects/maestria/maestria_landing_gap.png",
                caption: "A atmosfera gradient como momento: o card do gap na landing, com glows internos e duas séries divergindo.",
                caption_en: "The gradient atmosphere as a moment: the landing's gap card, with inner glows and two diverging series."
            },
            {
                type: "outcomes",
                metrics: [
                    { value: "3", label: "dias do PRD ao produto completo no ar", label_en: "days from PRD to the full product live" },
                    { value: "40", label: "checks E2E automatizados nas duas fases", label_en: "automated E2E checks across both phases" },
                    { value: "0", label: "hex fora dos design tokens (verificado no CI)", label_en: "hex values outside design tokens (CI-enforced)" }
                ]
            },
            {
                type: "text",
                title: "Resultado",
                title_en: "Outcome",
                content: "Um SaaS funcional de ponta a ponta: autenticação (Google + magic link), trial de 14 dias, assinaturas Pro e Time com Stripe, framework versionado no banco, avaliação com autosave e snapshot imutável, radar, heatmap, plano 70-20-10, histórico entre ciclos e o módulo B2B completo — times por convite, hetero-avaliação, gap, radar agregado e PDI. O projeto também virou um exercício de engenharia disciplinada: regras de negócio blindadas por testes E2E (N/A excluído da média, imutabilidade pós-conclusão, isolamento entre times) e design system wired em que editar um token propaga para produto e Storybook.",
                content_en: "An end-to-end functional SaaS: authentication (Google + magic link), 14-day trial, Pro and Team subscriptions with Stripe, a versioned framework in the database, assessment with autosave and immutable snapshots, radar, heatmap, 70-20-10 plan, cross-cycle history and the full B2B module — teams by invite link, manager assessment, gap, aggregate radar and per-person plans. The project also became an exercise in disciplined engineering: business rules locked by E2E tests (N/A excluded from averages, post-completion immutability, team isolation) and a wired design system where editing a token propagates to both product and Storybook."
            }
        ]
    },
    {
        id: 16,
        slug: "drop-marketplace-de-lancamentos",
        pageType: "rich",
        src: "/images/projects/drop/drop_capa.jpg",
        category: "Product Design & Full-Stack",
        tags: ["Product Design", "Full-Stack"],
        title: "Drop",
        tagline: "Lance drops. Venda para quem realmente quer.",
        tagline_en: "Launch drops. Sell to the people who really want them.",
        description: "Plataforma de loja para criadores que lançam produtos limitados com lista de espera prioritária, contagem regressiva e checkout próprio com Pix. Cada criador ganha uma vitrine com marca leve, sem precisar montar um site do zero.",
        description_en: "Storefront platform for creators who launch limited-edition products with a priority waitlist, countdown, and their own checkout with Pix. Each creator gets a lightly branded storefront, without building a site from scratch.",
        year: "2026",
        role: "Product Designer & AI Engineer",
        timeline: "MVP · iteração contínua",
        timeline_en: "MVP · continuous iteration",
        team: "Solo",
        client: "Produto próprio",
        tools: ["Next.js", "Prisma", "Stripe", "Vercel"],
        liveDemoLink: "https://lancedrop.vercel.app/",
        sections: [
            {
                title: "O Problema",
                title_en: "The Problem",
                type: "text",
                content: "Criadores que vendem produtos limitados (roupas, objetos, digitais) dependem de Instagram para anunciar e de planilhas, DMs e links soltos para gerenciar pedidos. Não há senso de escassez controlada, nem lista de espera, nem checkout próprio. No lançamento, o resultado é caos: estoque vendido para quem chegou primeiro no story, comentários perdidos, cobranças manuais via Pix e nenhuma página que faça jus à marca. Ferramentas como Shopify são pesadas demais para um drop pontual, e marketplaces genéricos diluem a identidade do criador no meio de milhares de produtos.",
                content_en: "Creators selling limited-edition products (apparel, objects, digital) rely on Instagram to announce and on spreadsheets, DMs, and loose links to manage orders. There's no controlled scarcity, no waitlist, no dedicated checkout. At launch, the result is chaos: stock sold to whoever saw the story first, lost comments, manual Pix charges, and no page that does the brand justice. Tools like Shopify are too heavy for a one-off drop, and generic marketplaces dilute the creator's identity among thousands of products."
            },
            {
                title: "Diretório de criadores",
                title_en: "Creator directory",
                type: "image",
                src: "/images/projects/drop/explorar.png",
                caption: "Diretório de criadores: cada marca com sua vitrine e drops ao vivo",
                caption_en: "Creator directory: each brand with its own storefront and live drops"
            },
            {
                title: "Pesquisa de Mercado",
                title_en: "Market Research",
                type: "research",
                methods: ["Benchmark de plataformas de creator commerce (Fourthwall, Big Cartel, Gumroad)", "Análise de lançamentos de marcas independentes no Instagram e TikTok", "Mapeamento de dores de criadores em comunidades e fóruns"],
                methods_en: ["Creator commerce platform benchmark (Fourthwall, Big Cartel, Gumroad)", "Analysis of independent brand launches on Instagram and TikTok", "Pain point mapping in creator communities and forums"],
                content: "O Fourthwall provou que criadores querem uma vitrine bonita sem virar webdesigner, mas é focado no mercado americano e não tem Pix, o meio de pagamento dominante no Brasil. Gumroad e Big Cartel resolvem o checkout, mas não criam o ritual de lançamento, a escassez, a contagem regressiva, a lista de espera, que é justamente o que move a venda de edições limitadas. A oportunidade está em combinar a mecânica de drop (hype + escassez) com pagamento local (Pix) e uma vitrine de marca leve, voltada ao criador brasileiro.",
                content_en: "Fourthwall proved that creators want a beautiful storefront without becoming web designers, but it's focused on the US market and lacks Pix, the dominant payment method in Brazil. Gumroad and Big Cartel solve checkout, but don't create the launch ritual, the scarcity, the countdown, the waitlist, which is exactly what drives limited-edition sales. The opportunity is to combine drop mechanics (hype + scarcity) with local payment (Pix) and a lightly branded storefront, built for the Brazilian creator.",
                highlights: [
                    "Pix é o meio de pagamento preferido para compras online no Brasil, mas raro em plataformas de creator commerce",
                    "Lançamentos de edição limitada vendem por escassez e urgência, não por catálogo permanente",
                    "Criadores rejeitam construtores de site complexos: querem publicar um drop em minutos",
                    "Lista de espera prioritária transforma seguidores em compradores qualificados antes do lançamento"
                ],
                highlights_en: [
                    "Pix is the preferred online payment method in Brazil, yet rare in creator commerce platforms",
                    "Limited-edition launches sell on scarcity and urgency, not on a permanent catalog",
                    "Creators reject complex site builders: they want to publish a drop in minutes",
                    "A priority waitlist turns followers into qualified buyers before launch"
                ]
            },
            {
                title: "Solução & Produto",
                title_en: "Solution & Product",
                type: "text",
                content: "O Drop entrega ao criador uma vitrine de marca leve (templates + branding, não um construtor de site) onde cada lançamento vira uma página de drop com capa, descrição, preço, estoque, contagem regressiva e lista de espera. O comprador entra na lista, é avisado no lançamento, compra com Pix e acompanha o pedido. O criador gerencia tudo de um dashboard: cria o drop em minutos, define estoque e data, acompanha pedidos por status e personaliza sua vitrine com cor de acento e identidade própria. A escassez é real: estoque limitado, e o ritual de lançamento (espera → drop ao vivo → esgotou) é o coração do produto.",
                content_en: "Drop gives creators a lightly branded storefront (templates + branding, not a site builder) where each launch becomes a drop page with cover, description, price, stock, countdown, and waitlist. Buyers join the list, get notified at launch, pay with Pix, and track their order. Creators manage everything from a dashboard: create a drop in minutes, set stock and date, track orders by status, and customize their storefront with an accent color and their own identity. Scarcity is real: limited stock, and the launch ritual (waitlist → live drop → sold out) is the heart of the product."
            },
            {
                title: "Landing",
                title_en: "Landing",
                type: "image",
                src: "/images/projects/drop/landing-hero.png",
                caption: "Landing dark com tipografia display e hero animado",
                caption_en: "Dark landing with display typography and animated hero"
            },
            {
                title: "Funcionalidades",
                title_en: "Features",
                type: "research",
                methods: ["Vitrine do criador", "Página de drop", "Lista de espera", "Checkout com Pix", "Gestão de pedidos"],
                methods_en: ["Creator storefront", "Drop page", "Waitlist", "Pix checkout", "Order management"],
                content: "Cada funcionalidade foi desenhada em torno do ritual de lançamento. A Vitrine do criador é uma página de marca com avatar, bio, cor de acento e todos os drops. A Página de drop traz capa, contagem regressiva, estoque e CTA de compra ou lista de espera. A Lista de espera prioritária qualifica compradores antes do go-live. O Checkout com Pix permite pagamento local instantâneo. A Gestão de pedidos dá ao criador controle por status (pendente, pago, enviado) em um painel simples.",
                content_en: "Each feature was designed around the launch ritual. The Creator storefront is a brand page with avatar, bio, accent color, and all drops. The Drop page brings cover, countdown, stock, and a buy or waitlist CTA. The priority Waitlist qualifies buyers before go-live. Pix checkout enables instant local payment. Order management gives the creator status-based control (pending, paid, shipped) in a simple dashboard.",
                highlights: [
                    "Vitrine de marca com cor de acento, avatar, bio e links sociais por criador",
                    "Página de drop com contagem regressiva, estoque limitado e estados ao vivo / esgotado",
                    "Lista de espera prioritária que avisa o comprador no momento do lançamento",
                    "Checkout próprio com Pix, o meio de pagamento preferido no Brasil",
                    "Dashboard de gestão de pedidos por status, com criação de drop em minutos"
                ],
                highlights_en: [
                    "Branded storefront with accent color, avatar, bio, and social links per creator",
                    "Drop page with countdown, limited stock, and live / sold-out states",
                    "Priority waitlist that notifies the buyer at the moment of launch",
                    "Own checkout with Pix, the preferred payment method in Brazil",
                    "Status-based order management dashboard, with drop creation in minutes"
                ]
            },
            {
                title: "Vitrine & Página de drop",
                title_en: "Storefront & Drop page",
                type: "gallery",
                columns: 2,
                images: [
                    { src: "/images/projects/drop/vitrine.png", caption: "Vitrine do criador com cor de acento e drops por status", caption_en: "Creator storefront with accent color and drops by status" },
                    { src: "/images/projects/drop/drop-page.png", caption: "Página de drop: galeria, preço, estoque e checkout próprio", caption_en: "Drop page: gallery, price, stock and in-house checkout" }
                ]
            },
            {
                title: "Modelo de Negócio & Arquitetura",
                title_en: "Business Model & Architecture",
                type: "text",
                content: "Construído inteiramente com AI coding (Claude como pair programmer do scaffolding ao deploy). Stack: Next.js 16 (App Router), Prisma + PostgreSQL para criadores, drops, listas de espera e pedidos, Auth.js para login com Google e magic link, Stripe para pagamentos (com Pix via conta BR), Resend para e-mails transacionais e Vercel para deploy contínuo. O modelo freemium limita o plano Free a 5 drops por mês, sem Pix, o suficiente para experimentar. O trial de 14 dias libera tudo, e o PRO (R$29/mês) mantém drops e vendas ilimitados com Pix ativo.",
                content_en: "Built entirely with AI coding (Claude as pair programmer from scaffolding to deployment). Stack: Next.js 16 (App Router), Prisma + PostgreSQL for creators, drops, waitlists, and orders, Auth.js for Google and magic-link login, Stripe for payments (with Pix via a BR account), Resend for transactional emails, and Vercel for continuous deployment. The freemium model limits the Free plan to 5 drops per month, without Pix, enough to experiment. The 14-day trial unlocks everything, and PRO (R$29/month) keeps drops and sales unlimited with Pix active."
            },
            {
                title: "Resultados & Aprendizados",
                title_en: "Results & Learnings",
                type: "outcomes",
                metrics: [
                    { value: "Pix", label: "checkout local nativo, raro no creator commerce" },
                    { value: "5", label: "drops/mês no plano gratuito" },
                    { value: "R$29", label: "PRO com drops e vendas ilimitados" }
                ],
                metrics_en: [
                    { value: "Pix", label: "native local checkout, rare in creator commerce" },
                    { value: "5", label: "drops/month on the free plan" },
                    { value: "R$29", label: "PRO with unlimited drops and sales" }
                ],
                content: "O principal aprendizado foi que o produto não vende um checkout, vende um ritual. As decisões de design mais importantes foram a lista de espera prioritária e a contagem regressiva, que transformam o lançamento em evento e o seguidor em comprador. A escolha de templates + branding leve (em vez de um construtor de site) foi deliberada: criadores querem publicar rápido e manter coerência visual, não aprender a desenhar páginas. Apostar em Pix desde o início, mesmo com a complexidade de uma conta Stripe BR, foi o diferencial competitivo frente a plataformas internacionais como o Fourthwall.",
                content_en: "The key learning was that the product doesn't sell a checkout, it sells a ritual. The most important design decisions were the priority waitlist and the countdown, which turn the launch into an event and the follower into a buyer. Choosing templates + light branding (instead of a site builder) was deliberate: creators want to publish fast and keep visual coherence, not learn to design pages. Betting on Pix from day one, despite the complexity of a Stripe BR account, was the competitive edge against international platforms like Fourthwall."
            }
        ]
    },
    {
        id: 1,
        slug: "sigil-design-system-builder",
        pageType: "rich",
        src: "/images/projects/sigil/sigil_full.jpg",
        category: "Product Design & AI Engineering",
        tags: ["Product Design", "AI Engineering"],
        title: "Sigil",
        tagline: "De uma cor seed a um design system completo, pronto para exportar.",
        tagline_en: "From a seed color to a complete design system, ready to export.",
        description: "Gerador de sistemas visuais para founders, devs e criadores independentes. Cole uma cor seed para o Sigil gerar paleta, tokens de design e um guia de estilo pronto para exportação. Identidade visual coerente sem abrir o Figma.",
        description_en: "Visual system generator for founders, devs, and independent creators. Paste a seed color and Sigil generates a palette, design tokens, and style guides ready for export. Cohesive visual identity without opening Figma.",
        year: "2026",
        role: "Product Designer & AI Engineer",
        timeline: "MVP · iteração contínua",
        timeline_en: "MVP · continuous iteration",
        team: "Solo",
        client: "Produto próprio",
        tools: ["Claude API", "Next.js", "Prisma", "Vercel"],
        liveDemoLink: "https://sigil-eight.vercel.app/",
        sections: [
            {
                title: "O Problema",
                title_en: "The Problem",
                type: "text",
                content: "Founders, desenvolvedores e criadores independentes constroem produtos sem designer, e sentem isso a cada tela inconsistente, botão fora do padrão ou paleta improvisada. Ferramentas como Figma, Tokens Studio e Brand.ai foram criadas para designers. Quem constrói sozinho não tem tempo para aprender esses fluxos, nem budget para terceirizar. O resultado prático: projetos com identidade visual fragmentada, ausência de design tokens e incapacidade de escalar o sistema sem retrabalho. O mercado de ferramentas de design system é grande, mas todas as soluções assumem que existe um designer no processo.",
                content_en: "Founders, developers, and independent creators build products without a designer, and feel it in every inconsistent screen, off-pattern button, or improvised palette. Tools like Figma, Tokens Studio, and Brand.ai were built for designers. Solo builders don't have time to learn these workflows, nor the budget to outsource. The practical result: projects with fragmented visual identity, absent design tokens, and no way to scale the system without rework. The design system tooling market is large, but every solution assumes there is a designer in the loop."
            },
            {
                title: "Visão Geral",
                title_en: "Overview",
                type: "image",
                src: "/images/projects/sigil/sigil_visao_geral1.png",
                caption: "Visão geral: dashboard de brand systems.",
                caption_en: "Overview: brand systems dashboard."
            },
            {
                title: "O editor de um brand system",
                title_en: "The brand system editor",
                type: "gallery",
                columns: 2,
                images: [
                    { src: "/images/projects/sigil/sigil_visao_geral2.png", caption: "Editor de um brand system", caption_en: "Brand system editor" },
                    { src: "/images/projects/sigil/sigil_visao_geral_dark.png", caption: "O mesmo editor em modo escuro", caption_en: "The same editor in dark mode" }
                ]
            },
            {
                title: "Pesquisa de Mercado",
                title_en: "Market Research",
                type: "research",
                methods: ["Análise de comunidades indie hackers e devs solos", "Benchmark de ferramentas (Tokens Studio, Style Dictionary, Coolors, Realtime Colors)", "Mapeamento de dores em fóruns (Reddit, Product Hunt, Twitter/X)"],
                methods_en: ["Indie hacker and solo dev community analysis", "Tool benchmark (Tokens Studio, Style Dictionary, Coolors, Realtime Colors)", "Pain point mapping in forums (Reddit, Product Hunt, Twitter/X)"],
                content: "O crescimento de ferramentas no-code e do movimento indie hacker criou uma demanda clara: construtores solo que precisam de coerência visual mas rejeitam fluxos complexos. Tokens Studio e Style Dictionary são poderosos, mas têm curva de aprendizado íngreme e assumem familiaridade com design systems. Coolors e Realtime Colors resolvem paleta, mas não conectam com código. Nenhuma ferramenta fecha o ciclo completo, da cor seed ao arquivo de configuração pronto para uso no projeto.",
                content_en: "The growth of no-code tools and the indie hacker movement created a clear demand: solo builders who need visual consistency but reject complex workflows. Tokens Studio and Style Dictionary are powerful, but have steep learning curves and assume design system familiarity. Coolors and Realtime Colors solve palette, but don't connect to code. No tool closes the full cycle, from seed color to config file ready for use in the project.",
                highlights: [
                    "Devs solos gastam horas consistindo cores manualmente entre CSS, Tailwind e componentes",
                    "A maioria dos indie hackers usa 'achismo' visual: escolhem cores sem sistema de tokens",
                    "A barreira não é conceitual, é operacional: ninguém quer aprender mais uma ferramenta complexa",
                    "Product Hunt e Reddit mostram demanda alta por 'Tailwind palette generator' e 'brand kit for devs'"
                ],
                highlights_en: [
                    "Solo devs spend hours manually syncing colors between CSS, Tailwind, and components",
                    "Most indie hackers rely on guesswork: they choose colors without a token system",
                    "The barrier isn't conceptual, it's operational: no one wants to learn another complex tool",
                    "Product Hunt and Reddit show high demand for 'Tailwind palette generator' and 'brand kit for devs'"
                ]
            },
            {
                title: "Solução & Produto",
                title_en: "Solution & Product",
                type: "text",
                content: "O Sigil fecha o ciclo em um fluxo de três passos: escolha uma cor primária, nomeie sua marca, exporte. Internamente, o app gera paleta harmônica com modos claro/escuro, cria um Brand Brief com logo, cores, tipografia e tom de voz, e disponibiliza todos os tokens no Export Hub em múltiplos formatos. O Component Preview exibe os tokens aplicados em botões, cards e inputs reais, permitindo que o usuário veja o sistema funcionando antes de escrever uma linha de código.",
                content_en: "Sigil closes the loop in a three-step flow: pick a primary color, name your brand, export. Internally, the app generates a harmonic palette with light/dark modes, creates a Brand Brief with logo, colors, typography, and tone of voice, and makes all tokens available in the Export Hub in multiple formats. The Component Preview shows tokens applied to real buttons, cards, and inputs, so the user can see the system working before writing a line of code."
            },
            {
                title: "Funcionalidades",
                title_en: "Features",
                type: "research",
                methods: ["Token Studio", "Palette Generator", "Brand Brief", "Component Preview", "Export Hub"],
                methods_en: ["Token Studio", "Palette Generator", "Brand Brief", "Component Preview", "Export Hub"],
                content: "Cada feature foi desenhada para eliminar uma etapa manual do fluxo de criação de identidade visual. Token Studio cria e exporta design tokens em JSON, CSS e Tailwind config. Palette Generator gera paletas harmônicas a partir de uma cor seed com modo claro/escuro automático. Brand Brief é um documento vivo com logo, cores, fontes e tom de voz. Component Preview aplica os tokens em componentes reais antes de codar. Export Hub centraliza todos os formatos de exportação, incluindo Tailwind, vars CSS e Figma Variables JSON, ou gera uma página pública compartilhável da marca.",
                content_en: "Each feature was designed to eliminate a manual step from the visual identity creation flow. Token Studio creates and exports design tokens in JSON, CSS, and Tailwind config. Palette Generator generates harmonic palettes from a seed color with automatic light/dark modes. Brand Brief is a living document with logo, colors, typography, and tone of voice. Component Preview applies tokens to real components before coding. Export Hub centralizes all export formats, such as Tailwind, CSS vars, and Figma Variables JSON, or generates a public shareable brand page.",
                highlights: [
                    "Token Studio: exporta JSON, CSS vars e Tailwind config prontos para usar",
                    "Palette Generator: paleta harmônica com escala de tons light/dark a partir de uma cor seed",
                    "Brand Brief: documento vivo com logo, cores, tipografia, tom de voz e exemplos de uso",
                    "Component Preview: botões, cards e inputs renderizados com os tokens da marca em tempo real",
                    "Export Hub: Tailwind config, CSS vars, Figma Variables JSON ou página pública da marca"
                ],
                highlights_en: [
                    "Token Studio: exports JSON, CSS vars, and Tailwind config ready to use",
                    "Palette Generator: harmonic palette with light/dark tone scale from a seed color",
                    "Brand Brief: living document with logo, colors, typography, tone of voice and usage examples",
                    "Component Preview: buttons, cards and inputs rendered with brand tokens in real time",
                    "Export Hub: Tailwind config, CSS vars, Figma Variables JSON or public brand page"
                ]
            },
            {
                title: "Modelo de Negócio & Arquitetura",
                title_en: "Business Model & Architecture",
                type: "text",
                content: "Construído inteiramente com AI coding (Claude como pair programmer do scaffolding ao deploy). Stack: Next.js 14 (App Router), Prisma + PostgreSQL para persistência de BrandSystems, Palettes, ExportLogs e SharedPages, Claude API para geração de sugestões de tokens e Brand Brief, Vercel para deploy contínuo. O modelo freemium limita o Free a 1 brand system e 3 paletas sem export, o que é suficiente para experimentar, mas insuficiente para escalar. O PRO (R$39/mês) libera tudo: brand systems ilimitados, Export Hub completo e SharedPages públicas.",
                content_en: "Built entirely with AI coding (Claude as pair programmer from scaffolding to deployment). Stack: Next.js 14 (App Router), Prisma + PostgreSQL for BrandSystems, Palettes, ExportLogs, and SharedPages persistence, Claude API for token suggestions and Brand Brief generation, Vercel for continuous deployment. The freemium model limits Free to 1 brand system and 3 palettes without export, which is enough to experiment, not enough to scale. PRO (R$39/month) unlocks everything: unlimited brand systems, full Export Hub, and public SharedPages."
            },
            {
                title: "Resultados & Aprendizados",
                title_en: "Results & Learnings",
                type: "outcomes",
                metrics: [
                    { value: "2", label: "dias do zero ao deploy" },
                    { value: "5", label: "features no lançamento" },
                    { value: "R$0", label: "plano gratuito com brand system completo" }
                ],
                metrics_en: [
                    { value: "2", label: "days from zero to deploy" },
                    { value: "5", label: "features at launch" },
                    { value: "R$0", label: "free plan with complete brand system" }
                ],
                content: "O principal aprendizado foi sobre o valor de fechar o ciclo. Ferramentas de paleta existem aos montes, mas o diferencial do Sigil é conectar cor seed → tokens → exportação em código em um fluxo único. A decisão de incluir Component Preview foi a mais importante: ver os tokens funcionando em componentes reais, antes de exportar, reduziu drasticamente a fricção de adoção. O modelo de 14 dias de trial ilimitado foi escolhido para garantir que o usuário chegue ao 'aha moment', que só acontece quando ele exporta e vê o Tailwind config funcionando no projeto dele.",
                content_en: "The key learning was about the value of closing the loop. Palette tools are a dime a dozen, but Sigil's differentiator is connecting seed color, tokens, and code export in a single flow. The decision to include Component Preview was the most important one: seeing tokens working in real components, before exporting, dramatically reduced adoption friction. The 14-day unlimited trial model was chosen to ensure users reach the 'aha moment', which only happens when they export and see the Tailwind config working in their own project."
            },
            {
                title: "Design System",
                title_en: "Design System",
                type: "gallery",
                columns: 2,
                images: [
                    { src: "/images/projects/sigil/sigil_ds_colors_light.png", caption: "Paleta em modo claro", caption_en: "Palette in light mode" },
                    { src: "/images/projects/sigil/sigil_ds_colors.png", caption: "Paleta em modo escuro", caption_en: "Palette in dark mode" },
                    { src: "/images/projects/sigil/sigil_ds_components_light.png", caption: "Componentes em modo claro", caption_en: "Components in light mode" },
                    { src: "/images/projects/sigil/sigil_ds_components.png", caption: "Componentes em modo escuro", caption_en: "Components in dark mode" }
                ]
            }
        ]
    },
    {
        id: 15,
        slug: "notafacil-emissor-nfse-mei",
        src: "/images/projects/notafacil/notafacil.jpg",
        category: "Product Design & Full-Stack",
        tags: ["Product Design", "Full-Stack"],
        title: "Nota Fácil",
        tagline: "Emita NFS-e, receba via Pix e mantenha o DAS em dia — sem virar contador.",
        tagline_en: "Issue invoices, get paid via Pix and keep taxes current — without becoming an accountant.",
        description: "SaaS para microempreendedores individuais (MEI) e autônomos emitirem NFS-e, cobrarem via Pix e acompanharem obrigações fiscais como o DAS — tudo em um fluxo único, dark-first e sem jargão contábil. Da emissão em três cliques à confirmação automática do pagamento, o Nota Fácil cobre o ciclo de faturar para quem trabalha por conta própria.",
        description_en: "SaaS for Brazilian solo entrepreneurs (MEI) and freelancers to issue service invoices (NFS-e), charge via Pix and track tax obligations like the monthly DAS — all in a single, dark-first flow with no accounting jargon. From three-click issuing to automatic payment confirmation, Nota Fácil covers the whole billing cycle for the self-employed.",
        year: "2026",
        role: "Product Designer & AI Engineer",
        timeline: "MVP · iteração contínua",
        timeline_en: "MVP · continuous iteration",
        team: "Solo",
        client: "Produto próprio",
        tools: ["Next.js", "Prisma", "Stripe", "Claude API", "Vercel"],
        sections: [
            {
                title: "O Problema",
                title_en: "The Problem",
                type: "text",
                content: "O MEI é a maior classe de contribuintes individuais do Brasil, mas a rotina de faturar é hostil. Emitir NFS-e exige navegar portais municipais diferentes em cada cidade; cobrar significa gerar Pix na mão e conferir o extrato; e o DAS vence todo mês, com multa para quem esquece. As ferramentas existentes são sistemas contábeis caros e complexos ou planilhas soltas. Quem trabalha por conta própria acaba virando contador a contragosto, perdendo horas em uma burocracia que deveria ser invisível.",
                content_en: "The MEI (individual micro-entrepreneur) is Brazil's largest class of solo taxpayers, yet billing is hostile. Issuing an NFS-e means navigating a different municipal portal in every city; charging means generating Pix by hand and checking your bank statement; and the monthly DAS tax comes with a fine if you forget. Existing tools are either expensive, complex accounting suites or loose spreadsheets. The self-employed end up reluctantly becoming accountants, losing hours to bureaucracy that should be invisible."
            },
            {
                title: "Pesquisa de Mercado",
                title_en: "Market Research",
                type: "research",
                methods: ["Análise do ecossistema MEI e das fintechs de PJ digital", "Benchmark de emissores de NFS-e e contas PJ", "Mapeamento de dores de faturamento em comunidades de autônomos"],
                methods_en: ["MEI ecosystem and digital business-account fintech analysis", "Benchmark of NFS-e issuers and business accounts", "Billing pain mapping across freelancer communities"],
                content: "O mercado de PJ digital cresceu com contas como Cora, Conta Simples e os apps PJ dos grandes bancos, mas a emissão de NFS-e segue fragmentada por município e descolada da cobrança. Emissores dedicados resolvem a nota, mas não fecham o ciclo com Pix nem com o DAS. A oportunidade é clara: unir nota, recebimento e imposto em um produto enxuto, com a linguagem de quem não é contador.",
                content_en: "The digital business-account market grew with players like Cora, Conta Simples and the big banks' PJ apps, but NFS-e issuing remains fragmented by municipality and disconnected from charging. Dedicated issuers solve the invoice but never close the loop with Pix or the DAS tax. The opportunity is clear: unite invoice, payment and tax in one lean product, in the language of someone who is not an accountant.",
                highlights: [
                    "A emissão de NFS-e é municipal e fragmentada — não há padrão nacional único de UX",
                    "MEIs misturam cobrança no app do banco, nota no portal e controle em planilha",
                    "Esquecer o DAS gera multa — cálculo e lembrete automáticos têm valor imediato",
                    "A barreira é operacional, não conceitual: ninguém quer aprender um ERP contábil"
                ],
                highlights_en: [
                    "NFS-e issuing is municipal and fragmented — there is no single national UX standard",
                    "MEIs juggle charging in the bank app, invoicing in a portal and tracking in a spreadsheet",
                    "Missing the DAS means a fine — automatic calculation and reminders deliver instant value",
                    "The barrier is operational, not conceptual: nobody wants to learn an accounting ERP"
                ]
            },
            {
                title: "Solução & Produto",
                title_en: "Solution & Product",
                type: "text",
                content: "O Nota Fácil fecha o ciclo em um fluxo único: cadastre o cliente uma vez, emita a NFS-e em três cliques, gere a cobrança Pix vinculada à nota e receba a confirmação automática quando o pagamento cai. O painel de recebimentos mostra notas emitidas, pagas, pendentes e vencidas com alertas; o módulo de DAS calcula o valor da competência e avisa antes do vencimento; e, no fim do ano, o sistema preenche o DASN-SIMEI com os dados já registrados. Tudo em um design dark-first, editorial e sem jargão.",
                content_en: "Nota Fácil closes the loop in a single flow: register the client once, issue the NFS-e in three clicks, generate a Pix charge linked to the invoice and get automatic confirmation when payment lands. The receivables panel shows invoices issued, paid, pending and overdue with alerts; the DAS module computes the monthly amount and warns before the due date; and at year-end the system fills out the DASN-SIMEI report from the data already recorded. All in a dark-first, editorial design with no jargon."
            },
            {
                title: "Funcionalidades",
                title_en: "Features",
                type: "research",
                methods: ["Emissor de NFS-e", "Cobranças Pix", "Controle de Recebimentos", "DAS Automático", "Relatório Anual (DASN-SIMEI)"],
                methods_en: ["NFS-e Issuer", "Pix Charges", "Receivables Control", "Automatic DAS", "Annual Report (DASN-SIMEI)"],
                content: "Cada feature elimina uma etapa manual do faturamento do autônomo, do primeiro cadastro à declaração anual. O foco foi reduzir cada tarefa ao menor número de passos possível e manter o histórico financeiro sempre conectado à nota que o originou.",
                content_en: "Each feature eliminates a manual step from the freelancer's billing, from the first client record to the annual return. The focus was reducing every task to the fewest possible steps and keeping the financial history always connected to the invoice that originated it.",
                highlights: [
                    "Emissor de NFS-e: integração nacional, emite em 3 cliques com cliente e serviço salvos",
                    "Cobranças Pix: QR Code vinculado à nota com confirmação automática de pagamento",
                    "Controle de Recebimentos: notas emitidas, pagas, pendentes e vencidas com alertas",
                    "DAS Automático: calcula o valor mensal e lembra do prazo de pagamento",
                    "Relatório Anual: preenche o DASN-SIMEI automaticamente com os dados do sistema"
                ],
                highlights_en: [
                    "NFS-e Issuer: national integration, issues in 3 clicks with saved client and service",
                    "Pix Charges: QR Code linked to the invoice with automatic payment confirmation",
                    "Receivables Control: invoices issued, paid, pending and overdue with alerts",
                    "Automatic DAS: computes the monthly amount and reminds you of the deadline",
                    "Annual Report: fills out the DASN-SIMEI automatically from system data"
                ]
            },
            {
                title: "Modelo de Negócio & Arquitetura",
                title_en: "Business Model & Architecture",
                type: "text",
                content: "Construído inteiramente com AI coding (Claude como par de programação, do schema ao deploy). Stack: Next.js 16 (App Router) e React 19, Prisma + PostgreSQL para Clientes, Notas, Cobranças e DAS, Auth.js v5 para autenticação, Stripe para assinaturas e Resend para e-mails transacionais. O modelo freemium oferece o plano Grátis (5 notas/mês, sem Pix e sem DAS), um trial de 14 dias com tudo liberado e o PRO a R$29/mês com notas ilimitadas, cobranças Pix e DAS automático. Um design system dark-first próprio dá a base visual: tokens semânticos, superfícies flat e tipografia display de tracking apertado.",
                content_en: "Built entirely with AI coding (Claude as pair programmer, from schema to deploy). Stack: Next.js 16 (App Router) and React 19, Prisma + PostgreSQL for Clients, Invoices, Charges and DAS, Auth.js v5 for authentication, Stripe for subscriptions and Resend for transactional email. The freemium model offers a Free plan (5 invoices/month, no Pix, no DAS), a 14-day fully unlocked trial and PRO at R$29/month with unlimited invoices, Pix charges and automatic DAS. A bespoke dark-first design system sets the visual base: semantic tokens, flat surfaces and tight-tracked display type."
            },
            {
                title: "Resultados & Aprendizados",
                title_en: "Results & Learnings",
                type: "outcomes",
                metrics: [
                    { value: "3", label: "cliques para emitir uma nota" },
                    { value: "R$29", label: "PRO mensal com tudo ilimitado" },
                    { value: "5", label: "módulos no ciclo de faturar" }
                ],
                metrics_en: [
                    { value: "3", label: "clicks to issue an invoice" },
                    { value: "R$29", label: "monthly PRO, everything unlimited" },
                    { value: "5", label: "modules in the billing cycle" }
                ],
                content: "O principal aprendizado foi que, para o MEI, o valor não está em emitir a nota isolada, mas em fechar o ciclo até o dinheiro cair e o imposto ficar em dia. Vincular a cobrança Pix à nota e confirmar o pagamento automaticamente foi a decisão que transformou um emissor em um controle financeiro. O segundo aprendizado foi de linguagem: cada termo contábil removido da interface reduziu a fricção. O trial de 14 dias com tudo liberado existe para o usuário chegar ao 'aha' — a primeira nota paga via Pix dentro do app.",
                content_en: "The key learning was that, for the MEI, value is not in issuing the invoice alone but in closing the loop until the money lands and the tax is paid. Linking the Pix charge to the invoice and confirming payment automatically was the decision that turned an issuer into a financial control tool. The second learning was about language: every accounting term removed from the interface reduced friction. The 14-day fully unlocked trial exists so users reach the 'aha' moment — their first invoice paid via Pix inside the app."
            }
        ]
    },
    {
        id: 6,
        slug: "pixtudo-super-app-ux-research",
        pageType: "rich",
        accentColor: "#00C853",
        liveDemoLink: "https://app-src-two.vercel.app/",
        src: "/images/projects/pixtudo_full.jpg",
        category: "Product Design & Full-Stack",
        tags: ["Product Design", "Full-Stack"],
        title: "PixTudo",
        tagline: "Do documento de pesquisa ao MVP funcional: super-app financeiro com Pix, cashback e score inteligente.",
        tagline_en: "From research to working MVP: financial super-app with Pix, cashback and smart score.",
        description: "Pesquisa completa de UX e MVP funcional do PixTudo, um super-app financeiro brasileiro. A pesquisa cobre mercado, análise competitiva, 3 personas, jornada, arquitetura de informação e princípios de design. O MVP entrega Pix simulado com cashback, extrato inteligente, Score PixTudo com gamificação, hub de serviços e rateio social.",
        description_en: "Full UX research and working MVP of PixTudo, a Brazilian financial super-app. Research covers market analysis, competitive benchmarking, 3 personas, user journey, information architecture and design principles. The MVP delivers simulated Pix with cashback, smart statement, gamified PixTudo Score, services hub and social bill-splitting.",
        year: "2026",
        role: "UX Researcher & Design Engineer",
        timeline: "MVP · iteração contínua",
        timeline_en: "MVP · continuous iteration",
        team: "Solo",
        client: "Projeto Pessoal",
        tools: ["Figma", "Miro", "Next.js", "Claude API", "Prisma", "Vercel"],
        prototypeLinks: [{ label: "Ver documento de pesquisa", url: "/pix-tudo-ux.html" }],
        sections: [
            {
                title: "O Problema",
                title_en: "The Problem",
                type: "text",
                content: "O Brasil tem características únicas no mundo que criam o momento ideal para um super-app financeiro: o Pix atingiu 153 milhões de usuários únicos em 2024 com volume de R$4,7 trilhões transacionados, superando cartões em número de operações. O brasileiro usa em média 4,2 apps para pagamento, banco, investimento e benefícios — apps bancários dos grandes bancos têm satisfação média de 2,8/5. Autônomos e MEIs (40% da força de trabalho) não têm acesso a crédito, e os juros do rotativo chegam a 440% ao ano. A fragmentação é total e nenhum player entregou a experiência unificada que o Alipay representa na China.",
                content_en: "Brazil has unique global characteristics creating the ideal moment for a financial super-app: Pix reached 153 million unique users in 2024 with R$4.7 trillion transacted. Brazilians use an average of 4.2 apps for tasks that could be unified — major bank apps average 2.8/5 satisfaction. Freelancers and MEIs (40% of the workforce) can't access credit, and credit card revolving interest reaches 440% per year. Fragmentation is total and no player has delivered the unified experience that Alipay represents in China.",
                highlights: [
                    "153 milhões de usuários de Pix em 2024 — maior adoção de pagamento instantâneo do mundo",
                    "Brasileiro usa em média 4,2 apps para tarefas que poderiam ser unificadas",
                    "68% dos brasileiros desconfiam de bancos tradicionais (Febraban 2024) — fintechs têm NPS 2× maior",
                    "Mercado de fintechs brasileiro estimado em R$312 bilhões para 2026, crescendo 23% ao ano",
                ],
                highlights_en: [
                    "153 million Pix users in 2024 — the world's largest instant payment adoption",
                    "Brazilians use an average of 4.2 apps for tasks that could be unified",
                    "68% of Brazilians distrust traditional banks (Febraban 2024) — fintechs have 2× higher NPS",
                    "Brazilian fintech market estimated at R$312 billion for 2026, growing 23% per year",
                ],
            },
            {
                title: "Análise Competitiva",
                title_en: "Competitive Analysis",
                type: "component",
                component: "PixTudoCompetitors",
            },
            {
                title: "Personas",
                title_en: "Personas",
                type: "component",
                component: "PixTudoPersonas",
            },
            {
                title: "Jornada do Usuário",
                title_en: "User Journey",
                type: "component",
                component: "PixTudoJourney",
            },
            {
                title: "Como Poderíamos…",
                title_en: "How Might We…",
                type: "research",
                methods: ["HMW · Inclusão Financeira", "HMW · Fragmentação", "HMW · Social & Cultura", "HMW · Educação Financeira", "HMW · Segurança", "HMW · Ecossistema"],
                methods_en: ["HMW · Financial Inclusion", "HMW · Fragmentation", "HMW · Social & Culture", "HMW · Financial Education", "HMW · Security", "HMW · Ecosystem"],
                content: "Transformamos os insights da pesquisa em questões de design que abrem espaço para soluções criativas.",
                content_en: "We transformed research insights into design questions that open space for creative solutions.",
                highlights: [
                    "Como poderíamos tornar o crédito acessível para autônomos e MEIs sem histórico bancário, usando dados de comportamento como alternativa ao score tradicional?",
                    "Como poderíamos fazer o brasileiro substituir 4 apps financeiros por um único, sem sentir que está perdendo funcionalidade ou segurança?",
                    "Como poderíamos transformar o momento de pagar e cobrar amigos — socialmente constrangedor — em algo leve e até divertido?",
                    "Como poderíamos ensinar conceitos financeiros para a geração Z de forma contextual, sem interromper o fluxo da tarefa principal?",
                    "Como poderíamos proteger usuários de golpes do Pix em tempo real sem criar fricção excessiva nas transações legítimas?",
                    "Como poderíamos criar um ecossistema de mini-apps que faça sentido para o contexto brasileiro, sem virar uma bagunça difícil de navegar?",
                ],
                highlights_en: [
                    "How might we make credit accessible to freelancers and MEIs without banking history, using behavioral data as an alternative to traditional scoring?",
                    "How might we get Brazilians to replace 4 financial apps with one, without losing functionality or security?",
                    "How might we transform the moment of paying and charging friends — socially awkward — into something light and even fun?",
                    "How might we teach financial concepts to Gen Z contextually, without interrupting the main task flow?",
                    "How might we protect users from Pix scams in real time without creating excessive friction in legitimate transactions?",
                    "How might we create a mini-app ecosystem that makes sense for the Brazilian context without becoming a hard-to-navigate mess?",
                ],
            },
            {
                title: "Princípios de Design",
                title_en: "Design Principles",
                type: "component",
                component: "PixTudoPrinciples",
            },
            {
                title: "KPIs & Métricas",
                title_en: "KPIs & Metrics",
                type: "component",
                component: "PixTudoKPIs",
            },
            {
                title: "Roadmap de Produto",
                title_en: "Product Roadmap",
                type: "component",
                component: "PixTudoRoadmap",
            },
            {
                title: "MVP",
                title_en: "MVP",
                type: "text",
                content: "A pesquisa não ficou no papel. Construí um MVP funcional com as features priorizadas na fase de discovery: Pix simulado com cashback automático de 1,5%, extrato com categorização inteligente de gastos, Score PixTudo com gamificação e metas financeiras, hub de serviços (recarga de celular, vale-transporte, pagamento de contas) e rateio social com amigos. O produto tem plano PRO por R$19,90/mês com trial gratuito de 14 dias.",
                content_en: "The research didn't stay on paper. I built a working MVP with the features prioritized during discovery: simulated Pix with automatic 1.5% cashback, statement with intelligent spending categorization, PixTudo Score with gamification and financial goals, services hub (mobile top-up, transit pass, bill payments) and social bill-splitting. The product has a PRO plan at R$19.90/month with a 14-day free trial.",
            },
            {
                title: "Telas do app",
                title_en: "App screens",
                type: "gallery",
                columns: 3,
                images: [
                    { src: "/images/projects/pixtudo/pixtudo_mob_01.jpg", caption: "Início — resumo financeiro e cashback", caption_en: "Home — financial summary & cashback" },
                    { src: "/images/projects/pixtudo/pixtudo_mob_02.jpg", caption: "Pix — envio com cashback automático", caption_en: "Pix — send with automatic cashback" },
                    { src: "/images/projects/pixtudo/pixtudo_mob_03.jpg", caption: "Extrato — histórico e gráfico de movimentações", caption_en: "Statement — history & spending chart" },
                    { src: "/images/projects/pixtudo/pixtudo_mob_04.jpg", caption: "Score — pontuação gamificada com níveis e metas", caption_en: "Score — gamified rating with levels & goals" },
                    { src: "/images/projects/pixtudo/pixtudo_mob_05.jpg", caption: "Serviços — contas, recarga e transporte", caption_en: "Services — bills, top-up & transit" },
                    { src: "/images/projects/pixtudo/pixtudo_mob_06.jpg", caption: "Social — rateio e vaquinhas via Pix", caption_en: "Social — split bills & group payments" }
                ]
            },
            {
                title: "Resultados & Entregáveis",
                title_en: "Results & Deliverables",
                type: "outcomes",
                metrics: [
                    { value: "10",  label: "entregáveis de UX research" },
                    { value: "3",   label: "personas baseadas em pesquisa real" },
                    { value: "1",   label: "MVP funcional lançado e deployado" },
                ],
                metrics_en: [
                    { value: "10",  label: "UX research deliverables" },
                    { value: "3",   label: "personas based on real research" },
                    { value: "1",   label: "working MVP launched and deployed" },
                ],
                content: "O projeto percorreu o ciclo completo: pesquisa de mercado, análise competitiva, personas, jornada do usuário, HMW, princípios de design, KPIs e roadmap — seguidos da construção do MVP. O principal aprendizado: no Brasil, as decisões de design financeiro são inseparáveis de comportamentos sociais como o pagamento coletivo, a desconfiança histórica em bancos e a centralidade do WhatsApp.",
                content_en: "The project covered the full cycle: market research, competitive analysis, personas, user journey, HMW, design principles, KPIs and roadmap — followed by building the MVP. The key learning: in Brazil, financial design decisions are inseparable from social behaviors like collective payment, historical distrust of banks, and WhatsApp's centrality.",
            },
        ]
    },
    {
        id: 2,
        slug: "listaai-gerador-de-descricoes",
        pageType: "rich",
        src: "/images/projects/listaai/listaai_cover.png",
        category: "Product Design & AI Engineering",
        tags: ["Product Design", "AI Engineering"],
        title: "ListaAI",
        tagline: "Títulos e descrições para marketplace gerados por IA em segundos.",
        tagline_en: "AI-generated marketplace titles and descriptions in seconds.",
        description: "Gerador de títulos e descrições otimizadas para Mercado Livre e Shopee, movido por IA. Vendedores colam o nome do produto e as especificações técnicas, e o app entrega título com palavras-chave de alto volume e descrição completa pronta para publicar, em segundos.",
        description_en: "AI-powered title and description generator for Mercado Livre and Shopee. Sellers paste the product name and technical specs, and the app delivers a keyword-optimized title and a complete, publish-ready description in seconds.",
        year: "2026",
        role: "Product Designer & AI Engineer",
        timeline: "MVP · iteração contínua",
        timeline_en: "MVP · continuous iteration",
        team: "Solo",
        client: "Produto próprio",
        tools: ["Claude API", "Next.js", "Prisma", "Vercel"],
        liveDemoLink: "https://listaai.vercel.app/",
        sections: [
            {
                title: "O Problema",
                title_en: "The Problem",
                type: "text",
                content: "O Brasil tem mais de 12 milhões de vendedores ativos em marketplaces, a maioria microempreendedores e pequenos lojistas que publicam produtos manualmente. Escrever um título e uma descrição eficaz para marketplace não é trivial: envolve conhecer os algoritmos de busca de cada plataforma, usar as palavras-chave certas e estruturar a informação em um formato que converta. A realidade da maioria dos vendedores: descrições genéricas copiadas do fornecedor, títulos mal otimizados e horas perdidas por semana em conteúdo de produto. O custo de uma descrição ruim é direto: menos visibilidade, menos conversão, menos vendas.",
                content_en: "Brazil has over 12 million active marketplace sellers, most of them micro-entrepreneurs and small shop owners who list products manually. Writing an effective marketplace title and description isn't trivial: it requires knowing each platform's search algorithms, using the right keywords, and structuring information in a format that converts. The reality for most sellers: generic descriptions copied from suppliers, poorly optimized titles, and hours wasted every week on product content. The cost of a bad description is direct: less visibility, less conversion, fewer sales."
            },
            {
                title: "Pesquisa de Mercado",
                title_en: "Market Research",
                type: "research",
                methods: ["Análise de comportamento em fóruns de vendedores", "Benchmark de ferramentas existentes", "Mapeamento de dores via comunidades (Facebook, Reddit, WhatsApp)"],
                methods_en: ["Seller forum behavior analysis", "Benchmark of existing tools", "Pain point mapping via communities (Facebook, Reddit, WhatsApp)"],
                content: "A demanda por ferramentas de copywriting para marketplace no Brasil é alta e subatendida. Ferramentas genéricas como ChatGPT exigem que o vendedor monte prompts, interprete saídas e adapte o tom, criando uma barreira para quem não tem familiaridade com IA. Soluções específicas para Mercado Livre são escassas e, quando existem, focam em precificação ou gestão de estoque, não em conteúdo. O ponto de entrada ideal identificado: um fluxo de 3 campos (nome, especificações, plataforma) → resultado em <10 segundos.",
                content_en: "Demand for marketplace copywriting tools in Brazil is high and underserved. Generic tools like ChatGPT require sellers to craft prompts, interpret outputs, and adapt tone, creating a barrier for those unfamiliar with AI. Mercado Livre-specific solutions are scarce, and when they exist, they focus on pricing or inventory, not content. The ideal entry point: a 3-field flow (name, specs, platform) → result in under 10 seconds.",
                highlights: [
                    "Vendedores perdem de 30 a 60 minutos por dia só escrevendo descrições de produtos",
                    "Títulos mal escritos são a principal causa de baixo ranqueamento orgânico em marketplaces",
                    "A maioria dos vendedores não sabe quais palavras-chave usar, e muitas vezes não tem tempo para pesquisar",
                    "ChatGPT já é usado por parte dos vendedores, mas o atrito do prompt livre é uma barreira real",
                    "Mercado Livre e Shopee têm regras e formatos distintos, o que confere vantagem clara a uma ferramenta dedicada"
                ],
                highlights_en: [
                    "Sellers lose 30 to 60 minutes per day just writing product descriptions",
                    "Poorly written titles are the main cause of low organic ranking in marketplaces",
                    "Most sellers don't know which keywords to use and don't have time to research",
                    "ChatGPT is already used by some sellers, but the free-form prompt friction is a real barrier",
                    "Mercado Livre and Shopee have distinct rules and formats, so a tool that understands this has a clear advantage"
                ]
            },
            {
                type: "image",
                title: "Landing Page",
                title_en: "Landing Page",
                src: "/images/projects/listaai/landing-hero.png",
                caption: "Landing page com a proposta de valor para vendedores brasileiros",
                caption_en: "Landing page with the value proposition for Brazilian marketplace sellers"
            },
            {
                title: "Solução & Produto",
                title_en: "Solution & Product",
                type: "text",
                content: "O ListaAI foi construído com um fluxo de uso minimalista: o vendedor informa nome do produto, especificações técnicas, plataforma alvo (Mercado Livre ou Shopee) e tom de voz preferido. A IA gera título otimizado com palavras-chave de alto volume e uma descrição completa formatada para a plataforma escolhida. O resultado pode ser regenerado com um clique, copiado diretamente e fica salvo no histórico. Cada detalhe do produto foi pensado para reduzir o atrito ao máximo, para que o vendedor não precise entender de IA para usar.",
                content_en: "ListaAI was built with a minimalist usage flow: the seller provides the product name, technical specs, target platform (Mercado Livre or Shopee), and preferred tone of voice. The AI generates an optimized title with high-volume keywords and a complete description formatted for the chosen platform. The result can be regenerated with one click, copied directly, and is saved in history. Every detail was designed to minimize friction, so the seller doesn't need to understand AI to use it."
            },
            {
                type: "gallery",
                title: "Features & Como Funciona",
                title_en: "Features & How It Works",
                columns: 1,
                images: [
                    { src: "/images/projects/listaai/features.png", caption: "Funcionalidades: geração por plataforma, tom de voz, SEO embutido e mais", caption_en: "Features: platform generation, voice tone, built-in SEO and more" },
                    { src: "/images/projects/listaai/como-funciona.png", caption: "Como funciona: 3 passos entre specs, plataforma/tom e publicar", caption_en: "How it works: 3 steps from specs, platform/tone to publish" }
                ]
            },
            {
                title: "Funcionalidades",
                title_en: "Features",
                type: "research",
                methods: ["Geração por plataforma", "Seleção de tom de voz", "SEO embutido", "Regeneração inteligente", "Histórico completo"],
                methods_en: ["Platform-specific generation", "Voice tone selection", "Built-in SEO", "Smart regeneration", "Full history"],
                content: "Cada funcionalidade foi priorizada com base em uma pergunta: isso reduz o tempo do vendedor ou aumenta a qualidade do resultado? Geração separada por plataforma garante que o output respeite as regras e formatos do Mercado Livre e da Shopee. Tom de voz ajusta a descrição de formal a descontraído. O SEO embutido, sem configuração extra, analisa as especificações e escolhe termos com melhor potencial de ranqueamento. Regeneração inteligente permite variar o resultado sem redigitar os dados. O histórico completo devolve ao vendedor o controle sobre o que foi gerado.",
                content_en: "Each feature was prioritized based on one question: does this reduce seller time or increase output quality? Platform-specific generation ensures the output respects Mercado Livre's and Shopee's rules and formats. Voice tone adjusts the description from formal to casual. Built-in SEO, with no extra setup, analyzes specs and picks terms with the best ranking potential. Smart regeneration produces a new result without re-entering data. Full history gives sellers control over everything that's been generated.",
                highlights: [
                    "Geração por plataforma, com o output adaptado às regras de cada marketplace",
                    "Tom de voz configurável, entre formal, técnico, descontraído ou persuasivo",
                    "SEO embutido, com palavras-chave de alto volume inseridas automaticamente no título",
                    "Regeneração inteligente, para obter um novo resultado com um clique, sem reescrever os dados",
                    "Histórico completo, com todas as descrições salvas e acessíveis no dashboard"
                ],
                highlights_en: [
                    "Platform generation, with output adapted to each marketplace's rules",
                    "Configurable tone of voice, including formal, technical, casual, or persuasive",
                    "Built-in SEO, with high-volume keywords automatically embedded in the title",
                    "Smart regeneration, providing a new result with one click, no need to rewrite data",
                    "Full history, where all descriptions are saved and accessible in the dashboard"
                ]
            },
            {
                type: "gallery",
                title: "Interface",
                title_en: "Interface",
                columns: 2,
                images: [
                    { src: "/images/projects/listaai/dashboard.png", caption: "Dashboard com plano, descrições do mês e histórico recente", caption_en: "Dashboard with plan, monthly descriptions and recent history" },
                    { src: "/images/projects/listaai/nova-descricao.png", caption: "Nova descrição com nome, specs, plataforma e tom de voz", caption_en: "New description with name, specs, platform and voice tone" },
                    { src: "/images/projects/listaai/historico.png", caption: "Histórico com todas as descrições geradas com badges de plataforma", caption_en: "History with all generated descriptions with platform badges" },
                    { src: "/images/projects/listaai/perfil.png", caption: "Perfil com informações da conta e plano atual", caption_en: "Profile with account info and current plan" }
                ]
            },
            {
                type: "gallery",
                title: "Versão Mobile",
                title_en: "Mobile Version",
                columns: 3,
                images: [
                    { src: "/images/projects/listaai/mob_01.jpg" },
                    { src: "/images/projects/listaai/mob_02.jpg" },
                    { src: "/images/projects/listaai/mob_03.jpg" },
                    { src: "/images/projects/listaai/mob_04.jpg" },
                    { src: "/images/projects/listaai/mob_05.jpg" }
                ]
            },
            {
                title: "Arquitetura & Tecnologia",
                title_en: "Architecture & Technology",
                type: "text",
                content: "O produto foi inteiramente construído com AI coding, usando o Claude como pair programmer em todas as etapas, do scaffolding ao deploy. Stack: Next.js 14 (App Router) no frontend, API Routes para o backend, Prisma + PostgreSQL para persistência de dados e histórico, Claude API (claude-sonnet) para geração de conteúdo, e Vercel para deploy contínuo. O prompt de geração foi o artefato mais iterado: cada versão foi testada com produtos reais de diferentes categorias, como eletrônicos, moda e casa, até atingir consistência na qualidade do output.",
                content_en: "The product was entirely built with AI coding, with Claude as pair programmer at every stage, from scaffolding to deployment. Stack: Next.js 14 (App Router) on the frontend, API Routes for the backend, Prisma + PostgreSQL for data persistence and history, Claude API (claude-sonnet) for content generation, and Vercel for continuous deployment. The generation prompt was the most iterated artifact: each version was tested with real products across different categories, including electronics, fashion, and home, until output quality became consistent."
            },
            {
                type: "image",
                title: "Modelo de Negócio",
                title_en: "Business Model",
                src: "/images/projects/listaai/pricing.png",
                caption: "Modelo freemium: Free R$0 com 5 descrições/mês, e PRO R$39/mês ilimitado",
                caption_en: "Freemium model: Free R$0 with 5 descriptions/month, PRO R$39/month unlimited"
            },
            {
                title: "Resultados & Aprendizados",
                title_en: "Results & Learnings",
                type: "outcomes",
                metrics: [
                    { value: "2", label: "dias do zero ao deploy" },
                    { value: "3", label: "plataformas suportadas (ML, Shopee, genérico)" },
                    { value: "R$0", label: "plano gratuito com 5 descrições/mês" }
                ],
                metrics_en: [
                    { value: "2", label: "days from zero to deploy" },
                    { value: "3", label: "supported platforms (ML, Shopee, generic)" },
                    { value: "R$0", label: "free plan with 5 descriptions/month" }
                ],
                content: "O principal aprendizado foi sobre a relação entre simplicidade de interface e qualidade de prompt. Quanto mais simples o formulário para o usuário, mais trabalho o prompt precisa fazer para compensar a falta de contexto. A solução foi um sistema de instruções em camadas: o prompt base define o comportamento geral da IA, e variáveis dinâmicas injetam o contexto específico de cada geração. O modelo freemium foi escolhido para maximizar adoção, pois o produto se vende pelo primeiro uso.",
                content_en: "The key learning was about the relationship between interface simplicity and prompt quality. The simpler the form for the user, the more work the prompt needs to do to compensate for missing context. The solution was a layered instruction system: the base prompt defines the AI's general behavior, while dynamic variables inject the specific context for each generation. The freemium model was chosen to maximize adoption, as the product sells itself on the first use."
            }
        ]
    },
    {
        id: 7,
        slug: "zapvida-super-app-ux-research",
        src: "/images/projects/zapvida_full.jpg",
        category: "Product Design",
        tags: ["Product Design", "UX Research"],
        title: "ZapVida",
        tagline: "Pesquisa e design de um super-app nacional com Pix nativo, gov digital e mini-apps.",
        tagline_en: "Research and design of a national super-app with native Pix, digital gov and mini-apps.",
        description: "Documento de UX Research & Design para o ZapVida — o WeChat do Brasil. O projeto une mensagens, pagamentos, serviços governamentais, delivery e entretenimento numa única plataforma pensada para a realidade brasileira. Abrange pesquisa primária (40 entrevistas, 1.200 respondentes), 3 personas, jornada, arquitetura de informação, wireframes e sistema de design.",
        description_en: "UX Research & Design document for ZapVida — the Brazilian WeChat. The project unifies messaging, payments, government services, delivery, and entertainment in a single platform built for Brazilian reality. Covers primary research (40 interviews, 1,200 survey respondents), 3 personas, journey mapping, information architecture, wireframes, and design system.",
        year: "2026",
        role: "UX Researcher",
        timeline: "MVP · iteração contínua",
        timeline_en: "MVP · continuous iteration",
        team: "Solo",
        client: "Projeto Pessoal",
        tools: ["Figma", "Miro"],
        prototypeLinks: [{ label: "Ver documento de pesquisa", url: "/zap-ux-research.html" }],
        pageType: "rich",
        accentColor: "#00C853",
        sections: [
            {
                title: "O Problema",
                title_en: "The Problem",
                type: "text",
                content: "O Brasil tem o maior mercado de fintechs da América Latina, 170 milhões de smartphones ativos e os usuários mais engajados em apps do mundo — média de 5,4 horas diárias em apps, o maior do planeta. Mas nenhum super-app domina. O brasileiro usa WhatsApp para falar, Nubank para pagar, iFood para pedir comida, Instagram para se entreter e o app do INSS (quando consegue) para serviços públicos. 78% dos entrevistados usam 4 ou mais apps para tarefas que poderiam ser unificadas. 64% da classe C/D nunca usou um app de governo e não sabe como acessar serviços públicos digitais. O problema não é falta de infraestrutura ou de usuários — é a ausência de um produto que entenda a cultura e a realidade socioeconômica brasileira.",
                content_en: "Brazil has Latin America's largest fintech market, 170 million active smartphones, and the world's most app-engaged users — averaging 5.4 daily hours in apps, the global #1. But no super-app dominates. Brazilians use WhatsApp to chat, Nubank to pay, iFood to order food, Instagram to entertain themselves, and the INSS app (when it works) for government services. 78% of interviewees use 4+ apps for tasks that could be unified. 64% of the C/D income bracket has never used a government app and doesn't know how to access public digital services. The problem isn't a lack of infrastructure or users — it's the absence of a product that understands Brazilian culture and socioeconomic reality."
            },
            {
                title: "Análise Competitiva",
                title_en: "Competitive Analysis",
                type: "component",
                component: "ZapVidaCompetitors"
            },
            {
                title: "Personas",
                title_en: "Personas",
                type: "component",
                component: "ZapVidaPersonas"
            },
            {
                title: "Jornada do Usuário",
                title_en: "User Journey",
                type: "component",
                component: "ZapVidaJourney"
            },
            {
                title: "Arquitetura de Informação",
                title_en: "Information Architecture",
                type: "component",
                component: "ZapVidaIA"
            },
            {
                title: "Features Prioritárias",
                title_en: "Priority Features",
                type: "component",
                component: "ZapVidaFeatures"
            },
            {
                title: "Como Poderíamos…",
                title_en: "How Might We…",
                type: "research",
                methods: ["HMW · Gov Digital", "HMW · Recompensas", "HMW · Inclusão Digital", "HMW · Mini-apps", "HMW · Crescimento Orgânico", "HMW · Segurança"],
                methods_en: ["HMW · Digital Gov", "HMW · Rewards", "HMW · Digital Inclusion", "HMW · Mini-apps", "HMW · Organic Growth", "HMW · Security"],
                content: "Perguntas HMW derivadas dos insights de pesquisa primária.",
                content_en: "HMW questions derived from primary research insights.",
                highlights: [
                    "Como poderíamos tornar o acesso a serviços públicos tão fácil quanto mandar uma mensagem no ZapVida?",
                    "Como poderíamos criar um sistema de recompensas que incentive o brasileiro a usar o app no dia a dia?",
                    "Como poderíamos incluir usuários com baixa escolaridade digital sem infantilizar a experiência?",
                    "Como poderíamos criar mini-apps de terceiros que se integrem nativamente à identidade do ZapVida?",
                    "Como poderíamos usar a cultura da fofoca e da comunidade para crescer organicamente?",
                    "Como poderíamos garantir confiança e segurança em um país com alta fraude digital?"
                ],
                highlights_en: [
                    "How might we make accessing public services as easy as sending a message on ZapVida?",
                    "How might we create a rewards system that motivates Brazilians to use the app daily?",
                    "How might we include users with low digital literacy without infantilizing the experience?",
                    "How might we create third-party mini-apps that integrate natively with ZapVida's identity?",
                    "How might we use the culture of gossip and community to grow organically?",
                    "How might we guarantee trust and security in a country with high digital fraud?"
                ]
            },
            {
                title: "KPIs & Roadmap",
                title_en: "KPIs & Roadmap",
                type: "component",
                component: "ZapVidaKPIsRoadmap"
            },
            {
                title: "Resultados & Entregáveis",
                title_en: "Results & Deliverables",
                type: "outcomes",
                metrics: [
                    { value: "40", label: "entrevistas em profundidade realizadas" },
                    { value: "1.200", label: "respondentes no survey quantitativo" },
                    { value: "8", label: "seções de entregáveis (pesquisa ao design system)" }
                ],
                metrics_en: [
                    { value: "40", label: "in-depth interviews conducted" },
                    { value: "1,200", label: "quantitative survey respondents" },
                    { value: "8", label: "deliverable sections (research to design system)" }
                ],
                content: "O projeto resultou em um documento completo cobrindo todas as fases do processo UX, desde a pesquisa de mercado até wireframes e sistema de design. O principal aprendizado foi sobre a necessidade de um produto genuinamente brasileiro — não uma adaptação de modelos globais. A decisão de incluir gov digital como pilar raiz (não como serviço secundário) foi o insight mais contraintuitivo e, possivelmente, o maior diferencial competitivo: nenhum super-app global tem incentivo para integrar serviços públicos brasileiros, mas esse é exatamente o lock-in que cria adoção na classe C/D e em usuários mais velhos. A arquitetura de 5 pilares nasceu diretamente do card sorting, que revelou que \"dinheiro\" e \"serviços\" são categorias mentais distintas para o brasileiro — ao contrário do que modelos ocidentais costumam assumir.",
                content_en: "The project resulted in a complete document covering all UX process phases, from market research to wireframes and design system. The key learning was about the need for a genuinely Brazilian product — not an adaptation of global models. The decision to include digital gov as a root pillar (not a secondary service) was the most counterintuitive insight and possibly the biggest competitive differentiator: no global super-app has an incentive to integrate Brazilian public services, but this is exactly the lock-in that drives adoption among the C/D class and older users. The 5-pillar architecture emerged directly from the card sorting, which revealed that 'money' and 'services' are distinct mental categories for Brazilians — contrary to what Western models typically assume."
            }
        ]
    },
    {
        id: 5,
        slug: "roteiro-de-viagens-colaborativo",
        src: "/images/projects/roteiro_viagens_full.jpg",
        category: "Product Design",
        tags: ["Product Design", "UX Research"],
        title: "Rotera",
        tagline: "Planejamento colaborativo de viagens em grupo, do wireframe ao protótipo.",
        tagline_en: "Collaborative group trip planning, from wireframe to navigable prototype.",
        description: "Aplicativo mobile para planejamento colaborativo de viagens em grupo. O projeto explorou como tornar a co-criação de roteiros algo fluido e social, desde a ideação em sketches até o protótipo navegável, passando por arquitetura da informação, wireframes e testes.",
        description_en: "Mobile app for collaborative group trip planning. The project explored how to make co-creating itineraries fluid and social, from ideation sketches to a navigable prototype, through information architecture, wireframes, and testing.",
        year: "2024",
        role: "UX Designer & Researcher",
        timeline: "4 meses",
        timeline_en: "4 months",
        team: "Solo",
        client: "Projeto Acadêmico · Pós-graduação Infnet",
        tools: ["Figma", "Whimsical"],
        sections: [
            {
                title: "O Problema",
                title_en: "The Problem",
                type: "text",
                content: "Planejar uma viagem em grupo é caótico. As decisões se perdem em grupos de WhatsApp, planilhas compartilhadas e threads intermináveis de mensagens. Aplicativos de viagem existentes foram projetados para usuários individuais, nenhum resolve bem o desafio da colaboração real: múltiplas pessoas contribuindo, com permissões diferentes, visualizando e editando o mesmo roteiro em tempo real.",
                content_en: "Planning a group trip is chaotic. Decisions get lost in WhatsApp groups, shared spreadsheets, and endless message threads. Existing travel apps were designed for individual users, none solve the real collaboration challenge well: multiple people contributing, with different permissions, viewing and editing the same itinerary in real time."
            },
            {
                title: "Pesquisa & Descoberta",
                title_en: "Research & Discovery",
                type: "research",
                methods: ["Mapa conceitual de domínio", "Benchmarking de apps", "Tabela Problema-Solução", "Análise de padrões de design"],
                methods_en: ["Domain concept map", "App benchmarking", "Problem-Solution table", "Design pattern analysis"],
                content: "Mapeei o domínio completo do problema, desde o planejamento pré-viagem até o compartilhamento pós-viagem. O benchmark incluiu TripAdvisor, Google Trips, Roadtrippers e Wanderlog, identificando que nenhum resolve colaboração com controle de permissões.",
                content_en: "I mapped the complete problem domain, from pre-trip planning to post-trip sharing. The benchmark included TripAdvisor, Google Trips, Roadtrippers, and Wanderlog, identifying that none solve collaboration with permission control.",
                highlights: [
                    "Usuários usam WhatsApp + planilha + app de mapas simultaneamente para planejar",
                    "O 'dono' do roteiro vira gargalo: qualquer mudança passa por ele",
                    "Visualização em mapa é essencial para entender a sequência do itinerário",
                    "Pós-viagem é frequentemente ignorado pelos apps, no qual memórias e fotos se perdem"
                ],
                highlights_en: [
                    "Users simultaneously use WhatsApp + spreadsheet + maps app to plan",
                    "The itinerary 'owner' becomes a bottleneck: any change goes through them",
                    "Pós-viagem é frequentemente ignorado pelos apps, fazendo com que memórias e fotos se percam",
                    "Post-trip is often ignored by apps, causing memories and photos to get lost"
                ]
            },
            {
                title: "Arquitetura da Informação",
                title_en: "Information Architecture",
                type: "text",
                content: "Construí o sitegrama partindo dos fluxos críticos: criação do roteiro, colaboração em tempo real e pós-viagem. A home centraliza acesso ao roteiro atual e a viagens passadas, uma decisão diferente da maioria dos apps que abrem no perfil do usuário. O controle de permissões (editor, visualizador) foi desenhado como funcionalidade de primeira classe, não um menu escondido.",
                content_en: "I built the sitemap starting from critical flows: itinerary creation, real-time collaboration, and post-trip. The home centralizes access to the current itinerary and past trips, a different decision from most apps that open on the user profile. Permission control (editor, viewer) was designed as a first-class feature, not a hidden menu.",
                images: [
                    {
                        src: "/images/projects/roteiro/sitegrama.png",
                        caption: "Arquitetura da informação via sitegrama com fluxos principais",
                        fullWidth: true,
                        width: 1400,
                        height: 1000
                    }
                ]
            },
            {
                title: "Jornada & Ideação",
                title_en: "Journey & Ideation",
                type: "text",
                content: "A jornada do usuário revelou os momentos de maior fricção no planejamento colaborativo, especialmente na transição entre 'decidir o destino' e 'montar o itinerário detalhado'. Os sketches exploraram diferentes abordagens para o cadastro do roteiro e para a tela de convite de colaboradores.",
                content_en: "The user journey revealed the highest-friction moments in collaborative planning, especially in the transition from 'deciding on the destination' to 'building the detailed itinerary'. Sketches explored different approaches to itinerary registration and the collaborator invite screen.",
                images: [
                    {
                        src: "/images/projects/roteiro/jornada.png",
                        caption: "Jornada do usuário",
                        fullWidth: true,
                        width: 1400,
                        height: 500
                    },
                    {
                        src: "/images/projects/roteiro/sketches-1.png",
                        caption: "Primeiros sketches com telas de home e seleção de atividades",
                        width: 800,
                        height: 500
                    },
                    {
                        src: "/images/projects/roteiro/sketches-2.png",
                        caption: "Sketches: criação de roteiro e categorias",
                        width: 800,
                        height: 500
                    }
                ]
            },
            {
                title: "Wireframes",
                title_en: "Wireframes",
                type: "text",
                content: "Os wireframes foram desenvolvidos com foco nas telas de maior complexidade: home com múltiplos itinerários, fluxo de criação de roteiro em etapas, gerenciamento de colaboradores com níveis de permissão e visualização do itinerário por dia. Cada tela passou por revisão com base nos feedbacks da arquitetura.",
                content_en: "Wireframes were developed focusing on the most complex screens: home with multiple itineraries, step-by-step itinerary creation flow, collaborator management with permission levels, and day-by-day itinerary view. Each screen went through revision based on architecture feedback.",
                images: [
                    {
                        src: "/images/projects/roteiro/tela-01.png",
                        caption: "Home com itinerários e descoberta",
                        width: 390,
                        height: 700
                    },
                    {
                        src: "/images/projects/roteiro/tela-02.png",
                        caption: "Seleção de atividades",
                        width: 390,
                        height: 700
                    },
                    {
                        src: "/images/projects/roteiro/tela-03.png",
                        caption: "Criação do roteiro",
                        width: 390,
                        height: 700
                    },
                    {
                        src: "/images/projects/roteiro/tela-04.png",
                        caption: "Convidar colaboradores",
                        width: 390,
                        height: 700
                    },
                    {
                        src: "/images/projects/roteiro/tela-05.png",
                        caption: "Permissões de acesso",
                        width: 390,
                        height: 700
                    },
                    {
                        src: "/images/projects/roteiro/tela-06.png",
                        caption: "Detalhes da viagem",
                        width: 390,
                        height: 700
                    },
                    {
                        src: "/images/projects/roteiro/tela-07.png",
                        caption: "Itinerário em tempo real",
                        width: 390,
                        height: 700
                    }
                ],
                imageLayout: "screens"
            },
            {
                title: "Design Visual & Protótipo",
                title_en: "Visual Design & Prototype",
                type: "text",
                content: "O design visual adotou uma identidade limpa com foco em conteúdo: cards de destino com imagens de alta qualidade, hierarquia tipográfica clara e uma paleta que não compete com as fotos das viagens. O fluxo de criação de roteiro foi comprimido em duas telas (seleção de preferências e detalhes da viagem), reduzindo a fricção de entrada para o primeiro uso.",
                content_en: "The visual design adopted a clean identity focused on content: destination cards with high-quality images, clear typographic hierarchy, and a palette that doesn't compete with travel photos. The itinerary creation flow was compressed into two screens (preference selection and trip details), reducing first-use entry friction.",
                images: [
                    {
                        src: "/images/projects/rotera/hifi-home.png",
                        caption: "Home com seus roteiros e destinos populares",
                        width: 393,
                        height: 852
                    },
                    {
                        src: "/images/projects/rotera/hifi-preferencias.png",
                        caption: "Novo roteiro com a seleção de preferências",
                        width: 393,
                        height: 852
                    },
                    {
                        src: "/images/projects/rotera/hifi-detalhes.png",
                        caption: "Detalhes da viagem com os destinos e datas",
                        width: 393,
                        height: 852
                    }
                ],
                imageLayout: "screens"
            },
            {
                title: "Resultados & Aprendizados",
                title_en: "Results & Learnings",
                type: "outcomes",
                metrics: [
                    { value: "4", label: "meses de projeto" },
                    { value: "7", label: "wireframes detalhados" },
                    { value: "3", label: "rodadas de revisão" }
                ],
                metrics_en: [
                    { value: "4", label: "months of project" },
                    { value: "7", label: "detailed wireframes" },
                    { value: "3", label: "revision rounds" }
                ],
                content: "O projeto resultou em uma solução coesa com navegação fluida e colaboração como feature central, não apenas como uma adição. O principal aprendizado foi sobre nomenclatura e arquitetura: o uso dos termos 'itinerário' e 'roteiro' de forma intercambiável causava confusão no fluxo. A decisão de simplificar para apenas 'roteiro' e 'viagem' clarificou toda a hierarquia de informação do app.",
                content_en: "The project resulted in a cohesive solution with fluid navigation and collaboration as a central feature, rather than a simple addition. The key learning was about naming and architecture: using 'itinerary' and 'route' interchangeably caused confusion in the flow. The decision to simplify to just 'route' and 'trip' clarified the entire information hierarchy of the app."
            }
        ]
    },
    {
        id: 4,
        slug: "website-makeup-design",
        src: "/images/projects/estiloia_full.jpg",
        category: "Product Design",
        tags: ["Product Design", "UX Research"],
        title: "Estilo.ia",
        tagline: "Consultoria de moda personalizada por IA, testada em A/B com usuários reais.",
        tagline_en: "AI-powered fashion consulting, A/B tested with real users.",
        description: "App de consultoria de moda personalizada guiada por inteligência artificial. O projeto explorou como capturar o estilo pessoal de forma envolvente e não-intrusiva, testando dois modelos de questionário visual em formato A/B com usuários reais.",
        description_en: "AI-guided personalized fashion consulting app. The project explored how to capture personal style in an engaging and non-intrusive way, testing two visual questionnaire models in A/B format with real users.",
        year: "2023",
        role: "UX Designer & Researcher",
        timeline: "3 meses",
        timeline_en: "3 months",
        team: "6 integrantes",
        client: "Projeto Acadêmico · Pós-graduação Infnet",
        tools: ["Figma", "Miro"],
        prototypeLinks: [
            {
                label: "Modelo A: Moodboard",
                url: "https://www.figma.com/proto/ovtO7x2ujV4hFpAWhESfRi/estiloIA?page-id=0%3A1&type=design&node-id=244-2467"
            },
            {
                label: "Modelo B: Escolha Binária",
                url: "https://www.figma.com/proto/ovtO7x2ujV4hFpAWhESfRi/estiloIA?page-id=52%3A2&type=design&node-id=244-3324"
            }
        ],
        sections: [
            {
                title: "O Problema",
                title_en: "The Problem",
                type: "text",
                content: "Muitas pessoas têm dificuldade com seu estilo pessoal e gostariam de orientação para se vestir melhor, mas consultoria de moda profissional é muitas vezes cara e inacessível. Em pesquisa com potenciais usuários: 69% gostariam de ajuda para se vestir, 69% valorizariam uma avaliação personalizada e 61% veem consultoria como boa ideia. O desafio de design era outro: como uma IA aprende o estilo de alguém de forma natural, visual e sem fricção?",
                content_en: "Many people struggle with their personal style and would like guidance on dressing better, but professional fashion consulting is often expensive and inaccessible. In research with potential users: 69% would like help with dressing, 69% would value a personalized evaluation, and 61% see consulting as a good idea. The design challenge was different: how does an AI learn someone's style in a natural, visual, frictionless way?"
            },
            {
                title: "Escopo & Hipóteses",
                title_en: "Scope & Hypotheses",
                type: "research",
                methods: ["Benchmarking (Pinterest, Stitch Fix, Zalando)", "Análise de padrões de onboarding com IA"],
                methods_en: ["Benchmarking (Pinterest, Stitch Fix, Zalando)", "AI onboarding pattern analysis"],
                content: "A jornada completa do app envolve: questionário → cadastro de roupas → sugestões de looks → provador virtual → compra externa. Nosso foco foi exclusivamente o questionário inicial, que é a etapa que alimenta toda a personalização da IA. Para coletar dados de qualidade (intenção, estilo pessoal, medidas), precisávamos que o usuário não percebesse isso como coleta de dados, mas como autodescoberta de estilo.",
                content_en: "The complete app journey involves: questionnaire → wardrobe registration → look suggestions → virtual fitting room → external purchase. Our focus was exclusively on the initial questionnaire, the step that feeds all AI personalization. To collect quality data (intent, personal style, measurements), we needed the user to experience it not as data collection, but as style self-discovery.",
                highlights: [
                    "Imagens funcionam melhor que texto para transmitir a ideia de um estilo",
                    "Respostas não binárias (grau de compatibilidade) dão mais segurança ao usuário",
                    "Entender a intenção de uso (trabalho, festa, autoconhecimento) é tão importante quanto as preferências estéticas"
                ],
                highlights_en: [
                    "Images work better than text to convey the idea of a style",
                    "Non-binary responses (compatibility degree) give the user more confidence",
                    "Understanding usage intent (work, party, self-knowledge) is as important as aesthetic preferences"
                ]
            },
            {
                title: "Teste A/B com Usuários Reais",
                title_en: "A/B Test with Real Users",
                type: "research",
                methods: ["Testes moderados gravados", "5 participantes por modelo", "Análise qualitativa pós-teste"],
                methods_en: ["Recorded moderated tests", "5 participants per model", "Post-test qualitative analysis"],
                content: "Desenvolvemos dois protótipos navegáveis. Modelo A: moodboard interativo, onde o usuário arrasta peças que vão sendo sugeridas de acordo com suas escolhas. Modelo B: escolha binária estilo Tinder, curtindo ou descartando looks, com novos modelos sendo sugeridos adaptativamente. 10 usuários testaram os protótipos, 5 por modelo.",
                content_en: "We developed two navigable prototypes. Modelo B foi mais intuitivo, pois o mecanismo de swipe já é um padrão mental estabelecido. A variedade de categorias, que inclui paletas, estampas e objetos, deu segurança ao usuário de que seu estilo seria compreendido. Visualizar o resumo de todas as escolhas ao final foi valorizado em ambos os modelos. Usuários do Modelo A relataram dificuldade em entender o funcionamento, já que a curva de aprendizado foi um obstáculo.",
                highlights: [
                    "Modelo B foi mais intuitivo, pois o mecanismo de swipe já é um padrão mental estabelecido",
                    "Imagens grandes (Modelo B) foram mais valorizadas do que peças em miniatura (Modelo A)",
                    "A variedade de categorias, que inclui paletas, estampas e objetos, deu segurança ao usuário de que seu estilo seria compreendido",
                    "Visualizar o resumo de todas as escolhas ao final foi valorizado em ambos os modelos",
                    "Usuários do Modelo A relataram dificuldade em entender o funcionamento, já que a curva de aprendizado foi um obstáculo"
                ],
                highlights_en: [
                    "Model B was more intuitive, as the swipe mechanism is already an established mental model",
                    "Large images (Model B) were more valued than miniature pieces (Model A)",
                    "The variety of categories, including palettes, patterns, and objects, gave users confidence that their style would be understood",
                    "Seeing a summary of all choices at the end was valued in both models",
                    "Model A users reported difficulty understanding how it worked, as the learning curve was an obstacle"
                ],
                images: [
                    {
                        src: "/images/projects/estiloia/comparacao-ab.png",
                        caption: "Modelo A (moodboard) × Modelo B (escolha binária), um comparativo dos protótipos testados",
                        fullWidth: true,
                        width: 1400,
                        height: 900
                    }
                ]
            },
            {
                title: "Fluxo Recomendado",
                title_en: "Recommended Flow",
                type: "text",
                content: "O fluxo validado combina o melhor dos dois modelos: onboarding com perguntas de intenção (buscar referências, autoconhecimento, me sentir mais confiante, destaque profissional), seguido de escolha binária visual para estilo (paleta de cores, estampas, peças específicas, objetos associados ao estilo) e coleta progressiva de medidas corporais. A jornada transforma coleta de dados em autodescoberta, onde o usuário não apenas responde a perguntas, mas constrói seu perfil de estilo.",
                content_en: "The validated flow combines the best of both models: onboarding with intent questions (find references, self-knowledge, feel more confident, professional standout), followed by visual binary style choice (color palette, patterns, specific pieces, style-associated objects), and progressive body measurement collection. The journey transforms data collection into self-discovery, so the user doesn't just answer questions, they build their style profile.",
                images: [
                    {
                        src: "/images/projects/estiloia/fluxo-tinder.png",
                        caption: "Fluxo recomendado com splash, intenção, objetivo, paleta de cor e estampa",
                        fullWidth: true,
                        width: 1400,
                        height: 900
                    },
                    {
                        src: "/images/projects/estiloia/fluxo-medidas.png",
                        caption: "Continuação do fluxo com a seleção de peças, moodboard final e coleta de medidas",
                        fullWidth: true,
                        width: 1400,
                        height: 900
                    }
                ]
            },
            {
                title: "Resultados & Aprendizados",
                title_en: "Results & Learnings",
                type: "outcomes",
                metrics: [
                    { value: "10", label: "usuários testados" },
                    { value: "2", label: "modelos A/B comparados" },
                    { value: "69%", label: "dos usuários querem ajuda com estilo" }
                ],
                metrics_en: [
                    { value: "10", label: "users tested" },
                    { value: "2", label: "A/B models compared" },
                    { value: "69%", label: "of users want style help" }
                ],
                content: "O projeto demonstrou que o design do processo de coleta de dados é, ele mesmo, um produto. A principal recomendação resultante: usar imagens em vez de palavras para entender preferências; possibilitar ao usuário ver todas as suas escolhas juntas; usar grande variedade de categorias além de roupas; questionar sobre intenção antes de estilo; e permitir ao usuário colocar suas medidas para sugestões mais precisas.",
                content_en: "The project demonstrated that the design of the data collection process is itself a product. The main resulting recommendation: use images instead of words to understand preferences; let users see all their choices together; use a wide variety of categories beyond clothing; ask about intent before style; and allow users to input their measurements for more precise suggestions."
            }
        ]
    },
    {
        id: 3,
        slug: "sustenta-plus-app-ux-design",
        src: "/images/projects/sustentamais_full2.jpg",
        category: "Product Design",
        tags: ["Product Design", "UX Research"],
        title: "Sustenta+",
        tagline: "App mobile com IA para reduzir desperdício e planejar a alimentação.",
        tagline_en: "AI-powered mobile app to reduce food waste and plan meals smarter.",
        description: "Aplicativo mobile com IA para gerenciamento inteligente de compras e consumo de alimentos. O app prevê necessidades, reduz o desperdício e promove uma alimentação mais saudável e econômica, conectando tecnologia ao dia a dia da cozinha.",
        description_en: "AI-powered mobile app for intelligent food shopping and consumption management. The app predicts needs, reduces waste, and promotes healthier, more economical eating, connecting technology to everyday kitchen routines.",
        year: "2023",
        role: "UX Designer & Researcher",
        timeline: "3 meses",
        timeline_en: "3 months",
        team: "7 integrantes",
        client: "Projeto Acadêmico · Pós-graduação Infnet",
        tools: ["Figma", "Miro"],
        prototypeLink: "https://www.figma.com/proto/IEQMzJVFMRJ5gMPQ7lAsX2/Prot%C3%B3tipo?node-id=62-1369&starting-point-node-id=62%3A1369&t=N0QqFqUBLfg7T0Y9-1",
        sections: [
            {
                title: "O Problema",
                title_en: "The Problem",
                type: "text",
                content: "O Brasil está entre os 10 países que mais desperdiçam alimentos no mundo. No dia a dia, o problema é ainda mais concreto: geladeiras cheias de itens esquecidos, compras impulsivas sem planejamento e dificuldade em manter uma dieta equilibrada em rotinas corridas. A falta de uma ferramenta que centralizasse o controle do que se compra, consome e descarta tornava o gerenciamento da alimentação algo invisível e caro.",
                content_en: "Brazil is among the top 10 food-wasting countries in the world. In daily life, the problem is even more concrete: fridges full of forgotten items, impulse purchases without planning, and difficulty maintaining a balanced diet in busy routines. The lack of a tool to centralize what is bought, consumed, and discarded made food management invisible and costly."
            },
            {
                title: "Pesquisa & Descoberta",
                title_en: "Research & Discovery",
                type: "research",
                methods: ["Entrevistas com usuários", "Benchmark competitivo", "Mapa de empatia", "Proto-persona"],
                methods_en: ["User interviews", "Competitive benchmark", "Empathy map", "Proto-persona"],
                content: "Realizamos pesquisa qualitativa com usuários de diferentes perfis para entender os padrões de compra e consumo de alimentos. O benchmark mapeou apps como Kitchee It, No Waste, Mealime e Nosh, identificando lacunas no mercado brasileiro. A partir das entrevistas, construímos uma proto-persona (Ana, dona de casa, 40 anos, São Paulo) e um mapa de empatia que revelou o gap entre intenção e comportamento real na cozinha.",
                content_en: "We conducted qualitative research with users of different profiles to understand food buying and consumption patterns. The benchmark mapped apps like Kitchee It, No Waste, Mealime, and Nosh, identifying gaps in the Brazilian market. From the interviews, we built a proto-persona (Ana, housewife, 40, São Paulo) and an empathy map that revealed the gap between intention and real behavior in the kitchen.",
                highlights: [
                    "Usuários não sabem o que têm na geladeira ao fazer a lista de compras",
                    "Datas de validade são ignoradas até o alimento estragar",
                    "Dietas fracassam por falta de planejamento prático, não de vontade",
                    "A barreira de entrada (registrar compras) precisa ser mínima para o app ser adotado"
                ],
                highlights_en: [
                    "Users don't know what's in the fridge when making the shopping list",
                    "Expiration dates are ignored until food goes bad",
                    "Diets fail due to lack of practical planning, not willpower",
                    "The entry barrier (registering purchases) must be minimal for the app to be adopted"
                ],
                images: [
                    {
                        src: "/images/projects/sustenta/benchmark.png",
                        caption: "Benchmark competitivo: Kitchee It, No Waste, Mealime e Nosh",
                        fullWidth: true,
                        width: 1400,
                        height: 800
                    }
                ]
            },
            {
                title: "Processo de Design",
                title_en: "Design Process",
                type: "text",
                content: "Partimos das descobertas de pesquisa para construir a proto-persona e o mapa de empatia que guiaram todas as decisões de design. O mapa revelou que Ana precisa de organização, não de motivação, pois ela já quer evitar desperdício e só falta uma ferramenta que reduza o atrito do planejamento. O fluxo principal foi definido priorizando o menor atrito no registro de itens: câmera para ler nota fiscal, listas pré-populadas e sugestões inteligentes.",
                content_en: "We moved from research findings to build the proto-persona and empathy map that guided all design decisions. The map revealed that Ana needs organization, not motivation, since she already wants to avoid waste and just lacks a tool that reduces planning friction. The main flow was defined prioritizing the lowest friction in item registration: camera to read fiscal receipts, pre-populated lists, and smart suggestions.",
                images: [
                    {
                        src: "/images/projects/sustenta/persona.png",
                        caption: "Proto-persona: Ana, Dona de Casa, 40 anos",
                        fullWidth: true,
                        width: 1400,
                        height: 800
                    },
                    {
                        src: "/images/projects/sustenta/mapa-empatia.png",
                        caption: "Mapa de empatia: dores, ganhos, comportamentos e necessidades",
                        fullWidth: true,
                        width: 1400,
                        height: 900
                    }
                ]
            },
            {
                title: "Solução",
                title_en: "Solution",
                type: "text",
                content: "O Sustenta+ atua como um assistente de alimentação que aprende com o usuário ao longo do tempo. O app permite registrar compras por leitura de nota fiscal, monitora o estoque em casa, alerta sobre vencimentos, sugere receitas com o que já está disponível e gera listas de compra personalizadas baseadas no histórico e na dieta do usuário.",
                content_en: "Sustenta+ acts as a food assistant that learns from the user over time. The app allows registering purchases by reading fiscal receipts, monitors home inventory, alerts on expiration dates, suggests recipes from available items, and generates personalized shopping lists based on the user's history and diet.",
                images: [
                    {
                        src: "/images/projects/sustenta/telas-dark.png",
                        caption: "Telas do protótipo: lista de alimentos, adição por nota fiscal e detalhes de item",
                        fullWidth: true,
                        width: 1400,
                        height: 800
                    }
                ]
            },
            {
                title: "Resultados & Aprendizados",
                title_en: "Results & Learnings",
                type: "outcomes",
                metrics: [
                    { value: "4", label: "integrantes na equipe" },
                    { value: "2", label: "rodadas de refinamento" },
                    { value: "1", label: "protótipo navegável validado" }
                ],
                metrics_en: [
                    { value: "4", label: "team members" },
                    { value: "2", label: "refinement rounds" },
                    { value: "1", label: "validated navigable prototype" }
                ],
                content: "O protótipo foi validado com usuários e apresentado para banca avaliadora. O principal aprendizado foi sobre o trade-off entre riqueza de dados e facilidade de onboarding: quanto mais o app sabe sobre o usuário, mais inteligente ele fica, mas isso exige um esforço inicial de cadastro. A solução foi dividir o onboarding em etapas progressivas, com valor entregue desde o primeiro acesso.",
                content_en: "The prototype was validated with users and presented to an evaluation panel. The key learning was about the trade-off between data richness and onboarding ease: the more the app knows about the user, the smarter it becomes, but it requires an initial registration effort. The solution was to split onboarding into progressive steps, delivering value from the first access."
            }
        ]
    },
    {
        id: 8,
        hidden: true,
        slug: "palavra-selvagem",
        liveDemoLink: "https://palavraselvagem.vercel.app/",
        src: "/images/projects/palavraselvagem_full2.jpg",
        pageSrc: "/images/projects/palavraselvagem_full.jpg",
        category: "Game Design & Full-Stack",
        tags: ["Game Design", "Full-Stack"],
        title: "Palavra Selvagem",
        tagline: "Jogo educativo onde crianças montam nomes de animais, aprendem curiosidades e treinam alfabetização.",
        tagline_en: "Educational game where children build animal names, learn fun facts and practice literacy skills.",
        description: "A criança vê a ilustração de um animal e precisa montar o nome dele arrastando letras para os espaços corretos. Cada acerto revela uma curiosidade sobre o animal. A dificuldade cresce progressivamente: palavras maiores, tempo limitado e letras-distração. Trabalha alfabetização, coordenação motora e ciências naturais.",
        description_en: "The child sees an animal illustration and must build its name by dragging letters into the correct spaces. Each correct answer reveals a fun fact about the animal. Difficulty scales progressively: longer words, time limits, and distractor letters. Targets literacy, motor coordination, and natural sciences.",
        year: "2026",
        role: "Game Designer & AI Engineer",
        timeline: "MVP · iteração contínua",
        timeline_en: "MVP · continuous iteration",
        team: "Solo",
        client: "Produto próprio",
        tools: ["Next.js", "Claude API", "Vercel"],
        sections: [
            {
                title: "O Problema",
                title_en: "The Problem",
                type: "text",
                content: "O Brasil tem um dos maiores déficits de alfabetização da América Latina: segundo o IBGE, cerca de 6% das crianças entre 6 e 14 anos não sabem ler nem escrever, e estudos do INEP mostram que apenas 53% dos alunos do 3º ano do ensino fundamental atingem o nível adequado de leitura. O problema não é só acesso à escola, mas engajamento. Apps educativos existentes são frequentemente repetitivos e perdem a atenção infantil rapidamente. A hipótese: combinar animais, curiosidades e mecânica de jogo cria um loop de aprendizado com recompensa intrínseca, onde a criança quer continuar não para ganhar pontos, mas porque a próxima curiosidade é interessante.",
                content_en: "Brazil has one of the largest literacy deficits in Latin America: according to IBGE, around 6% of children aged 6 to 14 cannot read or write, and INEP studies show only 53% of 3rd-grade students reach adequate reading levels. The issue isn't just school access — it's engagement. Existing educational apps are often repetitive and quickly lose children's attention. The hypothesis: combining animals, fun facts, and game mechanics creates a learning loop with intrinsic rewards, where the child wants to continue not for points, but because the next fact is genuinely interesting."
            },
            {
                title: "Solução & Mecânica",
                title_en: "Solution & Mechanics",
                type: "text",
                content: "A criança vê a ilustração de um animal e monta o nome arrastando letras para os espaços corretos. O acerto imediato desbloqueia uma curiosidade sobre aquele animal — um micro-momento de descoberta que recompensa o esforço com conhecimento real. A dificuldade escala em três níveis: fácil (palavras curtas, sem tempo), médio (palavras maiores, letras-distração) e difícil (tempo limitado, palavras complexas). A progressão é bloqueada por nível, incentivando o domínio antes de avançar. O sistema de estrelas por rodada cria um objetivo de replay natural: terminar com desempenho perfeito.",
                content_en: "The child sees an animal illustration and builds its name by dragging letters into the correct slots. A correct answer immediately unlocks a fun fact about that animal — a micro-moment of discovery that rewards effort with real knowledge. Difficulty scales across three levels: easy (short words, no timer), medium (longer words, distractor letters), and hard (time pressure, complex words). Progression is gated by level, encouraging mastery before moving on. The star rating system per round creates a natural replay objective: finishing with a perfect score."
            },
            {
                title: "Construção com AI Coding",
                title_en: "Built with AI Coding",
                type: "research",
                methods: ["Claude API como pair programmer", "Next.js App Router", "Deploy contínuo via Vercel"],
                methods_en: ["Claude API as pair programmer", "Next.js App Router", "Continuous deploy via Vercel"],
                content: "O jogo foi construído em 1 dia usando Claude como pair programmer em todas as etapas: estrutura do jogo, lógica de drag-and-drop, sistema de progressão por nível e banco de dados de animais com curiosidades reais. A base de animais foi gerada e curada com a API do Claude, garantindo que as curiosidades fossem precisas, adequadas à faixa etária e variadas o suficiente para manter o interesse ao longo das rodadas.",
                content_en: "The game was built in 1 day using Claude as pair programmer at every stage: game structure, drag-and-drop logic, level progression system, and animal database with real fun facts. The animal database was generated and curated using the Claude API, ensuring facts were accurate, age-appropriate, and varied enough to maintain interest across rounds.",
                highlights: [
                    "Sistema de drag-and-drop com feedback imediato de acerto ou erro",
                    "Base de animais com curiosidades científicas reais curadas por IA",
                    "Progressão em 3 níveis com desbloqueio por desempenho",
                    "Sistema de estrelas por rodada para incentivar replay"
                ],
                highlights_en: [
                    "Drag-and-drop system with immediate right/wrong feedback",
                    "Animal database with real, AI-curated scientific fun facts",
                    "3-level progression with performance-gated unlocks",
                    "Star rating per round to encourage replay"
                ]
            },
            {
                title: "Resultados & Aprendizados",
                title_en: "Results & Learnings",
                type: "outcomes",
                metrics: [
                    { value: "1 dia", label: "do zero ao deploy" },
                    { value: "3", label: "níveis de dificuldade" },
                    { value: "8", label: "animais por rodada" }
                ],
                metrics_en: [
                    { value: "1 day", label: "from zero to deploy" },
                    { value: "3", label: "difficulty levels" },
                    { value: "8", label: "animals per round" }
                ],
                content: "O principal aprendizado foi sobre o poder do contexto na educação infantil. Letras isoladas são abstratas para crianças; letras que formam 'elefante' e revelam que ele pesa 6 toneladas são concretas, memoráveis e conectadas a uma experiência emocional. A mecânica de drag-and-drop com feedback imediato, combinada à curiosidade como recompensa, criou um loop que manteve o engajamento sem necessidade de pontos ou rankings. O jogo funciona porque a recompensa é informação, não gamificação artificial.",
                content_en: "The key learning was about the power of context in children's education. Isolated letters are abstract for children; letters that form 'elephant' and reveal it weighs 6 tons are concrete, memorable, and tied to an emotional experience. The drag-and-drop mechanic with immediate feedback, combined with the fun fact as reward, created a loop that maintained engagement without needing points or leaderboards. The game works because the reward is information, not artificial gamification."
            }
        ]
    },
    {
        id: 9,
        hidden: true,
        slug: "orbinum",
        liveDemoLink: "https://orbinum.vercel.app/",
        src: "/images/projects/orbinum_full.jpg",
        category: "Game Design & Full-Stack",
        tags: ["Game Design", "Full-Stack"],
        title: "OrbiNum",
        tagline: "Missão espacial onde operações matemáticas abastecem um foguete e desbloqueiam planetas.",
        tagline_en: "Space mission where math operations fuel a rocket and unlock planets across the solar system.",
        description: "Um foguete precisa viajar entre planetas, e para avançar a criança resolve operações matemáticas que abastecem a nave. Cada planeta representa um nível de dificuldade — Mercúrio para somas simples, Saturno para multiplicação. Acertos consecutivos ativam um turbo visual. Trabalha aritmética, raciocínio rápido e apresenta o sistema solar.",
        description_en: "A rocket needs to travel between planets, and to advance the child solves math operations that fuel the ship. Each planet represents a difficulty level — Mercury for simple sums, Saturn for multiplication. Consecutive correct answers activate a visual turbo boost. Targets arithmetic, quick reasoning, and introduces the solar system.",
        year: "2026",
        role: "Game Designer & AI Engineer",
        timeline: "MVP · iteração contínua",
        timeline_en: "MVP · continuous iteration",
        team: "Solo",
        client: "Produto próprio",
        tools: ["Next.js", "Claude API", "Vercel"],
        sections: [
            {
                title: "O Problema",
                title_en: "The Problem",
                type: "text",
                content: "O Brasil ocupa a 65ª posição no ranking de matemática do PISA entre 81 países, com apenas 2% dos alunos atingindo níveis avançados. A raiz do problema não está em capacidade cognitiva — está em como a matemática é apresentada. Exercícios repetitivos sem contexto criam aversão antes mesmo da criança entender o que está aprendendo. Pesquisas da área de aprendizado gamificado (Gee, 2003; Mayer, 2019) mostram que crianças retêm mais quando o desafio está embebido em narrativa e consequência real dentro do jogo. A hipótese do OrbiNum: se cada operação matemática tem uma consequência visual imediata (o foguete avança ou não), a aritmética deixa de ser abstrata e passa a ser instrumental.",
                content_en: "Brazil ranks 65th in the PISA mathematics ranking among 81 countries, with only 2% of students reaching advanced levels. The root isn't cognitive capacity — it's how math is presented. Repetitive, context-free exercises create aversion before the child even understands what they're learning. Research in gamified learning (Gee, 2003; Mayer, 2019) shows children retain more when challenges are embedded in narrative and have real in-game consequences. OrbiNum's hypothesis: if each math operation has an immediate visual consequence (the rocket advances or not), arithmetic stops being abstract and becomes instrumental."
            },
            {
                title: "Solução & Mecânica",
                title_en: "Solution & Mechanics",
                type: "text",
                content: "Um foguete viaja entre os planetas do sistema solar, e cada planeta representa um nível de dificuldade crescente: Mercúrio (somas simples) até Saturno (multiplicação e divisão). Para avançar entre planetas, a criança resolve operações que 'abastecem' a nave — a metáfora torna a consequência do acerto tangível. Três acertos consecutivos ativam o modo Turbo, um feedback visual que recompensa consistência sem criar dependência de recompensas externas. O sistema de vidas (3 corações) adiciona tensão saudável sem punição excessiva. Ao final de cada missão, o desempenho é pontuado em estrelas.",
                content_en: "A rocket travels between solar system planets, each representing a progressively harder difficulty level: Mercury (simple addition) to Saturn (multiplication and division). To move between planets, the child solves operations that 'fuel' the ship — the metaphor makes the consequence of a correct answer tangible. Three consecutive correct answers activate Turbo mode, a visual feedback that rewards consistency without creating external reward dependency. A life system (3 hearts) adds healthy tension without excessive punishment. At the end of each mission, performance is scored with stars."
            },
            {
                title: "Construção com AI Coding",
                title_en: "Built with AI Coding",
                type: "research",
                methods: ["Claude API como pair programmer", "Next.js App Router", "Geração procedural de operações", "Deploy contínuo via Vercel"],
                methods_en: ["Claude API as pair programmer", "Next.js App Router", "Procedural operation generation", "Continuous deploy via Vercel"],
                content: "O OrbiNum foi construído em 1 dia com Claude como pair programmer. A geração de operações matemáticas é procedural e adaptada ao nível do planeta atual, garantindo que a dificuldade suba gradualmente sem saltos bruscos. O sistema de Turbo foi o artefato mais iterado: versões iniciais usavam multiplicadores de pontos, mas testes informais mostraram que o feedback visual (animação da nave) era mais motivador que números. A metáfora espacial foi escolhida por dois motivos: é culturalmente neutra (funciona para meninos e meninas) e introduz o sistema solar como conteúdo paralelo sem ser didático.",
                content_en: "OrbiNum was built in 1 day with Claude as pair programmer. Math operation generation is procedural and adapted to the current planet level, ensuring difficulty rises gradually without sudden jumps. The Turbo system was the most iterated artifact: early versions used score multipliers, but informal tests showed that the visual feedback (rocket animation) was more motivating than numbers. The space metaphor was chosen for two reasons: it is culturally neutral (works for all children) and introduces the solar system as parallel content without being didactic.",
                highlights: [
                    "Geração procedural de operações calibrada por planeta/dificuldade",
                    "Turbo mode com feedback visual após 3 acertos consecutivos",
                    "Sistema de vidas que cria tensão sem frustração excessiva",
                    "Metáfora espacial apresenta o sistema solar como conteúdo paralelo"
                ],
                highlights_en: [
                    "Procedural operation generation calibrated by planet/difficulty",
                    "Turbo mode with visual feedback after 3 consecutive correct answers",
                    "Life system creating healthy tension without excessive frustration",
                    "Space metaphor introduces the solar system as parallel content"
                ]
            },
            {
                title: "Resultados & Aprendizados",
                title_en: "Results & Learnings",
                type: "outcomes",
                metrics: [
                    { value: "1 dia", label: "do zero ao deploy" },
                    { value: "8", label: "planetas / níveis de dificuldade" },
                    { value: "Turbo", label: "modo ativado por 3 acertos seguidos" }
                ],
                metrics_en: [
                    { value: "1 day", label: "from zero to deploy" },
                    { value: "8", label: "planets / difficulty levels" },
                    { value: "Turbo", label: "mode activated by 3 consecutive correct answers" }
                ],
                content: "O principal aprendizado foi sobre o papel da metáfora no aprendizado infantil. A operação matemática por si só é neutra; o foguete que precisa de combustível torna a resposta certa urgente e real. A maior descoberta durante o desenvolvimento: o Turbo mode não precisava de recompensa material, apenas de feedback audiovisual intenso. Crianças respondem à intensidade do feedback, não ao valor da recompensa. Isso sugere que muitos sistemas de gamificação erram ao focar em pontos e moedas quando o que motiva é a sensação de poder e velocidade.",
                content_en: "The key learning was about the role of metaphor in children's learning. A math operation on its own is neutral; a rocket that needs fuel makes the correct answer urgent and real. The biggest discovery during development: the Turbo mode didn't need material rewards — just intense audiovisual feedback. Children respond to the intensity of feedback, not the value of the reward. This suggests many gamification systems err by focusing on points and coins when what motivates is the sensation of power and speed."
            }
        ]
    },
    {
        id: 10,
        hidden: true,
        slug: "veradice",
        liveDemoLink: "https://veradice.vercel.app/",
        src: "/images/projects/veradice_full.jpg",
        pageSrc: "/images/projects/veradice_full2.jpg",
        category: "Game Design & Full-Stack",
        tags: ["Game Design", "Full-Stack"],
        title: "Veradice",
        tagline: "RPG de fantasia no navegador com narrativa híbrida, combate tático e múltiplos finais.",
        tagline_en: "Browser fantasy RPG with hybrid narrative, tactical combat and multiple endings.",
        description: "RPG completo no navegador com sistema híbrido de narração: árvore de decisão combinada com templates dinâmicos e eventos aleatórios. O jogador cria personagem, escolhe raça e classe, explora 5 atos com múltiplos caminhos e desbloqueia finais diferentes baseados nas suas escolhas.",
        description_en: "Full-featured browser RPG with a hybrid narrative system: decision tree combined with dynamic templates and random events. The player creates a character, chooses race and class, explores 5 acts with multiple paths, and unlocks different endings based on their choices.",
        year: "2026",
        role: "Game Designer & AI Engineer",
        timeline: "MVP · iteração contínua",
        timeline_en: "MVP · continuous iteration",
        team: "Solo",
        client: "Produto próprio",
        tools: ["Next.js", "Claude API", "Vercel"],
        sections: [
            {
                title: "O Problema",
                title_en: "The Problem",
                type: "text",
                content: "RPGs de texto no navegador costumam cair em dois extremos: ou são escolhas binárias simples sem profundidade (visual novels lineares) ou sistemas de regras tão complexos que o onboarding afasta quem não é jogador hardcore. O desafio era criar um jogo com profundidade mecânica real — classes, atributos, combate tático, progressão — mas que qualquer pessoa conseguisse jogar sem ler um manual. A hipótese central: um sistema narrativo híbrido que combina estrutura previsível (árvore de decisão) com variação imprevisível (templates dinâmicos + eventos aleatórios) consegue entregar tanto coerência quanto rejogabilidade.",
                content_en: "Text-based browser RPGs tend to fall into two extremes: either they're simple binary choices without depth (linear visual novels) or rule systems so complex that the onboarding repels anyone who isn't a hardcore gamer. The challenge was to create a game with real mechanical depth — classes, attributes, tactical combat, progression — that anyone could play without reading a manual. The core hypothesis: a hybrid narrative system combining predictable structure (decision tree) with unpredictable variation (dynamic templates + random events) can deliver both coherence and replayability."
            },
            {
                title: "Sistema Híbrido de Narrativa",
                title_en: "Hybrid Narrative System",
                type: "research",
                methods: ["Árvore de decisão com 5 atos", "Templates dinâmicos com placeholders", "Eventos aleatórios entre cenas", "Flags de estado entre sessões"],
                methods_en: ["Decision tree with 5 acts", "Dynamic templates with placeholders", "Random events between scenes", "State flags across sessions"],
                content: "A inovação central do Veradice é a camada tripla de narração. A primeira camada é a árvore de decisão — 40+ nós com escolhas que têm consequências reais no estado do jogo. A segunda é os templates dinâmicos: textos com placeholders ({name}, {race}, {time}, {weather}) que mudam a cada cena, criando variação sem custo de escrita. A terceira são eventos aleatórios com 40% de chance a cada 3-4 nós: mercadores, armadilhas, tesouros, enigmas e emboscadas que mantêm o jogador em alerta mesmo em caminhos já explorados. As flags de estado (sabe_do_ritual, conhece_lyria, sabe_fraqueza_verath) persistem e afetam diálogos, combates e os 4 finais possíveis.",
                content_en: "Veradice's core innovation is the triple-layer narration system. The first layer is the decision tree — 40+ nodes with choices that have real consequences in the game state. The second is dynamic templates: texts with placeholders ({name}, {race}, {time}, {weather}) that change every scene, creating variation without extra writing cost. The third is random events with 40% chance every 3-4 nodes: merchants, traps, treasures, riddles, and ambushes that keep the player alert even on already-explored paths. State flags (knows_ritual, knows_lyria, knows_verath_weakness) persist and affect dialogues, combats, and all 4 possible endings.",
                highlights: [
                    "40+ nós na árvore de decisão com caminhos ramificados por ato",
                    "Templates dinâmicos com tom adaptável: épico, humor, sombrio, mistério",
                    "10 tipos de eventos aleatórios com checks de atributo e consequências",
                    "4 finais distintos baseados em flags acumuladas ao longo da aventura"
                ],
                highlights_en: [
                    "40+ decision tree nodes with branching paths per act",
                    "Dynamic templates with adaptive tone: epic, humor, dark, mystery",
                    "10 types of random events with attribute checks and consequences",
                    "4 distinct endings based on flags accumulated throughout the adventure"
                ],
                images: [
                    {
                        src: "/images/projects/veradice/veradice1.jpg",
                        caption: "Tela inicial e criação de personagem",
                        fullWidth: true,
                        width: 1400,
                        height: 800
                    }
                ]
            },
            {
                title: "Design de Mecânicas",
                title_en: "Mechanics Design",
                type: "text",
                content: "O sistema de combate por turnos usa d20 + modificador de atributo contra a defesa do inimigo — familiar para jogadores de D&D, mas simplificado o suficiente para novatos. Cada uma das 6 classes tem 3 habilidades únicas que refletem seu archetype: o Guerreiro bate mais forte, o Mago causa mais dano a distância, o Ladino aplica veneno, o Clérigo cura. A progressão de nível é visível e recompensadora: a cada nível, o HP cresce e um novo atributo melhora. O sistema de inventário com itens comprados, achados e craftados dá ao jogador sensação de crescimento além do combate. A dificuldade afeta a campanha inteira: modo Lendário reduz o ouro ganho e aumenta o HP dos inimigos em 30%.",
                content_en: "The turn-based combat system uses d20 + attribute modifier against enemy defense — familiar for D&D players, simplified enough for newcomers. Each of the 6 classes has 3 unique abilities reflecting its archetype: the Warrior hits harder, the Mage deals ranged damage, the Rogue applies poison, the Cleric heals. Level progression is visible and rewarding: each level, HP grows and a new attribute improves. The inventory system with purchased, found, and crafted items gives the player a sense of growth beyond combat. Difficulty affects the entire campaign: Legendary mode reduces gold gained and increases enemy HP by 30%.",
                images: [
                    {
                        src: "/images/projects/veradice/veradice2.jpg",
                        caption: "Sistema de combate tático com dados animados",
                        fullWidth: true,
                        width: 1400,
                        height: 800
                    },
                    {
                        src: "/images/projects/veradice/veradice3.jpg",
                        caption: "HUD de jogo: barra de HP, XP, inventário e ficha de personagem",
                        fullWidth: true,
                        width: 1400,
                        height: 800
                    }
                ]
            },
            {
                title: "Construção com AI Coding",
                title_en: "Built with AI Coding",
                type: "research",
                methods: ["Claude API como pair programmer", "Next.js App Router", "Deploy contínuo via Vercel"],
                methods_en: ["Claude API as pair programmer", "Next.js App Router", "Continuous deploy via Vercel"],
                content: "O Veradice foi construído em 2 dias usando Claude como pair programmer em todas as etapas. A especificação do jogo foi escrita primeiro como documento de design completo — sistemas, inimigos, árvore de nós, eventos, mecânicas de progressão — e então usada como contexto para gerar o código de forma estruturada. A abordagem foi modular: estado global do jogo em um único objeto, funções puras para checks de atributo, sistema de renderização de nós separado da lógica de combate. O maior desafio foi manter coerência de estado em um jogo com tantas flags e caminhos — resolvido com um reducer centralizado.",
                content_en: "Veradice was built in 2 days using Claude as pair programmer at every stage. The game specification was written first as a complete design document — systems, enemies, node tree, events, progression mechanics — and then used as context to generate code in a structured way. The approach was modular: global game state in a single object, pure functions for attribute checks, node rendering system separate from combat logic. The biggest challenge was maintaining state coherence in a game with so many flags and paths — solved with a centralized reducer.",
                highlights: [
                    "Spec-first development: documento de design completo antes de uma linha de código",
                    "Estado do jogo em reducer centralizado para rastrear 20+ flags de estado",
                    "Sistema de combate desacoplado do sistema de narração",
                    "Animação de dado com Web Audio API: 12 frames, 80ms cada"
                ],
                highlights_en: [
                    "Spec-first development: complete design document before a single line of code",
                    "Game state in centralized reducer tracking 20+ state flags",
                    "Combat system decoupled from the narrative system",
                    "Dice animation with Web Audio API: 12 frames, 80ms each"
                ],
                images: [
                    {
                        src: "/images/projects/veradice/veradice4.jpg",
                        caption: "Seleção de cenário e dificuldade na configuração do mundo",
                        fullWidth: true,
                        width: 1400,
                        height: 800
                    }
                ]
            },
            {
                title: "Resultados & Aprendizados",
                title_en: "Results & Learnings",
                type: "outcomes",
                metrics: [
                    { value: "2 dias", label: "do zero ao deploy" },
                    { value: "40+", label: "nós na árvore de decisão" },
                    { value: "4", label: "finais distintos" }
                ],
                metrics_en: [
                    { value: "2 days", label: "from zero to deploy" },
                    { value: "40+", label: "nodes in the decision tree" },
                    { value: "4", label: "distinct endings" }
                ],
                content: "O principal aprendizado foi sobre o valor de escrever a especificação antes do código. Em um projeto com tanta interdependência — flags que afetam diálogos que afetam finais — escrever o design doc completo primeiro permitiu que o Claude gerasse código coerente em toda a base, sem contradições de estado. A segunda descoberta: o sistema narrativo híbrido cumpriu a promessa. Jogadores que jogaram duas vezes reportaram experiências diferentes, não por sorte, mas por escolhas genuínas. A árvore de decisão garante a coerência; os eventos aleatórios e os templates dinâmicos garantem a surpresa.",
                content_en: "The key learning was about the value of writing the specification before the code. In a project with so much interdependence — flags that affect dialogues that affect endings — writing the full design doc first allowed Claude to generate coherent code across the entire codebase, without state contradictions. The second discovery: the hybrid narrative system delivered on its promise. Players who played twice reported different experiences, not by chance, but through genuine choices. The decision tree ensures coherence; random events and dynamic templates ensure surprise."
            }
        ]
    },
    {
        id: 11,
        slug: "globo-ab-test-landing-page-aquisicao",
        src: "/images/projects/ab_test/oglb_full.jpg",
        pageSrc: "/images/projects/ab_test/oglb_full_intern.jpg",
        category: "Product Design · Conversão & Aquisição",
        tags: ["Product Design"],
        title: "O Globo · Testes A/B",
        tagline: "Programa contínuo de testes A/B em páginas de aquisição de assinaturas, validados no Google Ads e levados aos canais internos.",
        tagline_en: "A continuous A/B testing program on subscription acquisition pages, validated on Google Ads and rolled out to internal channels.",
        description: "Programa contínuo de testes A/B em páginas de aquisição de assinaturas para marcas da Editora Globo — O Globo, Valor Econômico e Clube O Globo — com testes pontuais em parcerias do Grupo Globo, como o Globoplay. As hipóteses vêm de Canais Digitais, guiadas por benchmarks de veículos de assinatura, e eu sou o responsável pelo design e pela implementação das variantes. Cada teste é validado no Google Ads e depois levado aos canais internos. O foco é aumentar conversão sem sacrificar o LTV do assinante.",
        description_en: "A continuous A/B testing program on subscription acquisition pages for Editora Globo brands — O Globo, Valor Econômico and Clube O Globo — with occasional tests on Grupo Globo partnerships, such as Globoplay. Hypotheses come from Digital Channels, driven by subscription-media benchmarks, and I own the design and implementation of the variants. Each test is validated on Google Ads and then rolled out to internal channels. The focus is to grow conversion without sacrificing subscriber LTV.",
        year: "Desde 2023",
        year_en: "Since 2023",
        role: "Product Designer & Front-end",
        timeline: "Programa contínuo",
        timeline_en: "Ongoing program",
        team: "Multidisciplinar",
        client: "Editora Globo",
        tools: ["Figma", "HTML", "CSS", "JS", "Google Ads"],
        pageType: "rich",
        accentColor: "#1B4FD8",
        sections: [
            {
                title: "O problema",
                title_en: "The problem",
                type: "text",
                content: "Páginas de aquisição vivem uma tensão permanente: precisam converter agora, mas sem atrair o assinante errado, que cancela cedo e derruba o LTV. Otimizar só a conversão imediata pode sair caro lá na frente.",
                content_en: "Acquisition pages live in constant tension: they must convert now, but without attracting the wrong subscriber, who churns early and drags down LTV. Optimizing only for immediate conversion can be costly down the line.",
            },
            {
                title: "Meu papel no programa",
                title_en: "My role in the program",
                type: "text",
                content: "A hipótese nasce em Canais Digitais e o marketing consolida a proposta de teste. A partir daí, o design e o código das variantes são inteiramente meus: sou o responsável por estruturar as landing pages e colocar cada teste no ar. Depois, coapresento os resultados junto ao marketing. É um papel de dono da execução dentro de um programa cross-funcional, não um projeto solo.",
                content_en: "The hypothesis originates in Digital Channels, and Marketing consolidates the test proposal. From there, the design and the code of the variants are entirely mine: I am responsible for structuring the landing pages and putting each test live. I then co-present the results together with Marketing. It is a role of owning execution within a cross-functional program, not a solo project.",
            },
            {
                title: "O ciclo de um teste",
                title_en: "A test's lifecycle",
                type: "research",
                methods: [
                    "01 · Hipótese — Canais Digitais identifica a oportunidade e o marketing consolida a proposta",
                    "02 · Priorização — as hipóteses entram na fila por esforço × impacto",
                    "03 · Design & build — desenho e implemento as variantes em HTML/CSS/JS (etapa minha)",
                    "04 · No ar (80/20) — o teste roda preservando o CPA da campanha institucional",
                    "05 · Leitura — Canais Digitais mede o experimento e cruza mídia com o CRM de assinaturas",
                    "06 · Decisão & rollout — marketing, design e canais decidem juntos; a vencedora vai aos canais internos",
                ],
                methods_en: [
                    "01 · Hypothesis — Digital Channels spots the opportunity and Marketing consolidates the proposal",
                    "02 · Prioritization — hypotheses enter the queue by effort × impact",
                    "03 · Design & build — I design and implement the variants in HTML/CSS/JS (my stage)",
                    "04 · Live (80/20) — the test runs while preserving the institutional campaign's CPA",
                    "05 · Read-out — Digital Channels measures the experiment and cross-references media with the subscriptions CRM",
                    "06 · Decision & rollout — marketing, design and channels decide together; the winner goes to internal channels",
                ],
                content: "Cada ciclo dura cerca de duas semanas. O programa roda desde 2023, com sempre um ou dois testes ativos por mês, cobrindo O Globo, Valor Econômico e o Clube O Globo.",
                content_en: "Each cycle takes about two weeks. The program has run since 2023, with one or two active tests every month, covering O Globo, Valor Econômico and Clube O Globo.",
            },
            {
                title: "Quem faz o quê",
                title_en: "Who does what",
                type: "research",
                methods: ["Canais Digitais", "Marketing", "Design — eu"],
                methods_en: ["Digital Channels", "Marketing", "Design — me"],
                content: "É um programa cross-funcional com papéis claros: Canais Digitais traz o problema de negócio, formula a hipótese, mede o experimento e lê os resultados; o marketing consolida a proposta, participa da decisão e coapresenta; e o design — eu — desenha e implementa as variantes em HTML/CSS/JS, estrutura e coloca os testes no ar, participa da decisão e coapresenta os resultados.",
                content_en: "It's a cross-functional program with clear roles: Digital Channels brings the business problem, formulates the hypothesis, measures the experiment and reads the results; Marketing consolidates the proposal, takes part in the decision and co-presents; and Design — me — designs and implements the variants in HTML/CSS/JS, structures and ships the tests live, takes part in the decision and co-presents the results.",
                highlights: [
                    "Canais Digitais: traz o problema, formula a hipótese, mede e lê os dados (mídia + CRM)",
                    "Marketing: consolida a proposta de teste, participa da decisão e coapresenta",
                    "Design (eu): design + código das variantes, estruturo e rodo os testes, participo da decisão e coapresento",
                ],
                highlights_en: [
                    "Digital Channels: brings the problem, formulates the hypothesis, measures and reads the data (media + CRM)",
                    "Marketing: consolidates the test proposal, takes part in the decision and co-presents",
                    "Design (me): design + code of the variants, I structure and ship the tests, take part in the decision and co-present",
                ],
            },
            {
                title: "As duas abordagens",
                title_en: "The two approaches",
                type: "component",
                component: "GloboLPComparison",
            },
            {
                title: "Decisões de design",
                title_en: "Design decisions",
                type: "research",
                methods: [
                    "Reordenar prioridades: valor antes do preço",
                    "Prova social mais cedo na página",
                    "Destaque do produto impresso no topo",
                    "Formulário mais curto e CTA direto",
                    "Mote e incentivo testados por marca",
                ],
                methods_en: [
                    "Reordering priorities: value before price",
                    "Social proof earlier on the page",
                    "Print product highlighted at the top",
                    "Shorter form and direct CTA",
                    "Hook and incentive tested per brand",
                ],
                content: "A variante vencedora raramente é uma reformulação completa. Quase sempre é uma reordenação de prioridades: trazer valor e prova social para cima e deixar a decisão mais fácil.",
                content_en: "The winning variant is rarely a full redesign. It is almost always a reordering of priorities: bringing value and social proof up and making the decision easier.",
            },
            {
                title: "Resultados",
                title_en: "Results",
                type: "text",
                content: "Os números de cada teste são confidenciais e não são exibidos aqui — o foco é a direção dos resultados e o que cada experimento ensinou. Na prática, a abordagem mais direta costuma superar a institucional em conversão e em margem entre LTV e CPA, e as variantes vencedoras viram padrão nos canais internos das marcas (mobiliários, barreira de backend e AMP), sem sacrificar o LTV do assinante.",
                content_en: "The figures for each test are confidential and are not shown here — the focus is the direction of results and what each experiment taught. In practice, the more direct approach tends to outperform the institutional one in conversion and in the LTV-to-CPA margin, and winning variants become the standard across the brands' internal channels (on-site placements, backend barrier and AMP), without sacrificing subscriber LTV.",
            },
            {
                title: "Aprendizados",
                title_en: "Learnings",
                type: "research",
                methods: [
                    "Mídia e CRM contam histórias diferentes sobre a mesma venda",
                    "A plataforma recomenda ler pelo modelo de atribuição dela, que nem sempre bate com o CRM",
                    "Qualidade vs. volume: a variante direta capta melhor, mas pode custar mais por assinante",
                    "LTV como métrica central: conversão isolada não conta a história completa",
                    "Inconclusivo para escalar sem antes analisar o payback period",
                ],
                methods_en: [
                    "Media and CRM tell different stories about the same sale",
                    "The platform recommends reading by its own attribution model, which doesn't always match the CRM",
                    "Quality vs. volume: the direct variant captures better but may cost more per subscriber",
                    "LTV as the central metric: conversion alone is not the whole story",
                    "Inconclusive to scale without analyzing the payback period first",
                ],
                content: "O aprendizado mais importante não veio da comparação entre A e B, e sim de dentro da análise: a plataforma de mídia e o CRM de assinaturas divergiam sobre as mesmas vendas. Ler o resultado pelo modelo de atribuição da mídia ou pelo CRM levava a decisões diferentes, o que mudou como o time decide quais campanhas escalar.",
                content_en: "The most important learning did not come from comparing A and B, but from within the analysis: the media platform and the subscriptions CRM diverged on the same sales. Reading the result by the media's attribution model or by the CRM led to different decisions, which changed how the team decides which campaigns to scale.",
            },
        ],
    },
    {
        id: 12,
        slug: "ensineme-plataforma-ead-estacio",
        src: "/images/projects/ensineme/ensineme_full.jpg",
        pageSrc: "/images/projects/ensineme/ensineme_full.jpg",
        category: "Product Design",
        tags: ["Product Design"],
        title: "Ensineme · Plataforma EAD",
        tagline: "Design de módulos educacionais para dezenas de disciplinas simultâneas na maior plataforma EAD do Brasil.",
        tagline_en: "Educational module design for dozens of simultaneous disciplines on Brazil's largest e-learning platform.",
        description: "Atuação como Product Designer na Ensineme, plataforma de ensino a distância da Estácio e do grupo YDUQS. O trabalho cobriu o design de módulos educacionais para disciplinas radicalmente diferentes, em colaboração com designers instrucionais, conteudistas, curadores e times de tecnologia. Cada módulo entregue era uma decisão pedagógica traduzida em interface.",
        description_en: "Product Designer at Ensineme, the e-learning platform of Estácio and the YDUQS group. The work covered the design of educational modules for radically different disciplines, in collaboration with instructional designers, content creators, curators and technology teams. Each delivered module was a pedagogical decision translated into interface.",
        year: "2020",
        role: "Product Designer",
        timeline: "Jul 2019 a Nov 2021",
        timeline_en: "Jul 2019 to Nov 2021",
        team: "Multidisciplinar",
        client: "Estácio · YDUQS",
        tools: ["Figma", "HTML", "CSS", "JS"],
        pageType: "rich",
        accentColor: "#006B75",
        sections: [
            {
                title: "O Desafio",
                title_en: "The Challenge",
                type: "text",
                content: "A Ensineme era a plataforma de ensino a distância da Estácio, maior rede de ensino superior privado do Brasil, parte do grupo YDUQS. Em qualquer período, dezenas de módulos diferentes estavam ativos simultaneamente para cursos que iam de Direito a Engenharia, de Medicina Veterinária a Comunicação Social.\n\nO desafio não era projetar um único módulo. Era garantir que conteúdos radicalmente diferentes funcionassem com a mesma clareza dentro do mesmo sistema: um texto filosófico, uma sequência de cálculo, um vídeo de aula e uma timeline histórica precisavam compartilhar padrões de interação reconhecíveis sem que um parecesse com o outro.",
                content_en: "Ensineme was the e-learning platform of Estácio, Brazil's largest private higher education network, part of the YDUQS group. At any given time, dozens of different modules were active simultaneously for courses ranging from Law to Engineering, from Veterinary Medicine to Communication.\n\nThe challenge wasn't designing a single module. It was ensuring radically different content worked with the same clarity within the same system: a philosophical text, a calculation sequence, a lecture video and a historical timeline all needed to share recognizable interaction patterns without resembling each other.",
            },
            {
                title: "Processo e Colaboração",
                title_en: "Process and Collaboration",
                type: "research",
                methods: [
                    "Design de módulos EAD para disciplinas de diferentes áreas do conhecimento",
                    "Co-criação com designers instrucionais em cada disciplina",
                    "Implementação front-end com HTML, CSS e JS",
                    "Interlocução com curadores, conteudistas, revisores, QA e times de produto e tecnologia",
                    "Dezenas de módulos entregues em produção",
                ],
                methods_en: [
                    "EAD module design for disciplines across different knowledge areas",
                    "Co-creation with instructional designers on each discipline",
                    "Front-end implementation with HTML, CSS and JS",
                    "Communication with curators, content creators, reviewers, QA and product and technology teams",
                    "Dozens of modules delivered to production",
                ],
                content: "Cada módulo começava com a dupla designer e designer instrucional. A arquitetura pedagógica chegava definida; meu papel era transformá-la em interface. As reuniões com outros profissionais do processo, incluindo curadores e conteudistas, traziam visão de produto e de negócio que alimentavam as decisões de design além do nível visual.",
                content_en: "Each module started with the designer and instructional designer pair. The pedagogical architecture arrived defined; my role was to translate it into interface. Meetings with other professionals in the process, including curators and content creators, brought product and business perspective that fed design decisions beyond the visual level.",
                highlights: [
                    "A escala era o argumento substituto para métricas: dezenas de módulos em produção, cobrindo disciplinas sem nenhuma semelhança temática, eram a evidência de que o sistema funcionava",
                    "Cada disciplina precisava de identidade visual própria, mas reconhecível no mesmo sistema: Shakespeare tem paleta e ritmo diferentes de Algoritmos no Jornalismo, mas os padrões de interação precisavam ser os mesmos",
                    "Componentes como tabs, timelines, exercícios de preenchimento e quizzes foram pensados para manter o aluno ativo e reduzir a carga cognitiva de conteúdos densos",
                ],
                highlights_en: [
                    "Scale was the substitute argument for metrics: dozens of modules in production, covering disciplines with no thematic resemblance, were the evidence that the system worked",
                    "Each discipline needed its own visual identity, yet recognizable within the same system: Shakespeare has a different palette and rhythm than Algorithms in Journalism, but the interaction patterns needed to be the same",
                    "Components like tabs, timelines, fill-in exercises and quizzes were designed to keep students active and reduce cognitive load for dense content",
                ],
            },
            {
                title: "A Plataforma",
                title_en: "The Platform",
                type: "component",
                component: "EnsinemeDevices",
            },
            {
                title: "Diversidade de Conteúdo",
                title_en: "Content Diversity",
                type: "component",
                component: "EnsinemeCovers",
            },
            {
                title: "Sistema de Componentes",
                title_en: "Component System",
                type: "component",
                component: "EnsinemeComponents",
            },
        ],
    },
    {
        id: 13,
        slug: "tradeview-plataforma-negociacao",
        pageType: "rich",
        liveDemoLink: "https://orderbookfinancas.vercel.app",
        src: "/images/projects/tradeview_full2.jpg",
        pageSrc: "/images/projects/tradeview_full2.jpg",
        category: "React · Data Visualization",
        tags: ["React", "Data Viz", "Fintech"],
        title: "TradeView",
        tagline: "Plataforma de negociação com orderbook em tempo real, candlestick chart e depth chart.",
        tagline_en: "Trading platform with real-time order book, candlestick chart and depth chart.",
        description: "Simulador de plataforma de negociação de ações brasileiras construído com Next.js e Lightweight Charts (TradingView). Inclui orderbook ao vivo, gráfico de candlestick, depth chart, watchlist, painel de ordens, gestão de portfolio, alertas de preço e histórico de negociações — com dados simulados e onboarding interativo.",
        description_en: "Simulated Brazilian stock trading platform built with Next.js and Lightweight Charts (TradingView). Includes live order book, candlestick chart, depth chart, watchlist, order panel, portfolio management, price alerts and trade history — with simulated data and interactive onboarding.",
        year: "2025",
        role: "Designer & Front-end Engineer",
        timeline: "Projeto pessoal",
        timeline_en: "Personal project",
        team: "Solo",
        client: "Produto próprio",
        tools: ["Next.js", "Lightweight Charts", "Tailwind CSS", "Vercel"],
        sections: [
            {
                title: "O Produto",
                title_en: "The Product",
                type: "text",
                content: "TradeView é um simulador completo de plataforma de negociação de ativos brasileiros. O objetivo foi construir um produto funcional do zero — do login ao gráfico — para demonstrar domínio prático sobre componentes de data visualization complexos no ecossistema React.\n\nA interface replica o padrão de plataformas profissionais de trading: orderbook com bid/ask em tempo real, gráfico candlestick com Lightweight Charts (biblioteca do TradingView), depth chart de profundidade de mercado, watchlist com cotações ao vivo, painel de compra e venda, gestão de posições e alertas de preço.",
                content_en: "TradeView is a complete simulator of a Brazilian asset trading platform. The goal was to build a functional product from scratch — from login to chart — to demonstrate practical mastery over complex data visualization components in the React ecosystem.\n\nThe interface replicates the standard of professional trading platforms: real-time bid/ask order book, candlestick chart with Lightweight Charts (TradingView library), market depth chart, live-quote watchlist, buy/sell panel, position management and price alerts.",
            },
            {
                title: "Stack Técnica",
                title_en: "Technical Stack",
                type: "research",
                methods: [
                    "Lightweight Charts (TradingView) para candlestick e depth chart",
                    "Simulador de orderbook com atualização em tempo real",
                    "Next.js App Router + Tailwind CSS",
                    "Onboarding interativo com tour guiado",
                    "Theme toggle dark/light",
                ],
                methods_en: [
                    "Lightweight Charts (TradingView) for candlestick and depth chart",
                    "Order book simulator with real-time updates",
                    "Next.js App Router + Tailwind CSS",
                    "Interactive onboarding with guided tour",
                    "Dark/light theme toggle",
                ],
                content: "O coração técnico do projeto é a integração com Lightweight Charts, a biblioteca de gráficos financeiros do TradingView. O candlestick consome dados OHLCV simulados com atualização em tempo real; o depth chart renderiza a profundidade de mercado acumulada em tempo real. O simulador de orderbook gera fluxo de ordens com spread dinâmico e atualiza todos os componentes de forma sincronizada.",
                content_en: "The technical core of the project is the integration with Lightweight Charts, TradingView's financial charting library. The candlestick consumes simulated OHLCV data with real-time updates; the depth chart renders accumulated market depth in real time. The order book simulator generates order flow with dynamic spread and updates all components synchronously.",
                highlights: [
                    "Candlestick + depth chart com Lightweight Charts (TradingView)",
                    "Orderbook simulado com spread dinâmico e atualizações em tempo real",
                    "Portfolio com posições, P&L e saldo disponível",
                    "Alertas de preço configuráveis por ativo",
                    "Onboarding interativo com tour passo a passo",
                ],
                highlights_en: [
                    "Candlestick + depth chart with Lightweight Charts (TradingView)",
                    "Simulated order book with dynamic spread and real-time updates",
                    "Portfolio with positions, P&L and available balance",
                    "Configurable price alerts per asset",
                    "Interactive onboarding with step-by-step tour",
                ],
            },
            {
                title: "Interface principal",
                title_en: "Main interface",
                type: "gallery",
                columns: 2,
                images: [
                    { src: "/images/projects/tradeview/main.png", caption: "Interface principal com candlestick e orderbook", caption_en: "Main interface with candlestick and order book" },
                    { src: "/images/projects/tradeview/orderbook.png", caption: "Orderbook com bid/ask em tempo real", caption_en: "Order book with real-time bid/ask" },
                    { src: "/images/projects/tradeview/portfolio.png", caption: "Gestão de portfolio com posições e P&L", caption_en: "Portfolio management with positions and P&L" }
                ]
            },
            {
                title: "Versão mobile",
                title_en: "Mobile version",
                type: "gallery",
                columns: 3,
                images: [
                    { src: "/images/projects/tradeview/mobile_1.jpg", caption: "Home — resumo do portfolio", caption_en: "Home — portfolio summary" },
                    { src: "/images/projects/tradeview/mobile_2.jpg", caption: "Gráfico candlestick em mobile", caption_en: "Candlestick chart on mobile" },
                    { src: "/images/projects/tradeview/mobile_3.jpg", caption: "Orderbook em mobile", caption_en: "Order book on mobile" }
                ]
            },
        ],
    },
    {
        id: 14,
        slug: "market-analytics-indicadores-macro",
        liveDemoLink: "https://market-analytics-alpha.vercel.app",
        src: "/images/projects/market_analytics_full2.jpg",
        pageSrc: "/images/projects/market_analytics_full2.jpg",
        category: "React · Data Visualization",
        tags: ["React", "Data Viz", "Fintech"],
        title: "Market Analytics",
        tagline: "Dashboard de indicadores macroeconômicos brasileiros com dados em tempo real do Banco Central.",
        tagline_en: "Brazilian macroeconomic indicators dashboard with real-time data from the Central Bank.",
        description: "Dashboard de indicadores macroeconômicos em tempo real construído com Next.js, TypeScript e Recharts. Consome a API pública do Banco Central do Brasil (BCB) para exibir Selic, IPCA, Dólar PTAX, Euro, IGP-M e câmbio cruzado em múltiplos tipos de gráficos — área, linha, barra e compostos.",
        description_en: "Real-time macroeconomic indicators dashboard built with Next.js, TypeScript and Recharts. Consumes the Brazilian Central Bank (BCB) public API to display Selic, IPCA, Dollar PTAX, Euro, IGP-M and cross-exchange rates across multiple chart types — area, line, bar and composed.",
        year: "2025",
        role: "Designer & Front-end Engineer",
        timeline: "Projeto pessoal",
        timeline_en: "Personal project",
        team: "Solo",
        client: "Produto próprio",
        tools: ["Next.js", "TypeScript", "Recharts", "Tailwind CSS", "Vercel"],
        sections: [
            {
                title: "O Produto",
                title_en: "The Product",
                type: "text",
                content: "Market Analytics é um dashboard de indicadores macroeconômicos brasileiros em tempo real. Os dados são consumidos da API pública do Banco Central do Brasil (BCB) e exibidos em gráficos interativos construídos com Recharts.\n\nO dashboard cobre os principais indicadores: Taxa Selic (últimos 5 anos), IPCA e IGP-M mensais (24 meses), Dólar PTAX e Euro (12 meses) e a comparação de câmbio Dólar vs Euro. Cards de métricas mostram os valores mais recentes com variação percentual.",
                content_en: "Market Analytics is a real-time Brazilian macroeconomic indicators dashboard. Data is consumed from the Brazilian Central Bank (BCB) public API and displayed in interactive charts built with Recharts.\n\nThe dashboard covers the main indicators: Selic Rate (last 5 years), monthly IPCA and IGP-M (24 months), Dollar PTAX and Euro (12 months) and Dollar vs Euro exchange comparison. Metric cards show the most recent values with percentage change.",
            },
            {
                title: "Stack Técnica",
                title_en: "Technical Stack",
                type: "research",
                methods: [
                    "Recharts: AreaChart, LineChart, BarChart e ComposedChart",
                    "API pública do Banco Central do Brasil (BCB)",
                    "Next.js App Router + TypeScript",
                    "date-fns para formatação de séries temporais",
                    "Tailwind CSS v4",
                ],
                methods_en: [
                    "Recharts: AreaChart, LineChart, BarChart and ComposedChart",
                    "Brazilian Central Bank (BCB) public API",
                    "Next.js App Router + TypeScript",
                    "date-fns for time series formatting",
                    "Tailwind CSS v4",
                ],
                content: "Cada tipo de dado recebe o tipo de gráfico mais adequado à sua natureza: AreaChart para séries de taxa ao longo do tempo (Selic), BarChart para variações mensais pontuais (IPCA, IGP-M), LineChart para preços de câmbio e ComposedChart para comparações sobrepostas. A integração com a API do BCB usa os endpoints de séries temporais, com tratamento de formato e normalização de datas.",
                content_en: "Each data type receives the chart type best suited to its nature: AreaChart for rate series over time (Selic), BarChart for point monthly variations (IPCA, IGP-M), LineChart for exchange prices and ComposedChart for overlaid comparisons. The BCB API integration uses time series endpoints, with format handling and date normalization.",
                highlights: [
                    "4 tipos de gráfico Recharts: Area, Line, Bar, Composed",
                    "Integração com API pública do Banco Central do Brasil",
                    "Séries históricas: 5 anos (Selic), 24 meses (IPCA/IGP-M), 12 meses (câmbio)",
                    "TypeScript end-to-end com tipagem dos dados da API BCB",
                ],
                highlights_en: [
                    "4 Recharts chart types: Area, Line, Bar, Composed",
                    "Integration with Brazilian Central Bank public API",
                    "Historical series: 5 years (Selic), 24 months (IPCA/IGP-M), 12 months (FX)",
                    "End-to-end TypeScript with BCB API data typing",
                ],
            },
        ],
    },
    {
        id: 17,
        slug: "meu-sus-digital-agendamento-fila",
        pageType: "rich",
        accentColor: "#1351B4",
        src: "/images/projects/sus/sus_fila_capa.jpg",
        pageSrc: "/images/projects/sus/sus_fila_capa.jpg",
        category: "UX Research & Product Design",
        tags: ["UX Research", "Product Design"],
        title: "Meu SUS Digital",
        tagline: "Fila transparente para quem mais precisa.",
        tagline_en: "Transparent queue for those who need it most.",
        description: "Redesign do fluxo de agendamento e fila inteligente do Meu SUS Digital. O app oficial tem agendamento desde mar/2026, mas sem posição na fila, previsão de data ou lembretes — essa lacuna é o diferencial. Protótipo navegável com 12 telas, design system gov.br auditado em WCAG e código em React + TypeScript. Focado em idosos e classes C/D.",
        description_en: "Redesign of Meu SUS Digital's scheduling and intelligent queue flow. The official app has had scheduling since Mar/2026, but without queue position, date prediction, or reminders — that gap is the differentiator. Navigable prototype with 12 screens, WCAG-audited gov.br design system, and React + TypeScript code. Focused on elderly users and lower-income classes.",
        year: "2026",
        role: "UX Researcher & Product Designer",
        timeline: "Case de portfólio",
        timeline_en: "Portfolio case study",
        team: "Solo",
        client: "Case de portfólio",
        tools: ["Figma", "React", "TypeScript", "Vite"],
        liveDemoLink: "https://sus-rose.vercel.app",
        sections: [
            {
                title: "O Problema",
                title_en: "The Problem",
                type: "text",
                content: "O Meu SUS Digital passou a oferecer agendamento de consultas em mar/2026, mas apenas em ~500 municípios e somente para atenção básica — e sem transparência alguma sobre a fila. O paciente entra na fila sem saber sua posição, sem previsão de atendimento e sem lembretes. A única forma de acompanhar é ligar para a UBS. Para idosos e pessoas de classe C/D, que dependem exclusivamente do SUS, essa opacidade gera ansiedade, faltas desnecessárias e perda de vaga.",
                content_en: "Meu SUS Digital began offering appointment scheduling in Mar/2026, but only in ~500 cities and only for basic care — and with zero queue transparency. Patients enter the queue without knowing their position, with no predicted date and no reminders. The only way to follow up is to call the UBS. For elderly and lower-income users who depend exclusively on the SUS, this opacity generates anxiety, unnecessary absences, and lost queue spots.",
            },
            {
                title: "Pesquisa & Personas",
                title_en: "Research & Personas",
                type: "research",
                methods: ["Análise do app oficial Meu SUS Digital", "Benchmark: Paraná Saúde, Agenda Fácil SP, NHS 18-week tracker", "3 personas: Dona Marta (67 a.), Jeferson (34 a.), Cláudia (41 a.)", "Journey map + mapa de dores"],
                methods_en: ["Official Meu SUS Digital app analysis", "Benchmark: Paraná Saúde, Agenda Fácil SP, NHS 18-week tracker", "3 personas: Dona Marta (67 y.o.), Jeferson (34 y.o.), Cláudia (41 y.o.)", "Journey map + pain point map"],
                content: "A pesquisa confirmou que a lacuna de transparência não é bug — é ausência de design. Sistemas de regulação como o SISREG têm dados de posição na fila, mas nenhuma interface os expõe ao paciente. O benchmark internacional prova que é possível: pacientes informados faltam menos e confiam mais no sistema.",
                content_en: "Research confirmed that the transparency gap is not a bug — it's an absence of design. Regulation systems like SISREG have queue position data, but no interface exposes it to the patient. International benchmarks prove it's possible: informed patients miss fewer appointments and trust the system more.",
                highlights: [
                    "Fila só existe em sistemas estaduais isolados — nenhum dado é exposto no app nacional",
                    "Dona Marta (67 a.) liga 3x por semana pra UBS perguntando da vez",
                    "NHS 18-week tracker: transparência de fila reduz no-show em até 30%",
                    "Benchmark Agenda Fácil SP: previsão de data aumenta adesão em 22%",
                ],
                highlights_en: [
                    "Queue only exists in isolated state systems — no data is exposed in the national app",
                    "Dona Marta (67 y.o.) calls the UBS 3x per week asking about her spot",
                    "NHS 18-week tracker: queue transparency reduces no-show by up to 30%",
                    "Agenda Fácil SP benchmark: date prediction increases adherence by 22%",
                ],
            },
            {
                title: "Solução: Fila Transparente",
                title_en: "Solution: Transparent Queue",
                type: "text",
                content: "O redesign introduz o Card de Fila — tela-herói do protótipo. Exibe posição numérica (\"Você é o 12º\"), previsão de data (\"Previsão: meados de julho\"), uma timeline de 4 etapas com estado visual claro (concluído / ativo / futuro) e botão de remarcar. Notificações proativas avisam quando a posição muda e quando a consulta está próxima. O design system usa tokens gov.br auditados WCAG AA — azul #1351B4, verde SUS #0B6E17 — com tamanhos de fonte e toque acessíveis para o público sênior.",
                content_en: "The redesign introduces the Queue Card — the prototype's hero screen. It shows the numerical queue position (\"You are 12th\"), a date prediction (\"Expected: mid-July\"), a 4-step timeline with clear visual states (done / active / future), and a reschedule button. Proactive notifications alert when the position changes and when the appointment is near. The design system uses WCAG AA-audited gov.br tokens — blue #1351B4, SUS green #0B6E17 — with accessible font sizes and touch targets for the senior audience.",
            },
            {
                title: "Acessibilidade WCAG",
                title_en: "WCAG Accessibility",
                type: "research",
                methods: ["Contraste AA: 221/223 tokens passam (99%)", "Touch targets: 18/18 alvos ≥ 44×44 px", "Tipografia: escala legível, mínimo 14 px"],
                methods_en: ["AA contrast: 221/223 tokens pass (99%)", "Touch targets: 18/18 targets ≥ 44×44 px", "Typography: readable scale, minimum 14 px"],
                content: "Auditoria completa com figma-cli a11y. Dois tokens corrigidos antes do deploy: muted #888 → #6E6E6E (ratio 4.6:1) e success #168821 → #0B6E17 (ratio 5.1:1). Correções aplicadas nos tokens-fonte — todos os componentes atualizam automaticamente.",
                content_en: "Full audit with figma-cli a11y. Two tokens corrected before deploy: muted #888 → #6E6E6E (ratio 4.6:1) and success #168821 → #0B6E17 (ratio 5.1:1). Corrections applied at the source tokens — all components update automatically.",
            },
            {
                title: "Resultados & Aprendizados",
                title_en: "Results & Learnings",
                type: "outcomes",
                metrics: [
                    { value: "12", label: "telas no protótipo navegável" },
                    { value: "99%", label: "tokens passam no WCAG AA" },
                    { value: "8", label: "dores do fluxo original redesenhadas" },
                ],
                metrics_en: [
                    { value: "12", label: "screens in the navigable prototype" },
                    { value: "99%", label: "tokens pass WCAG AA" },
                    { value: "8", label: "original flow pain points redesigned" },
                ],
                content: "O aprendizado central foi que transparência de fila não é feature opcional — é o produto inteiro para esse público. Mostrar \"Você é o 12º\" vale mais do que qualquer ornamento visual. Construir o protótipo em código além do Figma permitiu testar navegação real, estados ativos e acessibilidade no browser — impossível num protótipo estático.",
                content_en: "The key learning was that queue transparency is not an optional feature — it is the entire product for this audience. Showing \"You are 12th\" is worth more than any visual ornament. Building the prototype in code beyond Figma allowed testing real navigation, active states, and browser accessibility — impossible in a static prototype.",
            },
            {
                title: "Telas do Protótipo",
                title_en: "Prototype Screens",
                type: "screens",
                images: [
                    { src: "/images/projects/sus/exp-login.png", caption: "Login", width: 390, height: 844 },
                    { src: "/images/projects/sus/exp-home.png", caption: "Início", width: 390, height: 844 },
                    { src: "/images/projects/sus/exp-confirmar.png", caption: "Confirmar agendamento", width: 390, height: 844 },
                    { src: "/images/projects/sus/exp-cardfila.png", caption: "Card de Fila (tela-herói)", width: 390, height: 844 },
                    { src: "/images/projects/sus/exp-filas.png", caption: "Minhas filas", width: 390, height: 844 },
                    { src: "/images/projects/sus/exp-convocacao.png", caption: "Convocação", width: 390, height: 844 },
                ],
            },
            {
                title: "Comparativo Antes/Depois",
                title_en: "Before/After Comparison",
                type: "image",
                src: "/images/projects/sus/montagem.png",
                caption: "8 dores do fluxo atual redesenhadas",
                caption_en: "8 original flow pain points redesigned",
            },
        ],
    },
];

export const getProjectBySlug = (slug) => {
    return projectsData.find(project => project.slug === slug);
};
