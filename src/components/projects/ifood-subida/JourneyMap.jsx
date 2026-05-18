'use client';
import { useState } from "react";

const PERSONAS = ["Camila (usuária)", "Rodrigo (entregador)"];

const ETAPAS = [
  "Pedido",
  "Aceite da corrida",
  "Coleta no restaurante",
  "Chegada ao endereço",
  "Subida / Entrega",
  "Pós-entrega",
];

// sentiment: 1-5 (1=muito negativo, 3=neutro, 5=muito positivo)
const FLUXO_ATUAL = {
  "Camila (usuária)": [
    {
      etapa: "Pedido",
      acao: "Escolhe restaurante, monta pedido, finaliza o checkout",
      pensamento: "Quero que chegue rápido e quente.",
      emocao: "Animada, com expectativa",
      sentiment: 4,
      dor: null,
      oportunidade: null,
    },
    {
      etapa: "Aceite da corrida",
      acao: "Vê o nome do entregador no app e acompanha a rota",
      pensamento: "Tá longe ainda? Vai demorar quanto tempo?",
      emocao: "Ansiosa, monitorando",
      sentiment: 3,
      dor: null,
      oportunidade: null,
    },
    {
      etapa: "Coleta no restaurante",
      acao: "Continua acompanhando. Às vezes manda mensagem perguntando",
      pensamento: "Por que demorou tanto para sair do restaurante?",
      emocao: "Impaciente",
      sentiment: 2,
      dor: "Tempo de espera no restaurante é opaco — sem feedback real",
      oportunidade: null,
    },
    {
      etapa: "Chegada ao endereço",
      acao: "Recebe notificação 'Chegou'. Espera o entregador aparecer",
      pensamento: "Já chegou? Vou lá buscar ou espero ele subir?",
      emocao: "Indecisa, levemente desconfortável",
      sentiment: 2,
      dor: "Não sabe se o entregador vai subir ou não. Fica na dúvida se desce ou espera",
      oportunidade: "Momento em que a ausência de combinação gera atrito bilateral",
    },
    {
      etapa: "Subida / Entrega",
      acao: "Às vezes recebe na porta. Às vezes desce buscar na portaria. Às vezes o entregador liga pedindo pra descer",
      pensamento: "Por que ele não subiu? Agora a comida vai esfriar enquanto eu desço.",
      emocao: "Frustrada ou aliviada — depende do entregador",
      sentiment: 2,
      dor: "Imprevisibilidade total. O entregador pode ou não subir — sem critério claro",
      oportunidade: "Um combinado prévio resolveria 100% desse atrito",
    },
    {
      etapa: "Pós-entrega",
      acao: "Come. Às vezes avalia o pedido. Raramente dá gorjeta",
      pensamento: "Comida ok. Não lembrei de dar gorjeta.",
      emocao: "Satisfeita com a comida, indiferente ao processo",
      sentiment: 3,
      dor: "Gorjeta pós-entrega tem baixa adesão — o momento de gratidão já passou",
      oportunidade: null,
    },
  ],
  "Rodrigo (entregador)": [
    {
      etapa: "Pedido",
      acao: "Está online, aguardando corridas na região",
      pensamento: "Precisa dar pelo menos 4 corridas na hora pra valer.",
      emocao: "Focado, calculando rentabilidade",
      sentiment: 3,
      dor: null,
      oportunidade: null,
    },
    {
      etapa: "Aceite da corrida",
      acao: "Recebe a notificação. Vê distância, restaurante e endereço de entrega — mas não o andar",
      pensamento: "Endereço em Pinheiros, prédio alto provavelmente. Qual andar? Vai ter elevador?",
      emocao: "Incerteza, avalia se aceita",
      sentiment: 2,
      dor: "Aceita sem saber se terá custo adicional de esforço. Informação incompleta",
      oportunidade: "Mostrar o valor da Subida aqui mudaria completamente a decisão",
    },
    {
      etapa: "Coleta no restaurante",
      acao: "Chega ao restaurante, espera o pedido ficar pronto",
      pensamento: "Já 8 minutos esperando. Isso vai comer minha hora.",
      emocao: "Impaciente, calculando perda de tempo",
      sentiment: 2,
      dor: "Tempo de espera não remunerado. Já perdeu rentabilidade antes de sair",
      oportunidade: null,
    },
    {
      etapa: "Chegada ao endereço",
      acao: "Para a moto, tira o capacete, pega a sacola. Toca o interfone",
      pensamento: "11º andar. Tem elevador? Se não tiver, vou ter que decidir agora.",
      emocao: "Tenso, avaliando a situação",
      sentiment: 2,
      dor: "Só descobre o andar e a condição do prédio ao chegar. Decisão forçada na porta",
      oportunidade: null,
    },
    {
      etapa: "Subida / Entrega",
      acao: "Sobe as escadas. Entrega no andar. Desce. Volta pra moto",
      pensamento: "11 andares de escada. Mais 5 minutos fora do ar, sem ganho nenhum.",
      emocao: "Cansado, ressentido com o sistema",
      sentiment: 1,
      dor: "Esforço físico real, tempo consumido, zero remuneração adicional. Pior ponto da jornada",
      oportunidade: "O trabalho acontece aqui. O sistema não enxerga.",
    },
    {
      etapa: "Pós-entrega",
      acao: "Volta online. Confere os ganhos do período",
      pensamento: "Essa corrida pagou R$8,50. Desci fora por 12 minutos.",
      emocao: "Desmotivado, recalcula estratégia",
      sentiment: 1,
      dor: "ROI da corrida ficou distorcido pelo tempo invisível da subida",
      oportunidade: null,
    },
  ],
};

