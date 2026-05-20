// src/utlits/fackData/projectData.js

export const projectsData = [
    {
        id: 0,
        slug: "ifood-subida-feature-concept",
        src: "/images/projects/subida_full.jpg",
        category: "Product Design",
        tags: ["Product Design"],
        title: "Subida — iFood",
        tagline: "A gorjeta contextual que torna visível o trabalho invisível dos entregadores.",
        tagline_en: "The contextual tip that makes delivery workers' invisible effort visible — and pays for it.",
        description: "Feature concept para o iFood que resolve um problema sistêmico: entregadores que sobem andares com carga pesada, sem nenhuma remuneração adicional. A 'Subida' é uma gorjeta opt-in no checkout que vai 100% direto ao entregador — e que ele vê antes de aceitar a corrida, transformando recompensa em incentivo real. O projeto cobre discovery completo, pesquisa de mercado, personas baseadas em dados reais, journey map antes/depois, decisões de UI documentadas e protótipo interativo.",
        description_en: "A feature concept for iFood addressing a systemic problem: delivery workers climbing floors with heavy loads, receiving zero additional pay. 'Subida' is an opt-in checkout tip that goes 100% to the delivery worker — visible before they accept the ride, transforming a reward into a real incentive. The project covers full discovery, market research, data-based personas, before/after journey map, documented UI decisions, and an interactive prototype.",
        year: "2026",
        role: "Product Designer",
        timeline: "Design Sprint",
        timeline_en: "Design Sprint",
        team: "Solo",
        client: "Feature Concept · iFood",
        tools: ["Figma", "React", "Vercel"],
        liveDemoLink: "https://prototype-lac-xi.vercel.app/",
        pageType: "rich",
        sections: [
            {
                title: "O Problema",
                title_en: "The Problem",
                type: "text",
                content: "Quando um pedido é entregue num apartamento, o sistema registra 'chegou'. O que ele não registra: os andares subidos a pé, com a sacola na mão, o relógio correndo e o próximo pedido já aceito. Para o entregador, esse esforço existe e dói. Para a plataforma, é invisível. Para o usuário, nunca houve um momento de consciência sobre ele.\n\nO problema não é falta de boa vontade — é falta de design. Nunca houve uma interface que tornasse esse trabalho visível no momento certo: o único momento em que uma decisão poderia mudar alguma coisa.",
                content_en: "When an order is delivered to an apartment, the system logs 'arrived.' What it doesn't log: the floors climbed on foot, bag in hand, clock running, next order already accepted. For the delivery worker, that effort is real and it costs. For the platform, it's invisible. For the user, there was never a moment of awareness about it.\n\nThe problem isn't a lack of goodwill — it's a lack of design. There was never an interface that made this work visible at the right moment: the only moment where a decision could change something.",
            },
            {
                title: "Contexto de Mercado",
                title_en: "Market Context",
                type: "research",
                methods: ["92–93% market share no delivery BR", "440K entregadores parceiros ativos", "180M pedidos/mês (novembro 2025)", "Análise competitiva: DoorDash, Uber Eats, Rappi", "Dados: Cebrap, UFPR, Klavi, Portal iFood 2024–2025"],
                methods_en: ["92–93% delivery market share in Brazil", "440K active delivery partners", "180M orders/month (November 2025)", "Competitive analysis: DoorDash, Uber Eats, Rappi", "Data: Cebrap, UFPR, Klavi, iFood Portal 2024–2025"],
                content: "O iFood domina 92–93% do mercado brasileiro de delivery com 60 milhões de usuários ativos e 440 mil entregadores parceiros. O domínio começa a ser pressionado: 99Food voltou com R$ 1 bilhão e zero taxa para restaurantes; Rappi planeja R$ 1,4 bilhão de aporte; Meituan (US$ 600 bilhões de valuation) anunciou R$ 5,6 bilhões para entrar no Brasil. Diferenciais que fortalecem a relação com entregadores se tornam ativos estratégicos — não apenas sociais. O benchmark revelou o gap: nenhuma plataforma, em nenhum país, tem uma feature específica para o esforço de subida.",
                content_en: "iFood holds 92–93% of Brazil's delivery market with 60M active users and 440K delivery partners. This dominance is under growing pressure: 99Food returned with R$1B and zero restaurant fees; Rappi plans a R$1.4B investment; Meituan (US$600B valuation) announced R$5.6B to enter Brazil. Features that strengthen delivery worker relationships become strategic assets — not just social ones. The benchmark revealed the gap: no platform, anywhere in the world, has a feature specific to staircase effort.",
                highlights: [
                    "440 mil entregadores — maioria homens negros, periféricos, ~34 anos, 3 dependentes, jornadas de 10–14h/dia",
                    "Renda líquida real de ~R$ 20/hora após combustível, manutenção de veículo e sem benefícios CLT",
                    "A subida não entra na rota, não é remunerada e não pode ser recusada sem risco de avaliação negativa",
                    "Nenhum player entrega gorjeta contextual + visibilidade pré-aceite + categoria nomeada simultaneamente",
                ],
                highlights_en: [
                    "440K delivery partners — mostly Black men from the outskirts, ~34 years old, 3 dependents, 10–14h/day shifts",
                    "Real net income ~R$20/hour after fuel, vehicle maintenance, and zero CLT benefits",
                    "Staircase effort is invisible to the route calculator, unpaid, and can't be refused without risking a bad rating",
                    "No player simultaneously delivers contextual tip + pre-acceptance visibility + named category",
                ],
            },
            {
                title: "Personas",
                title_en: "Personas",
                type: "component",
                component: "SubidaPersonas",
            },
            {
                title: "Journey Map: Antes e Depois",
                title_en: "Journey Map: Before and After",
                type: "component",
                component: "SubidaJourneyMap",
            },
            {
                title: "Decisões de Produto",
                title_en: "Product Decisions",
                type: "research",
                methods: ["Gorjeta livre com mínimo âncora (R$ 3)", "Visibilidade pré-aceite para o entregador", "Transferência automática como padrão", "Stepper em vez de chips de valor fixo", "Toggle opt-in — nunca obrigatório"],
                methods_en: ["Free tip with anchor minimum (R$3)", "Pre-acceptance visibility for the delivery worker", "Automatic transfer as the default", "Stepper over fixed-value chips", "Opt-in toggle — never mandatory"],
                content: "Cada decisão foi tomada com análise de trade-off explícita e alternativas documentadas. O projeto rejeitou cinco abordagens antes de chegar ao modelo atual.",
                content_en: "Every decision was made with explicit trade-off analysis and documented alternatives. The project rejected five approaches before reaching the current model.",
                highlights: [
                    "Por que no checkout, não pós-entrega? O entregador precisa ver o valor antes de aceitar — isso transforma gorjeta em incentivo real, não recompensa reativa",
                    "Por que stepper e não chips (R$3 / R$5 / R$10)? Chips criam âncora social que pode gerar pressão; o stepper é neutro e usa padrão que o iFood já tem",
                    "Por que o mínimo é R$ 3 e não R$ 0? Valor mínimo evita gestos simbólicos insuficientes — calibrado para ser razoável sem pressionar",
                    "Por que transferência automática? Confirmação ativa tem baixa adesão histórica — o pagamento do trabalhador não pode depender de ação de terceiro",
                    "Por que opt-in e não obrigatório? Obrigatório destrói o posicionamento de gesto voluntário, que é o núcleo da proposta de valor",
                ],
                highlights_en: [
                    "Why checkout, not post-delivery? The worker needs to see the value before accepting — this turns a tip into a real incentive, not a reactive reward",
                    "Why stepper over chips (R$3 / R$5 / R$10)? Chips create social anchoring that can feel like pressure; stepper is neutral and uses a pattern iFood already has",
                    "Why R$3 minimum, not R$0? A minimum prevents symbolic gestures that don't compensate the effort — calibrated to feel reasonable without pressuring",
                    "Why automatic transfer? Active confirmation has historically low adoption — worker payment can't depend on a third party's action",
                    "Why opt-in and not mandatory? Mandatory destroys the voluntary gesture positioning, which is the feature's core value proposition",
                ],
            },
            {
                title: "Fluxo de Telas",
                title_en: "Screen Flow",
                type: "component",
                component: "SubidaFluxoTelas",
            },
            {
                title: "Princípios de Design",
                title_en: "Design Principles",
                type: "research",
                methods: ["01 · Visibilidade sem culpa", "02 · Agência real para o entregador", "03 · Transferência automática como padrão", "04 · Consistência com o sistema existente", "05 · Transparência sobre o destino do dinheiro"],
                methods_en: ["01 · Visibility without guilt", "02 · Real agency for the delivery worker", "03 · Automatic transfer as default", "04 · Consistency with the existing system", "05 · Transparency about where the money goes"],
                content: "Cinco princípios guiaram todas as decisões de interface e produto — e funcionam como critério de avaliação para qualquer iteração futura da Subida.",
                content_en: "Five principles guided every interface and product decision — and serve as evaluation criteria for any future iteration of Subida.",
                highlights: [
                    "Visibilidade sem culpa: a ativação não pode fazer o usuário se sentir cobrado. É uma oferta, não uma taxa",
                    "Agência real: a feature só tem valor se o entregador tiver informação suficiente para decidir antes de aceitar",
                    "Transferência automática como padrão: o dinheiro do trabalhador não pode depender de ação de terceiro",
                    "Consistência: stepper, notificações, fluxo de contestação — nenhuma nova convenção de interação introduzida",
                    "Transparência: 'Esse valor vai integralmente para o entregador' como parte central da proposta de valor",
                ],
                highlights_en: [
                    "Visibility without guilt: activation cannot make the user feel charged. It's an offer, not a fee",
                    "Real agency: the feature only has value if the delivery worker has enough information to decide before accepting",
                    "Automatic transfer as default: worker payment can't depend on a third party's action",
                    "Consistency: stepper, notifications, contestation flow — no new interaction convention introduced",
                    "Transparency: 'This value goes entirely to the delivery worker' as the central value proposition",
                ],
            },
            {
                title: "Projeção de Impacto",
                title_en: "Impact Projection",
                type: "outcomes",
                metrics: [
                    { value: "54M", label: "pedidos/mês elegíveis (30% em apartamentos)" },
                    { value: "R$ 16,2M", label: "impacto direto/mês a entregadores com 10% de adoção" },
                    { value: "0", label: "novas convenções de interação criadas" },
                ],
                metrics_en: [
                    { value: "54M", label: "eligible orders/month (30% in apartments)" },
                    { value: "R$ 16.2M", label: "direct monthly impact to workers at 10% adoption" },
                    { value: "0", label: "new interaction conventions created" },
                ],
                content: "A projeção parte de 180M pedidos/mês e assume que 30% são entregues em apartamentos: 54M pedidos elegíveis. Com 10% de adoção e gorjeta mínima de R$ 3 → R$ 16,2M adicionais por mês, direto para entregadores. A feature cria uma categoria nova — não é gorjeta genérica, é reconhecimento contextual de um trabalho específico. Custo de desenvolvimento baixo: a Subida usa fluxos e componentes que o iFood já tem.",
                content_en: "The projection starts from 180M orders/month and assumes 30% are delivered to apartments: 54M eligible orders. With 10% adoption and minimum R$3 tip → R$16.2M additional per month, direct to delivery workers. The feature creates a new category — not a generic tip, but contextual recognition of a specific kind of work. Development cost is low: Subida uses flows and components iFood already has.",
            },
        ],
    },
    {
        id: 1,
        slug: "sigil-design-system-builder",
        src: "/images/projects/sigil/sigil_full.jpg",
        category: "Product & AI Engineering",
        tags: ["Product Design", "AI Engineering"],
        title: "Sigil (SaaS MVP)",
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
        category: "Product & AI Engineering",
        tags: ["Product Design", "AI Engineering"],
        title: "PixTudo (SaaS MVP)",
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
        src: "/images/projects/listaai/listaai_cover.png",
        category: "Product & AI Engineering",
        tags: ["Product Design", "AI Engineering"],
        title: "ListaAI (SaaS MVP)",
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
                ],
                images: [
                    {
                        src: "/images/projects/listaai/landing-hero.png",
                        caption: "Landing page com a proposta de valor para vendedores brasileiros",
                        fullWidth: true,
                        width: 1350,
                        height: 734
                    }
                ]
            },
            {
                title: "Solução & Produto",
                title_en: "Solution & Product",
                type: "text",
                content: "O ListaAI foi construído com um fluxo de uso minimalista: o vendedor informa nome do produto, especificações técnicas, plataforma alvo (Mercado Livre ou Shopee) e tom de voz preferido. A IA gera título otimizado com palavras-chave de alto volume e uma descrição completa formatada para a plataforma escolhida. O resultado pode ser regenerado com um clique, copiado diretamente e fica salvo no histórico. Cada detalhe do produto foi pensado para reduzir o atrito ao máximo, para que o vendedor não precise entender de IA para usar.",
                content_en: "ListaAI was built with a minimalist usage flow: the seller provides the product name, technical specs, target platform (Mercado Livre or Shopee), and preferred tone of voice. The AI generates an optimized title with high-volume keywords and a complete description formatted for the chosen platform. The result can be regenerated with one click, copied directly, and is saved in history. Every detail was designed to minimize friction, so the seller doesn't need to understand AI to use it.",
                images: [
                    {
                        src: "/images/projects/listaai/features.png",
                        caption: "Funcionalidades: geração por plataforma, tom de voz, SEO embutido e mais",
                        fullWidth: true,
                        width: 1343,
                        height: 704
                    },
                    {
                        src: "/images/projects/listaai/como-funciona.png",
                        caption: "Como funciona: 3 passos entre specs, plataforma/tom e publicar",
                        fullWidth: true,
                        width: 1338,
                        height: 441
                    }
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
                ],
                images: [
                    {
                        src: "/images/projects/listaai/dashboard.png",
                        caption: "Dashboard com plano, descrições do mês e histórico recente",
                        width: 1400,
                        height: 745
                    },
                    {
                        src: "/images/projects/listaai/nova-descricao.png",
                        caption: "Nova descrição com nome, specs, plataforma e tom de voz",
                        width: 1100,
                        height: 760
                    },
                    {
                        src: "/images/projects/listaai/historico.png",
                        caption: "Histórico com todas as descrições geradas com badges de plataforma",
                        width: 1100,
                        height: 760
                    },
                    {
                        src: "/images/projects/listaai/perfil.png",
                        caption: "Perfil com informações da conta e plano atual",
                        width: 1100,
                        height: 760
                    },
                    {
                        src: "/images/projects/listaai/assinatura.png",
                        caption: "Assinatura: upgrade para PRO direto pelo app",
                        width: 495,
                        height: 849
                    }
                ],
                imageLayout: "screens"
            },
            {
                title: "Arquitetura & Tecnologia",
                title_en: "Architecture & Technology",
                type: "text",
                content: "O produto foi inteiramente construído com AI coding, usando o Claude como pair programmer em todas as etapas, do scaffolding ao deploy. Stack: Next.js 14 (App Router) no frontend, API Routes para o backend, Prisma + PostgreSQL para persistência de dados e histórico, Claude API (claude-sonnet) para geração de conteúdo, e Vercel para deploy contínuo. O prompt de geração foi o artefato mais iterado: cada versão foi testada com produtos reais de diferentes categorias, como eletrônicos, moda e casa, até atingir consistência na qualidade do output.",
                content_en: "The product was entirely built with AI coding, with Claude as pair programmer at every stage, from scaffolding to deployment. Stack: Next.js 14 (App Router) on the frontend, API Routes for the backend, Prisma + PostgreSQL for data persistence and history, Claude API (claude-sonnet) for content generation, and Vercel for continuous deployment. The generation prompt was the most iterated artifact: each version was tested with real products across different categories, including electronics, fashion, and home, until output quality became consistent.",
                images: [
                    {
                        src: "/images/projects/listaai/pricing.png",
                        caption: "Modelo freemium: Free R$0 com 5 descrições/mês, e PRO R$39/mês ilimitado",
                        fullWidth: true,
                        width: 1340,
                        height: 559
                    }
                ]
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
        tags: ["Product Design"],
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
        tags: ["Product Design"],
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
        tags: ["Product Design"],
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
        tags: ["Product Design"],
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
        category: "Game Design & AI Engineering",
        tags: ["Game Design", "AI Engineering"],
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
        category: "Game Design & AI Engineering",
        tags: ["Game Design", "AI Engineering"],
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
        category: "Game Design & AI Engineering",
        tags: ["Game Design", "AI Engineering"],
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
];

export const getProjectBySlug = (slug) => {
    return projectsData.find(project => project.slug === slug);
};
