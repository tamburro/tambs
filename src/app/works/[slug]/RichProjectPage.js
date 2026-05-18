'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RiExternalLinkLine, RiArrowLeftLine } from '@remixicon/react';
import { useLanguage } from '@/context/LanguageContext';

// ─── iFood accent ─────────────────────────────────────────────────────────────
const RED  = '#E8471A';
const DRED = '#C1121F';

// ─── PixTudo accent ───────────────────────────────────────────────────────────
const PGREEN  = '#00C853';
const PGDARK  = '#009624';

// ─── Dados embutidos ─────────────────────────────────────────────────────────

const PERSONAS_DATA = {
    entregador: {
        nome: 'Rodrigo Nascimento',
        sub: '34 anos · Zona Sul, SP',
        papel: 'Entregador iFood',
        tag: 'O trabalhador invisível',
        avatar: 'R',
        cor: RED,
        bio: 'Trabalhou 6 anos como auxiliar de logística antes da pandemia. No iFood desde 2021, hoje é sua renda principal. Trabalha 10h/dia, terça a domingo, priorizando Moema e Vila Mariana.',
        citacao: 'Quando chega num prédio alto sem elevador, eu já sei que vai custar. Subo, entrego, desço — sem nenhum centavo a mais por isso.',
        stats: [
            { label: 'Jornada',       value: '10h/dia, Ter–Dom' },
            { label: 'Renda líquida', value: '~R$ 2.400/mês'   },
            { label: 'Na plataforma', value: '4 anos'           },
            { label: 'Dependentes',   value: '3 pessoas'        },
        ],
        relacao: 'Aceitaria subidas com mais frequência se soubesse o valor antes de aceitar. Hoje ele tende a perguntar o andar no interfone — gerando atrito antes mesmo da entrega. Com o valor visível no card de aceite, a decisão passa a ser informada e sem constrangimento.',
        fonte: 'Cebrap 2024 · UFPR/Clínica de Direito do Trabalho 2025 · Portal de Dados iFood',
    },
    usuario: {
        nome: 'Camila Ferreira',
        sub: '29 anos · Pinheiros, SP',
        papel: 'Usuária iFood',
        tag: 'A consumidora consciente',
        avatar: 'C',
        cor: DRED,
        bio: 'Analista de marketing numa startup de fintechs. Mora sozinha no 11º andar de um prédio sem elevador de serviço. Usa o iFood ~5x por semana. Clube iFood há 2 anos.',
        citacao: 'Nunca parei pra pensar nisso. Mas subir 11 andares com minha comida toda vez, sem ganhar nada? Eu pagaria sem pensar.',
        stats: [
            { label: 'Frequência',  value: '~5x/semana'  },
            { label: 'Gasto mensal', value: '~R$ 480'    },
            { label: 'Andar',       value: '11º (s/ elev.)' },
            { label: 'Plano',       value: 'Clube iFood' },
        ],
        relacao: 'Nunca houve um momento de consciência sobre o esforço da subida — não por indiferença, mas porque o sistema nunca criou esse momento. A Subida no checkout cria. Ela vê, reconhece e age. Barreira zero: já está no fluxo, custa R$ 3 e vai direto pro entregador.',
        fonte: 'Klavi Q1 2025 · Relatório iFood 2024 · Panorama Mobile Time dez/2024',
    },
};

const JOURNEY_STAGES = [
    { etapa: 'Pedido',
      c_a: { e:'🙂', t:'Animada. Pedido feito normalmente.'                                   },
      c_d: { e:'🙂', t:'Igual — e a opção Subida aparece no checkout.'                        },
      r_a: { e:'😐', t:'Online, aguardando corridas.'                                          },
      r_d: { e:'😐', t:'Online, aguardando corridas.'                                          },
    },
    { etapa: 'Aceite', novo: true,
      c_a: { e:'😐', t:'Acompanha a rota. Sem consciência da subida.'                          },
      c_d: { e:'😊', t:'Ativa a Subida no checkout. Momento de consciência criado pelo design.', ok: true },
      r_a: { e:'😟', t:'Aceita sem saber se terá subida. Decisão cega.',              bad: true },
      r_d: { e:'😊', t:'Vê "Subida: R$ 5,00" no card. Aceita com informação completa.', ok: true },
    },
    { etapa: 'Coleta',
      c_a: { e:'😟', t:'Impaciente com a espera no restaurante.'                               },
      c_d: { e:'🙂', t:'Mais tranquila. Já sabe que ele vai subir até a porta.'                },
      r_a: { e:'😟', t:'Tempo não remunerado no restaurante.'                                  },
      r_d: { e:'😐', t:'Busca o pedido. Já sabe que vai render bem.'                           },
    },
    { etapa: 'Chegada', novo: true,
      c_a: { e:'😟', t:'"Vai subir ou não?" — ambiguidade constante.',              bad: true  },
      c_d: { e:'😊', t:'"Marcos confirmou a subida até sua porta." Zero atrito.',    ok: true  },
      r_a: { e:'😟', t:'Descobre o andar ao chegar. Decisão forçada na porta.',      bad: true },
      r_d: { e:'😐', t:'Sabia que ia subir desde o aceite. Para a moto e sobe.'                },
    },
    { etapa: 'Entrega', novo: true,
      c_a: { e:'😟', t:'Imprevisível: às vezes na porta, às vezes precisa descer.'             },
      c_d: { e:'😊', t:'Recebe na porta. Comida quente, sem drama.'                            },
      r_a: { e:'😤', t:'11 andares. Zero remuneração adicional. Pior ponto da jornada.', bad: true },
      r_d: { e:'😊', t:'Sobe, entrega. Gorjeta garantida. O trabalho foi reconhecido.', ok: true },
    },
    { etapa: 'Pós-entrega',
      c_a: { e:'😐', t:'Come. Gorjeta pós-entrega? Raramente lembra.'                          },
      c_d: { e:'😊', t:'Notificação: gorjeta transferida. Loop fechado sem ação.'              },
      r_a: { e:'😤', t:'"R$ 8,50 por 12 min fora do ar. Essa corrida não valeu."', bad: true  },
      r_d: { e:'😊', t:'"R$ 13,50 nessa corrida. Valeu cada degrau."'                         },
    },
];

