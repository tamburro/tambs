'use client';
import { useState } from "react";

const personas = [
  {
    id: "entregador",
    nome: "Rodrigo Nascimento",
    idade: "34 anos",
    cidade: "São Paulo, SP — Zona Sul",
    papel: "Entregador iFood",
    tag: "O trabalhador invisível",
    cor: "#E8471A",
    corClara: "#FFF1ED",
    emoji: "🏍️",
    avatar: "R",
    bio: "Rodrigo mora no Grajaú com a esposa e dois filhos. Trabalhou 6 anos como auxiliar de logística numa transportadora, mas perdeu o emprego durante a pandemia. Entrou no iFood em 2021 como renda complementar — hoje é sua principal fonte. Trabalha em média 10h por dia, de terça a domingo, priorizando almoço e jantar nos bairros de Moema, Vila Mariana e Brooklin.",
    citacao: "Quando chega num prédio alto sem elevador, eu já sei que vai custar a entrega. Subo, entrego, desço — tudo no meu tempo, sem nenhum centavo a mais por isso.",
    dados: [
      { label: "Jornada média", valor: "10h/dia, Ter–Dom" },
      { label: "Renda bruta mensal", valor: "~R$ 3.200" },
      { label: "Renda líquida estimada", valor: "~R$ 2.400" },
      { label: "Veículo", valor: "Moto Honda CG 160" },
      { label: "Dependentes", valor: "3 pessoas" },
      { label: "Tempo na plataforma", valor: "4 anos" },
    ],
    objetivos: [
      "Maximizar o número de corridas por hora",
      "Evitar perdas de tempo não remunerado",
      "Construir reserva para comprar um carro",
      "Ter previsibilidade de renda semanal",
    ],
    frustracao: [
      "Subir andares sem nenhuma compensação",
      "Prédios sem interfone funcionando",
      "Tempo de espera nos restaurantes não remunerado",
      "Não saber se vai ter elevador antes de aceitar",
      "Avaliação negativa por recusar uma subida",
    ],
    comportamento: [
      "Usa o app de forma estratégica — aceita corridas por rentabilidade por km",
      "Compara apps e multi-appa em horários de pico",
      "Participa de grupos de WhatsApp de entregadores da região",
      "Acompanha o saldo em tempo real pelo app",
    ],
    relacaoSubida: "Rodrigo aceitaria subidas com mais frequência se soubesse o valor antes. Hoje ele tende a tocar o interfone, perguntar o andar e decidir na hora — o que já gera atrito. Com a Subida visível no aceite da corrida, ele pode fazer esse cálculo antes, sem constrangimento.",
    fonte: "Perfil baseado em dados do Cebrap (2024), UFPR (2025) e Portal de Dados iFood. Idade média real: 34 anos. 80% são chefes de família com ~3 dependentes.",
  },
  {
    id: "usuario",
    nome: "Camila Ferreira",
    idade: "29 anos",
    cidade: "São Paulo, SP — Pinheiros",
    papel: "Usuária iFood",
    tag: "A consumidora consciente",
    cor: "#C1121F",
    corClara: "#FFF0F0",
    emoji: "📱",
    avatar: "C",
    bio: "Camila é analista de marketing numa startup de fintechs. Mora sozinha num apartamento de 2 quartos no 11º andar de um prédio sem elevador de serviço funcional. Usa o iFood em média 5 vezes por semana — almoço no home office e jantar quando chega tarde do trabalho. Clube iFood assinante há 2 anos.",
    citacao: "Nunca parei pra pensar nisso. Mas agora que você fala... subir 11 andares com minha comida toda vez, sem ganhar nada a mais por isso? Eu pagaria sem pensar.",
    dados: [
      { label: "Frequência de pedidos", valor: "~5x por semana" },
      { label: "Gasto mensal estimado", valor: "~R$ 480" },
      { label: "Ticket médio", valor: "R$ 48,00" },
      { label: "Andar do apartamento", valor: "11º (sem elevador de serviço)" },
      { label: "Assinatura", valor: "Clube iFood" },
      { label: "Tempo de uso do app", valor: "4 anos" },
    ],
    objetivos: [
      "Praticidade — sem fricção no pedido",
      "Comida chegando quente e no tempo certo",
      "Sentir que está fazendo escolhas de consumo éticas",
      "Não pensar no delivery — que funcione e pronto",
    ],
    frustracao: [
      "Entregador que liga pedindo pra descer buscar",
      "Comida fria porque demorou na portaria",
      "Não ter como comunicar o andar com antecedência",
      "Sentir que o sistema não protege o entregador",
    ],
    comportamento: [
      "Alta fidelidade ao iFood — raramente usa outros apps",
      "Avalia restaurantes com frequência, mas raramente avalia entregadores",
      "Sensível a questões de consumo consciente e trabalho digno",
      "Decide gorjeta de forma reativa, se lembrar",
    ],
    relacaoSubida: "Camila não pensa conscientemente no esforço da subida — não porque não se importa, mas porque o sistema nunca criou esse momento de consciência. A feature funciona como um 'espelho': ela vê o esforço, reconhece, e age. A barreira é zero — já está no checkout, custa R$ 3, vai pro entregador.",
    fonte: "Perfil baseado em dados Klavi Q1 2025 (ticket médio R$45, ~5 pedidos/mês) e Relatório iFood 2024 (público 25–35 anos, praticidade, urban-first). Frequência ajustada para perfil de heavy user.",
  },
];

