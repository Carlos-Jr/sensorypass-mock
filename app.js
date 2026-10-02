/* ==========================================================================
   SensoryPass — Mock navegável
   ATENÇÃO: todos os dados abaixo são MOCK (fictícios). Não há backend,
   autenticação, geolocalização real, captura de áudio ou IA real.
   ========================================================================== */

"use strict";

/* --------------------------------------------------------------------------
   MOCK DATA — fonte única de todos os dados fictícios da demonstração
   -------------------------------------------------------------------------- */
const mockData = {
  child: {
    name: "João",
    age: 8,
    initials: "J",
    deviceConnected: true
  },

  guardian: {
    name: "Mariana",
    initials: "M",
    relation: "Responsável"
  },

  // Relógio simulado da demonstração (novos relatos usam este horário)
  clock: { hour: 15, minute: 2 },

  current: {
    activationLevel: "Habitual",
    noiseLevel: "Moderado",
    location: "Escola",
    updatedAt: "agora"
  },

  summary: {
    elevatedNoisePeriods: 2,
    activationChanges: 1
  },

  // Eventos do dispositivo (sem valores clínicos — apenas níveis)
  deviceEvents: [
    {
      id: "ev-1432",
      time: "14:32",
      kind: "activation",
      title: "Nível de ativação elevado",
      sub: "Ruído ambiente alto",
      context: { activation: "Elevado", noise: "Alto", place: "Escola" },
      relatedReportId: "r-1436"
    },
    {
      id: "ev-1210",
      time: "12:10",
      kind: "activation-ok",
      title: "Nível de ativação habitual",
      sub: "Ruído ambiente moderado",
      context: { activation: "Habitual", noise: "Moderado", place: "Escola" }
    },
    {
      id: "ev-1045",
      time: "10:45",
      kind: "noise",
      title: "Ruído ambiente elevado",
      sub: "Nível de ativação habitual",
      context: { activation: "Habitual", noise: "Alto", place: "Escola" }
    }
  ],

  reports: [
    {
      id: "r-1436",
      day: "today",
      time: "14:36",
      author: { name: "Mariana", role: "Responsável", initials: "M" },
      text: "Hoje o João ficou muito agitado depois do recreio e demorou alguns minutos para se acalmar.",
      analysis: {
        tone: "Preocupação",
        intensity: "Moderada",
        tags: ["Agitação", "Recreio", "Regulação"],
        summary: "João apresentou agitação após o recreio e levou alguns minutos para se regular."
      },
      context: { activation: "Elevado", noise: "Alto", place: "Escola", window: "14:26 e 14:46" }
    },
    {
      id: "r-1150",
      day: "today",
      time: "11:50",
      author: { name: "Carla", role: "Professora", initials: "C" },
      text: "Durante a aula de artes o João participou da atividade de desenho e mostrou o trabalho para os colegas.",
      analysis: {
        tone: "Tranquilidade",
        intensity: "Leve",
        tags: ["Escola", "Rotina", "Atividade"],
        summary: "João participou da atividade de artes e compartilhou o desenho com a turma."
      },
      context: { activation: "Habitual", noise: "Moderado", place: "Escola", window: "11:40 e 12:00" }
    },
    {
      id: "r-0730",
      day: "today",
      time: "07:30",
      author: { name: "Mariana", role: "Responsável", initials: "M" },
      text: "Acordou bem disposto e tomou café sem pressa. A rotina da manhã foi tranquila.",
      analysis: {
        tone: "Tranquilidade",
        intensity: "Leve",
        tags: ["Rotina", "Manhã"],
        summary: "A rotina da manhã foi descrita como tranquila."
      },
      context: { activation: "Habitual", noise: "Baixo", place: "Casa", window: "07:20 e 07:40" }
    },
    {
      id: "r-y1820",
      day: "yesterday",
      time: "18:20",
      author: { name: "Rafael", role: "Acompanhante", initials: "R" },
      text: "Na fila do mercado o João cobriu os ouvidos e pediu para esperar do lado de fora. Depois de alguns minutos voltou a conversar normalmente.",
      analysis: {
        tone: "Preocupação",
        intensity: "Leve",
        tags: ["Barulho", "Regulação"],
        summary: "O relato menciona incômodo com o barulho na fila e recuperação após alguns minutos."
      },
      context: { activation: "Elevado", noise: "Alto", place: "Mercado", window: "18:10 e 18:30" }
    },
    {
      id: "r-y1605",
      day: "yesterday",
      time: "16:05",
      author: { name: "Carla", role: "Professora", initials: "C" },
      text: "Na aula de música ficou mais quieto que o habitual e pediu para descansar no cantinho da calma.",
      analysis: {
        tone: "Cansaço",
        intensity: "Leve",
        tags: ["Escola", "Barulho", "Pausa"],
        summary: "João pediu uma pausa durante a aula de música e usou o cantinho da calma."
      },
      context: { activation: "Habitual", noise: "Moderado", place: "Escola", window: "15:55 e 16:15" }
    }
  ],

  // Resultado fixo do fluxo de gravação simulado
  recordingMock: {
    transcription: "Hoje o João ficou muito agitado depois do recreio e demorou alguns minutos para se acalmar.",
    analysis: {
      tone: "Preocupação",
      intensity: "Moderada",
      tags: ["Agitação", "Recreio", "Regulação"],
      summary: "João apresentou agitação após o recreio e levou alguns minutos para se regular."
    }
  },

  profile: {
    email: "mariana@exemplo.com",
    device: { name: "Pulseira SensoryPass", status: "Conectado • sincronizado agora" },
    authorized: [
      { name: "Carla", role: "Professora", access: "Registra relatos", initials: "C" },
      { name: "Rafael", role: "Acompanhante", access: "Registra relatos", initials: "R" },
      { name: "Dra. Beatriz", role: "Terapeuta ocupacional", access: "Visualiza relatos e insights", initials: "B" }
    ]
  },

  location: {
    // Coordenada genérica de demonstração (região central, sem endereço residencial)
    lat: -23.5505,
    lng: -46.6333,
    zoom: 16,
    place: "Escola",
    updatedAt: "há 2 minutos",
    updatedShort: "há 2 min",
    history: [
      { time: "14:58", place: "Escola", desc: "Última atualização" },
      { time: "07:40", place: "Escola", desc: "Chegada registrada" },
      { time: "07:15", place: "Casa", desc: "Saída registrada" }
    ]
  },

  insights: {
    period: "Últimos 7 dias",
    reports: 12,
    elevatedNoisePeriods: 5,
    activationChanges: 4,
    tones: [
      { label: "Tranquilidade", pct: 45, color: "var(--sp-teal)" },
      { label: "Preocupação", pct: 30, color: "var(--sp-primary)" },
      { label: "Cansaço", pct: 15, color: "var(--sp-primary-soft)" },
      { label: "Frustração", pct: 10, color: "var(--sp-coral)" }
    ],
    topics: ["Rotina", "Escola", "Recreio", "Barulho", "Regulação"],
    trend: "Nos relatos desta semana, referências a ambientes com maior nível de ruído apareceram com mais frequência junto a registros de alteração no nível de ativação."
  }
};

