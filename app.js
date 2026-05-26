const STORAGE_KEYS = {
  quotes: "anthas-cava-quotes-v1",
  catalog: "anthas-cava-catalog-v1",
  templates: "anthas-cava-templates-v1",
};

const seedTemplates = [
  {
    id: "mixta-10-12",
    name: "Mixta",
    size: "10-12 pp",
    indirect: 450,
    margin: 0.55,
    items: [
      item("walmart", "queso crema", "GR", 180, 44, 180, 360),
      item("walmart", "Ritzs", "GR", 89, 15, 89, 89),
      item("walmart", "mermelada", "GR", 270, 28, 270, 100),
      item("walmart", "chipotle", "GR", 105, 18, 105, 50),
      item("walmart", "uva verde", "GR", 1000, 110, 920, 600),
      item("S", "jamon pavo FUD", "GR", 1000, 177, 1000, 900),
      item("S", "cinta de oro", "GR", 1000, 460, 1000, 300),
      item("Walmart", "tomate cherry", "GR", 283, 55, 283, 140),
      item("walmart", "aceituna", "GR", 190, 21, 190, 75),
      item("Bodega", "Queso manchego", "GR", 100, 16, 100, 200),
      item("C", "nuez", "GR", 100, 33.5, 100, 50),
      item("C", "pistache", "GR", 100, 37.5, 50, 50),
      item("C", "cacahuate", "GR", 100, 8.8, 100, 50),
      item("serranita", "charola 25x34cm", "PZ", 1, 40, 1, 1),
      item("alsuper", "romero", "GR", 50, 40, 50, 20),
    ],
  },
  {
    id: "mixta-5-7",
    name: "Mixta",
    size: "5-7 pp",
    indirect: 450,
    margin: 0.55,
    items: [
      item("walmart", "queso crema", "GR", 180, 44, 180, 180),
      item("walmart", "Ritzs", "GR", 89, 15, 89, 63, "22pz"),
      item("walmart", "mermelada", "GR", 270, 28, 270, 100),
      item("walmart", "chipotle", "GR", 105, 18, 105, 50),
      item("walmart", "uva verde", "GR", 1000, 110, 920, 500),
      item("granel", "jamon pavo", "GR", 500, 89, 500, 400),
      item("S", "cinta de oro", "GR", 1000, 460, 1000, 200),
      item("Walmart", "tomate cherry", "GR", 283, 55, 283, 100),
      item("walmart", "aceituna", "GR", 190, 21, 190, 50),
      item("Bodega", "Queso manchego", "GR", 100, 16, 100, 200),
      item("C", "nuez", "GR", 100, 33.5, 100, 25),
      item("C", "pistache", "GR", 100, 37.5, 50, 25),
      item("C", "cacahuate", "GR", 100, 8.8, 100, 25),
      item("serranita", "charola 15x25", "PZ", 1, 26, 1, 1),
      item("alsuper", "romero", "GR", 50, 40, 50, 20),
    ],
  },
  {
    id: "sencilla-10",
    name: "Sencilla",
    size: "10 pp",
    indirect: 450,
    margin: 0.55,
    items: [
      item("w", "queso crema", "GR", 180, 44, 180, 360),
      item("Bodega", "Queso manchego", "GR", 100, 16, 100, 200),
      item("w", "Crackets", "GR", 135, 20, 135, 135),
      item("w", "mermelada", "GR", 270, 28, 270, 100),
      item("W", "chipotle", "GR", 105, 18, 105, 50),
      item("W", "uva verde", "GR", 1000, 110, 920, 500),
      item("gr", "jamon pavo", "GR", 250, 45, 250, 200),
      item("C", "nuez", "GR", 100, 33.5, 100, 50),
      item("C", "cacahuate", "GR", 100, 8.8, 100, 50),
      item("serranita", "charola 15x25", "PZ", 1, 26, 1, 1),
      item("serranita", "vaso 4A", "PZ", 50, 35, 50, 2),
      item("alsuper", "romero", "GR", 50, 40, 50, 20),
    ],
  },
  {
    id: "queso-pan",
    name: "Queso y pan",
    size: "10 pp",
    indirect: 450,
    margin: 0.55,
    items: [
      item("w", "queso crema", "GR", 180, 44, 180, 360),
      item("w", "Ritzs", "GR", 89, 15, 89, 89),
      item("w", "mermelada", "GR", 270, 28, 270, 100),
      item("W", "chipotle", "GR", 105, 18, 105, 50),
      item("w", "uva verde", "GR", 1000, 110, 920, 500),
      item("W", "baguette multigrano", "PZ", 1, 25, 1, 1),
      item("C", "ajonjoli negro", "GR", 75, 22, 75, 25),
      item("serranita", "charola 15x25", "PZ", 1, 26, 1, 1),
      item("serranita", "vaso 4A", "PZ", 50, 35, 50, 2),
      item("bodega", "Queso manchego", "GR", 100, 16, 100, 200),
    ],
  },
  {
    id: "charcuteria",
    name: "Charcuteria",
    size: "10 pp",
    indirect: 450,
    margin: 0.55,
    items: [
      item("w", "queso crema", "GR", 180, 44, 180, 180),
      item("bodega", "Queso manchego", "GR", 100, 16, 100, 100),
      item("S", "cinta de oro", "GR", 1000, 460, 1000, 300),
      item("w", "Ritzs", "GR", 89, 15, 89, 89),
      item("W", "Tomate", "GR", 1000, 37, 925, 250),
      item("alsuper", "albahaca", "GR", 50, 40, 50, 20),
      item("W", "aceituna", "GR", 190, 21, 190, 50),
      item("", "chile morita", "GR", 100, 22, 100, 10),
      item("C", "cacahuate", "GR", 100, 10, 100, 20),
      item("", "charola 15x25", "PZ", 1, 26, 1, 1),
      item("", "romero", "GR", 50, 40, 50, 20),
    ],
  },
  {
    id: "botana-med-10",
    name: "Botana MED",
    size: "10 pp",
    indirect: 300,
    margin: 0.5,
    items: [
      item("w", "Jicama", "GR", 1000, 32, 850, 700),
      item("W", "zanahoria", "GR", 500, 7, 430, 500),
      item("S", "pepino", "GR", 1000, 19, 875, 700),
      item("S", "apio", "GR", 500, 19, 400, 300),
      item("W", "Ranch great value", "ML", 250, 28, 250, 100),
      item("S", "Chamoy", "ML", 370, 15, 370, 100),
      item("W", "tajin dulce", "GR", 160, 35, 160, 100),
      item("W", "tajin", "GR", 80, 27, 80, 80),
      item("serranita", "charola 15x40", "PZ", 1, 40, 1, 1),
      item("serranita", "vaso 4A", "PZ", 50, 35, 50, 4),
    ],
  },
];

let state = {
  current: null,
  catalog: [],
  quotes: [],
  templates: [],
  mode: "simple",
  catalogFilter: "all",
  catalogSort: "category",
  tourStep: 0,
};