const Section = ({ title, children }) => (
  <div style={{ marginBottom: 24 }}>
    <div style={{
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "#999",
      marginBottom: 10,
      fontFamily: "'JetBrains Mono', monospace",
    }}>
      {title}
    </div>
    {children}
  </div>
);

const Tag = ({ text, cor }) => (
  <span style={{
    display: "inline-block",
    padding: "3px 10px",
    borderRadius: 3,
    fontSize: 11,
    fontWeight: 600,
    backgroundColor: cor + "22",
    color: cor,
    border: `1px solid ${cor}33`,
    fontFamily: "'JetBrains Mono', monospace",
    marginBottom: 4,
    marginRight: 4,
  }}>
    {text}
  </span>
);

const ListItem = ({ text, type = "default", cor }) => {
  const icons = { default: "→", negativo: "✕", positivo: "✓" };
  const colors = { default: "#555", negativo: "#C1121F", positivo: "#2D6A4F" };
  return (
    <div style={{
      display: "flex",
      gap: 8,
      marginBottom: 7,
      alignItems: "flex-start",
    }}>
      <span style={{
        fontSize: 11,
        color: type === "default" ? cor : colors[type],
        fontFamily: "monospace",
        marginTop: 1,
        flexShrink: 0,
      }}>
        {icons[type]}
      </span>
      <span style={{ fontSize: 13, color: "#333", lineHeight: 1.5 }}>{text}</span>
    </div>
  );
};