/* --------------------------------------------------------------------------
   Estado de interface
   -------------------------------------------------------------------------- */
const ui = {
  tab: "home",
  map: null,
  insightsLoaded: false,
  insightsError: false,
  flowToken: 0,          // invalida timeouts pendentes do fluxo de gravação
  recTimer: null,
  recSeconds: 0,
  draftText: "",
  lastFocus: null,
  newReportId: null
};

const TABS = {
  home: { hash: "inicio", screen: "screen-home" },
  reports: { hash: "relatos", screen: "screen-reports" },
  location: { hash: "localizacao", screen: "screen-location" },
  insights: { hash: "insights", screen: "screen-insights" },
  profile: { hash: "perfil", screen: "screen-profile" }
};

const LEVELS = {
  activation: { Baixo: 1, Habitual: 2, Elevado: 3 },
  noise: { Baixo: 1, Moderado: 2, Alto: 3, Elevado: 3 }
};

const DISCLAIMER = "Informações para acompanhamento e contexto. O SensoryPass não é um dispositivo médico.";
const PRIVACY = "Os dados da criança devem ser acessados apenas por pessoas autorizadas.";

/* --------------------------------------------------------------------------
   Utilitários
   -------------------------------------------------------------------------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const prefersReducedMotion = () =>
  window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function escapeHTML(str) {
  return String(str)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

const icon = (name) => `<i data-lucide="${name}" aria-hidden="true"></i>`;

function refreshIcons() {
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }
}

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function toMinutes(time) {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

function nextClockTime() {
  const c = mockData.clock;
  const label = `${String(c.hour).padStart(2, "0")}:${String(c.minute).padStart(2, "0")}`;
  c.minute += 1;
  if (c.minute >= 60) { c.minute = 0; c.hour += 1; }
  return label;
}

const todayReports = () => mockData.reports.filter((r) => r.day === "today");

function dayLabel(day) {
  return day === "today" ? "Hoje" : "Ontem";
}

function levelBar(kind, value) {
  const lvl = LEVELS[kind][value] || 0;
  return `<span class="level" data-level="${lvl}" aria-hidden="true"><span></span><span></span><span></span></span>`;
}

function animateNumber(el, to) {
  if (!el) return;
  const from = Number(el.textContent) || 0;
  if (from === to) return;
  if (prefersReducedMotion()) { el.textContent = to; return; }
  const start = performance.now();
  const dur = 400;
  const step = (now) => {
    const t = Math.min(1, (now - start) / dur);
    el.textContent = Math.round(from + (to - from) * (1 - Math.pow(1 - t, 3)));
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
  el.classList.remove("num-bump");
  void el.offsetWidth;
  el.classList.add("num-bump");
}

function bindText() {
  $$("[data-bind='child-name']").forEach((el) => (el.textContent = mockData.child.name));
  $$("[data-bind='guardian-name']").forEach((el) => (el.textContent = mockData.guardian.name));
}

/* --------------------------------------------------------------------------
   Componentes reutilizáveis
   -------------------------------------------------------------------------- */
function renderError({ title = "Não foi possível carregar esta informação.", text = "Tente novamente.", onRetry } = {}) {
  const el = document.createElement("div");
  el.className = "card state state--error";
  el.setAttribute("role", "alert");
  el.innerHTML = `
    <div class="state__art">${icon("cloud-off")}</div>
    <h2 class="state__title">${escapeHTML(title)}</h2>
    <p class="state__text">${escapeHTML(text)}</p>
    ${onRetry ? `<button class="btn btn--secondary" type="button">${icon("refresh-cw")} Tentar novamente</button>` : ""}
  `;
  if (onRetry) $("button", el).addEventListener("click", onRetry);
  return el;
}

function renderEmptyReports() {
  return `
    <div class="card state">
      <div class="state__art">${icon("message-square-plus")}</div>
      <h2 class="state__title">Ainda não há relatos registrados.</h2>
      <p class="state__text">Os relatos ajudam a construir uma visão mais completa do dia a dia de ${escapeHTML(mockData.child.name)}.</p>
      <button class="btn btn--primary" type="button" data-action="record">${icon("mic")} Registrar primeiro relato</button>
    </div>
  `;
}

function aiBlock(analysis, note) {
  return `
    <div class="ai-block">
      <div class="ai-block__head">
        <span class="ai-tag">${icon("sparkles")} Análise por IA</span>
        <span class="badge badge--mock">Análise do relato</span>
      </div>
      <dl class="ai-metrics">
        <div class="ai-metric"><dt>Tom percebido no relato</dt><dd>${escapeHTML(analysis.tone)}</dd></div>
        <div class="ai-metric"><dt>Intensidade</dt><dd>${escapeHTML(analysis.intensity)}</dd></div>
      </dl>
      <div class="chips" aria-label="Tags identificadas">
        ${analysis.tags.map((t) => `<span class="chip">${escapeHTML(t)}</span>`).join("")}
      </div>
      <p class="ai-summary"><strong>Resumo:</strong> ${escapeHTML(analysis.summary)}</p>
      <p class="ai-note">${icon("info")} <span>${escapeHTML(note)}</span></p>
    </div>
  `;
}

function sourceBlock(text, label = "Relato original") {
  return `
    <div class="source-block">
      <p class="source-block__label">${icon("quote")} ${escapeHTML(label)}</p>
      <p class="source-block__text">“${escapeHTML(text)}”</p>
    </div>
  `;
}

/* --------------------------------------------------------------------------
   Tela: Início
   -------------------------------------------------------------------------- */
function timelineItems() {
  const reports = todayReports().map((r) => ({
    id: r.id,
    time: r.time,
    kind: "report",
    title: `Relato registrado por ${r.author.name}`,
    sub: r.analysis.tags.slice(0, 2).map((t) => `#${t.toLowerCase()}`).join(" "),
    reportId: r.id
  }));
  return [...reports, ...mockData.deviceEvents].sort((a, b) => toMinutes(b.time) - toMinutes(a.time));
}