const tourSteps = [
  {
    target: "#clientName",
    view: "quote",
    title: "Datos del cliente",
    text: "Empieza escribiendo el cliente. Este nombre se usa en historial, WhatsApp y PDF.",
  },
  {
    target: "#templateSelect",
    view: "quote",
    title: "Elige una plantilla",
    text: "La plantilla define la tabla que estas cotizando en la partida activa.",
  },
  {
    target: "#addLine",
    view: "quote",
    title: "Agrega partidas",
    text: "Si el cliente pide tablas diferentes, usa Partida para sumarlas en el mismo pedido.",
  },
  {
    target: ".lines-panel",
    view: "quote",
    title: "Edita cada partida",
    text: "Aqui ves todas las tablas del pedido. Presiona Editar para ajustar cada una.",
  },
  {
    target: ".totals-panel",
    view: "quote",
    title: "Revisa el total",
    text: "El total del pedido suma partidas, extras y ajustes finales.",
  },
  {
    target: "#simplePanel",
    view: "quote",
    title: "Extras y notas",
    text: "Agrega envio, charola premium o notas que si vera el cliente.",
  },
  {
    target: "#advancedMode",
    view: "quote",
    mode: "advanced",
    title: "Modo avanzado",
    text: "Activa Avanzada cuando necesites ver o modificar ingredientes y costos.",
  },
  {
    target: "#catalog-title",
    view: "catalog",
    title: "Catalogo ordenado",
    text: "En Catalogo puedes clasificar ingredientes por categoria y proveedor.",
  },
  {
    target: "#saveQuote",
    view: "quote",
    title: "Cierra el pedido",
    text: "Guarda, copia compras, genera PDF o abre WhatsApp. El resumen se copia para pegarlo.",
  },
];

const $ = (selector) => document.querySelector(selector);
const money = new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: "MXN",
  maximumFractionDigits: 2,
});

function item(supplier, name, unit, purchaseQty, purchaseCost, netQty, usedQty, note = "") {
  return {
    id: cryptoId(),
    enabled: true,
    supplier,
    name,
    unit,
    purchaseQty,
    purchaseCost,
    netQty,
    usedQty,
    note,
  };
}

