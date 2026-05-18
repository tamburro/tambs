'use client';
import { useState } from "react";

// ─── DADOS ────────────────────────────────────────────────────────────────────

const FLUXOS = {
  usuario: {
    label: "Usuária — Camila",
    emoji: "📱",
    cor: "#C1121F",
    telas: [
      {
        id: "u1",
        titulo: "Checkout — resumo do pedido",
        descricao: "Tela existente, sem alteração",
        status: "existente",
        decisoes: [],
        anotacoes: "Ponto de entrada natural. Não alteramos nada aqui — a Subida aparece logo abaixo, na seção de entrega.",
        tela: {
          tipo: "checkout",
          itens: ["🍔 X-Tudo Especial", "🥤 Suco de Laranja"],
          subtotal: "R$ 48,00",
          taxa: "R$ 5,99",
          total: "R$ 53,99",
        },
      },
      {
        id: "u2",
        titulo: "Checkout — bloco Subida",
        descricao: "Novo componente inserido antes do botão de confirmar",
        status: "novo",
        decisoes: [
          {
            titulo: "Por que no checkout, não pós-entrega?",
            decisao: "Inserir no checkout garante que o valor seja visível ao entregador antes do aceite. Gorjeta pós-entrega tem baixa adesão e não cria o incentivo pré-corrida que é o diferencial da feature.",
            alternativa: "Gorjeta pós-entrega (modelo atual do iFood)",
          },
          {
            titulo: "Por que stepper e não valores predefinidos?",
            decisao: "O stepper dá sensação de controle e personalização. Valores predefinidos (botões R$3, R$5, R$10) trazem âncora social — podem criar pressão ou parecer insuficientes. O stepper é neutro e fluido.",
            alternativa: "Chips de valor fixo (R$3 / R$5 / R$10)",
          },
          {
            titulo: "Por que 'sugestão' e não taxa obrigatória?",
            decisao: "Obrigatório aumentaria adoção forçada mas destruiria a percepção de gesto voluntário — que é o posicionamento da feature. 'Sugestão' mantém a agência do usuário e o tom de reconhecimento.",
            alternativa: "Taxa fixa obrigatória por andar",
          },
          {
            titulo: "Por que mostrar 'vai direto para o entregador'?",
            decisao: "Transparência sobre o destino do dinheiro é o principal motivador de conversão. Sem essa frase, parece que o iFood fica com parte. Com ela, o gesto tem significado claro.",
            alternativa: "Omitir — deixar subentendido",
          },
        ],
        anotacoes: "O componente é opt-in: desativado por padrão. O usuário precisa ligar o toggle para ativar a Subida. Isso preserva a voluntariedade e evita cobrança surpresa.",
        tela: {
          tipo: "subida-bloco",
          ativo: false,
          valor: 3,
        },
      },
      {
        id: "u3",
        titulo: "Checkout — Subida ativada",
        descricao: "Estado após o usuário ligar o toggle",
        status: "novo",
        decisoes: [
          {
            titulo: "Por que o total atualiza em tempo real?",
            decisao: "Feedback imediato confirma que a ação foi registrada e qual será o custo final. Evita surpresa na cobrança e aumenta confiança.",
            alternativa: "Mostrar o total só na confirmação",
          },
          {
            titulo: "Por que o mínimo é R$3 e não R$0?",
            decisao: "Valor mínimo evita gestos simbólicos que não compensam o esforço do entregador. R$3 foi calibrado para ser percebido como razoável — nem alto demais para desincentivar, nem baixo demais para parecer desrespeitoso.",
            alternativa: "Sem mínimo (começa em R$0)",
          },
        ],
        anotacoes: "O stepper desabilita o '−' quando o valor está no mínimo (R$3). O '+' não tem trava visual — o usuário pode ir até R$20 livremente.",
        tela: {
          tipo: "subida-bloco",
          ativo: true,
          valor: 5,
        },
      },
      {
        id: "u4",
        titulo: "Notificação — entregador aceitou a subida",
        descricao: "Push/in-app enviado quando o entregador aceita a corrida com Subida",
        status: "novo",
        decisoes: [
          {
            titulo: "Por que notificar o aceite da subida separadamente?",
            decisao: "Cria um 'contrato social' explícito entre usuário e entregador. Elimina a ambiguidade de 'vai subir ou não?' — maior fonte de atrito na chegada.",
            alternativa: "Mostrar no status da corrida sem notificação separada",
          },
        ],
        anotacoes: "Texto direto: nome do entregador + confirmação da subida. Sem CTA — é informação, não ação.",
        tela: {
          tipo: "notificacao",
          texto: "Marcos confirmou a subida até sua porta 🏠",
          sub: "Sua comida chegará diretamente ao seu andar.",
        },
      },
      {
        id: "u5",
        titulo: "Notificação — gorjeta transferida",
        descricao: "Enviada automaticamente X minutos após confirmação de entrega",
        status: "novo",
        decisoes: [
          {
            titulo: "Por que transferência automática e não confirmação do usuário?",
            decisao: "Confirmação ativa tem baixa adesão — colocaria o pagamento do trabalhador como refém da inércia do usuário. Transferência automática é o padrão; contestação é a exceção.",
            alternativa: "Usuário confirma que o entregador subiu",
          },
          {
            titulo: "Por que informar o usuário da transferência?",
            decisao: "Fecha o loop da experiência. O usuário sabe que o dinheiro chegou ao destino certo — reforça a percepção de impacto real do gesto.",
            alternativa: "Transferência silenciosa sem notificação",
          },
        ],
        anotacoes: "A notificação inclui link discreto para contestação. Deve ser link de baixo destaque — não queremos incentivar contestações, apenas garantir que a opção existe.",
        tela: {
          tipo: "notificacao",
          texto: "Sua gorjeta de R$5,00 foi transferida para Marcos ✓",
          sub: "O valor chegou diretamente para o entregador.",
          link: "Algo errado? Contestar",
        },
      },
    ],
  },
  entregador: {
    label: "Entregador — Rodrigo",
    emoji: "🏍️",
    cor: "#E8471A",
    telas: [
      {
        id: "e1",
        titulo: "Card da corrida — sem Subida",
        descricao: "Estado atual — para referência e comparação",
        status: "existente",
        decisoes: [],
        anotacoes: "O entregador vê: restaurante, distância, valor estimado da corrida. Não vê o andar, não sabe se haverá subida. Decisão cega.",
        tela: {
          tipo: "corrida-card",
          restaurante: "X-Burguer Vila Mariana",
          distancia: "2,3 km",
          valor: "R$ 8,50",
          subida: false,
          subidaValor: null,
        },
      },
      {
        id: "e2",
        titulo: "Card da corrida — com Subida",
        descricao: "Novo estado: badge de Subida visível antes do aceite",
        status: "novo",
        decisoes: [
          {
            titulo: "Por que mostrar a Subida no card de aceite?",
            decisao: "Esse é o momento de decisão do entregador. Mostrar o valor aqui transforma a Subida de recompensa em incentivo — ele pode aceitar a corrida *por causa* da gorjeta, não apenas recebê-la depois.",
            alternativa: "Mostrar apenas após a entrega",
          },
          {
            titulo: "Por que badge destacado e não texto simples?",
            decisao: "A Subida é informação de alta relevância financeira. Precisa de hierarquia visual clara para não ser ignorada em aceites rápidos. Badge colorido em zona de alta atenção.",
            alternativa: "Linha de texto no corpo do card",
          },
          {
            titulo: "Por que mostrar o valor exato e não só 'tem subida'?",
            decisao: "O entregador toma uma decisão financeira. Valor vago ('tem gorjeta') não permite calcular se compensa. Valor exato ('R$5,00') é a informação mínima para uma decisão informada.",
            alternativa: "'Subida disponível' sem valor",
          },
        ],
        anotacoes: "O badge aparece apenas quando o usuário ativou a Subida. Corridas sem Subida continuam com o layout atual — sem ruído adicional.",
        tela: {
          tipo: "corrida-card",
          restaurante: "X-Burguer Vila Mariana",
          distancia: "2,3 km",
          valor: "R$ 8,50",
          subida: true,
          subidaValor: "R$ 5,00",
        },
      },
      {
        id: "e3",
        titulo: "Confirmação de aceite — tela de detalhes",
        descricao: "Após aceitar a corrida com Subida, detalhe expandido",
        status: "novo",
        decisoes: [
          {
            titulo: "Por que uma tela de detalhe e não só o card?",
            decisao: "O entregador precisa entender o compromisso antes de iniciar. A tela de detalhe mostra as regras da Subida de forma clara — subir até a porta, gorjeta garantida — sem espaço para ambiguidade.",
            alternativa: "Apenas o card de aceite sem detalhe adicional",
          },
        ],
        anotacoes: "Tela deve ser rápida de processar — entregador em movimento. Máximo 3 pontos de atenção: onde buscar, onde entregar, quanto vai receber. Zero fluff.",
        tela: {
          tipo: "aceite-detalhe",
          restaurante: "X-Burguer Vila Mariana",
          endereco: "Rua dos Pinheiros, 420 — Apto 112",
          subidaValor: "R$ 5,00",
          regra: "Entregar até a porta do apartamento",
        },
      },
      {
        id: "e4",
        titulo: "Notificação de recebimento",
        descricao: "Confirmação de que a gorjeta foi creditada",
        status: "novo",
        decisoes: [
          {
            titulo: "Por que notificar o crédito separadamente?",
            decisao: "Fecha o loop para o entregador — confirma que o sistema funcionou como prometido. Reforça a confiança na feature e no iFood.",
            alternativa: "Aparecer só no extrato semanal",
          },
        ],
        anotacoes: "Notificação deve chegar logo após a janela de contestação fechar — sinal claro de que o valor está garantido.",
        tela: {
          tipo: "notificacao",
          texto: "Gorjeta de R$5,00 creditada na sua conta 💰",
          sub: "Referente à entrega em Pinheiros.",
        },
      },
    ],
  },
};