const DECISOES_UI = [
    {
        tela: 'Checkout — bloco Subida',
        status: 'Novo componente',
        fluxo: 'usuario',
        itens: [
            { q: 'Por que no checkout, não pós-entrega?',
              a: 'O entregador vê o valor antes de aceitar — isso transforma gorjeta em incentivo real. Gorjeta pós-entrega tem baixa adesão e não cria o diferencial pré-corrida.' },
            { q: 'Por que stepper e não chips de valor fixo?',
              a: 'Chips criam âncora social que pode gerar pressão. O stepper é neutro, fluido e usa um padrão que o iFood já tem para quantidade de itens.' },
        ],
    },
    {
        tela: 'Card da corrida — badge Subida',
        status: 'Novo elemento',
        fluxo: 'entregador',
        itens: [
            { q: 'Por que badge e não linha de texto simples?',
              a: 'Subida é informação financeira de alta relevância. Badge colorido em zona de alta atenção garante visibilidade mesmo em aceites rápidos.' },
            { q: 'Por que mostrar o valor exato e não só "tem Subida"?',
              a: 'Valor vago não permite calcular se a corrida vale. Valor exato (R$ 5,00) é o mínimo para uma decisão financeira informada.' },
        ],
    },
    {
        tela: 'Transferência automática',
        status: 'Novo comportamento',
        fluxo: 'ambos',
        itens: [
            { q: 'Por que automática e não confirmação do usuário?',
              a: 'Histórico mostra baixa adesão em ações pós-entrega. O pagamento do trabalhador não pode ser refém da inércia de terceiro. Presunção de boa-fé com janela de contestação.' },
        ],
    },
];

// ─── PixTudo Dados ────────────────────────────────────────────────────────────

const PIXTUDO_PERSONAS = [
    {
        key: 'camila', label: 'Camila — Millennial',
        nome: 'Camila, 28', sub: 'Analista de Marketing · São Paulo · CLT',
        avatar: 'C', cor: PGREEN,
        tags: ['Millennials', 'Já bancarizada', 'Nubank + Itaú', 'iOS', 'R$4.500/mês'],
        citacao: '"Odeio ter que abrir 4 apps diferentes pra resolver uma coisa só. Queria que tudo ficasse num lugar."',
        necessidades: ['Pagamentos rápidos sem burocracia', 'Investimentos automáticos e simples', 'Controle de gastos com amigos', 'Ofertas e cashback relevantes'],
        dores: ['Apps bancários lentos e confusos', 'Rateio manual de contas (restaurantes, viagens)', 'Promoções irrelevantes e spam', 'Medo de golpe financeiro digital'],
        contexto: ['No transporte (metrô/ônibus) — rápido, 1 mão', 'Almoço — dividir conta na hora', 'À noite — revisar gastos do dia'],
    },
    {
        key: 'jonas', label: 'Jonas — MEI',
        nome: 'Jonas, 42', sub: 'Eletricista autônomo · Recife · MEI',
        avatar: 'J', cor: '#FFD600',
        tags: ['Trabalhador informal', 'Semi-bancarizado', 'Android', 'Renda variável', '3 filhos'],
        citacao: '"Preciso de crédito pra comprar material, mas banco não me empresta. E cobrar cliente é um estresse."',
        necessidades: ['Cobrar clientes sem máquina cara', 'Crédito rápido pra capital de giro', 'Guardar dinheiro da renda variável', 'Nota fiscal e gestão simples (MEI)'],
        dores: ['Negado em todo crédito bancário', 'Taxa alta da maquininha de cartão', 'Dificuldade de separar conta pessoal/empresa', 'Medo de golpe do Pix falso'],
        contexto: ['Na obra — mostrar QR pra cliente pagar', 'Entre serviços — checar o saldo', 'Fim do mês — organizar faturamento MEI'],
    },
    {
        key: 'beatriz', label: 'Beatriz — Gen Z',
        nome: 'Beatriz, 19', sub: 'Estudante universitária · Porto Alegre · Estagiária',
        avatar: 'B', cor: '#FF4081',
        tags: ['Gen Z', 'Digital native', 'Primeiro emprego', 'iOS/Android', 'R$1.200/mês'],
        citacao: '"Nunca fui em agência bancária. Faço tudo pelo celular. Mas ainda não entendo de investimentos."',
        necessidades: ['Entender finanças de forma simples', 'Vaquinhas e grupos de pagamento com amigos', 'Primeiros investimentos com pouco dinheiro', 'Ofertas e benefícios do seu estilo de vida'],
        dores: ['Linguagem financeira inacessível', 'Cobrar amigos sem parecer chata', 'Gastos por impulso sem consciência', 'Desconfiança: "meu dinheiro tá seguro?"'],
        contexto: ['Redes sociais → descoberta de ofertas', 'Social — pagar e cobrar amigos da faculdade', 'Gamificação — metas de economia com recompensas'],
    },
];