const TIMELINE_STYLE = {
  report: { icon: "message-square-text", tone: "tone-lilac" },
  activation: { icon: "gauge", tone: "tone-coral" },
  "activation-ok": { icon: "gauge", tone: "tone-indigo" },
  noise: { icon: "volume-2", tone: "tone-teal" }
};

function renderHome() {
  const { child, current, summary } = mockData;
  const items = timelineItems().slice(0, 6);
  const reportsCount = todayReports().length;

  $("#home-content").innerHTML = `
    <article class="card child-card" aria-label="Criança acompanhada">
      <span class="avatar avatar--ring" aria-hidden="true"><span>${escapeHTML(child.initials)}</span></span>
      <div class="child-card__info">
        <h2 class="child-card__name">${escapeHTML(child.name)}</h2>
        <p class="child-card__age">${child.age} anos</p>
        <span class="status"><span class="status__dot" aria-hidden="true"></span>${child.deviceConnected ? "Dispositivo conectado" : "Dispositivo desconectado"}</span>
      </div>
      <span class="child-card__device" title="Dispositivo SensoryPass">${icon("watch")}<span class="sr-only">Dispositivo SensoryPass</span></span>
    </article>

    <section class="section" aria-labelledby="now-title">
      <div class="section__head">
        <h2 id="now-title" class="section__title">Agora</h2>
      </div>
      <div class="now-grid">
        <div class="card now-card tone-indigo">
          <span class="now-card__icon">${icon("gauge")}</span>
          <span class="now-card__label">Nível de ativação</span>
          <span class="now-card__value">${escapeHTML(current.activationLevel)}${levelBar("activation", current.activationLevel)}</span>
        </div>
        <div class="card now-card tone-teal">
          <span class="now-card__icon">${icon("volume-2")}</span>
          <span class="now-card__label">Ruído ambiente</span>
          <span class="now-card__value">${escapeHTML(current.noiseLevel)}${levelBar("noise", current.noiseLevel)}</span>
        </div>
        <button class="card card--interactive now-card tone-lilac" type="button" data-goto="location" aria-label="Localização: ${escapeHTML(current.location)}. Abrir mapa">
          <span class="now-card__icon">${icon("map-pin")}</span>
          <span class="now-card__label">Localização</span>
          <span class="now-card__value">${escapeHTML(current.location)}</span>
        </button>
      </div>
      <p class="updated">${icon("refresh-cw")} Última atualização: ${escapeHTML(current.updatedAt)}</p>
    </section>

    <section class="section" aria-labelledby="summary-title">
      <div class="section__head">
        <h2 id="summary-title" class="section__title">Resumo de hoje</h2>
      </div>
      <div class="card summary">
        <div class="summary__row">
          <span class="icon-tile tone-lilac">${icon("message-square-text")}</span>
          <span class="summary__num" id="sum-reports">${reportsCount}</span>
          <span class="summary__text">${reportsCount === 1 ? "relato" : "relatos"}</span>
        </div>
        <div class="summary__row">
          <span class="icon-tile tone-teal">${icon("volume-2")}</span>
          <span class="summary__num">${summary.elevatedNoisePeriods}</span>
          <span class="summary__text">períodos de ruído elevado</span>
        </div>
        <div class="summary__row">
          <span class="icon-tile tone-coral">${icon("gauge")}</span>
          <span class="summary__num">${summary.activationChanges}</span>
          <span class="summary__text">alteração no nível de ativação</span>
        </div>
      </div>
    </section>

    <section class="section" aria-labelledby="timeline-title">
      <div class="section__head">
        <h2 id="timeline-title" class="section__title">Últimos acontecimentos</h2>
        <span class="section__meta">Hoje</span>
      </div>
      <ol class="timeline">
        ${items.map(timelineItem).join("")}
      </ol>
    </section>

    <aside class="footnote">
      ${icon("shield-check")}
      <span>${DISCLAIMER} ${PRIVACY} <button type="button" data-action="open-privacy">Sobre os dados</button></span>
    </aside>
  `;
  refreshIcons();
}

function timelineItem(item) {
  const style = TIMELINE_STYLE[item.kind];
  const isNew = item.reportId && item.reportId === ui.newReportId;
  const target = item.reportId ? `data-report="${item.reportId}"` : `data-event="${item.id}"`;
  return `
    <li class="timeline__item${isNew ? " is-new" : ""}">
      <span class="timeline__marker icon-tile ${style.tone}">${icon(style.icon)}</span>
      <button class="card card--interactive timeline__card" type="button" ${target}>
        <span class="timeline__body">
          <span class="timeline__time">${item.time}</span>
          <span class="timeline__title" style="display:block">${escapeHTML(item.title)}</span>
          ${item.sub ? `<span class="timeline__sub" style="display:block">${escapeHTML(item.sub)}</span>` : ""}
        </span>
        <span class="timeline__chev">${icon("chevron-right")}</span>
      </button>
    </li>
  `;
}

/* --------------------------------------------------------------------------
   Tela: Relatos
   -------------------------------------------------------------------------- */
function renderReports() {
  const container = $("#reports-content");
  if (mockData.reports.length === 0) {
    container.innerHTML = renderEmptyReports();
    refreshIcons();
    return;
  }

  let html = "";
  let lastDay = null;
  mockData.reports.forEach((r) => {
    if (r.day !== lastDay) {
      html += `<h2 class="report-day">${dayLabel(r.day)}</h2>`;
      lastDay = r.day;
    }
    html += reportCard(r);
  });

  container.innerHTML = `<div class="report-list">${html}</div>`;
  refreshIcons();
}

function reportCard(r) {
  const isNew = r.id === ui.newReportId;
  return `
    <button class="card card--interactive report-card${isNew ? " is-new" : ""}" type="button" data-report="${r.id}"
      aria-label="Relato de ${escapeHTML(r.author.name)}, ${dayLabel(r.day)} às ${r.time}. Abrir detalhes">
      <span class="report-card__head">
        <span class="avatar avatar--xs avatar--sm">${escapeHTML(r.author.initials)}</span>
        <span class="report-card__who">
          <span class="report-card__name" style="display:block">${escapeHTML(r.author.name)} • ${escapeHTML(r.author.role)}</span>
          <span class="report-card__when" style="display:block">${dayLabel(r.day)}, ${r.time}</span>
        </span>
        ${isNew ? `<span class="badge badge--neutral">Novo</span>` : ""}
        <span class="timeline__chev">${icon("chevron-right")}</span>
      </span>
      <span class="report-card__quote" style="display:block">“${escapeHTML(r.text)}”</span>
      <span class="chips">${r.analysis.tags.map((t) => `<span class="chip chip--hash">${escapeHTML(t.toLowerCase())}</span>`).join("")}</span>
      <span class="report-card__analysis">
        <span class="ai-tag">${icon("sparkles")} IA</span>
        <span class="kv"><span class="kv__k">Tom percebido no relato</span><span class="kv__v">${escapeHTML(r.analysis.tone)}</span></span>
        <span class="kv"><span class="kv__k">Intensidade</span><span class="kv__v">${escapeHTML(r.analysis.intensity)}</span></span>
      </span>
    </button>
  `;
}