// ─── COMPONENTES DE TELA MOCKUP ───────────────────────────────────────────────

function MockupCheckout({ tela }) {
  return (
    <div style={phoneShell}>
      <div style={statusBar} />
      <div style={{ padding: "12px 14px", flex: 1, overflowY: "auto" }}>
        <div style={mockTitle}>Resumo do pedido</div>
        {tela.itens?.map((it, i) => (
          <div key={i} style={mockRow}>
            <span style={{ fontSize: 11, color: "#333" }}>{it}</span>
          </div>
        ))}
        <div style={{ height: 1, backgroundColor: "#F0F0F0", margin: "10px 0" }} />
        {[["Subtotal", tela.subtotal], ["Taxa de entrega", tela.taxa]].map(([l, v]) => (
          <div key={l} style={{ ...mockRow, justifyContent: "space-between" }}>
            <span style={{ fontSize: 10, color: "#888" }}>{l}</span>
            <span style={{ fontSize: 10, color: "#333" }}>{v}</span>
          </div>
        ))}
        <div style={{ ...mockRow, justifyContent: "space-between", marginTop: 6 }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: "#111" }}>Total</span>
          <span style={{ fontSize: 12, fontWeight: 700, color: "#111" }}>{tela.total}</span>
        </div>
      </div>
    </div>
  );
}