const FLUXO_SUBIDA = {
  "Camila (usuária)": [
    {
      etapa: "Pedido",
      acao: "Escolhe restaurante, monta pedido",
      pensamento: "Normal, mesmo de sempre.",
      emocao: "Animada",
      sentiment: 4,
      dor: null,
      novo: false,
    },
    {
      etapa: "Aceite da corrida",
      acao: "Finaliza o checkout. Vê a opção 'Subida' com stepper R$3+",
      pensamento: "Ah, faz sentido. Vou deixar R$5 — ele vai subir 11 andares.",
      emocao: "Engajada, com senso de agência",
      sentiment: 5,
      dor: null,
      novo: true,
      destaque: "Momento de consciência criado pelo design. Ela reconhece o esforço e age.",
    },
    {
      etapa: "Coleta no restaurante",
      acao: "Acompanha o status normalmente",
      pensamento: "Já paguei a subida, ele vai vir até a porta.",
      emocao: "Tranquila, expectativa positiva",
      sentiment: 4,
      dor: null,
      novo: false,
    },
    {
      etapa: "Chegada ao endereço",
      acao: "Recebe notificação 'O entregador aceitou a subida — chegará à sua porta'",
      pensamento: "Ótimo, não preciso descer.",
      emocao: "Aliviada, confortável",
      sentiment: 5,
      dor: null,
      novo: true,
      destaque: "Combinado explícito elimina toda a ambiguidade. Zero atrito.",
    },
    {
      etapa: "Subida / Entrega",
      acao: "Recebe na porta do apartamento",
      pensamento: "Perfeito. Comida quente, sem drama.",
      emocao: "Satisfeita, experiência fluida",
      sentiment: 5,
      dor: null,
      novo: false,
    },
    {
      etapa: "Pós-entrega",
      acao: "Come. Gorjeta já foi processada automaticamente.",
      pensamento: "Nem precisei me lembrar de dar gorjeta.",
      emocao: "Satisfeita, sem fricção",
      sentiment: 5,
      dor: null,
      novo: false,
    },
  ],
  "Rodrigo (entregador)": [
    {
      etapa: "Pedido",
      acao: "Online, aguardando corridas",
      pensamento: "Vamos ver o que aparece.",
      emocao: "Focado",
      sentiment: 3,
      dor: null,
      novo: false,
    },
    {
      etapa: "Aceite da corrida",
      acao: "Recebe notificação. Vê endereço + 'Subida: R$5,00'",
      pensamento: "R$5 de Subida. Vale a pena. Aceito.",
      emocao: "Motivado, decisão informada",
      sentiment: 5,
      dor: null,
      novo: true,
      destaque: "Informação completa no momento certo. Ele decide com agência real.",
    },
    {
      etapa: "Coleta no restaurante",
      acao: "Busca o pedido normalmente",
      pensamento: "Já sei que esse vai render bem.",
      emocao: "Tranquilo, previsibilidade",
      sentiment: 3,
      dor: null,
      novo: false,
    },
    {
      etapa: "Chegada ao endereço",
      acao: "Para a moto, pega a sacola. Já sabe que vai subir — combinado no aceite",
      pensamento: "11º andar. Já sabia. Tô preparado.",
      emocao: "Neutro, sem surpresa",
      sentiment: 3,
      dor: null,
      novo: false,
    },
    {
      etapa: "Subida / Entrega",
      acao: "Sobe, entrega na porta. Gorjeta já está garantida.",
      pensamento: "Esse esforço vai ser remunerado. Faz sentido.",
      emocao: "Satisfeito, trabalho reconhecido",
      sentiment: 5,
      dor: null,
      novo: true,
      destaque: "O trabalho invisível virou trabalho remunerado. Essa é a mudança central.",
    },
    {
      etapa: "Pós-entrega",
      acao: "Volta online. Gorjeta transferida automaticamente em X min.",
      pensamento: "Essa corrida pagou R$13,50. Valeu cada degrau.",
      emocao: "Motivado, ROI justo",
      sentiment: 5,
      dor: null,
      novo: false,
    },
  ],
};