/* --------------------------------------------------------------------------
   Detalhes: relato e evento do dispositivo
   -------------------------------------------------------------------------- */
function contextRows(ctx) {
  return `
    <div class="context-grid">
      <div class="context-row">
        <span class="icon-tile tone-coral">${icon("gauge")}</span>
        <span class="context-row__label">Nível de ativação</span>
        <span class="context-row__value">${escapeHTML(ctx.activation)}${levelBar("activation", ctx.activation)}</span>
      </div>
      <div class="context-row">
        <span class="icon-tile tone-teal">${icon("volume-2")}</span>
        <span class="context-row__label">Ruído ambiente</span>
        <span class="context-row__value">${escapeHTML(ctx.noise)}${levelBar("noise", ctx.noise)}</span>
      </div>
      <div class="context-row">
        <span class="icon-tile tone-lilac">${icon("map-pin")}</span>
        <span class="context-row__label">Local</span>
        <span class="context-row__value">${escapeHTML(ctx.place)}</span>
      </div>
    </div>
  `;
}

function openReportDetail(id) {
  const r = mockData.reports.find((x) => x.id === id);
  if (!r) return;

  openSheet(`
    <div class="sheet__step">
      <h2 id="sheet-title" class="sheet__title">Relato</h2>
      <p class="sheet__sub">${dayLabel(r.day)}, ${r.time}</p>

      <dl class="detail-meta">
        <div class="detail-meta__item"><dt>Registrado por</dt><dd>${escapeHTML(r.author.name)} • ${escapeHTML(r.author.role)}</dd></div>
        <div class="detail-meta__item"><dt>Origem</dt><dd>Relato em áudio</dd></div>
      </dl>

      <div class="detail-section">
        ${sourceBlock(r.text, "Texto original")}
      </div>

      <div class="detail-section">
        <h3 class="detail-section__title">Contexto próximo ao relato <span class="badge badge--neutral">${icon("watch")} Dispositivo</span></h3>
        ${contextRows(r.context)}
        <p class="context-note">${icon("clock")} Registros do dispositivo entre ${escapeHTML(r.context.window)}.</p>
      </div>

      <div class="flow-arrow" aria-hidden="true">${icon("arrow-down")}</div>

      <div>
        <h3 class="detail-section__title sr-only">Análise do relato</h3>
        ${aiBlock(r.analysis, "Análise automática baseada no conteúdo do relato. Ela descreve o texto registrado, não o estado da criança.")}
      </div>

      <p class="ai-note" style="margin-top:18px">${icon("shield-check")} <span>${DISCLAIMER}</span></p>
    </div>
  `);
}

function openEventDetail(id) {
  const ev = mockData.deviceEvents.find((x) => x.id === id);
  if (!ev) return;
  const related = ev.relatedReportId && mockData.reports.find((r) => r.id === ev.relatedReportId);

  openSheet(`
    <div class="sheet__step">
      <h2 id="sheet-title" class="sheet__title">${escapeHTML(ev.title)}</h2>
      <p class="sheet__sub">Hoje, ${ev.time} • Registro do dispositivo</p>

      <div class="detail-section">
        ${contextRows(ev.context)}
        <p class="context-note">${icon("info")} Níveis comparados ao padrão habitual registrado para ${escapeHTML(mockData.child.name)}.</p>
      </div>

      ${related ? `
      <div class="detail-section">
        <h3 class="detail-section__title">Relato próximo a este momento</h3>
        <button class="card card--interactive report-card" type="button" data-report="${related.id}" style="padding:14px 16px">
          <span class="report-card__when" style="display:block">${related.time} • ${escapeHTML(related.author.name)}</span>
          <span class="report-card__quote" style="display:block">“${escapeHTML(related.text)}”</span>
        </button>
      </div>` : ""}

      <p class="ai-note" style="margin-top:18px">${icon("shield-check")} <span>${DISCLAIMER}</span></p>
    </div>
  `);
}

function openPrivacy() {
  openSheet(`
    <div class="sheet__step">
      <img src="logo.png" alt="SensoryPass — Mais que tecnologia, cuidado. By Adelitas" class="about__logo" />
      <h2 id="sheet-title" class="sheet__title">Sobre os dados</h2>
      <p class="sheet__sub">${PRIVACY}</p>
      <ul class="about__list">
        <li><span class="icon-tile tone-indigo">${icon("users")}</span><span>O acesso às informações deve ser concedido pelos responsáveis às pessoas que acompanham a criança.</span></li>
        <li><span class="icon-tile tone-teal">${icon("heart-handshake")}</span><span>${DISCLAIMER}</span></li>
        <li><span class="icon-tile tone-lilac">${icon("sparkles")}</span><span>As análises por IA descrevem o conteúdo dos relatos e não substituem a avaliação de profissionais.</span></li>
        <li><span class="icon-tile tone-coral">${icon("flask-conical")}</span><span>Esta é uma demonstração: todos os dados são simulados e nenhuma informação é enviada ou armazenada.</span></li>
      </ul>
      <div class="about__demo" aria-label="Estados da demonstração">
        <button class="btn btn--ghost" type="button" data-action="demo-empty">${icon("inbox")} Ver estado sem relatos</button>
        <button class="btn btn--ghost" type="button" data-action="demo-error">${icon("cloud-off")} Ver estado de erro</button>
      </div>
    </div>
  `);
}

/* --------------------------------------------------------------------------
   Fluxo de gravação → transcrição → análise → salvar
   -------------------------------------------------------------------------- */