function MockupSubidaBloco({ tela }) {
  const cor = "#C1121F";
  return (
    <div style={phoneShell}>
      <div style={statusBar} />
      <div style={{ padding: "10px 14px", flex: 1 }}>
        <div style={mockTitle}>Confirmar pedido</div>

        {/* Bloco subida */}
        <div style={{
          border: `1.5px solid ${tela.ativo ? cor : "#E8E8E8"}`,
          borderRadius: 8,
          padding: "10px 12px",
          backgroundColor: tela.ativo ? "#FFF5F5" : "#FAFAFA",
          marginTop: 8,
          transition: "all 0.2s",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: tela.ativo ? 8 : 0 }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#111" }}>🏠 Gorjeta de Subida</div>
              <div style={{ fontSize: 9, color: "#888", marginTop: 2 }}>vai direto para o entregador</div>
            </div>
            {/* Toggle */}
            <div style={{
              width: 34, height: 18, borderRadius: 9,
              backgroundColor: tela.ativo ? cor : "#DDD",
              position: "relative", cursor: "pointer",
              transition: "background 0.2s",
            }}>
              <div style={{
                position: "absolute", top: 2,
                left: tela.ativo ? 18 : 2,
                width: 14, height: 14, borderRadius: "50%",
                backgroundColor: "#fff",
                boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                transition: "left 0.2s",
              }} />
            </div>
          </div>

          {tela.ativo && (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
              <button style={{
                width: 24, height: 24, borderRadius: "50%",
                border: `1.5px solid ${cor}`,
                backgroundColor: "transparent", color: cor,
                fontSize: 14, cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                lineHeight: 1,
              }}>−</button>
              <span style={{ fontSize: 14, fontWeight: 700, color: cor, minWidth: 50, textAlign: "center" }}>
                R$ {tela.valor},00
              </span>
              <button style={{
                width: 24, height: 24, borderRadius: "50%",
                border: `1.5px solid ${cor}`,
                backgroundColor: cor, color: "#fff",
                fontSize: 14, cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                lineHeight: 1,
              }}>+</button>
            </div>
          )}
        </div>

        {/* Total */}
        <div style={{ ...mockRow, justifyContent: "space-between", marginTop: 10 }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: "#111" }}>Total</span>
          <span style={{ fontSize: 12, fontWeight: 700, color: "#111" }}>
            R$ {tela.ativo ? (53.99 + tela.valor).toFixed(2) : "53,99"}
          </span>
        </div>

        {/* Botão */}
        <div style={{
          marginTop: 10, padding: "10px",
          backgroundColor: cor, borderRadius: 8,
          textAlign: "center", fontSize: 12,
          fontWeight: 700, color: "#fff",
        }}>
          Confirmar pedido
        </div>
      </div>
    </div>
  );
}