const sentimentColor = (s) => {
  if (s <= 1) return "#C1121F";
  if (s <= 2) return "#E8471A";
  if (s === 3) return "#888";
  if (s === 4) return "#2D6A4F";
  return "#1B4332";
};

const sentimentLabel = (s) => {
  if (s <= 1) return "Muito negativo";
  if (s <= 2) return "Negativo";
  if (s === 3) return "Neutro";
  if (s === 4) return "Positivo";
  return "Muito positivo";
};

const sentimentEmoji = (s) => ["😤", "😟", "😐", "🙂", "😊"][s - 1];

function CurvaEmocional({ dados, cor }) {
  const w = 560, h = 80, pad = 20;
  const n = dados.length;
  const xStep = (w - pad * 2) / (n - 1);
  const yScale = (s) => pad + ((5 - s) / 4) * (h - pad * 2);

  const points = dados.map((d, i) => ({
    x: pad + i * xStep,
    y: yScale(d.sentiment),
    s: d.sentiment,
  }));

  const path = points
    .map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`))
    .join(" ");

  return (
    <svg width={w} height={h} style={{ overflow: "visible" }}>
      {/* Grade */}
      {[1, 2, 3, 4, 5].map((v) => (
        <line
          key={v}
          x1={pad} y1={yScale(v)}
          x2={w - pad} y2={yScale(v)}
          stroke="#F0F0F0" strokeWidth={1}
        />
      ))}
      {/* Linha */}
      <path d={path} fill="none" stroke={cor} strokeWidth={2.5} strokeLinejoin="round" />
      {/* Pontos */}
      {points.map((p, i) => (
        <circle
          key={i}
          cx={p.x} cy={p.y} r={5}
          fill={sentimentColor(p.s)}
          stroke="#fff" strokeWidth={2}
        />
      ))}
    </svg>
  );
}

export default function JourneyMap() {
  const [modo, setModo] = useState("comparar"); // "atual" | "subida" | "comparar"
  const [persona, setPersona] = useState("Camila (usuária)");
  const [etapaAtiva, setEtapaAtiva] = useState(null);

  const dadosAtual = FLUXO_ATUAL[persona];
  const dadosSubida = FLUXO_SUBIDA[persona];
  const corPersona = persona.includes("Camila") ? "#C1121F" : "#E8471A";

  const etapaDetalhe = etapaAtiva !== null ? {
    atual: dadosAtual[etapaAtiva],
    subida: dadosSubida[etapaAtiva],
  } : null;

  return (
    <div style={{
      fontFamily: "Georgia, serif",
      backgroundColor: "#0D0D0D",
      minHeight: "100vh",
      color: "#E8E4DC",
    }}>
      {/* Header */}
      <div style={{
        padding: "28px 36px 20px",
        borderBottom: "1px solid #222",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        flexWrap: "wrap",
        gap: 16,
      }}>
        <div>
          <div style={{
            fontSize: 10, color: "#555", letterSpacing: "0.16em",
            textTransform: "uppercase", fontFamily: "monospace", marginBottom: 6,
          }}>
            iFood · Feature Subida · Journey Map
          </div>
          <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em" }}>
            Jornada do usuário
          </div>
          <div style={{ fontSize: 12, color: "#666", marginTop: 4 }}>
            Fluxo atual vs. com a feature Subida
          </div>
        </div>

        {/* Controles */}
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {/* Persona */}
          <div style={{ display: "flex", border: "1px solid #2A2A2A", borderRadius: 6, overflow: "hidden" }}>
            {PERSONAS.map((p) => (
              <button key={p} onClick={() => { setPersona(p); setEtapaAtiva(null); }}
                style={{
                  padding: "8px 14px", border: "none", cursor: "pointer",
                  fontSize: 12, fontFamily: "Georgia, serif",
                  backgroundColor: persona === p ? corPersona : "transparent",
                  color: persona === p ? "#fff" : "#666",
                  transition: "all 0.15s",
                }}>
                {p.includes("Camila") ? "📱 " : "🏍️ "}{p.split(" ")[0]}
              </button>
            ))}
          </div>

          {/* Modo */}
          <div style={{ display: "flex", border: "1px solid #2A2A2A", borderRadius: 6, overflow: "hidden" }}>
            {[["atual", "Fluxo atual"], ["subida", "Com Subida"], ["comparar", "Comparar"]].map(([v, l]) => (
              <button key={v} onClick={() => setModo(v)}
                style={{
                  padding: "8px 14px", border: "none", cursor: "pointer",
                  fontSize: 12, fontFamily: "monospace",
                  backgroundColor: modo === v ? "#1A1A1A" : "transparent",
                  color: modo === v ? "#E8E4DC" : "#555",
                  borderRight: "1px solid #2A2A2A",
                  transition: "all 0.15s",
                }}>
                {l}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ padding: "24px 36px" }}>

        {/* Curvas emocionais */}
        {(modo === "comparar" || modo === "atual" || modo === "subida") && (
          <div style={{
            backgroundColor: "#141414",
            borderRadius: 8,
            padding: "20px 24px",
            marginBottom: 24,
            border: "1px solid #1E1E1E",
          }}>
            <div style={{
              fontSize: 10, color: "#555", letterSpacing: "0.12em",
              textTransform: "uppercase", fontFamily: "monospace", marginBottom: 16,
            }}>
              Curva emocional ao longo da jornada
            </div>
            <div style={{ position: "relative" }}>
              {/* Labels do eixo Y */}
              <div style={{
                position: "absolute", left: -32, top: 0, height: 80,
                display: "flex", flexDirection: "column",
                justifyContent: "space-between", fontSize: 9,
                color: "#444", fontFamily: "monospace",
              }}>
                <span>😊</span><span>🙂</span><span>😐</span><span>😟</span><span>😤</span>
              </div>

              {(modo === "atual" || modo === "comparar") && (
                <div style={{ opacity: modo === "comparar" ? 0.5 : 1 }}>
                  <CurvaEmocional dados={dadosAtual} cor="#555" />
                </div>
              )}
              {(modo === "subida" || modo === "comparar") && (
                <div style={{
                  position: modo === "comparar" ? "absolute" : "relative",
                  top: modo === "comparar" ? 0 : undefined,
                }}>
                  <CurvaEmocional dados={dadosSubida} cor={corPersona} />
                </div>
              )}
            </div>

            {/* Labels das etapas */}
            <div style={{
              display: "flex", justifyContent: "space-between",
              paddingLeft: 20, paddingRight: 20, marginTop: 8,
            }}>
              {ETAPAS.map((e) => (
                <span key={e} style={{
                  fontSize: 9, color: "#444", fontFamily: "monospace",
                  textAlign: "center", maxWidth: 70,
                }}>{e}</span>
              ))}
            </div>

            {/* Legenda */}
            {modo === "comparar" && (
              <div style={{ display: "flex", gap: 20, marginTop: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div style={{ width: 24, height: 2, backgroundColor: "#555" }} />
                  <span style={{ fontSize: 11, color: "#555", fontFamily: "monospace" }}>Fluxo atual</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div style={{ width: 24, height: 2, backgroundColor: corPersona }} />
                  <span style={{ fontSize: 11, color: corPersona, fontFamily: "monospace" }}>Com Subida</span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tabela principal */}
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 800 }}>
            <thead>
              <tr>
                <th style={{
                  textAlign: "left", padding: "12px 16px",
                  fontSize: 10, color: "#444", fontFamily: "monospace",
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  borderBottom: "1px solid #1E1E1E", width: 120,
                }}>Etapa</th>

                {(modo === "atual" || modo === "comparar") && (
                  <th style={{
                    textAlign: "left", padding: "12px 16px",
                    fontSize: 10, color: "#444", fontFamily: "monospace",
                    letterSpacing: "0.1em", textTransform: "uppercase",
                    borderBottom: "1px solid #1E1E1E",
                    backgroundColor: modo === "comparar" ? "#111" : "transparent",
                  }}>
                    {modo === "comparar" ? "Fluxo atual" : "Ação · Pensamento · Emoção"}
                  </th>
                )}

                {(modo === "subida" || modo === "comparar") && (
                  <th style={{
                    textAlign: "left", padding: "12px 16px",
                    fontSize: 10, color: corPersona, fontFamily: "monospace",
                    letterSpacing: "0.1em", textTransform: "uppercase",
                    borderBottom: `1px solid ${corPersona}44`,
                    backgroundColor: modo === "comparar" ? "#111" : "transparent",
                  }}>
                    {modo === "comparar" ? "Com Subida" : "Ação · Pensamento · Emoção"}
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {ETAPAS.map((etapa, idx) => {
                const a = dadosAtual[idx];
                const s = dadosSubida[idx];
                const isAtiva = etapaAtiva === idx;

                return (
                  <tr
                    key={etapa}
                    onClick={() => setEtapaAtiva(isAtiva ? null : idx)}
                    style={{
                      cursor: "pointer",
                      backgroundColor: isAtiva ? "#161616" : idx % 2 === 0 ? "#0F0F0F" : "#111",
                      borderLeft: isAtiva ? `3px solid ${corPersona}` : "3px solid transparent",
                      transition: "all 0.15s",
                    }}
                  >
                    {/* Etapa */}
                    <td style={{
                      padding: "16px 16px",
                      borderBottom: "1px solid #191919",
                      verticalAlign: "top",
                    }}>
                      <div style={{
                        fontSize: 11, fontWeight: 700,
                        color: "#E8E4DC", fontFamily: "monospace",
                        letterSpacing: "0.04em",
                      }}>
                        {String(idx + 1).padStart(2, "0")}
                      </div>
                      <div style={{ fontSize: 12, color: "#AAA", marginTop: 4 }}>{etapa}</div>
                    </td>

                    {/* Coluna atual */}
                    {(modo === "atual" || modo === "comparar") && (
                      <td style={{
                        padding: "16px 16px",
                        borderBottom: "1px solid #191919",
                        verticalAlign: "top",
                        borderRight: modo === "comparar" ? "1px solid #1A1A1A" : "none",
                      }}>
                        <CelulaJornada dado={a} corPersona="#888" modo="atual" />
                      </td>
                    )}

                    {/* Coluna subida */}
                    {(modo === "subida" || modo === "comparar") && (
                      <td style={{
                        padding: "16px 16px",
                        borderBottom: "1px solid #191919",
                        verticalAlign: "top",
                        backgroundColor: s.novo ? `${corPersona}08` : "transparent",
                      }}>
                        <CelulaJornada dado={s} corPersona={corPersona} modo="subida" />
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Insight geral */}
        <div style={{
          marginTop: 28,
          padding: "20px 24px",
          backgroundColor: "#141414",
          borderRadius: 8,
          border: `1px solid ${corPersona}33`,
          borderLeft: `4px solid ${corPersona}`,
        }}>
          <div style={{
            fontSize: 10, color: corPersona,
            letterSpacing: "0.14em", textTransform: "uppercase",
            fontFamily: "monospace", marginBottom: 10, fontWeight: 700,
          }}>
            Síntese do journey map
          </div>
          {persona.includes("Camila") ? (
            <p style={{ fontSize: 13, color: "#BBB", lineHeight: 1.7, margin: 0 }}>
              O fluxo atual de Camila não tem um momento de consciência sobre o esforço do entregador.
              A Subida cria esse momento no checkout — onde a decisão é natural, o custo é baixo e a
              intenção já está ativa. A eliminação da ambiguidade na chegada ("vai subir ou não?")
              transforma uma micro-frustração recorrente em experiência fluida. A transferência automática
              remove a necessidade de qualquer ação adicional.
            </p>
          ) : (
            <p style={{ fontSize: 13, color: "#BBB", lineHeight: 1.7, margin: 0 }}>
              O ponto crítico de Rodrigo é o aceite da corrida — ele toma a decisão mais importante
              sem informação suficiente. A Subida resolve esse gap inserindo o valor no momento certo.
              O resultado: decisões mais informadas, menos ressentimento pós-corrida, e um trabalho
              que antes era invisível passa a aparecer na conta. A mudança não é de processo — é de
              reconhecimento.
            </p>
          )}
        </div>

        <div style={{
          marginTop: 12, fontSize: 11, color: "#333",
          fontFamily: "monospace", textAlign: "center",
        }}>
          Clique em qualquer etapa para expandir detalhes · Alterne personas e modos nos controles acima
        </div>
      </div>
    </div>
  );
}

function CelulaJornada({ dado, corPersona, modo }) {
  return (
    <div>
      {/* Badge novo */}
      {dado.novo && modo === "subida" && (
        <span style={{
          display: "inline-block",
          padding: "2px 8px",
          borderRadius: 3,
          fontSize: 9,
          fontWeight: 700,
          backgroundColor: corPersona + "22",
          color: corPersona,
          border: `1px solid ${corPersona}44`,
          fontFamily: "monospace",
          letterSpacing: "0.08em",
          marginBottom: 8,
          textTransform: "uppercase",
        }}>
          ✦ Novo momento
        </span>
      )}

      {/* Sentiment */}
      <div style={{
        display: "flex", alignItems: "center", gap: 6, marginBottom: 6,
      }}>
        <span style={{ fontSize: 14 }}>{sentimentEmoji(dado.sentiment)}</span>
        <span style={{
          fontSize: 10, color: sentimentColor(dado.sentiment),
          fontFamily: "monospace", fontWeight: 600,
        }}>
          {sentimentLabel(dado.sentiment)}
        </span>
      </div>

      {/* Ação */}
      <div style={{ fontSize: 12, color: "#CCC", lineHeight: 1.5, marginBottom: 6 }}>
        {dado.acao}
      </div>

      {/* Pensamento */}
      <div style={{
        fontSize: 11, color: "#666", fontStyle: "italic",
        lineHeight: 1.5, marginBottom: 6,
        paddingLeft: 8, borderLeft: "2px solid #222",
      }}>
        "{dado.pensamento}"
      </div>

      {/* Dor */}
      {dado.dor && (
        <div style={{
          fontSize: 11, color: "#C1121F",
          display: "flex", gap: 5, alignItems: "flex-start",
          marginTop: 6,
        }}>
          <span style={{ flexShrink: 0 }}>✕</span>
          <span style={{ lineHeight: 1.4 }}>{dado.dor}</span>
        </div>
      )}

      {/* Destaque (subida) */}
      {dado.destaque && (
        <div style={{
          marginTop: 8,
          padding: "8px 10px",
          backgroundColor: corPersona + "15",
          borderRadius: 4,
          border: `1px solid ${corPersona}33`,
          fontSize: 11,
          color: corPersona,
          lineHeight: 1.5,
        }}>
          {dado.destaque}
        </div>
      )}

      {/* Oportunidade (apenas fluxo atual) */}
      {dado.oportunidade && modo === "atual" && (
        <div style={{
          marginTop: 8,
          padding: "6px 10px",
          backgroundColor: "#1A1A1A",
          borderRadius: 4,
          fontSize: 10,
          color: "#555",
          fontFamily: "monospace",
          lineHeight: 1.5,
          borderLeft: "2px solid #333",
        }}>
          ↗ {dado.oportunidade}
        </div>
      )}
    </div>
  );
}