function cryptoId() {
  if (window.crypto?.randomUUID) {
    return window.crypto.randomUUID();
  }
  return `id-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function toNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : 0;
}

function normalize(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function catalogKey(row) {
  return `${normalize(row.name)}|${normalize(row.unit)}`;
}

function buildCatalogFromTemplates() {
  const map = new Map();
  state.templates.forEach((template) => {
    template.items.forEach((row) => {
      const key = catalogKey(row);
      if (!map.has(key)) {
        map.set(key, {
          id: cryptoId(),
          category: inferCategory(row),
          supplier: row.supplier,
          name: row.name,
          unit: row.unit,
          purchaseQty: row.purchaseQty,
          purchaseCost: row.purchaseCost,
          netQty: row.netQty,
        });
      }
    });
  });
  return [...map.values()].sort((a, b) => a.name.localeCompare(b.name, "es"));
}

function loadStorage() {
  state.templates = readJson(STORAGE_KEYS.templates) || clone(seedTemplates);
  state.templates = state.templates.map(normalizeTemplate);
  state.catalog = (readJson(STORAGE_KEYS.catalog) || buildCatalogFromTemplates()).map(normalizeCatalogItem);
  state.quotes = (readJson(STORAGE_KEYS.quotes) || []).map(normalizeQuote);
}

function readJson(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function saveCatalog() {
  localStorage.setItem(STORAGE_KEYS.catalog, JSON.stringify(state.catalog));
}

function saveQuotes() {
  localStorage.setItem(STORAGE_KEYS.quotes, JSON.stringify(state.quotes));
}

function saveTemplates() {
  localStorage.setItem(STORAGE_KEYS.templates, JSON.stringify(state.templates));
}

function normalizeTemplate(template) {
  return {
    ...template,
    id: template.id || cryptoId(),
    name: template.name || "Plantilla",
    size: template.size || "",
    indirect: toNumber(template.indirect),
    margin: toNumber(template.margin || 0.5),
    items: (template.items || []).map((row) => ({
      ...item("", row.name || "Ingrediente", row.unit || "GR", 1, 0, 1, 0),
      ...row,
      id: row.id || cryptoId(),
      enabled: row.enabled !== false,
    })),
  };
}

function normalizeCatalogItem(row) {
  return {
    id: row.id || cryptoId(),
    category: row.category || inferCategory(row),
    supplier: row.supplier || "",
    name: row.name || "Nuevo producto",
    unit: row.unit || "GR",
    purchaseQty: toNumber(row.purchaseQty || 1),
    purchaseCost: toNumber(row.purchaseCost),
    netQty: toNumber(row.netQty || row.purchaseQty || 1),
  };
}

function inferCategory(row) {
  const name = normalize(row.name);
  if (/(charola|vaso|film|empaque|caja|bolsa)/.test(name)) return "Empaque";
  if (/(queso|crema|manchego)/.test(name)) return "Quesos";
  if (/(jamon|pavo|cinta|salami|pepperoni|alpino)/.test(name)) return "Carnes frias";
  if (/(uva|tomate|jicama|zanahoria|pepino|apio|albahaca|romero)/.test(name)) return "Fruta y verdura";
  if (/(nuez|pistache|cacahuate|ajonjoli)/.test(name)) return "Semillas y nueces";
  if (/(ritz|cracket|baguette|pan)/.test(name)) return "Pan y galletas";
  if (/(mermelada|chipotle|chamoy|tajin|ranch|morita|aceituna)/.test(name)) return "Salsas y complementos";
  return "Otros";
}

function normalizeQuote(quote) {
  const legacyLine =
    quote.items && quote.items.length
      ? {
          id: quote.lineId || cryptoId(),
          templateId: quote.templateId,
          templateName: quote.templateName,
          quantity: quote.quantity,
          wholesale: quote.wholesale,
          indirect: quote.indirect,
          margin: quote.margin,
          finalPrice: quote.finalPrice,
          manualFinalPrice: quote.manualFinalPrice,
          items: quote.items,
        }
      : null;
  const linesSource = quote.lines && quote.lines.length ? quote.lines : legacyLine ? [legacyLine] : [];
  const lines = linesSource.map(normalizeLine);
  return {
    ...quote,
    id: quote.id || cryptoId(),
    client: quote.client || "",
    phone: quote.phone || "",
    eventDate: quote.eventDate || "",
    reminderAt: quote.reminderAt || "",
    activeLineId: quote.activeLineId || lines[0]?.id || "",
    notes: quote.notes || "",
    extras: (quote.extras || []).map((extra) => ({
      id: extra.id || cryptoId(),
      enabled: extra.enabled !== false,
      name: extra.name || "Extra",
      cost: toNumber(extra.cost),
      price: toNumber(extra.price),
    })),
    lines,
  };
}

function normalizeLine(line) {
  return {
    id: line.id || cryptoId(),
    templateId: line.templateId || state.templates[0]?.id || "",
    templateName: line.templateName || getTemplateName(line.templateId),
    quantity: Math.max(1, Math.round(toNumber(line.quantity || 1))),
    wholesale: Boolean(line.wholesale),
    indirect: toNumber(line.indirect),
    margin: toNumber(line.margin || 0.5),
    finalPrice: line.finalPrice ?? null,
    manualFinalPrice: Boolean(line.manualFinalPrice),
    items: (line.items || []).map((row) => ({
      ...item("", row.name || "Ingrediente", row.unit || "GR", 1, 0, 1, 0),
      ...row,
      id: row.id || cryptoId(),
      enabled: row.enabled !== false,
    })),
  };
}

function createLineFromTemplate(templateId) {
  const template = state.templates.find((entry) => entry.id === templateId) || state.templates[0];
  return normalizeLine({
    id: cryptoId(),
    templateId: template.id,
    templateName: `${template.name} ${template.size}`.trim(),
    quantity: 1,
    wholesale: false,
    indirect: template.indirect,
    margin: template.margin,
    finalPrice: null,
    manualFinalPrice: false,
    items: clone(template.items).map((row) => ({ ...row, id: cryptoId() })),
  });
}

function createQuoteFromTemplate(templateId) {
  const line = createLineFromTemplate(templateId);
  return normalizeQuote({
    id: cryptoId(),
    createdAt: new Date().toISOString(),
    client: "",
    phone: "",
    eventDate: "",
    reminderAt: "",
    activeLineId: line.id,
    notes: "",
    extras: [],
    lines: [line],
  });
}

function activeLine() {
  if (!state.current.lines.length) {
    const line = createLineFromTemplate(state.templates[0].id);
    state.current.lines.push(line);
    state.current.activeLineId = line.id;
  }
  return state.current.lines.find((line) => line.id === state.current.activeLineId) || state.current.lines[0];
}

function calculateLine(line) {
  line = normalizeLine(line);
  const quantity = Math.max(1, Math.round(toNumber(line.quantity)));
  const ingredients = line.items.reduce((sum, row) => {
    if (!row.enabled) return sum;
    return sum + lineCost(row, quantity);
  }, 0);
  const minimum = ingredients + toNumber(line.indirect);
  const profit = minimum * toNumber(line.margin);
  const suggested = minimum + profit;
  const rounded = line.manualFinalPrice ? toNumber(line.finalPrice) : roundPrice(suggested);

  return {
    quantity,
    ingredients,
    minimum,
    profit,
    suggested,
    finalPrice: rounded,
    unitPrice: rounded / quantity,
    rounding: rounded - suggested,
  };
}

function calculateQuote(quote = state.current) {
  quote = normalizeQuote(quote);
  const lineTotals = quote.lines.map(calculateLine);
  const linesTotal = lineTotals.reduce((sum, total) => sum + total.finalPrice, 0);
  const lineSuggested = lineTotals.reduce((sum, total) => sum + total.suggested, 0);
  const lineMinimum = lineTotals.reduce((sum, total) => sum + total.minimum, 0);
  const quantity = lineTotals.reduce((sum, total) => sum + total.quantity, 0);
  const ingredients = lineTotals.reduce((sum, total) => sum + total.ingredients, 0);
  const profit = lineTotals.reduce((sum, total) => sum + total.profit, 0);
  const extrasCost = quote.extras.reduce((sum, extra) => {
    if (!extra.enabled) return sum;
    return sum + toNumber(extra.cost);
  }, 0);
  const extrasPrice = quote.extras.reduce((sum, extra) => {
    if (!extra.enabled) return sum;
    return sum + toNumber(extra.price);
  }, 0);
  const minimum = lineMinimum + extrasCost;
  const suggested = lineSuggested + extrasCost + extrasPrice;
  const rounded = linesTotal + extrasPrice;

  return {
    quantity,
    lineTotals,
    ingredients,
    extrasCost,
    extrasPrice,
    extrasTotal: extrasCost + extrasPrice,
    minimum,
    profit,
    suggested,
    finalPrice: rounded,
    unitPrice: quantity ? rounded / quantity : 0,
    rounding: rounded - suggested,
  };
}

function unitCost(row) {
  const netQty = toNumber(row.netQty);
  if (netQty <= 0) return 0;
  return toNumber(row.purchaseCost) / netQty;
}

function lineCost(row, quantity) {
  return unitCost(row) * toNumber(row.usedQty) * quantity;
}

function roundPrice(value) {
  if (value <= 0) return 0;
  return Math.round(value / 5) * 5;
}

function bindEvents() {
  document.querySelectorAll(".tab").forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.view));
  });

  bindTooltips();

  $("#templateSelect").addEventListener("change", (event) => {
    const currentLine = activeLine();
    const nextLine = createLineFromTemplate(event.target.value);
    const index = state.current.lines.findIndex((line) => line.id === currentLine.id);
    nextLine.id = currentLine.id;
    state.current.lines[index] = nextLine;
    state.current.activeLineId = nextLine.id;
    render();
  });

  $("#clientName").addEventListener("input", (event) => {
    state.current.client = event.target.value;
  });

  $("#clientPhone").addEventListener("input", (event) => {
    state.current.phone = event.target.value;
  });

  $("#eventDate").addEventListener("input", (event) => {
    state.current.eventDate = event.target.value;
  });

  $("#reminderAt").addEventListener("input", (event) => {
    state.current.reminderAt = event.target.value;
  });

  $("#clientNotes").addEventListener("input", (event) => {
    state.current.notes = event.target.value;
  });

  $("#simpleMode").addEventListener("click", () => setMode("simple"));
  $("#advancedMode").addEventListener("click", () => setMode("advanced"));

  $("#quantity").addEventListener("input", (event) => {
    const line = activeLine();
    line.quantity = Math.max(1, Math.round(toNumber(event.target.value)));
    line.manualFinalPrice = false;
    renderTotals();
    renderIngredients();
    renderLines();
  });

  $("#wholesale").addEventListener("change", (event) => {
    const line = activeLine();
    line.wholesale = event.target.checked;
    if (event.target.checked && line.quantity < 2) {
      line.quantity = 2;
      $("#quantity").value = 2;
    }
    line.manualFinalPrice = false;
    renderTotals();
    renderIngredients();
    renderLines();
  });

  $("#indirectCost").addEventListener("input", (event) => {
    const line = activeLine();
    line.indirect = toNumber(event.target.value);
    line.manualFinalPrice = false;
    renderTotals();
    renderLines();
  });

  $("#margin").addEventListener("input", (event) => {
    const line = activeLine();
    line.margin = toNumber(event.target.value);
    line.manualFinalPrice = false;
    renderTotals();
    renderLines();
  });

  $("#finalPrice").addEventListener("input", (event) => {
    const line = activeLine();
    line.finalPrice = toNumber(event.target.value);
    line.manualFinalPrice = true;
    renderTotals();
    renderLines();
  });

  $("#resetTemplate").addEventListener("click", () => {
    const currentLine = activeLine();
    const nextLine = createLineFromTemplate(currentLine.templateId);
    nextLine.id = currentLine.id;
    const index = state.current.lines.findIndex((line) => line.id === currentLine.id);
    state.current.lines[index] = nextLine;
    render();
    toast("Plantilla restaurada");
  });

  $("#addIngredient").addEventListener("click", () => {
    const line = activeLine();
    line.items.push(item("", "Nuevo ingrediente", "GR", 1, 0, 1, 0));
    line.manualFinalPrice = false;
    renderIngredients();
    renderTotals();
    renderLines();
  });

  $("#addExtra").addEventListener("click", () => {
    state.current.extras.push({
      id: cryptoId(),
      enabled: true,
      name: "Nuevo extra",
      cost: 0,
      price: 0,
    });
    renderExtras();
    renderTotals();
  });

  $("#syncCatalog").addEventListener("click", () => {
    syncCatalogCosts();
    renderIngredients();
    renderTotals();
    renderLines();
    toast("Costos actualizados");
  });

  $("#saveQuote").addEventListener("click", saveCurrentQuote);
  $("#saveTemplate").addEventListener("click", saveCurrentAsTemplate);
  $("#addLine").addEventListener("click", addOrderLine);
  $("#addLinePanel").addEventListener("click", addOrderLine);
  $("#sendWhatsapp").addEventListener("click", sendWhatsapp);
  $("#copyShopping").addEventListener("click", copyShoppingList);
  $("#createReminder").addEventListener("click", createReminderFile);
  $("#printQuote").addEventListener("click", printClientQuote);
  $("#exportData").addEventListener("click", exportData);
  $("#openTutorial").addEventListener("click", openTutorial);
  $("#closeTutorial").addEventListener("click", closeTutorial);
  $("#prevTutorial").addEventListener("click", previousTutorialStep);
  $("#nextTutorial").addEventListener("click", nextTutorialStep);
  $("#tourBackdrop").addEventListener("click", closeTutorial);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeTutorial();
    if (!$("#tutorialModal").classList.contains("is-open")) return;
    if (event.key === "ArrowRight") nextTutorialStep();
    if (event.key === "ArrowLeft") previousTutorialStep();
  });
  $("#importDataButton").addEventListener("click", () => $("#importData").click());
  $("#importData").addEventListener("change", importData);
  $("#newQuote").addEventListener("click", () => {
    state.current = createQuoteFromTemplate(state.templates[0].id);
    setView("quote");
    render();
  });
  $("#addCatalogItem").addEventListener("click", () => {
    state.catalog.unshift(normalizeCatalogItem({
      id: cryptoId(),
      category: "Otros",
      supplier: "",
      name: "Nuevo producto",
      unit: "GR",
      purchaseQty: 1,
      purchaseCost: 0,
      netQty: 1,
    }));
    saveCatalog();
    renderCatalog();
  });

  $("#catalogCategoryFilter").addEventListener("change", (event) => {
    state.catalogFilter = event.target.value;
    renderCatalog();
  });

  $("#catalogSort").addEventListener("change", (event) => {
    state.catalogSort = event.target.value;
    renderCatalog();
  });
}

function openTutorial() {
  state.tourStep = 0;
  $("#tourBackdrop").classList.add("is-open");
  $("#tourHighlight").classList.add("is-open");
  $("#tutorialModal").classList.add("is-open");
  $("#tutorialModal").setAttribute("aria-hidden", "false");
  $("#tourBackdrop").setAttribute("aria-hidden", "false");
  renderTutorialStep();
}

function closeTutorial() {
  $("#tourBackdrop").classList.remove("is-open");
  $("#tourHighlight").classList.remove("is-open");
  $("#tutorialModal").classList.remove("is-open");
  $("#tutorialModal").setAttribute("aria-hidden", "true");
  $("#tourBackdrop").setAttribute("aria-hidden", "true");
}

function nextTutorialStep() {
  if (state.tourStep >= tourSteps.length - 1) {
    closeTutorial();
    return;
  }
  state.tourStep += 1;
  renderTutorialStep();
}

function previousTutorialStep() {
  state.tourStep = Math.max(0, state.tourStep - 1);
  renderTutorialStep();
}

function renderTutorialStep() {
  const step = tourSteps[state.tourStep];
  setView(step.view);
  if (step.mode) setMode(step.mode);

  window.setTimeout(() => {
    const target = document.querySelector(step.target);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });

    window.setTimeout(() => {
      positionTour(target);
      $("#tourCount").textContent = `${state.tourStep + 1} de ${tourSteps.length}`;
      $("#tutorialTitle").textContent = step.title;
      $("#tutorialText").textContent = step.text;
      $("#prevTutorial").disabled = state.tourStep === 0;
      $("#nextTutorial").textContent = state.tourStep === tourSteps.length - 1 ? "Finalizar" : "Siguiente";
    }, 220);
  }, 30);
}

function positionTour(target) {
  const rect = target.getBoundingClientRect();
  const pad = 8;
  const highlight = $("#tourHighlight");
  highlight.style.left = `${Math.max(8, rect.left - pad)}px`;
  highlight.style.top = `${Math.max(8, rect.top - pad)}px`;
  highlight.style.width = `${Math.min(window.innerWidth - 16, rect.width + pad * 2)}px`;
  highlight.style.height = `${Math.min(window.innerHeight - 16, rect.height + pad * 2)}px`;

  const card = $("#tutorialModal");
  const cardRect = card.getBoundingClientRect();
  let left = rect.right + 18;
  let top = rect.top;

  if (left + cardRect.width > window.innerWidth - 14) {
    left = rect.left - cardRect.width - 18;
  }
  if (left < 14) {
    left = 14;
    top = rect.bottom + 18;
  }
  if (top + cardRect.height > window.innerHeight - 14) {
    top = window.innerHeight - cardRect.height - 14;
  }
  top = Math.max(14, top);

  card.style.left = `${left}px`;
  card.style.top = `${top}px`;
}

function setMode(mode) {
  state.mode = mode;
  document.body.classList.toggle("simple-mode", mode === "simple");
  $("#simpleMode").classList.toggle("is-active", mode === "simple");
  $("#advancedMode").classList.toggle("is-active", mode === "advanced");
}

function bindTooltips() {
  const tooltip = $("#tooltip");
  let activeTarget = null;
  let showTimer = null;

  const show = (target) => {
    const text = target.dataset.tooltip;
    if (!text) return;
    activeTarget = target;
    window.clearTimeout(showTimer);
    showTimer = window.setTimeout(() => {
      tooltip.textContent = text;
      tooltip.classList.add("is-visible");
      positionTooltip(target, tooltip);
    }, 220);
  };

  const hide = () => {
    activeTarget = null;
    window.clearTimeout(showTimer);
    tooltip.classList.remove("is-visible");
  };

  document.addEventListener("pointerover", (event) => {
    if (event.pointerType === "touch") return;
    const target = event.target.closest("[data-tooltip]");
    if (target) show(target);
  });

  document.addEventListener("pointerout", (event) => {
    const target = event.target.closest("[data-tooltip]");
    if (target && !target.contains(event.relatedTarget)) hide();
  });

  document.addEventListener("focusin", (event) => {
    const target = event.target.closest("[data-tooltip]");
    if (target) show(target);
  });

  document.addEventListener("focusout", (event) => {
    if (event.target.closest("[data-tooltip]")) hide();
  });

  window.addEventListener("scroll", () => {
    if (activeTarget && tooltip.classList.contains("is-visible")) {
      positionTooltip(activeTarget, tooltip);
    }
  }, true);

  window.addEventListener("resize", () => {
    if (activeTarget && tooltip.classList.contains("is-visible")) {
      positionTooltip(activeTarget, tooltip);
    }
    if ($("#tutorialModal").classList.contains("is-open")) {
      renderTutorialStep();
    }
  });
}

function positionTooltip(target, tooltip) {
  const rect = target.getBoundingClientRect();
  const gap = 8;
  const tooltipRect = tooltip.getBoundingClientRect();
  let left = rect.left + rect.width / 2 - tooltipRect.width / 2;
  let top = rect.top - tooltipRect.height - gap;

  if (top < gap) {
    top = rect.bottom + gap;
  }

  left = Math.max(gap, Math.min(left, window.innerWidth - tooltipRect.width - gap));
  tooltip.style.left = `${left}px`;
  tooltip.style.top = `${top}px`;
}

function setView(view) {
  document.querySelectorAll(".tab").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.view === view);
  });
  document.querySelectorAll(".view").forEach((panel) => {
    panel.classList.toggle("is-active", panel.id === `view-${view}`);
  });
}

function render() {
  setMode(state.mode);
  renderTemplateSelect();
  renderQuoteFields();
  renderLines();
  renderExtras();
  renderIngredients();
  renderTotals();
  renderCatalog();
  renderHistory();
}

function renderTemplateSelect() {
  const select = $("#templateSelect");
  const line = activeLine();
  select.innerHTML = state.templates
    .map((template) => {
      const selected = template.id === line.templateId ? "selected" : "";
      return `<option value="${template.id}" ${selected}>${escapeHtml(template.name)} ${escapeHtml(template.size)}</option>`;
    })
    .join("");
}

function renderQuoteFields() {
  const line = activeLine();
  $("#clientName").value = state.current.client;
  $("#clientPhone").value = state.current.phone;
  $("#eventDate").value = state.current.eventDate;
  $("#reminderAt").value = state.current.reminderAt;
  $("#clientNotes").value = state.current.notes;
  $("#quantity").value = line.quantity;
  $("#wholesale").checked = line.wholesale;
  $("#indirectCost").value = line.indirect;
  $("#margin").value = line.margin;
  $("#finalPrice").value = calculateLine(line).finalPrice.toFixed(0);
}

function renderTotals() {
  const totals = calculateQuote();
  $("#publicPrice").textContent = money.format(totals.finalPrice);
  $("#unitPrice").textContent = `${money.format(totals.unitPrice)} c/u`;
  $("#minimumTotal").textContent = money.format(totals.minimum);
  $("#suggestedTotal").textContent = money.format(totals.suggested);
  $("#ingredientsTotal").textContent = money.format(totals.ingredients);
  $("#profitTotal").textContent = money.format(totals.profit);
  $("#extrasTotal").textContent = money.format(totals.extrasTotal);
  $("#rounding").textContent = money.format(totals.rounding);
  const line = activeLine();
  const lineTotals = calculateLine(line);
  $("#recipeMeta").textContent = `${line.templateName} - ${lineTotals.quantity} ${lineTotals.quantity === 1 ? "tabla" : "tablas"}${line.wholesale ? " - mayoreo" : ""}`;
  if (!line.manualFinalPrice) {
    $("#finalPrice").value = lineTotals.finalPrice.toFixed(0);
  }
}

function renderLines() {
  $("#linesMeta").textContent = `${state.current.lines.length} ${state.current.lines.length === 1 ? "partida" : "partidas"}`;
  $("#orderLinesBody").innerHTML = state.current.lines
    .map((line, index) => {
      const totals = calculateLine(line);
      const active = line.id === activeLine().id ? "primary" : "";
      return `
        <tr>
          <td>${escapeHtml(line.templateName)}</td>
          <td>${totals.quantity}</td>
          <td class="money-cell">${money.format(totals.minimum)}</td>
          <td class="money-cell">${money.format(totals.suggested)}</td>
          <td class="money-cell">${money.format(totals.finalPrice)}</td>
          <td>
            <div class="button-row compact">
              <button class="button ${active}" type="button" data-action="select-line" data-id="${line.id}" data-tooltip="Edita cantidad, precio y receta de esta partida.">Editar</button>
              <button class="button icon-only danger" type="button" data-action="remove-line" data-id="${line.id}" title="Eliminar partida" data-tooltip="Quita esta partida del pedido."><svg class="icon"><use href="#icon-trash"></use></svg></button>
            </div>
          </td>
        </tr>
      `;
    })
    .join("");
}

function renderExtras() {
  if (state.current.extras.length === 0) {
    $("#extrasBody").innerHTML = `
      <tr>
        <td colspan="5">Sin extras agregados.</td>
      </tr>
    `;
    return;
  }

  $("#extrasBody").innerHTML = state.current.extras
    .map((extra, index) => {
      const disabled = extra.enabled ? "" : "disabled";
      return `
        <tr>
          <td><input class="row-check" type="checkbox" data-kind="extra" data-index="${index}" data-field="enabled" ${extra.enabled ? "checked" : ""} title="Usar extra" data-tooltip="Incluye o excluye este extra del total."></td>
          <td><input class="cell-input name" data-kind="extra" data-index="${index}" data-field="name" value="${escapeHtml(extra.name)}" ${disabled}></td>
          <td><input class="cell-input" type="number" min="0" step="1" data-kind="extra" data-index="${index}" data-field="cost" value="${extra.cost}" ${disabled}></td>
          <td><input class="cell-input" type="number" min="0" step="1" data-kind="extra" data-index="${index}" data-field="price" value="${extra.price}" ${disabled}></td>
          <td><button class="button icon-only danger" type="button" data-action="remove-extra" data-index="${index}" title="Eliminar extra" data-tooltip="Elimina este extra del pedido."><svg class="icon"><use href="#icon-trash"></use></svg></button></td>
        </tr>
      `;
    })
    .join("");
}

function renderIngredients() {
  const line = activeLine();
  const quantity = calculateLine(line).quantity;
  $("#ingredientsBody").innerHTML = line.items
    .map((row, index) => {
      const totalUsed = toNumber(row.usedQty) * quantity;
      const disabled = row.enabled ? "" : "disabled";
      return `
        <tr>
          <td><input class="row-check" type="checkbox" data-kind="quote" data-index="${index}" data-field="enabled" ${row.enabled ? "checked" : ""} title="Usar ingrediente" data-tooltip="Incluye o excluye este ingrediente de la partida."></td>
          <td><input class="cell-input name" data-kind="quote" data-index="${index}" data-field="name" value="${escapeHtml(row.name)}" ${disabled}></td>
          <td><input class="cell-input" data-kind="quote" data-index="${index}" data-field="supplier" value="${escapeHtml(row.supplier)}" ${disabled}></td>
          <td><input class="cell-input" data-kind="quote" data-index="${index}" data-field="unit" value="${escapeHtml(row.unit)}" ${disabled}></td>
          <td><input class="cell-input" type="number" min="0" step="0.01" data-kind="quote" data-index="${index}" data-field="purchaseQty" value="${row.purchaseQty}" ${disabled}></td>
          <td><input class="cell-input" type="number" min="0" step="0.01" data-kind="quote" data-index="${index}" data-field="purchaseCost" value="${row.purchaseCost}" ${disabled}></td>
          <td><input class="cell-input" type="number" min="0" step="0.01" data-kind="quote" data-index="${index}" data-field="netQty" value="${row.netQty}" ${disabled}></td>
          <td><input class="cell-input" type="number" min="0" step="0.01" data-kind="quote" data-index="${index}" data-field="usedQty" value="${row.usedQty}" ${disabled}></td>
          <td class="money-cell" title="${totalUsed.toFixed(2)} ${escapeHtml(row.unit)}">${money.format(lineCost(row, quantity))}</td>
          <td><button class="button icon-only danger" type="button" data-action="remove-quote" data-index="${index}" title="Eliminar ingrediente" data-tooltip="Elimina este ingrediente de la partida activa."><svg class="icon"><use href="#icon-trash"></use></svg></button></td>
        </tr>
      `;
    })
    .join("");
}

function renderCatalog() {
  renderCatalogFilters();
  const rows = sortedCatalogRows();
  $("#catalogBody").innerHTML = rows
    .map(({ row, index }) => `
      <tr>
        <td><input class="cell-input name" data-kind="catalog" data-index="${index}" data-field="name" value="${escapeHtml(row.name)}"></td>
        <td><input class="cell-input" data-kind="catalog" data-index="${index}" data-field="category" value="${escapeHtml(row.category)}" data-tooltip="Clasifica este producto para encontrarlo mas facil."></td>
        <td><input class="cell-input" data-kind="catalog" data-index="${index}" data-field="supplier" value="${escapeHtml(row.supplier)}"></td>
        <td><input class="cell-input" data-kind="catalog" data-index="${index}" data-field="unit" value="${escapeHtml(row.unit)}"></td>
        <td><input class="cell-input" type="number" min="0" step="0.01" data-kind="catalog" data-index="${index}" data-field="purchaseQty" value="${row.purchaseQty}"></td>
        <td><input class="cell-input" type="number" min="0" step="0.01" data-kind="catalog" data-index="${index}" data-field="purchaseCost" value="${row.purchaseCost}"></td>
        <td><input class="cell-input" type="number" min="0" step="0.01" data-kind="catalog" data-index="${index}" data-field="netQty" value="${row.netQty}"></td>
        <td class="money-cell">${money.format(unitCost(row))}</td>
        <td><button class="button icon-only danger" type="button" data-action="remove-catalog" data-index="${index}" title="Eliminar producto" data-tooltip="Elimina este producto del catalogo."><svg class="icon"><use href="#icon-trash"></use></svg></button></td>
      </tr>
    `)
    .join("");
}

function renderCatalogFilters() {
  const categories = ["all", ...new Set(state.catalog.map((row) => row.category || "Otros").sort((a, b) => a.localeCompare(b, "es")))];
  if (!categories.includes(state.catalogFilter)) {
    state.catalogFilter = "all";
  }
  $("#catalogCategoryFilter").innerHTML = categories
    .map((category) => {
      const label = category === "all" ? "Todas" : category;
      const selected = category === state.catalogFilter ? "selected" : "";
      return `<option value="${escapeHtml(category)}" ${selected}>${escapeHtml(label)}</option>`;
    })
    .join("");
  $("#catalogSort").value = state.catalogSort;
}

function sortedCatalogRows() {
  return state.catalog
    .map((row, index) => ({ row, index }))
    .filter(({ row }) => state.catalogFilter === "all" || row.category === state.catalogFilter)
    .sort((a, b) => {
      const sort = state.catalogSort;
      const first = sort === "supplier" ? a.row.supplier : sort === "name" ? a.row.name : a.row.category;
      const second = sort === "supplier" ? b.row.supplier : sort === "name" ? b.row.name : b.row.category;
      const main = String(first || "").localeCompare(String(second || ""), "es");
      if (main !== 0) return main;
      return String(a.row.name || "").localeCompare(String(b.row.name || ""), "es");
    });
}

function renderHistory() {
  $("#historyCount").textContent = `${state.quotes.length} ${state.quotes.length === 1 ? "cotizacion" : "cotizaciones"}`;
  if (state.quotes.length === 0) {
    $("#historyList").innerHTML = `<div class="history-item"><div><h3>Sin cotizaciones guardadas</h3><p>Las cotizaciones se quedan en este navegador.</p></div></div>`;
    return;
  }
  $("#historyList").innerHTML = state.quotes
    .slice()
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .map((quote) => {
      const totals = calculateQuote(quote);
      const client = quote.client || "Sin cliente";
      const date = quote.eventDate || new Date(quote.createdAt).toLocaleDateString("es-MX");
      const linesText = quote.lines.map((line) => `${line.quantity} ${line.templateName}`).join(", ");
      const reminder = quote.reminderAt ? ` - Recordar: ${formatDateTime(quote.reminderAt)}` : "";
      return `
        <article class="history-item">
          <div>
            <h3>${escapeHtml(client)} - ${money.format(totals.finalPrice)}</h3>
            <p>${escapeHtml(linesText)} - ${escapeHtml(date)}${escapeHtml(reminder)}</p>
          </div>
          <div class="history-actions">
            <button class="button" type="button" data-action="load-quote" data-id="${quote.id}" data-tooltip="Carga este pedido para revisarlo o modificarlo.">Abrir</button>
            <button class="button icon-only danger" type="button" data-action="delete-quote" data-id="${quote.id}" title="Eliminar cotizacion" data-tooltip="Elimina este pedido guardado."><svg class="icon"><use href="#icon-trash"></use></svg></button>
          </div>
        </article>
      `;
    })
    .join("");
}

document.addEventListener("input", (event) => {
  const target = event.target;
  const kind = target.dataset.kind;
  const field = target.dataset.field;
  if (!kind || !field) return;

  const index = Number(target.dataset.index);
  const row =
    kind === "quote"
      ? activeLine().items[index]
      : kind === "extra"
        ? state.current.extras[index]
        : state.catalog[index];
  if (!row) return;

  if (field === "enabled") {
    row.enabled = target.checked;
  } else if (target.type === "number") {
    row[field] = toNumber(target.value);
  } else {
    row[field] = target.value;
  }

  if (kind === "catalog") {
    saveCatalog();
  } else {
    if (kind === "quote") {
      activeLine().manualFinalPrice = false;
    }
    renderTotals();
  }
});

document.addEventListener("change", (event) => {
  const target = event.target;
  if (target.dataset.kind === "quote" && target.dataset.field === "enabled") {
    const row = activeLine().items[Number(target.dataset.index)];
    row.enabled = target.checked;
    activeLine().manualFinalPrice = false;
    renderIngredients();
    renderTotals();
    renderLines();
    return;
  }

  if (target.dataset.kind === "extra" && target.dataset.field === "enabled") {
    const extra = state.current.extras[Number(target.dataset.index)];
    extra.enabled = target.checked;
    renderExtras();
    renderTotals();
    return;
  }

  if (target.dataset.kind === "quote") {
    renderIngredients();
    renderTotals();
    renderLines();
  }

  if (target.dataset.kind === "extra") {
    renderExtras();
    renderTotals();
  }

  if (target.dataset.kind === "catalog") {
    saveCatalog();
    renderCatalog();
  }
});

document.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;

  const action = button.dataset.action;
  if (action === "remove-quote") {
    activeLine().items.splice(Number(button.dataset.index), 1);
    activeLine().manualFinalPrice = false;
    renderIngredients();
    renderTotals();
    renderLines();
  }

  if (action === "remove-catalog") {
    state.catalog.splice(Number(button.dataset.index), 1);
    saveCatalog();
    renderCatalog();
  }

  if (action === "remove-extra") {
    state.current.extras.splice(Number(button.dataset.index), 1);
    renderExtras();
    renderTotals();
  }

  if (action === "select-line") {
    state.current.activeLineId = button.dataset.id;
    render();
  }

  if (action === "remove-line") {
    if (state.current.lines.length === 1) {
      toast("El pedido necesita al menos una partida");
      return;
    }
    state.current.lines = state.current.lines.filter((line) => line.id !== button.dataset.id);
    state.current.activeLineId = state.current.lines[0].id;
    render();
  }

  if (action === "load-quote") {
    const quote = state.quotes.find((entry) => entry.id === button.dataset.id);
    if (quote) {
      state.current = normalizeQuote(clone(quote));
      setView("quote");
      render();
    }
  }

  if (action === "delete-quote") {
    state.quotes = state.quotes.filter((entry) => entry.id !== button.dataset.id);
    saveQuotes();
    renderHistory();
    toast("Cotizacion eliminada");
  }
});

function syncCatalogCosts() {
  const map = new Map(state.catalog.map((row) => [catalogKey(row), row]));
  const line = activeLine();
  line.items = line.items.map((row) => {
    const match = map.get(catalogKey(row));
    if (!match) return row;
    return {
      ...row,
      supplier: match.supplier,
      purchaseQty: match.purchaseQty,
      purchaseCost: match.purchaseCost,
      netQty: match.netQty,
    };
  });
  line.manualFinalPrice = false;
}

function addOrderLine() {
  const line = createLineFromTemplate($("#templateSelect").value || state.templates[0].id);
  state.current.lines.push(line);
  state.current.activeLineId = line.id;
  render();
  toast("Partida agregada");
}

function saveCurrentQuote() {
  const quote = normalizeQuote(clone(state.current));
  const totals = calculateQuote(quote);
  quote.finalPrice = totals.finalPrice;
  quote.createdAt = new Date().toISOString();
  const existingIndex = state.quotes.findIndex((entry) => entry.id === quote.id);
  if (existingIndex >= 0) {
    state.quotes[existingIndex] = quote;
  } else {
    state.quotes.push(quote);
  }
  state.current = clone(quote);
  saveQuotes();
  renderHistory();
  toast("Cotizacion guardada");
}

function saveCurrentAsTemplate() {
  const line = activeLine();
  const name = prompt("Nombre de la plantilla", line.templateName);
  if (!name) return;
  const template = normalizeTemplate({
    id: cryptoId(),
    name: name.trim(),
    size: "",
    indirect: line.indirect,
    margin: line.margin,
    items: clone(line.items).map((row) => ({
      ...row,
      enabled: true,
      id: cryptoId(),
    })),
  });
  state.templates.push(template);
  saveTemplates();
  line.templateId = template.id;
  line.templateName = template.name;
  render();
  toast("Plantilla guardada");
}

function getTemplateName(templateId) {
  const template = state.templates.find((entry) => entry.id === templateId);
  return template ? `${template.name} ${template.size}`.trim() : "Plantilla";
}

async function copyText(text, successMessage) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.left = "-999px";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  }
  toast(successMessage);
}

async function sendWhatsapp() {
  const text = buildSummary();
  const phone = state.current.phone.replace(/\D/g, "");
  await copyText(text, "Resumen copiado. Pegalo en WhatsApp.");
  const target = phone ? `https://wa.me/${phone}` : "https://web.whatsapp.com/";
  window.open(target, "_blank", "noopener,noreferrer");
}