function openRecordingModal() {
  const token = ++ui.flowToken;
  ui.recSeconds = 0;
  ui.draftText = "";

  const bars = Array.from({ length: 32 }, (_, i) => {
    const h = (0.25 + Math.abs(Math.sin(i * 1.7)) * 0.75).toFixed(2);
    const delay = ((i * 83) % 900) / 1000;
    return `<span style="--h:${h};animation-delay:-${delay}s"></span>`;
  }).join("");

  openSheet(`
    <div class="sheet__step rec">
      <h2 id="sheet-title" class="sr-only">Gravação de relato</h2>
      <p class="rec__status" aria-live="polite"><span class="rec__status-dot" aria-hidden="true"></span>Gravando relato...</p>
      <p class="rec__timer" id="rec-timer" aria-label="Tempo de gravação">00:00</p>
      <div class="rec__mic" aria-hidden="true"><span class="rec__mic-core">${icon("mic")}</span></div>
      <div class="wave" aria-hidden="true">${bars}</div>
      <button class="btn btn--stop" type="button" data-action="finish-recording">
        <span class="stop-square" aria-hidden="true"></span> Finalizar
      </button>
      <p class="rec__hint">Gravação simulada — nenhum áudio é capturado.</p>
    </div>
  `, { onClose: stopRecordingTimer });

  stopRecordingTimer();
  ui.recTimer = setInterval(() => {
    if (token !== ui.flowToken) return stopRecordingTimer();
    ui.recSeconds += 1;
    const el = $("#rec-timer");
    if (el) {
      const m = String(Math.floor(ui.recSeconds / 60)).padStart(2, "0");
      const s = String(ui.recSeconds % 60).padStart(2, "0");
      el.textContent = `${m}:${s}`;
    }
  }, 1000);
}

function stopRecordingTimer() {
  if (ui.recTimer) clearInterval(ui.recTimer);
  ui.recTimer = null;
}

function processView(label) {
  return `
    <div class="sheet__step process" role="status" aria-live="polite">
      <h2 id="sheet-title" class="sr-only">${escapeHTML(label)}</h2>
      <div class="spinner" aria-hidden="true"></div>
      <p class="process__label">${escapeHTML(label)}</p>
      <div class="process__skeleton" aria-hidden="true">
        <div class="skeleton"></div><div class="skeleton"></div><div class="skeleton"></div>
      </div>
    </div>
  `;
}

async function finishRecording() {
  const token = ui.flowToken;
  stopRecordingTimer();
  setSheetContent(processView("Transcrevendo relato..."));
  await wait(900);
  if (token !== ui.flowToken) return;
  showTranscription(mockData.recordingMock.transcription);
}

function showTranscription(text) {
  setSheetContent(`
    <div class="sheet__step">
      <h2 id="sheet-title" class="sheet__title">Transcrição do relato</h2>
      <p class="sheet__sub">Registrado por ${escapeHTML(mockData.guardian.name)} • ${escapeHTML(mockData.guardian.relation)}</p>

      <div class="field">
        <label class="field__label" for="transcription">${icon("file-text")} Texto transcrito</label>
        <textarea class="textarea" id="transcription" rows="5">${escapeHTML(text)}</textarea>
        <p class="field__help">${icon("pencil")} Revise a transcrição antes de continuar.</p>
      </div>

      <div class="sheet__actions">
        <button class="btn btn--primary btn--block" type="button" data-action="analyze">${icon("sparkles")} Analisar relato</button>
        <button class="btn btn--ghost btn--block" type="button" data-action="record-again">${icon("rotate-ccw")} Gravar novamente</button>
      </div>
    </div>
  `);

  const ta = $("#transcription");
  const btn = $("[data-action='analyze']");
  ta.addEventListener("input", () => { btn.disabled = ta.value.trim().length === 0; });
}

async function analyzeReport() {
  const ta = $("#transcription");
  const text = (ta ? ta.value : ui.draftText).trim();
  if (!text) return;
  ui.draftText = text;

  const token = ui.flowToken;
  setSheetContent(processView("Analisando relato..."));
  await wait(1000);
  if (token !== ui.flowToken) return;
  showAnalysis(text);
}

function showAnalysis(text) {
  setSheetContent(`
    <div class="sheet__step">
      <h2 id="sheet-title" class="sheet__title">Análise do relato</h2>
      <p class="sheet__sub">Confira as informações antes de salvar.</p>

      <div class="reveal" style="margin-top:18px">
        ${sourceBlock(text)}
        <div class="flow-arrow" aria-hidden="true">${icon("arrow-down")}</div>
        ${aiBlock(mockData.recordingMock.analysis, "Análise gerada por IA a partir do relato. Ela pode não refletir todo o contexto — use como apoio, não como conclusão.")}
      </div>

      <div class="sheet__actions">
        <button class="btn btn--primary btn--block" type="button" data-action="save-report">${icon("check")} Salvar relato</button>
        <button class="btn btn--ghost btn--block" type="button" data-action="edit-transcription">${icon("pencil")} Editar texto</button>
      </div>
    </div>
  `);
}

function saveReport() {
  const text = ui.draftText || mockData.recordingMock.transcription;
  const { guardian, current } = mockData;
  const time = nextClockTime();
  const report = {
    id: `r-new-${Date.now()}`,
    day: "today",
    time,
    author: { name: guardian.name, role: guardian.relation, initials: guardian.initials },
    text,
    analysis: { ...mockData.recordingMock.analysis, tags: [...mockData.recordingMock.analysis.tags] },
    context: {
      activation: current.activationLevel,
      noise: current.noiseLevel,
      place: current.location,
      window: `${time} e o momento do registro`
    }
  };

  mockData.reports.unshift(report);
  mockData.insights.reports += 1;
  ui.newReportId = report.id;
  ui.flowToken++;

  closeSheet();

  const prevCount = todayReports().length - 1;
  renderReports();
  renderHome();
  renderInsightsIfLoaded();

  // Anima o contador a partir do valor anterior
  const sum = $("#sum-reports");
  if (sum) { sum.textContent = prevCount; animateNumber(sum, prevCount + 1); }

  showToast("Relato salvo com sucesso");
  window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" });
}

/* --------------------------------------------------------------------------
   Tela: Localização (Leaflet + OpenStreetMap, posição fixa simulada)
   -------------------------------------------------------------------------- */