const PIXTUDO_COMPETITORS = [
    { nome: 'Nubank',        pag: 'g', inv: 'g', cred: 'y', mini: 'r', social: 'r', ux: '4.2/5', gap: 'Ecossistema fechado' },
    { nome: 'Mercado Pago',  pag: 'g', inv: 'y', cred: 'g', mini: 'r', social: 'r', ux: '3.8/5', gap: 'Vinculado ao ML' },
    { nome: 'PicPay',        pag: 'g', inv: 'y', cred: 'y', mini: 'y', social: 'g', ux: '3.5/5', gap: 'Sem ancoragem financeira' },
    { nome: 'Itaú/Bradesco', pag: 'g', inv: 'g', cred: 'g', mini: 'r', social: 'r', ux: '2.7/5', gap: 'UX péssima, sem inovação' },
    { nome: 'PayPal',        pag: 'y', inv: 'r', cred: 'r', mini: 'r', social: 'r', ux: '3.1/5', gap: 'Global, sem localização' },
    { nome: 'PixTudo ✦',     pag: 'g', inv: 'g', cred: 'g', mini: 'g', social: 'g', ux: '—',     gap: 'A proposta', destaque: true },
];

const PIXTUDO_JOURNEY = [
    { num: '01', etapa: 'Consciência',  titulo: 'Descoberta',           emoji: '😐', emocao: 'Neutra / Curiosa',        desc: 'Camila vê post de uma amiga no Instagram sobre cashback no PixTudo. Clica curiosa.',                                         ativo: false },
    { num: '02', etapa: 'Consideração', titulo: 'Download & Onboarding', emoji: '😮', emocao: 'Surpresa positiva',       desc: 'Cadastro com CPF + selfie. Em 90 segundos tem conta, Pix e cartão virtual ativos.',                                         ativo: false },
    { num: '03', etapa: 'Primeiro uso', titulo: 'Primeira Transação',    emoji: '😄', emocao: 'Satisfeita / Encantada',  desc: 'Manda R$32 pelo Pix pra amiga do almoço. Recebe notificação de cashback de R$1,60 em 3 segundos.',                          ativo: true  },
    { num: '04', etapa: 'Exploração',   titulo: 'Descobre Serviços',     emoji: '🤩', emocao: 'Muito satisfeita',         desc: 'Vê aba de serviços. Paga Netflix com desconto. Configura investimento automático de R$50/mês.',                              ativo: true  },
    { num: '05', etapa: 'Fidelização',  titulo: 'Hábito & Rotina',       emoji: '😍', emocao: 'Encantada / Fiel',         desc: '30 dias depois: usa PixTudo diariamente. Convida 3 amigas com cashback. Score sobe.',                                        ativo: false },
    { num: '06', etapa: 'Advocacia',    titulo: 'Promotora',              emoji: '🏆', emocao: 'Orgulhosa / Embaixadora', desc: 'Posta stories mostrando o app, entra em grupo de usuários. NPS: promotora ativa.',                                          ativo: false },
];

const PIXTUDO_PRINCIPLES = [
    { num: '01', nome: 'Brasileiro-Primeiro',    desc: 'Cada decisão considera a realidade local: língua coloquial, cashback em vez de pontos, Pix como ação primária, WhatsApp como canal de suporte.' },
    { num: '02', nome: 'Zero Burocracia',         desc: 'Qualquer tarefa crítica em ≤3 toques. Onboarding em ≤2 minutos. Formulários com o menor número possível de campos.' },
    { num: '03', nome: 'Confiança Progressiva',   desc: 'Conquistar a confiança do usuário gradualmente. Começar simples, expandir à medida que o relacionamento cresce.' },
    { num: '04', nome: 'Social by Design',        desc: 'Funcionalidades financeiras com camada social nativa: dividir contas, vaquinhas, missões em grupo. O dinheiro no Brasil é coletivo.' },
    { num: '05', nome: 'Segurança Visível',       desc: 'A segurança precisa ser sentida, não só existir. Feedback imediato, biometria clara, alertas antifraude em linguagem humana.' },
    { num: '06', nome: 'Inclusão por Padrão',     desc: 'UI que funciona offline parcialmente, carrega rápido em 3G, usa linguagem acessível e considera baixa literacia financeira como ponto de partida.' },
];

const PIXTUDO_KPIS = [
    { icon: '⏱️', label: 'Time to First Transaction', target: '< 3 min',   desc: 'Do download até o primeiro Pix enviado ou recebido' },
    { icon: '📊', label: 'DAU / MAU Ratio',             target: '> 40%',    desc: 'Stickiness — usuários ativos diários vs mensais' },
    { icon: '❤️', label: 'NPS Alvo',                    target: '> 70',     desc: 'Net Promoter Score (benchmark Nubank ~87)' },
    { icon: '💳', label: 'Produtos por Usuário',         target: '> 2,5',   desc: 'Média de produtos financeiros ativos por conta após 90 dias' },
    { icon: '🌱', label: 'Inclusão Financeira',          target: '20%',     desc: '% de usuários sem histórico bancário que acessam crédito' },
    { icon: '🔁', label: 'Retenção D30',                 target: '> 60%',   desc: 'Usuários que ainda usam o app 30 dias após o download' },
    { icon: '⚡', label: 'Task Success Rate',            target: '> 95%',   desc: 'Taxa de sucesso em tarefas críticas (pagar, receber, investir)' },
    { icon: '🛡️', label: 'Fraude Evitada',               target: '< 0,01%', desc: 'Taxa de transações fraudulentas não detectadas' },
];