async function copyShoppingList() {
  await copyText(buildShoppingList(), "Lista de compras copiada");
}

function createReminderFile() {
  if (!state.current.reminderAt) {
    toast("Agrega fecha y hora de recordatorio");
    return;
  }
  const start = new Date(state.current.reminderAt);
  if (Number.isNaN(start.getTime())) {
    toast("Recordatorio invalido");
    return;
  }
  const end = new Date(start.getTime() + 30 * 60 * 1000);
  const client = state.current.client || "Pedido";
  const summary = `Antha's Cava - ${client}`;
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Anthas Cava//Cotizador Local//ES",
    "BEGIN:VEVENT",
    `UID:${cryptoId()}@anthas-cava.local`,
    `DTSTAMP:${formatIcsDate(new Date())}`,
    `DTSTART:${formatIcsDate(start)}`,
    `DTEND:${formatIcsDate(end)}`,
    `SUMMARY:${escapeIcs(summary)}`,
    `DESCRIPTION:${escapeIcs(buildSummary())}`,
    "BEGIN:VALARM",
    "TRIGGER:-PT1H",
    "ACTION:DISPLAY",
    `DESCRIPTION:${escapeIcs(summary)}`,
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  downloadTextFile(ics, `recordatorio-${slugify(client)}.ics`, "text/calendar");
  toast("Recordatorio descargado");
}