function renderLocation() {
  const { location, child } = mockData;
  $("#location-content").innerHTML = `
    <article class="card loc-card">
      <div class="loc-card__top">
        <div class="loc-card__place">
          <p class="loc-card__eyebrow">${escapeHTML(child.name)} está em:</p>
          <h2 class="loc-card__name">${escapeHTML(location.place)}</h2>
          <div class="loc-card__meta">
            <span class="status"><span class="status__dot" aria-hidden="true"></span>Dispositivo conectado</span>
            <span>${icon("clock")} Última atualização: ${escapeHTML(location.updatedAt)}</span>
          </div>
        </div>
        <span class="icon-tile tone-lilac loc-card__pin">${icon("school")}</span>
      </div>
      <div class="map-wrap">
        <div class="map" id="map" role="region" aria-label="Mapa com a localização simulada de ${escapeHTML(child.name)}"></div>
      </div>
    </article>
    <p class="map-caption">${icon("info")} Localização simulada para demonstração.</p>

    <section class="section" aria-labelledby="places-title">
      <div class="section__head">
        <h2 id="places-title" class="section__title">Registros de hoje</h2>
      </div>
      <div class="card places">
        ${location.history.map((p) => `
          <div class="place">
            <span class="place__time">${p.time}</span>
            <span class="icon-tile ${p.place === "Casa" ? "tone-indigo" : "tone-lilac"}" style="width:34px;height:34px;border-radius:10px">${icon(p.place === "Casa" ? "house" : "school")}</span>
            <span class="place__name">${escapeHTML(p.place)} <span class="place__desc" style="display:block">${escapeHTML(p.desc)}</span></span>
          </div>`).join("")}
      </div>
    </section>

    <aside class="footnote">${icon("lock")}<span>${PRIVACY}</span></aside>
  `;
  refreshIcons();
}

function initMap() {
  const el = $("#map");
  if (!el) return;

  if (!window.L) {
    el.replaceWith(renderError({
      text: "O mapa precisa de conexão com a internet. Tente novamente.",
      onRetry: () => location.reload()
    }));
    refreshIcons();
    return;
  }

  const { lat, lng, zoom, updatedShort } = mockData.location;
  const map = L.map(el, { zoomControl: true, scrollWheelZoom: false, attributionControl: true }).setView([lat, lng], zoom);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.circle([lat, lng], {
    radius: 70, color: "#707CB8", weight: 1.5, opacity: .5, fillColor: "#A180BE", fillOpacity: .12
  }).addTo(map);

  const markerIcon = L.divIcon({
    className: "",
    html: `<div class="sp-marker"><span class="sp-marker__halo"></span><span class="sp-marker__ring"></span><span class="sp-marker__core">${escapeHTML(mockData.child.initials)}</span></div>`,
    iconSize: [48, 48],
    iconAnchor: [24, 24],
    popupAnchor: [0, -20]
  });

  const marker = L.marker([lat, lng], {
    icon: markerIcon,
    keyboard: true,
    title: `${mockData.child.name} — localização simulada`,
    alt: `${mockData.child.name} — localização simulada`
  }).addTo(map);

  marker.bindPopup(`
    <div class="popup">
      <div class="popup__name">${escapeHTML(mockData.child.name)}</div>
      <div class="popup__line">Última localização registrada</div>
      <div class="popup__muted">Atualizado ${escapeHTML(updatedShort)}</div>
      <span class="badge badge--mock">Localização simulada</span>
    </div>
  `);

  ui.map = map;
}

function ensureMap() {
  if (!ui.map) initMap();
  if (ui.map) {
    // A aba começa escondida: recalcula o tamanho depois que ela aparece
    requestAnimationFrame(() => ui.map && ui.map.invalidateSize());
    setTimeout(() => ui.map && ui.map.invalidateSize(), 300);
  }
}

/* --------------------------------------------------------------------------
   Tela: Insights
   -------------------------------------------------------------------------- */
function insightsSkeleton() {
  return `
    <div aria-busy="true" aria-label="Carregando insights">
      <div class="skeleton" style="width:140px;height:40px;border-radius:999px"></div>
      <div class="stats">
        ${'<div class="card stat"><div class="skeleton" style="width:32px;height:32px;border-radius:10px"></div><div class="skeleton" style="width:40px;height:22px"></div><div class="skeleton"></div></div>'.repeat(3)}
      </div>
      <div class="card" style="margin-top:28px;display:grid;gap:14px">
        <div class="skeleton" style="width:50%"></div><div class="skeleton"></div><div class="skeleton" style="width:80%"></div><div class="skeleton" style="width:60%"></div>
      </div>
    </div>
  `;
}

async function loadInsights() {
  const container = $("#insights-content");
  container.innerHTML = insightsSkeleton();
  await wait(prefersReducedMotion() ? 200 : 650);

  if (ui.insightsError) {
    ui.insightsError = false;
    container.innerHTML = "";
    container.appendChild(renderError({ onRetry: loadInsights }));
    refreshIcons();
    return;
  }

  ui.insightsLoaded = true;
  renderInsights();
  animateBars();
}

function renderInsightsIfLoaded() {
  if (ui.insightsLoaded) renderInsights(true);
}

function renderInsights(keepBars = false) {
  const ins = mockData.insights;
  const stats = [
    { label: "Relatos registrados", value: ins.reports, icon: "message-square-text", tone: "tone-lilac" },
    { label: "Períodos de ruído elevado", value: ins.elevatedNoisePeriods, icon: "volume-2", tone: "tone-teal" },
    { label: "Alterações no nível de ativação", value: ins.activationChanges, icon: "gauge", tone: "tone-coral" }
  ];

  $("#insights-content").innerHTML = `
    <button class="filter" type="button" data-action="filter" aria-haspopup="true" aria-label="Período: ${ins.period}">
      ${icon("calendar")} ${escapeHTML(ins.period)} ${icon("chevron-down")}
    </button>

    <div class="stats">
      ${stats.map((s) => `
        <div class="card stat">
          <span class="icon-tile ${s.tone}">${icon(s.icon)}</span>
          <span class="stat__num">${s.value}</span>
          <span class="stat__label">${s.label}</span>
        </div>`).join("")}
    </div>

    <section class="section" aria-labelledby="tones-title">
      <div class="section__head">
        <h2 id="tones-title" class="section__title">Tom dos relatos</h2>
        <span class="ai-tag">${icon("sparkles")} Análise por IA</span>
      </div>
      <div class="card bars">
        ${ins.tones.map((t) => `
          <div class="bar">
            <div class="bar__head"><span class="bar__name">${t.label}</span><span class="bar__pct">${t.pct}%</span></div>
            <div class="bar__track" role="img" aria-label="${t.label}: ${t.pct}% dos relatos">
              <div class="bar__fill" data-pct="${t.pct}" style="background:${t.color};${keepBars ? `width:${t.pct}%` : ""}"></div>
            </div>
          </div>`).join("")}
        <p class="ai-note" style="margin-top:0">${icon("info")} <span>Tom percebido no texto dos relatos, não no estado da criança.</span></p>
      </div>
    </section>

    <section class="section" aria-labelledby="topics-title">
      <div class="section__head">
        <h2 id="topics-title" class="section__title">Assuntos recorrentes</h2>
      </div>
      <div class="chips">
        ${ins.topics.map((t) => `<span class="chip chip--lg chip--outline">${escapeHTML(t)}</span>`).join("")}
      </div>
    </section>

    <section class="section" aria-labelledby="trend-title">
      <article class="card card--accent trend">
        <span class="ai-tag">${icon("sparkles")} Análise por IA</span>
        <h2 id="trend-title" class="trend__title">${icon("trending-up")} Tendência observada</h2>
        <p class="trend__text">${escapeHTML(ins.trend)}</p>
        <div class="trend__assoc" aria-label="Registros observados juntos">
          <span class="chip">${icon("volume-2")} Ruído elevado</span>
          <span class="trend__plus">aparece junto a</span>
          <span class="chip">${icon("gauge")} Alteração no nível de ativação</span>
        </div>
        <p class="trend__foot">Associação observada nos registros, sem indicar causa. Essas informações servem como apoio para que o profissional tenha mais contexto sobre o dia a dia da criança.</p>
      </article>
    </section>

    <aside class="footnote">${icon("shield-check")}<span>${DISCLAIMER}</span></aside>
  `;
  refreshIcons();
}