export default function Personas() {
  const [ativa, setAtiva] = useState("entregador");
  const p = personas.find((x) => x.id === ativa);

  return (
    <div style={{
      fontFamily: "'Georgia', serif",
      backgroundColor: "#FAFAF8",
      minHeight: "100vh",
      padding: "0 0 60px 0",
    }}>
      {/* Header */}
      <div style={{
        backgroundColor: "#111",
        padding: "32px 40px 28px",
        borderBottom: "3px solid " + p.cor,
      }}>
        <div style={{
          fontSize: 10,
          color: "#888",
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          fontFamily: "'JetBrains Mono', monospace",
          marginBottom: 8,
        }}>
          iFood · Feature Subida · Documento de Discovery
        </div>
        <div style={{
          fontSize: 28,
          fontWeight: 700,
          color: "#fff",
          letterSpacing: "-0.02em",
          fontFamily: "Georgia, serif",
        }}>
          Personas
        </div>
        <div style={{ fontSize: 13, color: "#888", marginTop: 4 }}>
          Baseadas em dados reais — Cebrap, UFPR, Klavi, Portal iFood (2024–2025)
        </div>
      </div>

      {/* Tabs */}
      <div style={{
        display: "flex",
        borderBottom: "1px solid #E5E5E5",
        backgroundColor: "#fff",
        padding: "0 40px",
      }}>
        {personas.map((per) => (
          <button
            key={per.id}
            onClick={() => setAtiva(per.id)}
            style={{
              padding: "16px 20px",
              border: "none",
              borderBottom: ativa === per.id ? `3px solid ${per.cor}` : "3px solid transparent",
              backgroundColor: "transparent",
              cursor: "pointer",
              fontSize: 13,
              fontWeight: ativa === per.id ? 700 : 400,
              color: ativa === per.id ? per.cor : "#888",
              fontFamily: "Georgia, serif",
              transition: "all 0.2s",
              marginBottom: -1,
            }}
          >
            {per.emoji} {per.papel}
          </button>
        ))}
      </div>

      {/* Conteúdo */}
      <div style={{ padding: "32px 40px", maxWidth: 900 }}>

        {/* Hero da persona */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "80px 1fr auto",
          gap: 20,
          alignItems: "start",
          marginBottom: 32,
          backgroundColor: "#fff",
          padding: 24,
          borderRadius: 8,
          border: "1px solid #E8E8E8",
          boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
        }}>
          <div style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            backgroundColor: p.cor,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 32,
            fontWeight: 700,
            color: "#fff",
            fontFamily: "Georgia, serif",
            flexShrink: 0,
          }}>
            {p.avatar}
          </div>

          <div>
            <div style={{ fontSize: 22, fontWeight: 700, color: "#111", letterSpacing: "-0.01em" }}>
              {p.nome}
            </div>
            <div style={{ fontSize: 13, color: "#666", margin: "3px 0 8px" }}>
              {p.idade} · {p.cidade}
            </div>
            <Tag text={p.tag} cor={p.cor} />
            <Tag text={p.papel} cor="#555" />
          </div>

          <div style={{
            textAlign: "right",
            padding: "8px 12px",
            backgroundColor: p.corClara,
            borderRadius: 6,
            border: `1px solid ${p.cor}22`,
          }}>
            {p.dados.slice(0, 3).map((d) => (
              <div key={d.label} style={{ marginBottom: 6 }}>
                <div style={{ fontSize: 10, color: "#999", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.08em" }}>{d.label}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#111" }}>{d.valor}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bio */}
        <div style={{
          backgroundColor: "#fff",
          borderRadius: 8,
          border: "1px solid #E8E8E8",
          padding: 24,
          marginBottom: 20,
        }}>
          <Section title="Quem é">
            <p style={{ fontSize: 14, color: "#333", lineHeight: 1.7, margin: 0 }}>
              {p.bio}
            </p>
          </Section>

          {/* Citação */}
          <blockquote style={{
            margin: "20px 0 0",
            padding: "16px 20px",
            borderLeft: `4px solid ${p.cor}`,
            backgroundColor: p.corClara,
            borderRadius: "0 6px 6px 0",
          }}>
            <p style={{
              fontSize: 15,
              fontStyle: "italic",
              color: "#222",
              lineHeight: 1.6,
              margin: 0,
            }}>
              "{p.citacao}"
            </p>
          </blockquote>
        </div>

        {/* Grid 2 colunas */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }}>

          {/* Objetivos */}
          <div style={{
            backgroundColor: "#fff",
            borderRadius: 8,
            border: "1px solid #E8E8E8",
            padding: 20,
          }}>
            <Section title="Objetivos">
              {p.objetivos.map((o, i) => (
                <ListItem key={i} text={o} type="positivo" cor={p.cor} />
              ))}
            </Section>
          </div>

          {/* Frustrações */}
          <div style={{
            backgroundColor: "#fff",
            borderRadius: 8,
            border: "1px solid #E8E8E8",
            padding: 20,
          }}>
            <Section title="Frustrações">
              {p.frustracao.map((f, i) => (
                <ListItem key={i} text={f} type="negativo" cor={p.cor} />
              ))}
            </Section>
          </div>

          {/* Comportamento */}
          <div style={{
            backgroundColor: "#fff",
            borderRadius: 8,
            border: "1px solid #E8E8E8",
            padding: 20,
          }}>
            <Section title="Comportamento no app">
              {p.comportamento.map((c, i) => (
                <ListItem key={i} text={c} type="default" cor={p.cor} />
              ))}
            </Section>
          </div>

          {/* Dados completos */}
          <div style={{
            backgroundColor: "#fff",
            borderRadius: 8,
            border: "1px solid #E8E8E8",
            padding: 20,
          }}>
            <Section title="Dados do perfil">
              {p.dados.map((d) => (
                <div key={d.label} style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  padding: "6px 0",
                  borderBottom: "1px solid #F0F0F0",
                }}>
                  <span style={{ fontSize: 12, color: "#888", fontFamily: "monospace" }}>{d.label}</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#111" }}>{d.valor}</span>
                </div>
              ))}
            </Section>
          </div>
        </div>

        {/* Relação com a Subida */}
        <div style={{
          backgroundColor: "#111",
          borderRadius: 8,
          padding: 24,
          marginBottom: 16,
          borderLeft: `4px solid ${p.cor}`,
        }}>
          <div style={{
            fontSize: 10,
            color: p.cor,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            fontFamily: "'JetBrains Mono', monospace",
            marginBottom: 10,
            fontWeight: 700,
          }}>
            Relação com a feature Subida
          </div>
          <p style={{
            fontSize: 14,
            color: "#CCC",
            lineHeight: 1.7,
            margin: 0,
          }}>
            {p.relacaoSubida}
          </p>
        </div>

        {/* Fonte */}
        <div style={{
          fontSize: 11,
          color: "#AAA",
          fontFamily: "monospace",
          padding: "0 4px",
        }}>
          ⓘ {p.fonte}
        </div>
      </div>
    </div>
  );
}