function buildShoppingList() {
  const map = new Map();
  state.current.lines.forEach((line) => {
    const quantity = calculateLine(line).quantity;
    line.items.forEach((row) => {
      if (!row.enabled) return;
      const key = catalogKey(row);
      const used = toNumber(row.usedQty) * quantity;
      const current = map.get(key) || {
        name: row.name,
        unit: row.unit,
        supplier: row.supplier,
        totalUsed: 0,
        purchaseQty: toNumber(row.purchaseQty),
        netQty: toNumber(row.netQty),
      };
      current.totalUsed += used;
      map.set(key, current);
    });
  });

  const totals = calculateQuote();
  const grouped = new Map();
  [...map.values()]
    .sort((a, b) => {
      const supplier = (a.supplier || "Sin proveedor").localeCompare(b.supplier || "Sin proveedor", "es");
      if (supplier !== 0) return supplier;
      return a.name.localeCompare(b.name, "es");
    })
    .forEach((row) => {
      const supplier = row.supplier || "Sin proveedor";
      if (!grouped.has(supplier)) grouped.set(supplier, []);
      grouped.get(supplier).push(row);
    });

  const lines = [];
  grouped.forEach((rows, supplier) => {
    lines.push(`\n${supplier}`);
    rows.forEach((row) => {
      const packBase = row.netQty || row.purchaseQty || 1;
      const packs = Math.max(1, Math.ceil(row.totalUsed / packBase));
      lines.push(`- ${row.name}: ${formatQty(row.totalUsed)} ${row.unit} (${packs} compra${packs === 1 ? "" : "s"})`);
    });
  });

  return [
    `Lista de compras - ${state.current.client || "Pedido"}`,
    `Pedido: ${totals.quantity} ${totals.quantity === 1 ? "tabla" : "tablas"} en ${state.current.lines.length} ${state.current.lines.length === 1 ? "partida" : "partidas"}`,
    "",
    ...lines,
  ].join("\n");
}