function animateBars() {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      $$("#insights-content .bar__fill").forEach((el) => { el.style.width = `${el.dataset.pct}%`; });
    });
  });
}

/* --------------------------------------------------------------------------
   Tela: Perfil
   -------------------------------------------------------------------------- */
function renderProfile() {
  const { guardian, child, profile } = mockData;
  const row = ({ icon: ic, tone, title, sub, action }) => `
    <button class="list__row" type="button" data-action="${action}">
      <span class="icon-tile ${tone}">${icon(ic)}</span>
      <span class="list__main"><span class="list__title">${escapeHTML(title)}</span>${sub ? `<span class="list__sub">${escapeHTML(sub)}</span>` : ""}</span>
      <span class="timeline__chev">${icon("chevron-right")}</span>
    </button>`;

  $("#profile-content").innerHTML = `
    <article class="card card--accent profile-card">
      <span class="avatar avatar--sm">${escapeHTML(guardian.initials)}</span>
      <div>
        <h2 class="profile-card__name">${escapeHTML(guardian.name)}</h2>
        <p class="profile-card__role">${escapeHTML(guardian.relation)} de ${escapeHTML(child.name)}</p>
        <p class="profile-card__mail">${escapeHTML(profile.email)}</p>
      </div>
    </article>

    <section class="section" aria-labelledby="profile-child-title">
      <div class="section__head"><h2 id="profile-child-title" class="section__title">Criança acompanhada</h2></div>
      <div class="card list">
        <div class="list__row">
          <span class="avatar avatar--xs" aria-hidden="true">${escapeHTML(child.initials)}</span>
          <span class="list__main"><span class="list__title">${escapeHTML(child.name)}</span><span class="list__sub">${child.age} anos</span></span>
        </div>
        <div class="list__row">
          <span class="icon-tile tone-teal">${icon("watch")}</span>
          <span class="list__main"><span class="list__title">${escapeHTML(profile.device.name)}</span><span class="list__sub">${escapeHTML(profile.device.status)}</span></span>
          <span class="status"><span class="status__dot" aria-hidden="true"></span><span class="sr-only">Conectado</span></span>
        </div>
      </div>
    </section>

    <section class="section" aria-labelledby="profile-people-title">
      <div class="section__head">
        <h2 id="profile-people-title" class="section__title">Pessoas autorizadas</h2>
        <span class="section__meta">${profile.authorized.length} pessoas</span>
      </div>
      <div class="card list">
        ${profile.authorized.map((p) => `
          <div class="list__row">
            <span class="avatar avatar--xs avatar--sm" aria-hidden="true">${escapeHTML(p.initials)}</span>
            <span class="list__main"><span class="list__title">${escapeHTML(p.name)} • ${escapeHTML(p.role)}</span><span class="list__sub">${escapeHTML(p.access)}</span></span>
          </div>`).join("")}
        ${row({ icon: "user-plus", tone: "tone-indigo", title: "Convidar pessoa", sub: "Professor, acompanhante ou profissional", action: "illustrative" })}
      </div>
    </section>

    <section class="section" aria-labelledby="profile-prefs-title">
      <div class="section__head"><h2 id="profile-prefs-title" class="section__title">Preferências</h2></div>
      <div class="card list">
        ${row({ icon: "bell", tone: "tone-coral", title: "Notificações", sub: "Resumo diário e novos relatos", action: "illustrative" })}
        ${row({ icon: "shield-check", tone: "tone-teal", title: "Privacidade e dados", sub: "Quem pode acessar as informações", action: "open-privacy" })}
        ${row({ icon: "log-out", tone: "tone-lilac", title: "Sair", sub: "", action: "illustrative" })}
      </div>
    </section>

    <div class="profile-foot">
      <img src="logo.png" alt="SensoryPass — Mais que tecnologia, cuidado. By Adelitas" />
      <p>Versão de demonstração • todos os dados são simulados.<br />${DISCLAIMER}</p>
    </div>
  `;
  refreshIcons();
}

/* --------------------------------------------------------------------------
   Navegação entre abas (sem reload)
   -------------------------------------------------------------------------- */
function showScreen(tab, { focus = false } = {}) {
  if (!TABS[tab]) return;
  const prev = ui.tab;
  ui.tab = tab;

  $$(".tab").forEach((btn) => {
    const active = btn.dataset.tab === tab;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-selected", String(active));
    btn.tabIndex = active ? 0 : -1;
  });

  $$(".screen").forEach((screen) => {
    const active = screen.dataset.screen === tab;
    screen.hidden = !active;
    screen.classList.remove("is-entering");
    if (active && prev !== tab) {
      void screen.offsetWidth;
      screen.classList.add("is-entering");
    }
  });

  if (prev !== tab) window.scrollTo({ top: 0, behavior: "auto" });
  history.replaceState(null, "", `#${TABS[tab].hash}`);

  if (tab === "location") ensureMap();
  if (tab === "insights") {
    if (!ui.insightsLoaded) loadInsights();
    else if (prev !== tab) {
      $$("#insights-content .bar__fill").forEach((el) => (el.style.width = "0"));
      animateBars();
    }
  }
  if (tab !== "reports" && tab !== "home") ui.newReportId = null;

  if (focus) $("#main").focus({ preventScroll: true });
}