const PIXTUDO_ROADMAP = [
    {
        fase: 'Fase 1 · Q1–Q2 2026', nome: 'Core Financeiro', ativo: true,
        itens: ['Conta digital + Pix completo', 'Cartão virtual Mastercard', 'Onboarding biométrico', 'Cashback em parceiros selecionados', 'Extrato e notificações em tempo real', 'Suporte via WhatsApp'],
    },
    {
        fase: 'Fase 2 · Q3–Q4 2026', nome: 'Ecossistema', ativo: false,
        itens: ['Mini Apps SDK público', 'Investimentos CDB/Tesouro', 'Crédito IA para MEI/autônomos', 'Vaquinhas e rateio social', 'Score PixTudo proprietário', 'Seguros (vida, auto, residencial)'],
    },
    {
        fase: 'Fase 3 · 2027+', nome: 'Super App', ativo: false,
        itens: ['Cartão físico + Open Finance', 'Marketplace de serviços', 'IA financeira pessoal (coach)', 'Benefícios corporativos B2B', 'Identidade digital integrada', 'Expansão para América Latina'],
    },
];

// ─── Primitivos ──────────────────────────────────────────────────────────────

function MonoLabel({ children, color = 'var(--mist)' }) {
    return (
        <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color,
            lineHeight: 1,
        }}>
            {children}
        </span>
    );
}

function ToggleGroup({ options, value, onChange }) {
    return (
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
            {options.map(({ key, label, cor }) => (
                <button
                    key={key}
                    onClick={() => onChange(key)}
                    style={{
                        padding: '7px 18px',
                        border: `1px solid ${value === key ? cor : 'rgba(255,255,255,0.1)'}`,
                        borderRadius: 100,
                        background: value === key ? `${cor}1A` : 'transparent',
                        color: value === key ? cor : 'var(--mist)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: 11,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        cursor: 'pointer',
                        transition: 'all 0.15s',
                        whiteSpace: 'nowrap',
                    }}
                >
                    {label}
                </button>
            ))}
        </div>
    );
}

// ─── Personas ────────────────────────────────────────────────────────────────