function formatQty(value) {
  return Number(value.toFixed(2)).toLocaleString("es-MX");
}

function formatDateTime(value) {
  return new Date(value).toLocaleString("es-MX", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

function formatIcsDate(date) {
  const pad = (value) => String(value).padStart(2, "0");
  return `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}T${pad(date.getHours())}${pad(date.getMinutes())}${pad(date.getSeconds())}`;
}

function escapeIcs(value) {
  return String(value)
    .replaceAll("\\", "\\\\")
    .replaceAll("\n", "\\n")
    .replaceAll(",", "\\,")
    .replaceAll(";", "\\;");
}

function slugify(value) {
  return normalize(value).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "pedido";
}

function downloadTextFile(content, filename, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function printClientQuote() {
  $("#clientPdf").innerHTML = buildClientPdf();
  window.print();
}

function buildClientPdf() {
  const totals = calculateQuote();
  const extras = state.current.extras.filter((extra) => extra.enabled && (extra.name || extra.price));
  const notes = state.current.notes ? `<h2>Notas</h2><p>${escapeHtml(state.current.notes).replaceAll("\n", "<br>")}</p>` : "";
  const date = state.current.eventDate ? `<p><strong>Fecha:</strong> ${escapeHtml(state.current.eventDate)}</p>` : "";
  const lineRows = state.current.lines
    .map((line) => {
      const lineTotals = calculateLine(line);
      return `<tr><td>${escapeHtml(line.templateName)}</td><td>${lineTotals.quantity}</td><td>${money.format(lineTotals.finalPrice)}</td></tr>`;
    })
    .join("");
  const extrasRows = extras
    .map((extra) => `<tr><td>${escapeHtml(extra.name)}</td><td>${money.format(toNumber(extra.price))}</td></tr>`)
    .join("");
  return `
    <h1>Antha's Cava</h1>
    <p>Cotizacion${state.current.client ? ` para ${escapeHtml(state.current.client)}` : ""}</p>
    ${date}
    <h2>Detalle</h2>
    <p><strong>Cantidad total:</strong> ${totals.quantity} ${totals.quantity === 1 ? "tabla" : "tablas"}</p>
    <table><thead><tr><th>Tabla</th><th>Cantidad</th><th>Precio</th></tr></thead><tbody>${lineRows}</tbody></table>
    <div class="pdf-price">${money.format(totals.finalPrice)}</div>
    ${
      extrasRows
        ? `<h2>Extras</h2><table><thead><tr><th>Extra</th><th>Precio</th></tr></thead><tbody>${extrasRows}</tbody></table>`
        : ""
    }
    ${notes}
  `;
}

function exportData() {
  const data = {
    version: 1,
    exportedAt: new Date().toISOString(),
    catalog: state.catalog,
    templates: state.templates,
    quotes: state.quotes,
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `anthas-cava-respaldo-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  toast("Respaldo descargado");
}

function importData(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result);
      state.catalog = (data.catalog || state.catalog).map((row) => ({ ...row, id: row.id || cryptoId() }));
      state.templates = (data.templates || state.templates).map(normalizeTemplate);
      state.quotes = (data.quotes || state.quotes).map(normalizeQuote);
      saveCatalog();
      saveTemplates();
      saveQuotes();
      state.current = createQuoteFromTemplate(state.templates[0].id);
      render();
      toast("Datos importados");
    } catch {
      toast("No se pudo importar");
    } finally {
      event.target.value = "";
    }
  };
  reader.readAsText(file);
}

async function copySummary() {
  const text = buildSummary();
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.left = "-999px";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  }
  toast("Resumen copiado");
}

function buildSummary() {
  const totals = calculateQuote();
  const client = state.current.client ? ` para ${state.current.client}` : "";
  const date = state.current.eventDate ? `\nFecha: ${state.current.eventDate}` : "";
  const lineRows = state.current.lines.map((line) => {
    const lineTotals = calculateLine(line);
    const wholesale = line.wholesale ? " (mayoreo)" : "";
    return `- ${line.templateName} x${lineTotals.quantity}${wholesale}: ${money.format(lineTotals.finalPrice)}`;
  });
  const extras = state.current.extras
    .filter((extra) => extra.enabled && extra.name)
    .map((extra) => `- ${extra.name}${toNumber(extra.price) ? `: ${money.format(toNumber(extra.price))}` : ""}`);
  const notes = state.current.notes ? `\nNotas: ${state.current.notes}` : "";
  return [
    `Cotizacion Antha's Cava${client}`,
    `Pedido: ${totals.quantity} ${totals.quantity === 1 ? "tabla" : "tablas"}`,
    `Partidas:\n${lineRows.join("\n")}`,
    extras.length ? `Extras:\n${extras.join("\n")}` : "",
    `Total: ${money.format(totals.finalPrice)}`,
    date.trim(),
    notes.trim(),
  ]
    .filter(Boolean)
    .join("\n");
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function toast(message) {
  const element = $("#toast");
  element.textContent = message;
  element.classList.add("is-visible");
  window.clearTimeout(toast.timeout);
  toast.timeout = window.setTimeout(() => element.classList.remove("is-visible"), 1800);
}

loadStorage();
state.current = createQuoteFromTemplate(state.templates[0].id);
bindEvents();
render();