function MockupNotificacao({ tela }) {
  return (
    <div style={phoneShell}>
      <div style={statusBar} />
      <div style={{ padding: "20px 14px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{
          backgroundColor: "#fff",
          borderRadius: 12,
          padding: "12px 14px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
          border: "1px solid #F0F0F0",
        }}>
          <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
            <div style={{
              width: 32, height: 32, borderRadius: 8,
              backgroundColor: "#E8471A",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 16, flexShrink: 0,
            }}>🍔</div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#111", lineHeight: 1.4 }}>{tela.texto}</div>
              <div style={{ fontSize: 10, color: "#888", marginTop: 3 }}>{tela.sub}</div>
              {tela.link && (
                <div style={{ fontSize: 9, color: "#AAA", marginTop: 6, textDecoration: "underline" }}>{tela.link}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MockupCorridaCard({ tela }) {
  const cor = "#E8471A";
  return (
    <div style={phoneShell}>
      <div style={{ ...statusBar, backgroundColor: "#1A1A1A" }} />
      <div style={{ padding: "10px 14px", flex: 1, backgroundColor: "#111" }}>
        <div style={{ fontSize: 10, color: "#555", fontFamily: "monospace", marginBottom: 8 }}>NOVO PEDIDO</div>
        <div style={{
          backgroundColor: "#1A1A1A",
          borderRadius: 10,
          padding: "12px",
          border: "1px solid #2A2A2A",
        }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#E8E4DC" }}>{tela.restaurante}</div>
          <div style={{ fontSize: 10, color: "#555", marginTop: 2 }}>{tela.distancia} · Estimado</div>

          {tela.subida && (
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 5,
              marginTop: 8, padding: "4px 8px",
              backgroundColor: `${cor}22`,
              border: `1px solid ${cor}44`,
              borderRadius: 4,
            }}>
              <span style={{ fontSize: 10 }}>🏠</span>
              <span style={{ fontSize: 10, fontWeight: 700, color: cor }}>Subida · {tela.subidaValor}</span>
            </div>
          )}

          <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
            <div style={{
              flex: 1, padding: "8px",
              border: "1px solid #333", borderRadius: 6,
              textAlign: "center", fontSize: 12, color: "#666",
            }}>Recusar</div>
            <div style={{
              flex: 1, padding: "8px",
              backgroundColor: cor, borderRadius: 6,
              textAlign: "center", fontSize: 12,
              fontWeight: 700, color: "#fff",
            }}>
              {tela.subida ? `Aceitar · ${tela.valor} + ${tela.subidaValor}` : `Aceitar · ${tela.valor}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MockupAceiteDetalhe({ tela }) {
  const cor = "#E8471A";
  return (
    <div style={phoneShell}>
      <div style={{ ...statusBar, backgroundColor: "#1A1A1A" }} />
      <div style={{ padding: "10px 14px", flex: 1, backgroundColor: "#111" }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: "#E8E4DC", marginBottom: 10 }}>Detalhes da corrida</div>
        {[
          ["🍔 Buscar em", tela.restaurante],
          ["📍 Entregar em", tela.endereco],
          ["🏠 Subida", tela.regra],
        ].map(([l, v]) => (
          <div key={l} style={{
            padding: "8px 0",
            borderBottom: "1px solid #1E1E1E",
          }}>
            <div style={{ fontSize: 9, color: "#555", fontFamily: "monospace" }}>{l}</div>
            <div style={{ fontSize: 11, color: "#CCC", marginTop: 3 }}>{v}</div>
          </div>
        ))}
        <div style={{
          marginTop: 12, padding: "10px 12px",
          backgroundColor: `${cor}15`,
          border: `1px solid ${cor}33`,
          borderRadius: 6,
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}>
          <span style={{ fontSize: 11, color: "#888" }}>Gorjeta garantida</span>
          <span style={{ fontSize: 14, fontWeight: 700, color: cor }}>{tela.subidaValor}</span>
        </div>
      </div>
    </div>
  );
}

function RenderTela({ tela }) {
  switch (tela.tipo) {
    case "checkout": return <MockupCheckout tela={tela} />;
    case "subida-bloco": return <MockupSubidaBloco tela={tela} />;
    case "notificacao": return <MockupNotificacao tela={tela} />;
    case "corrida-card": return <MockupCorridaCard tela={tela} />;
    case "aceite-detalhe": return <MockupAceiteDetalhe tela={tela} />;
    default: return null;
  }
}

// ─── ESTILOS COMPARTILHADOS ───────────────────────────────────────────────────

const phoneShell = {
  width: 180, minHeight: 300,
  backgroundColor: "#fff",
  borderRadius: 20,
  border: "6px solid #1A1A1A",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
  flexShrink: 0,
};

const statusBar = {
  height: 16,
  backgroundColor: "#F5F5F5",
  borderBottom: "1px solid #EEE",
};

const mockTitle = {
  fontSize: 13, fontWeight: 700,
  color: "#111", marginBottom: 8,
};

const mockRow = {
  display: "flex", alignItems: "center",
  padding: "4px 0",
};

// ─── COMPONENTE PRINCIPAL ─────────────────────────────────────────────────────

export default function FluxoTelas() {
  const [persona, setPersona] = useState("usuario");
  const [telaAtiva, setTelaAtiva] = useState(0);

  const fluxo = FLUXOS[persona];
  const tela = fluxo.telas[telaAtiva];

  return (
    <div style={{
      fontFamily: "Georgia, serif",
      backgroundColor: "#0A0A0A",
      minHeight: "100vh",
      color: "#E8E4DC",
      display: "flex",
      flexDirection: "column",
    }}>
      {/* Header */}
      <div style={{
        padding: "24px 32px 20px",
        borderBottom: "1px solid #1A1A1A",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        flexWrap: "wrap",
        gap: 12,
      }}>
        <div>
          <div style={{
            fontSize: 10, color: "#444", letterSpacing: "0.16em",
            textTransform: "uppercase", fontFamily: "monospace", marginBottom: 6,
          }}>
            iFood · Feature Subida · Fluxo de Telas
          </div>
          <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em" }}>
            Decisões de UI
          </div>
        </div>

        {/* Persona toggle */}
        <div style={{
          display: "flex", border: "1px solid #222",
          borderRadius: 6, overflow: "hidden",
        }}>
          {Object.entries(FLUXOS).map(([k, v]) => (
            <button key={k} onClick={() => { setPersona(k); setTelaAtiva(0); }}
              style={{
                padding: "8px 16px", border: "none", cursor: "pointer",
                fontSize: 12, fontFamily: "Georgia, serif",
                backgroundColor: persona === k ? v.cor : "transparent",
                color: persona === k ? "#fff" : "#555",
                transition: "all 0.15s",
              }}>
              {v.emoji} {v.label.split("—")[0].trim()}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>

        {/* Sidebar — lista de telas */}
        <div style={{
          width: 220, flexShrink: 0,
          borderRight: "1px solid #1A1A1A",
          padding: "16px 0",
          overflowY: "auto",
        }}>
          {fluxo.telas.map((t, i) => (
            <button key={t.id} onClick={() => setTelaAtiva(i)}
              style={{
                width: "100%", textAlign: "left",
                padding: "10px 16px",
                border: "none", cursor: "pointer",
                backgroundColor: telaAtiva === i ? "#161616" : "transparent",
                borderLeft: telaAtiva === i ? `3px solid ${fluxo.cor}` : "3px solid transparent",
                transition: "all 0.15s",
              }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 3 }}>
                <span style={{
                  fontSize: 9, fontFamily: "monospace",
                  color: telaAtiva === i ? fluxo.cor : "#444",
                }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                {t.status === "novo" && (
                  <span style={{
                    fontSize: 8, padding: "1px 5px",
                    backgroundColor: `${fluxo.cor}22`,
                    color: fluxo.cor,
                    borderRadius: 3, fontFamily: "monospace",
                    fontWeight: 700, letterSpacing: "0.06em",
                  }}>NOVO</span>
                )}
              </div>
              <div style={{
                fontSize: 11,
                color: telaAtiva === i ? "#E8E4DC" : "#666",
                lineHeight: 1.4,
                fontWeight: telaAtiva === i ? 600 : 400,
              }}>
                {t.titulo}
              </div>
            </button>
          ))}
        </div>

        {/* Conteúdo principal */}
        <div style={{
          flex: 1, display: "flex",
          gap: 0, overflow: "hidden",
        }}>
          {/* Mockup */}
          <div style={{
            width: 280, flexShrink: 0,
            display: "flex", alignItems: "center",
            justifyContent: "center",
            padding: 24,
            borderRight: "1px solid #1A1A1A",
            backgroundColor: "#0D0D0D",
          }}>
            <RenderTela tela={tela.tela} />
          </div>

          {/* Anotações + Decisões */}
          <div style={{ flex: 1, overflowY: "auto", padding: "24px 28px" }}>
            {/* Header da tela */}
            <div style={{ marginBottom: 20 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                <span style={{
                  fontSize: 10, fontFamily: "monospace",
                  color: fluxo.cor, fontWeight: 700,
                }}>
                  TELA {String(telaAtiva + 1).padStart(2, "0")}
                </span>
                <span style={{
                  fontSize: 10, padding: "2px 7px",
                  backgroundColor: tela.status === "novo" ? `${fluxo.cor}22` : "#1A1A1A",
                  color: tela.status === "novo" ? fluxo.cor : "#555",
                  borderRadius: 3, fontFamily: "monospace",
                  fontWeight: 600,
                }}>
                  {tela.status === "novo" ? "NOVO" : "EXISTENTE"}
                </span>
              </div>
              <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.01em" }}>
                {tela.titulo}
              </div>
              <div style={{ fontSize: 12, color: "#555", marginTop: 4 }}>
                {tela.descricao}
              </div>
            </div>

            {/* Anotações */}
            {tela.anotacoes && (
              <div style={{
                padding: "12px 14px",
                backgroundColor: "#141414",
                borderRadius: 6,
                border: "1px solid #1E1E1E",
                marginBottom: 20,
              }}>
                <div style={{
                  fontSize: 9, color: "#444", fontFamily: "monospace",
                  letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6,
                }}>
                  Anotação de design
                </div>
                <p style={{ fontSize: 12, color: "#AAA", lineHeight: 1.6, margin: 0 }}>
                  {tela.anotacoes}
                </p>
              </div>
            )}

            {/* Decisões */}
            {tela.decisoes.length > 0 && (
              <div>
                <div style={{
                  fontSize: 9, color: "#444", fontFamily: "monospace",
                  letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12,
                }}>
                  Decisões de design ({tela.decisoes.length})
                </div>
                {tela.decisoes.map((d, i) => (
                  <div key={i} style={{
                    marginBottom: 14,
                    borderRadius: 6,
                    border: "1px solid #1E1E1E",
                    overflow: "hidden",
                  }}>
                    <div style={{
                      padding: "10px 14px",
                      backgroundColor: "#141414",
                      borderBottom: "1px solid #1E1E1E",
                    }}>
                      <div style={{
                        fontSize: 11, fontWeight: 700,
                        color: "#E8E4DC", lineHeight: 1.4,
                      }}>
                        {d.titulo}
                      </div>
                    </div>
                    <div style={{ padding: "10px 14px", backgroundColor: "#0F0F0F" }}>
                      <p style={{
                        fontSize: 12, color: "#AAA",
                        lineHeight: 1.6, margin: "0 0 8px",
                      }}>
                        {d.decisao}
                      </p>
                      <div style={{
                        fontSize: 10, color: "#444",
                        fontFamily: "monospace",
                        display: "flex", alignItems: "center", gap: 5,
                      }}>
                        <span style={{ color: "#333" }}>↗ Alternativa descartada:</span>
                        <span style={{ color: "#555" }}>{d.alternativa}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {tela.decisoes.length === 0 && (
              <div style={{
                padding: "12px 14px",
                backgroundColor: "#0F0F0F",
                borderRadius: 6,
                border: "1px solid #1A1A1A",
                fontSize: 12, color: "#444", fontFamily: "monospace",
              }}>
                Tela existente — sem alterações. Mantida como referência de fluxo.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