function PersonasSection() {
    const [ativa, setAtiva] = useState('entregador');
    const p = PERSONAS_DATA[ativa];

    return (
        <>
            <ToggleGroup
                options={[
                    { key: 'entregador', label: 'Rodrigo — Entregador', cor: RED  },
                    { key: 'usuario',    label: 'Camila — Usuária',     cor: DRED },
                ]}
                value={ativa}
                onChange={setAtiva}
            />

            <div style={{
                background: 'rgba(255,255,255,0.025)',
                border: `1px solid ${p.cor}22`,
                borderRadius: 14,
                overflow: 'hidden',
            }}>
                {/* Header */}
                <div style={{
                    padding: '24px 28px',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                    display: 'flex',
                    gap: 20,
                    flexWrap: 'wrap',
                    alignItems: 'flex-start',
                }}>
                    <div style={{
                        width: 56, height: 56, borderRadius: '50%',
                        background: p.cor, flexShrink: 0,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 22, fontWeight: 700, color: '#fff',
                        fontFamily: 'var(--font-body)',
                    }}>{p.avatar}</div>

                    <div style={{ flex: '1 1 160px' }}>
                        <h3 style={{ margin: '0 0 4px', fontSize: 18, fontWeight: 700, color: 'var(--moonlight)', letterSpacing: '-0.02em' }}>
                            {p.nome}
                        </h3>
                        <p style={{ margin: '0 0 12px', fontSize: 13, color: 'var(--mist)' }}>{p.sub}</p>
                        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                            {[p.papel, p.tag].map(tag => (
                                <span key={tag} style={{
                                    padding: '3px 10px', borderRadius: 100,
                                    fontSize: 11, fontFamily: 'var(--font-mono)',
                                    letterSpacing: '0.06em', textTransform: 'uppercase',
                                    color: p.cor, border: `1px solid ${p.cor}33`,
                                    background: `${p.cor}0D`,
                                }}>{tag}</span>
                            ))}
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 24px', flexShrink: 0 }}>
                        {p.stats.map(s => (
                            <div key={s.label}>
                                <MonoLabel>{s.label}</MonoLabel>
                                <p style={{ margin: '4px 0 0', fontSize: 13, fontWeight: 600, color: 'var(--moonlight)' }}>{s.value}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bio + Citação */}
                <div style={{ padding: '22px 28px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <p style={{ fontSize: 14, color: 'var(--mist)', lineHeight: 1.75, margin: '0 0 18px' }}>{p.bio}</p>
                    <blockquote style={{
                        margin: 0, padding: '14px 18px',
                        borderLeft: `3px solid ${p.cor}`,
                        background: `${p.cor}0D`,
                        borderRadius: '0 8px 8px 0',
                    }}>
                        <p style={{ margin: 0, fontSize: 14, fontStyle: 'italic', color: 'var(--moonlight)', lineHeight: 1.7 }}>
                            "{p.citacao}"
                        </p>
                    </blockquote>
                </div>

                {/* Relação com a Subida */}
                <div style={{ padding: '20px 28px' }}>
                    <MonoLabel color={p.cor}>Relação com a Subida</MonoLabel>
                    <p style={{ margin: '10px 0 16px', fontSize: 14, color: 'var(--mist)', lineHeight: 1.75 }}>{p.relacao}</p>
                    <MonoLabel>ⓘ {p.fonte}</MonoLabel>
                </div>
            </div>
        </>
    );
}

// ─── Journey Map ─────────────────────────────────────────────────────────────

function JourneyMapSection() {
    const [persona, setPersona] = useState('camila');
    const isCamila = persona === 'camila';
    const cor = isCamila ? DRED : RED;

    return (
        <>
            <ToggleGroup
                options={[
                    { key: 'camila',   label: 'Camila (usuária)',     cor: DRED },
                    { key: 'rodrigo',  label: 'Rodrigo (entregador)', cor: RED  },
                ]}
                value={persona}
                onChange={setPersona}
            />

            <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
                <div style={{ minWidth: 520 }}>
                    {/* Header colunas */}
                    <div style={{
                        display: 'grid', gridTemplateColumns: '88px 1fr 1fr',
                        gap: 8, marginBottom: 8, padding: '0 2px',
                    }}>
                        <div />
                        <MonoLabel>Sem Subida</MonoLabel>
                        <MonoLabel color={cor}>Com Subida</MonoLabel>
                    </div>

                    {JOURNEY_STAGES.map((stage, i) => {
                        const antes  = isCamila ? stage.c_a : stage.r_a;
                        const depois = isCamila ? stage.c_d : stage.r_d;
                        return (
                            <div key={i} style={{
                                display: 'grid', gridTemplateColumns: '88px 1fr 1fr',
                                gap: 8, marginBottom: 8, alignItems: 'stretch',
                            }}>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '8px 4px' }}>
                                    <MonoLabel>{String(i + 1).padStart(2, '0')}</MonoLabel>
                                    <p style={{ margin: '5px 0 0', fontSize: 13, fontWeight: 600, color: 'var(--mist)' }}>{stage.etapa}</p>
                                </div>
                                <JourneyCell data={antes} />
                                <JourneyCell data={depois} accent={stage.novo ? cor : null} />
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Legenda */}
            <div style={{ display: 'flex', gap: 20, marginTop: 16, flexWrap: 'wrap' }}>
                {[
                    { bg: RED,  label: 'Ponto de dor' },
                    { bg: cor,  label: 'Novo com a Subida', color: cor },
                ].map(item => (
                    <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <div style={{ width: 7, height: 7, borderRadius: '50%', background: item.bg, flexShrink: 0 }} />
                        <MonoLabel color={item.color}>{item.label}</MonoLabel>
                    </div>
                ))}
            </div>
        </>
    );
}

function JourneyCell({ data, accent }) {
    return (
        <div style={{
            background: accent ? `${accent}0D` : 'rgba(255,255,255,0.025)',
            border: `1px solid ${accent ? `${accent}33` : data.bad ? `${RED}22` : 'rgba(255,255,255,0.06)'}`,
            borderRadius: 10,
            padding: '10px 14px',
        }}>
            <span style={{ fontSize: 18, display: 'block', marginBottom: 6 }}>{data.e}</span>
            <p style={{ margin: 0, fontSize: 13, lineHeight: 1.55, color: data.bad ? RED : 'var(--mist)' }}>
                {data.t}
            </p>
        </div>
    );
}

// ─── Fluxo de Telas ──────────────────────────────────────────────────────────

function FluxoTelasSection() {
    const [fluxo, setFluxo] = useState('usuario');
    const cor = fluxo === 'usuario' ? DRED : RED;
    const decisoes = DECISOES_UI.filter(d => d.fluxo === fluxo || d.fluxo === 'ambos');

    return (
        <>
            <ToggleGroup
                options={[
                    { key: 'usuario',    label: 'Fluxo da Usuária',    cor: DRED },
                    { key: 'entregador', label: 'Fluxo do Entregador', cor: RED  },
                ]}
                value={fluxo}
                onChange={setFluxo}
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {decisoes.map((item, i) => (
                    <div key={i} style={{
                        background: 'rgba(255,255,255,0.025)',
                        border: '1px solid rgba(255,255,255,0.07)',
                        borderRadius: 12,
                        overflow: 'hidden',
                    }}>
                        <div style={{
                            padding: '14px 20px',
                            borderBottom: '1px solid rgba(255,255,255,0.05)',
                            display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap',
                        }}>
                            <span style={{
                                fontSize: 10, fontFamily: 'var(--font-mono)',
                                padding: '2px 8px', borderRadius: 4,
                                letterSpacing: '0.08em', textTransform: 'uppercase',
                                color: cor, border: `1px solid ${cor}44`,
                                background: `${cor}11`,
                                whiteSpace: 'nowrap',
                            }}>{item.status}</span>
                            <h4 style={{ margin: 0, fontSize: 14, fontWeight: 600, color: 'var(--moonlight)' }}>{item.tela}</h4>
                        </div>
                        <div style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 16 }}>
                            {item.itens.map((d, j) => (
                                <div key={j}>
                                    <p style={{ margin: '0 0 5px', fontSize: 13, fontWeight: 600, color: 'var(--moonlight)' }}>{d.q}</p>
                                    <p style={{ margin: 0, fontSize: 13, color: 'var(--mist)', lineHeight: 1.65 }}>{d.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

// ─── Section shell ────────────────────────────────────────────────────────────

function SectionShell({ num, title, children, accent = RED }) {
    return (
        <div className="container" style={{ marginTop: 64 }}>
            <div style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: 10,
                marginBottom: 28,
                paddingBottom: 14,
                borderBottom: '1px solid rgba(255,255,255,0.07)',
            }}>
                <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 10,
                    letterSpacing: '0.12em',
                    color: accent,
                    flexShrink: 0,
                }}>{num}</span>
                <h2 style={{
                    margin: 0,
                    fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
                    fontWeight: 600,
                    color: 'var(--moonlight)',
                    letterSpacing: '-0.02em',
                }}>{title}</h2>
            </div>
            {children}
        </div>
    );
}

// ─── PixTudo Components ───────────────────────────────────────────────────────

function PtBadge({ type }) {
    const styles = {
        g: { bg: `${PGREEN}22`, color: PGREEN,    text: '✓ Sim'     },
        y: { bg: 'rgba(255,214,0,0.15)',  color: '#FFD600', text: '~ Parcial' },
        r: { bg: 'rgba(255,64,129,0.15)', color: '#FF4081', text: '✕ Não'    },
    };
    const s = styles[type];
    return (
        <span style={{ display: 'inline-block', padding: '2px 8px', borderRadius: 100, fontSize: 11, fontWeight: 600, background: s.bg, color: s.color }}>
            {s.text}
        </span>
    );
}

function PixTudoPersonas() {
    const [ativa, setAtiva] = useState('camila');
    const p = PIXTUDO_PERSONAS.find(x => x.key === ativa);
    return (
        <>
            <ToggleGroup
                options={PIXTUDO_PERSONAS.map(p => ({ key: p.key, label: p.label, cor: p.cor }))}
                value={ativa}
                onChange={setAtiva}
            />
            <div style={{ background: 'rgba(255,255,255,0.025)', border: `1px solid ${p.cor}22`, borderRadius: 14, overflow: 'hidden' }}>
                <div style={{ padding: '22px 26px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', gap: 18, alignItems: 'flex-start', flexWrap: 'wrap' }}>
                    <div style={{ width: 52, height: 52, borderRadius: '50%', background: p.cor, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 700, color: '#000', flexShrink: 0 }}>
                        {p.avatar}
                    </div>
                    <div style={{ flex: '1 1 200px' }}>
                        <h3 style={{ margin: '0 0 3px', fontSize: 17, fontWeight: 700, color: 'var(--moonlight)' }}>{p.nome}</h3>
                        <p style={{ margin: '0 0 10px', fontSize: 13, color: 'var(--mist)' }}>{p.sub}</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                            {p.tags.map(t => (
                                <span key={t} style={{ padding: '3px 10px', borderRadius: 100, fontSize: 11, color: p.cor, border: `1px solid ${p.cor}33`, background: `${p.cor}0D`, fontFamily: 'var(--font-mono)', letterSpacing: '0.05em' }}>{t}</span>
                            ))}
                        </div>
                    </div>
                </div>
                <div style={{ padding: '16px 26px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <blockquote style={{ margin: 0, padding: '12px 16px', borderLeft: `3px solid ${p.cor}`, background: `${p.cor}0D`, borderRadius: '0 8px 8px 0' }}>
                        <p style={{ margin: 0, fontSize: 14, fontStyle: 'italic', color: 'var(--moonlight)', lineHeight: 1.7 }}>{p.citacao}</p>
                    </blockquote>
                </div>
                <div style={{ padding: '18px 26px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                    <div>
                        <MonoLabel color={PGREEN}>Necessidades</MonoLabel>
                        <ul style={{ listStyle: 'none', margin: '8px 0 0', padding: 0 }}>
                            {p.necessidades.map(n => (
                                <li key={n} style={{ fontSize: 13, color: 'var(--mist)', padding: '5px 0', borderBottom: '1px solid rgba(255,255,255,0.04)', display: 'flex', gap: 8 }}>
                                    <span style={{ color: PGREEN, flexShrink: 0 }}>✓</span>{n}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <MonoLabel color='#FF4081'>Dores</MonoLabel>
                        <ul style={{ listStyle: 'none', margin: '8px 0 0', padding: 0 }}>
                            {p.dores.map(d => (
                                <li key={d} style={{ fontSize: 13, color: 'var(--mist)', padding: '5px 0', borderBottom: '1px solid rgba(255,255,255,0.04)', display: 'flex', gap: 8 }}>
                                    <span style={{ color: '#FF4081', flexShrink: 0 }}>✕</span>{d}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div style={{ padding: '0 26px 18px' }}>
                    <MonoLabel>Contexto de Uso</MonoLabel>
                    <ul style={{ listStyle: 'none', margin: '8px 0 0', padding: 0, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        {p.contexto.map(c => (
                            <li key={c} style={{ fontSize: 12, color: 'var(--mist)', padding: '4px 12px', borderRadius: 100, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>{c}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

function PixTudoCompetitors() {
    const cols = ['Pagamento', 'Investimento', 'Crédito', 'Mini Apps', 'Social'];
    const keys = ['pag', 'inv', 'cred', 'mini', 'social'];
    return (
        <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', borderRadius: 12, border: '1px solid rgba(255,255,255,0.07)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 640 }}>
                <thead>
                    <tr>
                        {['Concorrente', ...cols, 'UX Score', 'Gap Principal'].map(h => (
                            <th key={h} style={{ textAlign: 'left', padding: '10px 14px', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--mist)', borderBottom: '1px solid rgba(255,255,255,0.07)', fontFamily: 'var(--font-mono)', whiteSpace: 'nowrap' }}>{h}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {PIXTUDO_COMPETITORS.map((c, i) => (
                        <tr key={i} style={{ background: c.destaque ? `${PGREEN}0A` : 'transparent' }}>
                            <td style={{ padding: '11px 14px', fontSize: 13, fontWeight: 600, color: c.destaque ? PGREEN : 'var(--moonlight)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{c.nome}</td>
                            {keys.map(k => (
                                <td key={k} style={{ padding: '11px 14px', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                                    <PtBadge type={c[k]} />
                                </td>
                            ))}
                            <td style={{ padding: '11px 14px', fontSize: 13, color: 'var(--mist)', borderBottom: '1px solid rgba(255,255,255,0.04)', fontFamily: 'var(--font-mono)' }}>{c.ux}</td>
                            <td style={{ padding: '11px 14px', fontSize: 13, color: c.destaque ? PGREEN : 'var(--mist)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{c.gap}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function PixTudoJourney() {
    return (
        <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, minmax(150px, 1fr))', gap: 8, minWidth: 900 }}>
                {PIXTUDO_JOURNEY.map((s, i) => (
                    <div key={i} style={{
                        borderTop: `3px solid ${s.ativo ? PGREEN : 'rgba(255,255,255,0.1)'}`,
                        padding: '18px 14px',
                        background: s.ativo ? `${PGREEN}08` : 'transparent',
                        borderRadius: '0 0 10px 10px',
                    }}>
                        <MonoLabel color={s.ativo ? PGREEN : 'var(--mist)'}>{s.num} · {s.etapa}</MonoLabel>
                        <h4 style={{ margin: '7px 0 8px', fontSize: 13, fontWeight: 700, color: 'var(--moonlight)' }}>{s.titulo}</h4>
                        <p style={{ margin: '0 0 14px', fontSize: 12, color: 'var(--mist)', lineHeight: 1.55 }}>{s.desc}</p>
                        <div style={{ fontSize: 20, marginBottom: 4 }}>{s.emoji}</div>
                        <MonoLabel color={s.ativo ? PGREEN : 'var(--mist)'}>{s.emocao}</MonoLabel>
                    </div>
                ))}
            </div>
            <div style={{ display: 'flex', gap: 20, marginTop: 14, flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <div style={{ width: 7, height: 7, borderRadius: '50%', background: PGREEN }} />
                    <MonoLabel color={PGREEN}>Momento-chave</MonoLabel>
                </div>
            </div>
        </div>
    );
}

function PixTudoPrinciples() {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 14 }}>
            {PIXTUDO_PRINCIPLES.map((p, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '26px 22px', textAlign: 'center' }}>
                    <div style={{ fontSize: 52, fontWeight: 800, lineHeight: 1, color: `${PGREEN}22`, marginBottom: -6, fontFamily: 'var(--font-body)' }}>{p.num}</div>
                    <h3 style={{ margin: '0 0 10px', fontSize: 15, fontWeight: 700, color: 'var(--moonlight)' }}>{p.nome}</h3>
                    <p style={{ margin: 0, fontSize: 13, color: 'var(--mist)', lineHeight: 1.65 }}>{p.desc}</p>
                </div>
            ))}
        </div>
    );
}

function PixTudoKPIs() {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 12 }}>
            {PIXTUDO_KPIS.map((k, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: '18px 16px' }}>
                    <div style={{ fontSize: 20, marginBottom: 10 }}>{k.icon}</div>
                    <p style={{ margin: '0 0 3px', fontSize: 11, color: 'var(--mist)', fontFamily: 'var(--font-mono)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{k.label}</p>
                    <div style={{ fontSize: 22, fontWeight: 700, color: PGREEN, fontFamily: 'var(--font-mono)', lineHeight: 1, marginBottom: 6 }}>{k.target}</div>
                    <p style={{ margin: 0, fontSize: 12, color: 'var(--mist)', lineHeight: 1.5 }}>{k.desc}</p>
                </div>
            ))}
        </div>
    );
}

function PixTudoRoadmap() {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 24, paddingTop: 4 }}>
            {PIXTUDO_ROADMAP.map((fase, i) => (
                <div key={i} style={{ position: 'relative' }}>
                    <div style={{
                        width: 16, height: 16, borderRadius: '50%',
                        background: fase.ativo ? PGREEN : 'rgba(255,255,255,0.08)',
                        border: `2px solid ${fase.ativo ? PGREEN : 'rgba(255,255,255,0.15)'}`,
                        boxShadow: fase.ativo ? `0 0 0 4px ${PGREEN}22` : 'none',
                        marginBottom: 18,
                    }} />
                    <MonoLabel color={fase.ativo ? PGREEN : 'var(--mist)'}>{fase.fase}</MonoLabel>
                    <h3 style={{ margin: '7px 0 14px', fontSize: 17, fontWeight: 700, color: 'var(--moonlight)' }}>{fase.nome}</h3>
                    <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                        {fase.itens.map((item, j) => (
                            <li key={j} style={{ fontSize: 13, color: 'var(--mist)', padding: '5px 0', borderBottom: '1px solid rgba(255,255,255,0.04)', display: 'flex', gap: 8 }}>
                                <span style={{ color: fase.ativo ? PGREEN : 'rgba(255,255,255,0.2)', flexShrink: 0 }}>{fase.ativo ? '●' : '○'}</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

// ─── Registry ────────────────────────────────────────────────────────────────

const SECTION_COMPONENTS = {
    SubidaPersonas:      PersonasSection,
    SubidaJourneyMap:    JourneyMapSection,
    SubidaFluxoTelas:    FluxoTelasSection,
    PixTudoPersonas:     PixTudoPersonas,
    PixTudoCompetitors:  PixTudoCompetitors,
    PixTudoJourney:      PixTudoJourney,
    PixTudoPrinciples:   PixTudoPrinciples,
    PixTudoKPIs:         PixTudoKPIs,
    PixTudoRoadmap:      PixTudoRoadmap,
};

// ─── Page ─────────────────────────────────────────────────────────────────────

const RichProjectPage = ({ project }) => {
    const parallaxRef = useRef(null);
    const [offsetY, setOffsetY] = useState(0);
    const { t, lang } = useLanguage();
    const pick = (pt, en) => lang === 'en' && en ? en : pt;

    useEffect(() => {
        const handleScroll = () => setOffsetY(window.scrollY);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const hasLinks = project.prototypeLink || project.prototypeLinks?.length > 0 || project.liveDemoLink;
    const accent = project.accentColor || RED;

    return (
        <div className="single-project-page-design">

            {/* Hero com Parallax — idêntico ao SingleProjectPage */}
            <div className="project-parallax-hero" ref={parallaxRef}>
                {(project.pageSrc || project.src) && (
                    <div
                        className="project-parallax-bg"
                        style={{ transform: `translateY(${offsetY * 0.35}px)` }}
                    >
                        <Image
                            src={project.pageSrc || project.src}
                            alt={`Imagem principal do projeto ${project.title}`}
                            fill
                            sizes="100vw"
                            style={{ objectFit: 'cover', objectPosition: 'top' }}
                            priority
                        />
                    </div>
                )}
                <div className="project-parallax-overlay" />
                <div className="project-parallax-content container">
                    <div className="row">
                        <div className="col-12">
                            <div className="parallax-title-box mb-4">
                                <p className="project-sub-title">{project.category} | {project.client || 'Projeto Pessoal'}</p>
                                <h1 className="project-main-title">{project.title}</h1>
                            </div>
                            <div className="project-parallax-info-row">
                                {project.year     && <div className="parallax-info-box"><p>{t.project.year}</p><h3>{project.year}</h3></div>}
                                {project.role     && <div className="parallax-info-box"><p>{t.project.role}</p><h3>{project.role}</h3></div>}
                                {project.timeline && <div className="parallax-info-box"><p>{t.project.duration}</p><h3>{pick(project.timeline, project.timeline_en)}</h3></div>}
                                {project.team     && <div className="parallax-info-box"><p>{t.project.team}</p><h3>{project.team}</h3></div>}
                                {project.tools?.length > 0 && (
                                    <div className="parallax-info-box">
                                        <p>{t.project.tools}</p>
                                        <h3>{project.tools.join(' · ')}</h3>
                                    </div>
                                )}
                                {hasLinks && (
                                    <div className="parallax-info-box parallax-info-box--cta">
                                        <p>{t.project.viewProject}</p>
                                        <div className="parallax-cta-links">
                                            {project.prototypeLinks?.length > 0
                                                ? project.prototypeLinks.map((link, i) => (
                                                    <Link key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="parallax-cta-link">
                                                        {link.label} <RiExternalLinkLine size={13} />
                                                    </Link>
                                                ))
                                                : project.prototypeLink
                                                    ? <Link href={project.prototypeLink} target="_blank" rel="noopener noreferrer" className="parallax-cta-link">
                                                        {t.project.prototype} <RiExternalLinkLine size={13} />
                                                      </Link>
                                                    : null
                                            }
                                            {project.liveDemoLink && (
                                                <Link href={project.liveDemoLink} target="_blank" rel="noopener noreferrer" className="parallax-cta-link">
                                                    {t.project.liveDemo} <RiExternalLinkLine size={13} />
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Overview */}
            {project.description && (
                <div className="container pt-30">
                    <div className="project-section project-section--first">
                        <h3>{t.project.overview}</h3>
                        <p>{pick(project.description, project.description_en)}</p>
                    </div>
                </div>
            )}

            {/* Seções */}
            {project.sections?.map((section, i) => {
                const num   = String(i + 1).padStart(2, '0');
                const title = pick(section.title, section.title_en);

                if (section.type === 'component') {
                    const Component = SECTION_COMPONENTS[section.component];
                    if (!Component) return null;
                    return (
                        <SectionShell key={i} num={num} title={title} accent={accent}>
                            <Component />
                        </SectionShell>
                    );
                }

                const methods    = pick(section.methods,    section.methods_en);
                const highlights = pick(section.highlights, section.highlights_en);
                const metrics    = pick(section.metrics,    section.metrics_en);

                return (
                    <SectionShell key={i} num={num} title={title} accent={accent}>
                        {section.type === 'research' && methods?.length > 0 && (
                            <div className="cs-methods">
                                {methods.map((m, j) => <span key={j} className="cs-method-chip">{m}</span>)}
                            </div>
                        )}
                        {section.content && (
                            <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--mist)', margin: '0' }}>
                                {pick(section.content, section.content_en)}
                            </p>
                        )}
                        {highlights?.length > 0 && (
                            <ul className="cs-highlights">
                                {highlights.map((h, j) => <li key={j}>{h}</li>)}
                            </ul>
                        )}
                        {section.type === 'outcomes' && metrics?.length > 0 && (
                            <div className="cs-metrics">
                                {metrics.map((m, j) => (
                                    <div key={j} className="cs-metric">
                                        <span className="cs-metric-value">{m.value}</span>
                                        <span className="cs-metric-label">{pick(m.label, m.label_en)}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </SectionShell>
                );
            })}

            {/* Botão Voltar */}
            <div className="container">
                <div className="project-back-btn">
                    <Link href="/works" className="theme-btn theme-btn--outline">
                        <i><RiArrowLeftLine size={16} /></i> {t.project.backToProjects}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RichProjectPage;