function tabFromHash() {
  const hash = location.hash.replace("#", "");
  return Object.keys(TABS).find((k) => TABS[k].hash === hash) || "home";
}

/* --------------------------------------------------------------------------
   Bottom sheet (modal acessível)
   -------------------------------------------------------------------------- */
let sheetOnClose = null;
let sheetCloseTimer = null;

function openSheet(html, { onClose } = {}) {
  const layer = $("#sheet-layer");
  const wasOpen = !layer.hidden && layer.classList.contains("is-open");

  if (sheetOnClose && sheetOnClose !== onClose) sheetOnClose();
  sheetOnClose = onClose || null;
  clearTimeout(sheetCloseTimer);

  if (!wasOpen) ui.lastFocus = document.activeElement;
  $("#sheet-body").innerHTML = html;
  refreshIcons();

  layer.hidden = false;
  document.body.style.overflow = "hidden";
  $("#app").querySelectorAll(".screens, .tabbar").forEach((el) => el.setAttribute("aria-hidden", "true"));
  $("#sheet").scrollTop = 0;

  requestAnimationFrame(() => {
    layer.classList.add("is-open");
    focusFirstIn($("#sheet"));
  });
}

function setSheetContent(html) {
  $("#sheet-body").innerHTML = html;
  $("#sheet").scrollTop = 0;
  refreshIcons();
  focusFirstIn($("#sheet"));
}

function focusFirstIn(root) {
  const target = root.querySelector(".sheet__body textarea, .sheet__body .btn--primary, .sheet__body .btn--stop") || root;
  target.focus({ preventScroll: true });
}

function closeSheet() {
  const layer = $("#sheet-layer");
  if (layer.hidden) return;

  ui.flowToken++;
  if (sheetOnClose) { sheetOnClose(); sheetOnClose = null; }

  layer.classList.remove("is-open");
  document.body.style.overflow = "";
  $("#app").querySelectorAll(".screens, .tabbar").forEach((el) => el.removeAttribute("aria-hidden"));

  sheetCloseTimer = setTimeout(() => {
    layer.hidden = true;
    $("#sheet-body").innerHTML = "";
  }, prefersReducedMotion() ? 0 : 320);

  if (ui.lastFocus && document.contains(ui.lastFocus)) ui.lastFocus.focus({ preventScroll: true });
}

function trapFocus(e) {
  const layer = $("#sheet-layer");
  if (layer.hidden || e.key !== "Tab") return;
  const focusables = $$("#sheet button, #sheet textarea, #sheet a[href], #sheet [tabindex]:not([tabindex='-1'])")
    .filter((el) => !el.disabled && el.offsetParent !== null);
  if (!focusables.length) return;
  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
}

/* --------------------------------------------------------------------------
   Toast
   -------------------------------------------------------------------------- */
function showToast(message, { type = "success" } = {}) {
  const region = $("#toast-region");
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <span class="toast__icon" style="${type === "info" ? "background:var(--color-primary-action)" : ""}">${icon(type === "info" ? "info" : "check")}</span>
    <span>${escapeHTML(message)}</span>
  `;
  region.appendChild(toast);
  refreshIcons();

  setTimeout(() => {
    toast.classList.add("is-leaving");
    setTimeout(() => toast.remove(), 260);
  }, 2600);
}

/* --------------------------------------------------------------------------
   Estados de demonstração (vazio / erro)
   -------------------------------------------------------------------------- */
function demoEmptyState() {
  mockData.reports = [];
  ui.newReportId = null;
  closeSheet();
  renderReports();
  renderHome();
  showScreen("reports");
}

function demoErrorState() {
  ui.insightsLoaded = false;
  ui.insightsError = true;
  closeSheet();
  showScreen("insights");
}

/* --------------------------------------------------------------------------
   Eventos
   -------------------------------------------------------------------------- */
function handleClick(e) {
  const tabBtn = e.target.closest(".tab");
  if (tabBtn) { showScreen(tabBtn.dataset.tab); return; }

  const goto = e.target.closest("[data-goto]");
  if (goto) { showScreen(goto.dataset.goto); return; }

  const reportBtn = e.target.closest("[data-report]");
  if (reportBtn) { openReportDetail(reportBtn.dataset.report); return; }

  const eventBtn = e.target.closest("[data-event]");
  if (eventBtn) { openEventDetail(eventBtn.dataset.event); return; }

  const actionEl = e.target.closest("[data-action]");
  if (!actionEl) return;

  switch (actionEl.dataset.action) {
    case "record":
    case "record-again":
      openRecordingModal();
      break;
    case "finish-recording":
      finishRecording();
      break;
    case "analyze":
      analyzeReport();
      break;
    case "edit-transcription":
      showTranscription(ui.draftText);
      break;
    case "save-report":
      saveReport();
      break;
    case "close-sheet":
      closeSheet();
      break;
    case "open-privacy":
      openPrivacy();
      break;
    case "filter":
      showToast("Filtro ilustrativo nesta demonstração", { type: "info" });
      break;
    case "illustrative":
      showToast("Opção ilustrativa nesta demonstração", { type: "info" });
      break;
    case "demo-empty":
      demoEmptyState();
      break;
    case "demo-error":
      demoErrorState();
      break;
  }
}

function handleKeydown(e) {
  if (e.key === "Escape" && !$("#sheet-layer").hidden) { closeSheet(); return; }
  trapFocus(e);

  // Setas na barra inferior (padrão de tablist)
  if (e.target.classList && e.target.classList.contains("tab") && (e.key === "ArrowRight" || e.key === "ArrowLeft")) {
    const tabs = $$(".tab");
    const i = tabs.indexOf(e.target);
    const next = tabs[(i + (e.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length];
    next.focus();
    showScreen(next.dataset.tab);
  }
}

/* --------------------------------------------------------------------------
   Inicialização
   -------------------------------------------------------------------------- */
function hideSplash() {
  const splash = $("#splash");
  if (!splash) return;
  setTimeout(() => {
    splash.classList.add("is-hidden");
    setTimeout(() => splash.remove(), 450);
  }, prefersReducedMotion() ? 300 : 1100);
}

function init() {
  bindText();
  renderHome();
  renderReports();
  renderLocation();
  renderProfile();

  document.addEventListener("click", handleClick);
  document.addEventListener("keydown", handleKeydown);
  window.addEventListener("hashchange", () => showScreen(tabFromHash()));

  showScreen(tabFromHash());
  refreshIcons();
  hideSplash();
}

document.addEventListener("DOMContentLoaded", init);
