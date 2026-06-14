const tools = [
  { id: "crop", label: "Groente", icon: "G", color: "#83a75f", defaultSize: [2, 1.2] },
  { id: "plant", label: "Plantje", icon: "P", color: "#8fbd55", defaultSize: [0.35, 0.35], shape: "circle" },
  { id: "bed", label: "Teeltvak", icon: "T", color: "#a9845a", defaultSize: [2.5, 1.2] },
  { id: "path", label: "Pad", icon: "P", color: "#c8b89d", defaultSize: [3, 0.6] },
  { id: "shed", label: "Tuinhuis", icon: "H", color: "#b96f43", defaultSize: [2.2, 1.8] },
  { id: "greenhouse", label: "Kas tomaat", icon: "K", color: "#9fd0c2", defaultSize: [2.5, 2], shape: "greenhouse", cropId: "tomaat" },
  { id: "gate", label: "Toegang", icon: "I", color: "#5d6c74", defaultSize: [1.2, 0.4] },
  { id: "water", label: "Waterton", icon: "W", color: "#77aabe", defaultSize: [1, 1], shape: "circle" },
  { id: "compost", label: "Compost", icon: "C", color: "#7a614d", defaultSize: [1.2, 1.2] },
  { id: "tree", label: "Fruit", icon: "F", color: "#7cab7b", defaultSize: [1.4, 1.4], shape: "circle" },
  { id: "object", label: "Ander object", icon: "O", color: "#9f8f7a", defaultSize: [1.2, 1.2] }
];

const baseCrops = [
  { id: "tomaat", name: "Tomaat", color: "#db6b50", sow: [3, 4], plant: [5, 6], harvest: [7, 8, 9], spacing: "50 cm", note: "Warm en beschut. Combineert goed met basilicum." },
  { id: "wortel", name: "Wortel", color: "#e69b42", sow: [3, 4, 5, 6], plant: [], harvest: [7, 8, 9, 10], spacing: "5 cm", note: "Direct zaaien in losse grond." },
  { id: "sla", name: "Sla", color: "#8fbd55", sow: [3, 4, 5, 6, 7, 8], plant: [4, 5, 6, 7, 8], harvest: [5, 6, 7, 8, 9, 10], spacing: "25 cm", note: "Spreid zaaien voor langere oogst." },
  { id: "boon", name: "Boon", color: "#68a96d", sow: [5, 6, 7], plant: [], harvest: [7, 8, 9], spacing: "12 cm", note: "Pas zaaien als de grond warm is." },
  { id: "courgette", name: "Courgette", color: "#5f9a62", sow: [4, 5], plant: [5, 6], harvest: [7, 8, 9, 10], spacing: "90 cm", note: "Heeft veel ruimte en voeding nodig." },
  { id: "ui", name: "Ui", color: "#caa66a", sow: [2, 3, 4], plant: [3, 4], harvest: [7, 8, 9], spacing: "10 cm", note: "Houd het vak onkruidarm." },
  { id: "aardappel", name: "Aardappel", color: "#b99568", sow: [], plant: [3, 4, 5], harvest: [7, 8, 9, 10], spacing: "35 cm", note: "Roteer elk jaar naar een ander vak." },
  { id: "prei", name: "Prei", color: "#6f9d7a", sow: [2, 3, 4], plant: [5, 6, 7], harvest: [9, 10, 11, 12, 1, 2], spacing: "15 cm", note: "Aanaarden geeft langere witte schachten." },
  { id: "spinazie", name: "Spinazie", color: "#4f8f5d", sow: [3, 4, 8, 9], plant: [], harvest: [4, 5, 6, 9, 10, 11], spacing: "10 cm", note: "Fijn als voor- of nateelt." },
  { id: "kool", name: "Kool", color: "#6f8fb8", sow: [3, 4, 5], plant: [5, 6, 7], harvest: [8, 9, 10, 11], spacing: "45 cm", note: "Bescherm jonge planten tegen koolvlieg." },
  { id: "pompoen", name: "Pompoen", color: "#dd8d3f", sow: [4, 5], plant: [5, 6], harvest: [9, 10], spacing: "120 cm", note: "Laat ranken langs een rand groeien." }
];

const baseHerbs = [
  { id: "basilicum", name: "Basilicum", color: "#4fa35d", sow: [3, 4, 5], plant: [5, 6], harvest: [6, 7, 8, 9], spacing: "25 cm", note: "Warm en beschut. Fijn bij tomaten in de kas." },
  { id: "peterselie", name: "Peterselie", color: "#5f9f49", sow: [3, 4, 5, 6, 7], plant: [4, 5, 6, 7], harvest: [5, 6, 7, 8, 9, 10, 11], spacing: "20 cm", note: "Kan in halfschaduw en groeit lang door." },
  { id: "bieslook", name: "Bieslook", color: "#7da85a", sow: [3, 4, 5], plant: [3, 4, 5, 9], harvest: [4, 5, 6, 7, 8, 9, 10], spacing: "20 cm", note: "Meerjarig en goed als randplant." },
  { id: "munt", name: "Munt", color: "#66a982", sow: [], plant: [3, 4, 5, 6, 9], harvest: [5, 6, 7, 8, 9, 10], spacing: "30 cm", note: "Zet liefst in pot of begrensd vak." },
  { id: "tijm", name: "Tijm", color: "#8b9f70", sow: [3, 4], plant: [4, 5, 6], harvest: [5, 6, 7, 8, 9], spacing: "25 cm", note: "Droog en zonnig, houdt van arme grond." },
  { id: "rozemarijn", name: "Rozemarijn", color: "#6c8f77", sow: [], plant: [4, 5, 6], harvest: [5, 6, 7, 8, 9, 10], spacing: "50 cm", note: "Beschut en zonnig. In strenge winters beschermen." },
  { id: "koriander", name: "Koriander", color: "#78ad64", sow: [4, 5, 6, 7, 8], plant: [], harvest: [5, 6, 7, 8, 9, 10], spacing: "15 cm", note: "Zaai in kleine rondes; schiet snel door bij warmte." },
  { id: "dille", name: "Dille", color: "#a0b84f", sow: [4, 5, 6, 7], plant: [], harvest: [6, 7, 8, 9], spacing: "20 cm", note: "Direct zaaien op een luchtige plek." }
];

const baseFruits = [
  { id: "aardbei", name: "Aardbei", color: "#d95862", sow: [], plant: [3, 4, 8, 9], harvest: [6, 7], spacing: "30 cm", note: "Meerjarig vak met stro rond de planten." },
  { id: "framboos", name: "Framboos", color: "#c95d77", sow: [], plant: [2, 3, 10, 11], harvest: [7, 8, 9], spacing: "45 cm", note: "Geef steun en snoei jaarlijks." },
  { id: "aalbes", name: "Aalbes", color: "#c84f55", sow: [], plant: [2, 3, 10, 11], harvest: [6, 7], spacing: "90 cm", note: "Struikfruit voor een vaste plek." },
  { id: "appel", name: "Appel", color: "#8fbf68", sow: [], plant: [2, 3, 10, 11], harvest: [8, 9, 10], spacing: "200 cm", note: "Fruitboom of leivorm; kies een vaste plek." },
  { id: "peer", name: "Peer", color: "#a9be68", sow: [], plant: [2, 3, 10, 11], harvest: [8, 9, 10], spacing: "200 cm", note: "Beschut planten; let op bestuiving." },
  { id: "pruim", name: "Pruim", color: "#9a7ab8", sow: [], plant: [2, 3, 10, 11], harvest: [7, 8, 9], spacing: "250 cm", note: "Snoei beperkt en geef ruimte." }
];

const months = ["Jan", "Feb", "Mrt", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"];
const storageKey = "tuinplanner-state-v3";
const designsKey = "tuinplanner-designs-v3";
const currentDesignKey = "tuinplanner-current-design-v3";
const appVersion = "freeform-drawing-fix-20260614";
const minItemSize = 0.1;
const snapStep = 0.1;
const gridOptions = {
  "2x1": { x: 2, y: 1 },
  "1x1": { x: 1, y: 1 },
  "0.5x0.5": { x: 0.5, y: 0.5 }
};

let state = {
  topWidth: 6,
  bottomWidth: 7,
  leftLength: 14,
  rightLength: 14,
  activeTool: null,
  activeCrop: "tomaat",
  selectedId: null,
  selectedBoundaryIndex: null,
  stamp: null,
  snap: true,
  gridSize: "1x1",
  zoom: 1,
  workMode: "select",
  shapeMode: "stepRight",
  editBoundary: false,
  drawingItemId: null,
  stepAt: 7,
  stepWidth: 6.5,
  panelSizes: {
    tools: 300,
    details: 340
  },
  customCrops: [],
  customFruits: [],
  customHerbs: [],
  items: []
};

let history = [];
let redoHistory = [];
let interaction = null;
let clipboardItem = null;
let paletteDrag = null;
let suppressPaletteClick = false;
let panelResize = null;
let greenhouseInteraction = null;
let greenhouseId = null;
let greenhousePlantId = null;
let greenhouseActiveCrop = "tomaat";
let designLibrary = { designs: [] };
let currentDesignId = null;
let boundaryInteraction = null;

const board = document.querySelector("#gardenBoard");
const rulerTop = document.querySelector("#rulerTop");
const rulerLeft = document.querySelector("#rulerLeft");
const designSelect = document.querySelector("#designSelect");
const importFile = document.querySelector("#importFile");
const toolGrid = document.querySelector("#toolGrid");
const cropList = document.querySelector("#cropList");
const fruitList = document.querySelector("#fruitList");
const herbList = document.querySelector("#herbList");
const calendar = document.querySelector("#calendar");
const cropInfo = document.querySelector("#cropInfo");
const greenhouseModal = document.querySelector("#greenhouseModal");
const greenhouseBoard = document.querySelector("#greenhouseBoard");
const greenhouseCropList = document.querySelector("#greenhouseCropList");

const inputs = {
  gardenTop: document.querySelector("#gardenTop"),
  gardenRight: document.querySelector("#gardenRight"),
  gardenBottom: document.querySelector("#gardenBottom"),
  gardenLeft: document.querySelector("#gardenLeft"),
  newCropName: document.querySelector("#newCropName"),
  newCropKind: document.querySelector("#newCropKind"),
  newCropSow: document.querySelector("#newCropSow"),
  newCropHarvest: document.querySelector("#newCropHarvest"),
  itemLabel: document.querySelector("#itemLabel"),
  itemX: document.querySelector("#itemX"),
  itemY: document.querySelector("#itemY"),
  itemW: document.querySelector("#itemW"),
  itemH: document.querySelector("#itemH"),
  itemRotation: document.querySelector("#itemRotation"),
  itemColor: document.querySelector("#itemColor"),
  itemShape: document.querySelector("#itemShape"),
  itemNotes: document.querySelector("#itemNotes")
};

function allCrops() {
  return [...baseCrops, ...baseFruits, ...baseHerbs, ...(state.customCrops || []), ...(state.customFruits || []), ...(state.customHerbs || [])];
}

function cleanMonthList(list) {
  return Array.isArray(list)
    ? list.map((value) => Number(value)).filter((value) => Number.isInteger(value) && value >= 1 && value <= 12)
    : [];
}

function cleanCropList(list) {
  return Array.isArray(list)
    ? list
      .filter((crop) => crop && typeof crop === "object" && crop.name)
      .map((crop) => ({
        id: crop.id || slugify(crop.name),
        name: crop.name,
        color: crop.color || "#83a75f",
        sow: cleanMonthList(crop.sow),
        plant: cleanMonthList(crop.plant),
        harvest: cleanMonthList(crop.harvest),
        spacing: crop.spacing || "?",
        note: crop.note || ""
      }))
    : [];
}

function cropById(id) {
  return allCrops().find((crop) => crop.id === id);
}

function toolById(id) {
  return tools.find((tool) => tool.id === id);
}

function normalizeShape(shape) {
  return ["rect", "circle", "triangle", "greenhouse", "ridge", "free"].includes(shape) ? shape : "rect";
}

function defaultFreePoints() {
  return [
    { x: 0, y: 0 },
    { x: 100, y: 0 },
    { x: 100, y: 100 },
    { x: 0, y: 100 }
  ];
}

function freePointsForShape(shape) {
  if (shape === "triangle") {
    return [
      { x: 50, y: 0 },
      { x: 100, y: 100 },
      { x: 0, y: 100 }
    ];
  }

  if (shape === "circle") {
    return Array.from({ length: 12 }, (_, index) => {
      const angle = -Math.PI / 2 + (index / 12) * Math.PI * 2;
      return {
        x: roundToStep(50 + Math.cos(angle) * 50, 0.5),
        y: roundToStep(50 + Math.sin(angle) * 50, 0.5)
      };
    });
  }

  return defaultFreePoints();
}

function makeShapeEditable(plot) {
  if (!plot) return false;
  if (normalizeShape(plot.shape) === "free") {
    plot.points = normalizeFreePoints(plot.points);
    return false;
  }

  plot.points = freePointsForShape(normalizeShape(plot.shape));
  plot.shape = "free";
  plot.selectedPointIndex = null;
  plot.lastPointIndex = null;
  return true;
}

function normalizeFreePoints(points) {
  const source = Array.isArray(points) && points.length >= 3 ? points : defaultFreePoints();
  const normalized = source.map((point) => ({
    x: clamp(Number(point.x) || 0, 0, 100),
    y: clamp(Number(point.y) || 0, 0, 100)
  }));

  if (isInsetDefaultFreeShape(normalized)) return expandInsetFreeShape(normalized);
  return normalized;
}

function isInsetDefaultFreeShape(points) {
  if (points.length < 4) return false;
  const xs = points.map((point) => point.x);
  const ys = points.map((point) => point.y);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);

  return minX >= 9.5 && minX <= 10.5
    && maxX >= 89.5 && maxX <= 90.5
    && minY >= 9.5 && minY <= 10.5
    && maxY >= 89.5 && maxY <= 90.5;
}

function expandInsetFreeShape(points) {
  return points.map((point) => ({
    x: roundToStep(((point.x - 10) / 80) * 100, 0.5),
    y: roundToStep(((point.y - 10) / 80) * 100, 0.5)
  })).map((point) => ({
    x: clamp(point.x, 0, 100),
    y: clamp(point.y, 0, 100)
  }));
}

function freeClipPath(points) {
  return `polygon(${normalizeFreePoints(points).map((point) => `${point.x}% ${point.y}%`).join(", ")})`;
}

function isRectangularFreeShape(points) {
  const normalized = normalizeFreePoints(points);
  const hasCorners = [
    [0, 0],
    [100, 0],
    [100, 100],
    [0, 100]
  ].every(([x, y]) => normalized.some((point) => Math.abs(point.x - x) < 0.1 && Math.abs(point.y - y) < 0.1));

  return hasCorners && normalized.every((point) => (
    Math.abs(point.x) < 0.1
    || Math.abs(point.x - 100) < 0.1
    || Math.abs(point.y) < 0.1
    || Math.abs(point.y - 100) < 0.1
  ));
}

function roundedFreePath(points, radius = 9) {
  const normalized = normalizeFreePoints(points);
  if (normalized.length < 3) return "";

  const command = normalized.map((point, index) => {
    const previous = normalized[(index - 1 + normalized.length) % normalized.length];
    const next = normalized[(index + 1) % normalized.length];
    const previousDistance = Math.hypot(point.x - previous.x, point.y - previous.y);
    const nextDistance = Math.hypot(next.x - point.x, next.y - point.y);
    const cornerRadius = Math.min(radius, previousDistance / 2, nextDistance / 2);
    const start = pointOnLine(point, previous, cornerRadius);
    const end = pointOnLine(point, next, cornerRadius);
    return { point, start, end };
  });

  return command
    .map((corner, index) => {
      const start = `${corner.start.x} ${corner.start.y}`;
      const curve = `Q ${corner.point.x} ${corner.point.y} ${corner.end.x} ${corner.end.y}`;
      return index === 0 ? `M ${start} ${curve}` : `L ${start} ${curve}`;
    })
    .join(" ") + " Z";
}

function pointOnLine(from, to, distance) {
  const length = Math.hypot(to.x - from.x, to.y - from.y);
  if (!length) return { ...from };
  const ratio = distance / length;
  return {
    x: roundToStep(from.x + (to.x - from.x) * ratio, 0.01),
    y: roundToStep(from.y + (to.y - from.y) * ratio, 0.01)
  };
}

function distanceBetweenPoints(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function perpendicularDistance(point, start, end) {
  const length = distanceBetweenPoints(start, end);
  if (!length) return distanceBetweenPoints(point, start);
  const numerator = Math.abs(
    (end.y - start.y) * point.x
    - (end.x - start.x) * point.y
    + end.x * start.y
    - end.y * start.x
  );
  return numerator / length;
}

function simplifyLine(points, tolerance) {
  if (points.length <= 2) return points;

  let farthestIndex = 0;
  let farthestDistance = 0;
  const start = points[0];
  const end = points[points.length - 1];

  for (let index = 1; index < points.length - 1; index += 1) {
    const distance = perpendicularDistance(points[index], start, end);
    if (distance > farthestDistance) {
      farthestDistance = distance;
      farthestIndex = index;
    }
  }

  if (farthestDistance <= tolerance) return [start, end];

  const left = simplifyLine(points.slice(0, farthestIndex + 1), tolerance);
  const right = simplifyLine(points.slice(farthestIndex), tolerance);
  return [...left.slice(0, -1), ...right];
}

function limitPoints(points, maxPoints) {
  if (points.length <= maxPoints) return points;
  const last = points.length - 1;
  return Array.from({ length: maxPoints }, (_, index) => points[Math.round((index / (maxPoints - 1)) * last)]);
}

function simplifyDrawnFreePoints(points) {
  let source = normalizeFreePoints(points);
  if (source.length > 4 && distanceBetweenPoints(source[0], source[source.length - 1]) < 5) {
    source = source.slice(0, -1);
  }
  if (source.length <= 5) return source;

  let tolerance = 3.5;
  let simplified = simplifyLine(source, tolerance);
  while (simplified.length > 14 && tolerance < 14) {
    tolerance += 1.5;
    simplified = simplifyLine(source, tolerance);
  }

  return limitPoints(simplified, 14).map((point) => ({
    x: roundToStep(point.x, 0.5),
    y: roundToStep(point.y, 0.5)
  }));
}

function freeSvgMarkup(points) {
  return `<svg class="free-shape" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path class="free-fill" d="${roundedFreePath(points)}"></path></svg>`;
}

function freeDrawMarkup(points) {
  const clean = Array.isArray(points) ? points : [];
  if (!clean.length) return "";
  const path = clean.map((point, index) => `${index ? "L" : "M"} ${point.x} ${point.y}`).join(" ");
  return `<svg class="free-shape free-draw-preview" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path d="${path}"></path></svg>`;
}

function gardenOutlineMarkup() {
  const width = gardenWidth();
  const height = gardenHeight();
  const inset = 1.4;
  const points = gardenPointsMeters().map((point) => ({
    x: clamp(roundToStep((point.x / width) * 100, 0.01), inset, 100 - inset),
    y: clamp(roundToStep((point.y / height) * 100, 0.01), inset, 100 - inset)
  }));
  const path = points.map((point, index) => `${index ? "L" : "M"} ${point.x} ${point.y}`).join(" ") + " Z";
  return `<svg class="garden-outline" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path d="${path}"></path></svg>`;
}

function toolDefaults(tool) {
  const width = gardenWidth();
  const height = gardenHeight();
  const [baseW, baseH] = tool.defaultSize;
  return {
    w: baseW === "full" ? width : baseW,
    h: baseH === "full" ? height : baseH
  };
}

function makeStamp(toolId = state.activeTool, cropId = state.activeCrop) {
  const tool = toolById(toolId);
  if (!tool) return null;
  const crop = ["crop", "plant"].includes(toolId) ? cropById(cropId) : cropById(tool.cropId);
  const size = toolDefaults(tool);

  return {
    type: tool.id,
    cropId: crop?.id || tool.cropId || null,
    label: tool.id === "greenhouse" ? "Kas met tomaten" : crop ? crop.name : tool.label,
    x: 0,
    y: 0,
    w: size.w,
    h: size.h,
    rotation: 0,
    notes: "",
    shape: normalizeShape(tool.shape || "rect"),
    points: null,
    color: crop ? crop.color : tool.color
  };
}

function currentStamp() {
  if (!state.activeTool) return null;
  if (!state.stamp || state.stamp.type !== state.activeTool || (["crop", "plant"].includes(state.activeTool) && state.stamp.cropId !== state.activeCrop)) {
    state.stamp = makeStamp();
  }
  return state.stamp;
}

function selectPaletteTool(toolId) {
  state.activeTool = toolId;
  state.stamp = makeStamp(toolId, state.activeCrop);
  state.selectedId = null;
  state.workMode = "place";
  state.editBoundary = false;
  save();
  render();
}

function selectPaletteCrop(cropId) {
  state.activeCrop = cropId;
  state.activeTool = "crop";
  state.stamp = makeStamp("crop", cropId);
  state.selectedId = null;
  state.workMode = "place";
  state.editBoundary = false;
  save();
  render();
}

function normalizeWorkMode(mode) {
  return ["select", "boundary", "place"].includes(mode) ? mode : "select";
}

function currentWorkMode() {
  return state.activeTool && state.stamp ? "place" : normalizeWorkMode(state.workMode);
}

function shapePointsForPlot(plot) {
  if (!plot) return [];
  return normalizeShape(plot.shape) === "free" ? normalizeFreePoints(plot.points) : [];
}

function roundStep(value) {
  return roundToStep(value, snapStep);
}

function roundToStep(value, step) {
  return Number((Math.round(value / step) * step).toFixed(2));
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function gardenWidth() {
  return Math.max(...gardenPointsMeters().map((point) => point.x), 1);
}

function gardenHeight() {
  if (Array.isArray(state.boundaryPoints) && state.boundaryPoints.length >= 3) {
    return Math.max(...state.boundaryPoints.map((point) => point.y), 1);
  }
  return Math.max(state.leftLength || state.height || 14, state.rightLength || state.height || 14);
}

function gardenArea() {
  const points = gardenPointsMeters();
  return polygonArea(points);
}

function polygonArea(points) {
  const sum = points.reduce((total, point, index) => {
    const next = points[(index + 1) % points.length];
    return total + point.x * next.y - next.x * point.y;
  }, 0);
  return Math.abs(sum) / 2;
}

function validBoundaryPoints(points) {
  if (!Array.isArray(points) || points.length < 3) return null;
  const normalized = points.map((point) => ({
    x: Math.max(0, Number(point.x) || 0),
    y: Math.max(0, Number(point.y) || 0)
  }));
  const maxX = Math.max(...normalized.map((point) => point.x));
  const maxY = Math.max(...normalized.map((point) => point.y));
  return maxX >= 1 && maxY >= 1 && polygonArea(normalized) >= 1 ? normalized : null;
}

function gardenBaseWidth() {
  return Math.max(state.topWidth || state.width || 10, state.bottomWidth || state.width || 10, state.stepWidth || 0);
}

function gardenPointsMeters() {
  const boundary = validBoundaryPoints(state.boundaryPoints);
  if (boundary) {
    return boundary;
  }

  const width = gardenBaseWidth();
  const height = gardenHeight();
  const top = clamp(state.topWidth || state.width || 10, 1, width);
  const bottom = clamp(state.bottomWidth || state.width || 10, 1, width);
  const mode = state.shapeMode || "stepRight";

  if (mode === "centered") {
    const topInset = (width - top) / 2;
    const bottomInset = (width - bottom) / 2;
    return [
      { x: topInset, y: 0 },
      { x: topInset + top, y: 0 },
      { x: bottomInset + bottom, y: height },
      { x: bottomInset, y: height }
    ];
  }

  if (mode === "leftAligned") {
    return [
      { x: 0, y: 0 },
      { x: top, y: 0 },
      { x: bottom, y: height },
      { x: 0, y: height }
    ];
  }

  const stepY = clamp(state.stepAt || height / 2, 0.5, height - 0.5);
  const stepWidth = clamp(state.stepWidth || (top + bottom) / 2, 1, width);
  return [
    { x: 0, y: 0 },
    { x: top, y: 0 },
    { x: top, y: stepY },
    { x: stepWidth, y: stepY },
    { x: bottom, y: height },
    { x: 0, y: height }
  ];
}

function gardenClipPath() {
  const width = gardenWidth();
  const height = gardenHeight();
  const points = gardenPointsMeters();

  return `polygon(${points
    .map((point) => `${(point.x / width) * 100}% ${(point.y / height) * 100}%`)
    .join(", ")})`;
}

function gardenSideAngles() {
  const height = gardenHeight();
  const points = gardenPointsMeters();
  const rightTop = points[1];
  const rightBottom = points[points.length - 2];
  const leftTop = points[0];
  const leftBottom = points[points.length - 1];
  const leftAngle = toDegrees(Math.atan2(leftBottom.y - leftTop.y, leftBottom.x - leftTop.x));
  const rightAngle = toDegrees(Math.atan2(rightBottom.y - rightTop.y, rightBottom.x - rightTop.x));

  return {
    top: 0,
    bottom: 0,
    left: normalizeDegrees(leftAngle),
    right: normalizeDegrees(rightAngle)
  };
}

function gardenXRangeAtY(y) {
  const points = gardenPointsMeters();
  const height = gardenHeight();
  const scanY = clamp(y, 0.001, height - 0.001);
  const intersections = [];

  points.forEach((point, index) => {
    const next = points[(index + 1) % points.length];
    if ((point.y <= scanY && next.y > scanY) || (next.y <= scanY && point.y > scanY)) {
      const ratio = (scanY - point.y) / (next.y - point.y);
      intersections.push(point.x + ratio * (next.x - point.x));
    }
  });

  intersections.sort((a, b) => a - b);
  return {
    min: intersections[0] ?? 0,
    max: intersections[intersections.length - 1] ?? gardenWidth()
  };
}

function rectXRange(y, h) {
  const height = gardenHeight();
  const sampleYs = [y, y + h];
  gardenPointsMeters().forEach((point) => {
    if (point.y > y && point.y < y + h) {
      sampleYs.push(point.y - 0.001, point.y + 0.001);
    }
  });

  const ranges = sampleYs.map((sampleY) => gardenXRangeAtY(clamp(sampleY, 0.001, height - 0.001)));
  return {
    min: Math.max(...ranges.map((range) => range.min)),
    max: Math.min(...ranges.map((range) => range.max))
  };
}

function clampPlotPosition(x, y, w, h, useGrid = true) {
  const height = gardenHeight();
  const roundValue = useGrid ? snapAxis : (value) => roundStep(value);
  const nextY = roundValue(clamp(y, 0, Math.max(0, height - h)), "y");
  const clampedY = clamp(nextY, 0, Math.max(0, height - h));
  const range = rectXRange(clampedY, h);
  const maxX = Math.max(range.min, range.max - w);
  const nextX = roundValue(clamp(x, range.min, maxX), "x");

  return {
    x: clamp(nextX, range.min, maxX),
    y: clampedY
  };
}

function toDegrees(radians) {
  return radians * 180 / Math.PI;
}

function normalizeDegrees(value) {
  return ((Math.round(value * 10) / 10) % 360 + 360) % 360;
}

function withHistory(mutator) {
  history.push(JSON.stringify(state));
  if (history.length > 40) history.shift();
  redoHistory = [];
  mutator();
  save();
  render();
}

function undo() {
  const previous = history.pop();
  if (!previous) return;
  redoHistory.push(JSON.stringify(state));
  if (redoHistory.length > 40) redoHistory.shift();
  state = JSON.parse(previous);
  migrateState();
  save();
  render();
}

function redo() {
  const next = redoHistory.pop();
  if (!next) return;
  history.push(JSON.stringify(state));
  if (history.length > 40) history.shift();
  state = JSON.parse(next);
  migrateState();
  save();
  render();
}

function cloneData(value) {
  return JSON.parse(JSON.stringify(value));
}

function stateForStorage(source = state) {
  const copy = cloneData(source);
  copy.selectedId = null;
  copy.selectedBoundaryIndex = null;
  copy.lastBoundaryIndex = null;
  copy.activeTool = null;
  copy.stamp = null;
  copy.workMode = "select";
  copy.editBoundary = false;
  copy.drawingItemId = null;
  copy.items = (copy.items || []).map((plot) => {
    const cleaned = { ...plot };
    delete cleaned.selectedPointIndex;
    delete cleaned.lastPointIndex;
    return cleaned;
  });
  copy.appVersion = appVersion;
  return copy;
}

function newDesignId() {
  return `design-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function currentDesign() {
  return designLibrary.designs.find((design) => design.id === currentDesignId);
}

function readStorage(key) {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeStorage(key, value) {
  try {
    window.localStorage.setItem(key, value);
    return true;
  } catch {
    return false;
  }
}

function saveDesignLibrary() {
  writeStorage(designsKey, JSON.stringify(designLibrary));
  if (currentDesignId) writeStorage(currentDesignKey, currentDesignId);
}

function createDesignFromState(name, sourceState = state) {
  const now = new Date().toISOString();
  const design = {
    id: newDesignId(),
    name: (name || "Mijn tuin").trim() || "Mijn tuin",
    createdAt: now,
    updatedAt: now,
    state: stateForStorage(sourceState)
  };
  designLibrary.designs.push(design);
  currentDesignId = design.id;
  return design;
}

function clearPlacementMode() {
  state.activeTool = null;
  state.stamp = null;
  state.workMode = "select";
  state.editBoundary = false;
}

function save() {
  migrateState();
  writeStorage(storageKey, JSON.stringify(state));

  const design = currentDesign();
  if (design) {
    design.state = stateForStorage();
    design.updatedAt = new Date().toISOString();
    saveDesignLibrary();
  }
}

function load() {
  const savedLibrary = readStorage(designsKey);
  if (savedLibrary) {
    try {
      const parsed = JSON.parse(savedLibrary);
      if (Array.isArray(parsed.designs) && parsed.designs.length) {
        designLibrary = parsed;
        currentDesignId = readStorage(currentDesignKey) || parsed.designs[0].id;
        const design = currentDesign() || parsed.designs[0];
        currentDesignId = design.id;
        state = { ...state, ...cloneData(design.state || {}) };
        migrateState();
        clearPlacementMode();
        save();
        return;
      }
    } catch {
      designLibrary = { designs: [] };
      currentDesignId = null;
    }
  }

  const saved = readStorage(storageKey);
  if (!saved) {
    createSample(false);
  } else {
    try {
      state = { ...state, ...JSON.parse(saved) };
      migrateState();
      clearPlacementMode();
    } catch {
      createSample(false);
    }
  }

  designLibrary = { designs: [] };
  createDesignFromState("Mijn tuin", state);
  save();
}

function migrateState() {
  const legacyDefault = !state.topWidth && state.width === 10 && state.height === 16;
  const storedWidth = Number(state.width) || 0;
  const storedHeight = Number(state.height) || 0;
  const width = storedWidth || Number(state.topWidth) || 6;
  const height = storedHeight || Number(state.leftLength) || 14;
  state.topWidth = Number(state.topWidth) || (legacyDefault ? 6 : width);
  state.bottomWidth = Number(state.bottomWidth) || (legacyDefault ? 7 : storedWidth || 7);
  state.leftLength = Number(state.leftLength) || (legacyDefault ? 14 : height);
  state.rightLength = Number(state.rightLength) || (legacyDefault ? 14 : storedHeight || height);
  if (gardenArea() < 1) {
    state.topWidth = 6;
    state.bottomWidth = 7;
    state.leftLength = 14;
    state.rightLength = 14;
    state.boundaryPoints = null;
    state.shapeMode = "stepRight";
    state.stepAt = 7;
    state.stepWidth = 6.5;
  }
  state.customCrops = cleanCropList(state.customCrops);
  state.customFruits = cleanCropList(state.customFruits);
  state.customHerbs = cleanCropList(state.customHerbs);
  state.gridSize = state.gridSize && gridOptions[state.gridSize] ? state.gridSize : "1x1";
  state.zoom = clamp(Number(state.zoom) || 1, 0.5, 3);
  state.workMode = normalizeWorkMode(state.workMode);
  state.editBoundary = state.workMode === "boundary" || Boolean(state.editBoundary);
  if (state.editBoundary) state.workMode = "boundary";
  state.selectedBoundaryIndex = Number.isInteger(Number(state.selectedBoundaryIndex)) ? Number(state.selectedBoundaryIndex) : null;
  state.lastBoundaryIndex = Number.isInteger(Number(state.lastBoundaryIndex)) ? Number(state.lastBoundaryIndex) : null;
  state.drawingItemId = state.drawingItemId || null;
  state.boundaryPoints = validBoundaryPoints(state.boundaryPoints);
  state.shapeMode = ["stepRight", "leftAligned", "centered"].includes(state.shapeMode) ? state.shapeMode : "stepRight";
  state.stepAt = clamp(Number(state.stepAt) || ((state.leftLength || height) / 2), 0.5, Math.max(0.5, (state.leftLength || height) - 0.5));
  state.stepWidth = clamp(Number(state.stepWidth) || ((state.topWidth + state.bottomWidth) / 2), 1, 60);
  state.panelSizes = state.panelSizes || { tools: 300, details: 340 };
  state.items = state.items || [];
  state.appVersion = appVersion;
  state.items.forEach((plot) => {
    const tool = toolById(plot.type);
    plot.rotation = plot.rotation || 0;
    plot.shape = normalizeShape(plot.shape || tool?.shape || "rect");
    if (plot.shape === "free") plot.points = normalizeFreePoints(plot.points);
    if (plot.type === "greenhouse") plot.children = plot.children || [];
  });
  delete state.width;
  delete state.height;
}

function createSample(keepHistory = true) {
  const next = {
    topWidth: 6,
    bottomWidth: 7,
    leftLength: 14,
    rightLength: 14,
    activeTool: null,
    activeCrop: "tomaat",
    selectedId: null,
    stamp: null,
    snap: true,
    gridSize: state.gridSize || "1x1",
    zoom: state.zoom || 1,
    workMode: "select",
    shapeMode: state.shapeMode || "stepRight",
    editBoundary: false,
    drawingItemId: null,
    boundaryPoints: validBoundaryPoints(state.boundaryPoints),
    stepAt: state.stepAt || 7,
    stepWidth: state.stepWidth || 6.5,
    panelSizes: state.panelSizes || { tools: 300, details: 340 },
    appVersion,
    customCrops: state.customCrops || [],
    customFruits: state.customFruits || [],
    customHerbs: state.customHerbs || [],
    items: [
      item("shed", "Tuinhuis", 0.4, 0.4, 2.2, 2, null),
      item("gate", "Toegang", 2.8, 13.35, 1.2, 0.35, null),
      item("path", "Hoofdpad", 3.1, 2.6, 0.55, 10.9, null),
      item("water", "Regenton", 2.8, 0.6, 0.8, 0.8, null),
      item("compost", "Compost", 5.2, 0.5, 1.1, 1.1, null),
      item("greenhouse", "Kas met tomaten", 3.9, 2.4, 2.2, 1.8, "tomaat"),
      item("crop", "Tomaat", 0.6, 3.2, 3.4, 1.4, "tomaat"),
      item("crop", "Sla", 0.6, 5.1, 3.4, 1.2, "sla"),
      item("crop", "Wortel", 0.6, 6.8, 3.4, 1.1, "wortel"),
      item("crop", "Aardappel", 3.9, 4.8, 2.4, 1.7, "aardappel"),
      item("crop", "Boon", 3.9, 7, 2.4, 1.2, "boon"),
      item("crop", "Courgette", 3.9, 8.7, 2.4, 2.1, "courgette"),
      item("tree", "Appelboom", 0.8, 10.2, 1.3, 1.3, null),
      item("tree", "Pruimenboom", 2.5, 10.8, 1.2, 1.2, null)
    ]
  };

  if (keepHistory) {
    withHistory(() => {
      state = next;
    });
  } else {
    state = next;
    save();
  }
}

function blankStateFromCurrent() {
  return {
    topWidth: state.topWidth,
    bottomWidth: state.bottomWidth,
    leftLength: state.leftLength,
    rightLength: state.rightLength,
    activeTool: null,
    activeCrop: state.activeCrop || "tomaat",
    selectedId: null,
    stamp: null,
    snap: state.snap,
    gridSize: state.gridSize || "1x1",
    zoom: state.zoom || 1,
    shapeMode: state.shapeMode || "stepRight",
    editBoundary: false,
    drawingItemId: null,
    boundaryPoints: validBoundaryPoints(state.boundaryPoints),
    stepAt: state.stepAt || gardenHeight() / 2,
    stepWidth: state.stepWidth || (state.topWidth + state.bottomWidth) / 2,
    panelSizes: state.panelSizes || { tools: 300, details: 340 },
    appVersion,
    customCrops: state.customCrops || [],
    customFruits: state.customFruits || [],
    customHerbs: state.customHerbs || [],
    items: []
  };
}

function renderDesignSelect() {
  if (!designSelect) return;

  designSelect.innerHTML = "";
  designLibrary.designs.forEach((design) => {
    const option = document.createElement("option");
    option.value = design.id;
    option.textContent = design.name;
    designSelect.append(option);
  });
  designSelect.value = currentDesignId || "";
}

function switchDesign(designId) {
  const next = designLibrary.designs.find((design) => design.id === designId);
  if (!next || next.id === currentDesignId) return;

  save();
  currentDesignId = next.id;
  state = { ...state, ...cloneData(next.state || {}) };
  state.selectedId = null;
  migrateState();
  clearPlacementMode();
  history = [];
  clipboardItem = null;
  greenhouseId = null;
  greenhousePlantId = null;
  save();
  render();
}

function createBlankDesign() {
  const name = window.prompt("Naam voor het nieuwe ontwerp", "Nieuw ontwerp");
  if (!name) return;

  save();
  state = blankStateFromCurrent();
  migrateState();
  createDesignFromState(name, state);
  history = [];
  clipboardItem = null;
  save();
  render();
}

function saveAsDesign() {
  const current = currentDesign();
  const name = window.prompt("Naam voor deze kopie", `${current?.name || "Ontwerp"} kopie`);
  if (!name) return;

  save();
  createDesignFromState(name, state);
  history = [];
  save();
  render();
}

function safeFileName(name) {
  return (name || "tuinontwerp")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 48) || "tuinontwerp";
}

function exportDesign() {
  save();
  const design = currentDesign() || createDesignFromState("Mijn tuin", state);
  const payload = {
    app: "Tuinplanner",
    version: appVersion,
    exportedAt: new Date().toISOString(),
    design: {
      ...design,
      state: stateForStorage()
    }
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${safeFileName(design.name)}.json`;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function importDesignFile(file) {
  if (!file) return;

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      const parsed = JSON.parse(String(reader.result || "{}"));
      const importedState = parsed.design?.state || parsed.state || parsed;
      const importedName = parsed.design?.name || file.name.replace(/\.json$/i, "") || "Geimporteerd ontwerp";

      save();
      state = { ...state, ...cloneData(importedState) };
      state.selectedId = null;
      migrateState();
      createDesignFromState(importedName, state);
      history = [];
      clipboardItem = null;
      save();
      render();
    } catch {
      window.alert("Dit bestand kon niet worden ingelezen.");
    } finally {
      if (importFile) importFile.value = "";
    }
  });
  reader.readAsText(file);
}

function item(type, label, x, y, w, h, cropId) {
  const tool = toolById(type);
  const resolvedCropId = cropId || tool?.cropId || null;
  const crop = resolvedCropId ? cropById(resolvedCropId) : null;
  return {
    id: `${type}-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    type,
    label,
    x,
    y,
    w,
    h,
    cropId: resolvedCropId,
    notes: "",
    rotation: 0,
    children: type === "greenhouse" ? [] : undefined,
    shape: normalizeShape(tool?.shape || "rect"),
    color: crop ? crop.color : tool?.color || "#9f8f7a"
  };
}

function renderTools() {
  toolGrid.innerHTML = "";
  tools.forEach((tool) => {
    const button = document.createElement("button");
    button.className = "tool-button";
    button.dataset.active = state.activeTool === tool.id;
    button.dataset.paletteType = "tool";
    button.dataset.toolId = tool.id;
    button.draggable = true;
    button.innerHTML = `<span class="tool-icon" style="background:${tool.color}">${tool.icon}</span><span>${tool.label}</span>`;
    button.addEventListener("pointerdown", (event) => startPaletteDrag(event, { toolId: tool.id }));
    button.addEventListener("dragstart", (event) => {
      applyPaletteData({ toolId: tool.id });
      save();
      event.dataTransfer.setData("text/plain", JSON.stringify({ toolId: tool.id }));
    });
    button.addEventListener("click", () => {
      if (suppressPaletteClick) {
        suppressPaletteClick = false;
        return;
      }
      selectPaletteTool(tool.id);
    });
    toolGrid.append(button);
  });
}

function renderCrops() {
  cropList.innerHTML = "";
  [...baseCrops, ...(state.customCrops || [])].forEach((crop) => {
    cropList.append(cropButton(crop));
  });
}

function renderFruits() {
  fruitList.innerHTML = "";
  [...baseFruits, ...(state.customFruits || [])].forEach((fruit) => {
    fruitList.append(cropButton(fruit));
  });
}

function renderHerbs() {
  herbList.innerHTML = "";
  [...baseHerbs, ...(state.customHerbs || [])].forEach((herb) => {
    herbList.append(cropButton(herb));
  });
}

function cropButton(crop) {
    const button = document.createElement("button");
    button.className = "crop-button";
    button.dataset.active = state.activeTool === "crop" && state.activeCrop === crop.id;
    button.dataset.paletteType = "crop";
    button.dataset.cropId = crop.id;
    button.draggable = true;
    button.style.setProperty("--crop", crop.color);
    button.innerHTML = `
      <span class="crop-dot"></span>
      <span class="crop-name">${crop.name}</span>
      <small>
        <span>Zaaien ${monthRange(crop.sow)}</span>
        <span>Oogst ${monthRange(crop.harvest)}</span>
      </small>`;
    button.addEventListener("pointerdown", (event) => startPaletteDrag(event, { toolId: "crop", cropId: crop.id }));
    button.addEventListener("dragstart", (event) => {
      applyPaletteData({ toolId: "crop", cropId: crop.id });
      save();
      event.dataTransfer.setData("text/plain", JSON.stringify({ toolId: "crop", cropId: crop.id }));
    });
    button.addEventListener("click", () => {
      if (suppressPaletteClick) {
        suppressPaletteClick = false;
        return;
      }
      selectPaletteCrop(crop.id);
    });
    return button;
}

function renderBoard() {
  board.innerHTML = "";
  const width = gardenWidth();
  const height = gardenHeight();
  const grid = gridOptions[state.gridSize] || gridOptions["1x1"];
  const mode = currentWorkMode();
  board.style.setProperty("--garden-ratio", `${width} / ${height}`);
  board.style.setProperty("--garden-factor", width / height);
  board.style.setProperty("--grid-x-size", `${(grid.x / width) * 100}%`);
  board.style.setProperty("--grid-y-size", `${(grid.y / height) * 100}%`);
  board.style.setProperty("--garden-clip", gardenClipPath());
  board.dataset.grid = String(state.snap);
  board.dataset.mode = mode;
  board.insertAdjacentHTML("beforeend", gardenOutlineMarkup());
  requestAnimationFrame(() => {
    sizeBoard();
    renderRulers();
    fitPlotLabels();
  });

  state.items.forEach((plot) => {
    const el = document.createElement("button");
    el.className = "plot-item";
    el.dataset.id = plot.id;
    el.dataset.type = plot.type;
    el.dataset.shape = plot.shape || toolById(plot.type)?.shape || "rect";
    el.dataset.drawing = String(state.drawingItemId === plot.id);
    el.dataset.fullLabel = plot.label;
    el.dataset.selected = state.selectedId === plot.id;
    el.style.left = `${(plot.x / width) * 100}%`;
    el.style.top = `${(plot.y / height) * 100}%`;
    el.style.width = `${(plot.w / width) * 100}%`;
    el.style.height = `${(plot.h / height) * 100}%`;
    el.style.setProperty("--rotation", `${plot.rotation || 0}deg`);
    el.style.setProperty("--item-color", plot.color);
    const isDrawing = state.drawingItemId === plot.id;
    const freeRect = plot.shape === "free" && !isDrawing && isRectangularFreeShape(plot.points);
    let drawingPoints = [];
    if (plot.shape === "free") {
      if (isDrawing) {
        drawingPoints = Array.isArray(plot.points) ? plot.points : [];
      } else {
        plot.points = normalizeFreePoints(plot.points);
      }
      el.dataset.selectedPoint = String(plot.selectedPointIndex ?? -1);
      el.dataset.freeRect = String(freeRect);
    }
    el.innerHTML = `
      ${plot.shape === "free" && isDrawing ? freeDrawMarkup(drawingPoints) : ""}
      ${plot.shape === "free" && !freeRect && !isDrawing ? freeSvgMarkup(plot.points) : ""}
      <span class="plot-name">${plot.label}</span>
      <span></span>
      <span class="plot-meta">${formatMeters(plot.w)} x ${formatMeters(plot.h)} m</span>
      <span class="resize-handle resize-nw" data-corner="nw" aria-hidden="true"></span>
      <span class="resize-handle resize-ne" data-corner="ne" aria-hidden="true"></span>
      <span class="resize-handle resize-sw" data-corner="sw" aria-hidden="true"></span>
      <span class="resize-handle resize-se" data-corner="se" aria-hidden="true"></span>
      ${plot.shape === "free" && state.selectedId === plot.id && state.drawingItemId !== plot.id && mode !== "boundary" && mode !== "place" ? freePointMarkup(shapePointsForPlot(plot), plot.selectedPointIndex) : ""}
    `;
    el.querySelectorAll(".shape-point").forEach((pointHandle) => {
      pointHandle.addEventListener("pointerdown", (event) => {
        startShapePointPointer(event, plot.id, Number(pointHandle.dataset.pointIndex));
      });
    });
    el.addEventListener("pointerdown", (event) => startItemPointer(event, plot.id));
    board.append(el);
  });

  renderBoundaryPoints(width, height);
}

function freePointMarkup(points, selectedIndex = -1) {
  return normalizeFreePoints(points)
    .map((point, index) => `<span class="shape-point" data-selected="${index === selectedIndex}" data-point-index="${index}" style="left:${point.x}%;top:${point.y}%" aria-hidden="true"></span>`)
    .join("");
}

function renderBoundaryPoints(width, height) {
  if (currentWorkMode() !== "boundary") return;

  gardenPointsMeters().forEach((point, index) => {
    const handle = document.createElement("button");
    handle.className = "boundary-point";
    handle.dataset.boundaryIndex = index;
    handle.dataset.selected = String(index === state.selectedBoundaryIndex);
    handle.style.left = `${(point.x / width) * 100}%`;
    handle.style.top = `${(point.y / height) * 100}%`;
    handle.title = "Tuinrandpunt";
    handle.addEventListener("pointerdown", startBoundaryPointer);
    board.append(handle);
  });
}

function sizeBoard() {
  const shell = board.closest(".board-shell");
  const measure = board.closest(".board-measure");
  if (!shell) return;

  const style = getComputedStyle(shell);
  const availableWidth = shell.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
  const availableHeight = shell.clientHeight - parseFloat(style.paddingTop) - parseFloat(style.paddingBottom);
  const ratio = gardenWidth() / gardenHeight();
  const baseWidth = Math.max(180, Math.min(availableWidth, availableHeight * ratio));
  const width = baseWidth * clamp(state.zoom || 1, 0.5, 3);
  const height = width / ratio;

  [board, measure].filter(Boolean).forEach((element) => {
    element.style.setProperty("--board-width", `${width}px`);
    element.style.setProperty("--board-height", `${height}px`);
  });
}

function renderRulers() {
  renderRuler(rulerTop, gardenWidth(), "x");
  renderRuler(rulerLeft, gardenHeight(), "y");
}

function renderRuler(target, meters, axis) {
  if (!target) return;

  const majorStep = meters > 18 ? 2 : 1;
  const ticks = [];
  for (let value = 0; value <= meters + 0.001; value += majorStep) {
    ticks.push(value);
  }
  if (ticks[ticks.length - 1] !== meters) ticks.push(meters);

  target.innerHTML = ticks
    .map((value) => {
      const position = (value / meters) * 100;
      const label = Number(value.toFixed(1)).toString();
      return `<span class="ruler-tick" style="${axis === "x" ? "left" : "top"}:${position}%"><i></i><b>${label}</b></span>`;
    })
    .join("");
}

function fitPlotLabels() {
  board.querySelectorAll(".plot-item").forEach((plot) => {
    const label = plot.querySelector(".plot-name");
    if (!label) return;

    const width = Math.max(24, plot.clientWidth - 14);
    const height = Math.max(20, plot.clientHeight - 14);
    const circle = plot.dataset.shape === "circle";
    const fullLabel = plot.dataset.fullLabel || label.textContent.trim();
    label.textContent = circle && Math.min(width, height) < 82 ? shortCircleLabel(fullLabel, plot.dataset.type) : fullLabel;
    const circleSpace = Math.min(width, height) * 0.9;
    const vertical = height > width * 2.2 && width < 72;
    const compact = circle || width < 92 || height < 56;
    const tiny = width < 58 || height < 38;
    const availableHeight = circle ? circleSpace : compact || vertical ? height : Math.max(18, height - 18);
    const textLength = Math.max(1, label.textContent.trim().length);
    const fitWidth = circle ? circleSpace : vertical ? availableHeight : width;
    const fitHeight = circle ? circleSpace : vertical ? width : availableHeight;
    const estimated = Math.sqrt((fitWidth * fitHeight) / textLength) * 1.15;
    const maxSize = circle ? 12 : tiny ? 11 : compact ? 13 : 16;
    const minSize = circle ? 6.5 : tiny ? 7 : 8;
    const fontSize = clamp(estimated, minSize, maxSize);

    plot.dataset.compactLabel = String(compact);
    plot.dataset.tinyLabel = String(tiny);
    plot.dataset.circleLabel = String(circle);
    plot.dataset.verticalLabel = String(!circle && vertical);
    label.style.setProperty("--label-size", `${fontSize.toFixed(1)}px`);
    label.style.setProperty("--label-lines", circle ? "2" : tiny || vertical ? "1" : "2");
  });
}

function shortCircleLabel(label, type) {
  const normalized = label.trim().toLowerCase();
  const known = {
    regenton: "Ton",
    waterton: "Ton",
    appelboom: "Appel",
    pruimenboom: "Pruim",
    perenboom: "Peer",
    kersenboom: "Kers",
    bessenhoek: "Bes"
  };

  if (known[normalized]) return known[normalized];
  if (type === "tree") return label.replace(/boom$/i, "").trim();
  return label.split(/\s+/)[0].slice(0, 6);
}

function renderDetails() {
  inputs.gardenTop.value = state.topWidth;
  inputs.gardenRight.value = state.rightLength;
  inputs.gardenBottom.value = state.bottomWidth;
  inputs.gardenLeft.value = state.leftLength;
  document.querySelector("#areaLabel").textContent = `${formatMeters(gardenArea())} m2`;
  document.querySelector("#gardenTitle").textContent = `${formatMeters(state.topWidth)} x ${formatMeters(state.rightLength)} x ${formatMeters(state.bottomWidth)} x ${formatMeters(state.leftLength)} m`;
  document.querySelector("#printTitle").textContent = currentDesign()?.name || "Tuinplanner";
  document.querySelector("#snapToggle").checked = state.snap;
  document.querySelector("#gridSize").value = state.gridSize || "1x1";
  document.querySelector("#zoomResetBtn").textContent = `${Math.round((state.zoom || 1) * 100)}%`;
  const mode = currentWorkMode();
  document.querySelector("#boundaryEditBtn").dataset.active = String(mode === "boundary");
  document.querySelector("#addBoundaryPointBtn").disabled = mode !== "boundary";
  document.querySelector("#removeBoundaryPointBtn").disabled = mode !== "boundary";

  const selected = selectedItem();
  const editable = selected || currentStamp();
  const emptyDetails = document.querySelector("#emptyDetails");
  const detailsForm = document.querySelector("#detailsForm");
  const selectionSummary = document.querySelector("#selectionSummary");
  const planningMode = document.querySelector("#planningMode");
  const openGreenhouseBtn = document.querySelector("#openGreenhouseBtn");

  if (!editable) {
    emptyDetails.hidden = false;
    detailsForm.hidden = true;
    selectionSummary.textContent = "Geen vak geselecteerd";
    planningMode.textContent = "Alles";
    document.querySelector(".freeform-actions").hidden = true;
    document.querySelector("#addPointBtn").disabled = true;
    document.querySelector("#removePointBtn").disabled = true;
    document.querySelector("#drawShapeBtn").disabled = true;
    renderPlanning(null);
    return;
  }

  emptyDetails.hidden = true;
  detailsForm.hidden = false;
  inputs.itemLabel.value = editable.label;
  inputs.itemX.value = selected ? selected.x : "";
  inputs.itemY.value = selected ? selected.y : "";
  inputs.itemW.value = editable.w;
  inputs.itemH.value = editable.h;
  inputs.itemRotation.value = normalizeDegrees(editable.rotation || 0);
  inputs.itemColor.value = editable.color || "#83a75f";
  inputs.itemShape.value = normalizeShape(editable.shape);
  inputs.itemNotes.value = editable.notes || "";
  const freeEditable = Boolean(selected) && normalizeShape(editable.shape) === "free" && mode !== "boundary" && mode !== "place";
  document.querySelector(".freeform-actions").hidden = !freeEditable;
  document.querySelector("#addPointBtn").disabled = !freeEditable;
  document.querySelector("#removePointBtn").disabled = !freeEditable;
  document.querySelector("#drawShapeBtn").disabled = !freeEditable;
  openGreenhouseBtn.hidden = editable.type !== "greenhouse" || !selected;
  selectionSummary.textContent = selected
    ? `${selected.label} · ${formatMeters(selected.w * selected.h)} m2`
    : `Nieuw: ${editable.label}`;
  planningMode.textContent = editable.cropId ? editable.label : "Alles";
  renderPlanning(editable.cropId || null);
}

function renderPlanning(onlyCropId = null) {
  const usedCropIds = [...new Set(state.items.filter((plot) => plot.cropId).map((plot) => plot.cropId))];
  const cropIds = onlyCropId ? [onlyCropId] : usedCropIds;
  const visibleCrops = cropIds.map(cropById).filter(Boolean);

  if (!visibleCrops.length) {
    cropInfo.innerHTML = "<span>Nog geen groentevakken.</span>";
    calendar.innerHTML = "";
    return;
  }

  cropInfo.innerHTML = visibleCrops
    .map((crop) => `<div><strong>${crop.name}</strong> · afstand ${crop.spacing}. ${crop.note}</div>`)
    .join("");

  calendar.innerHTML = "";
  months.forEach((month, index) => {
    const monthNumber = index + 1;
    const row = document.createElement("div");
    row.className = "month-row";
    row.innerHTML = `
      <span class="month-name">${month}</span>
      <span class="phase sow">${phaseText(visibleCrops, "sow", monthNumber)}</span>
      <span class="phase plant">${phaseText(visibleCrops, "plant", monthNumber)}</span>
      <span class="phase harvest">${phaseText(visibleCrops, "harvest", monthNumber)}</span>
    `;
    calendar.append(row);
  });
}

function phaseText(cropSet, phase, monthNumber) {
  const matches = cropSet.filter((crop) => crop[phase].includes(monthNumber));
  if (!matches.length) return "";
  if (cropSet.length === 1) {
    return phase === "sow" ? "Zaai" : phase === "plant" ? "Plant" : "Oogst";
  }
  return String(matches.length);
}

function monthRange(list) {
  const monthsList = cleanMonthList(list);
  if (!monthsList.length) return "-";
  return `${months[monthsList[0] - 1]}-${months[monthsList[monthsList.length - 1] - 1]}`;
}

function formatMeters(value) {
  return Number((Number(value) || 0).toFixed(2)).toString();
}

function selectedItem() {
  return state.items.find((plot) => plot.id === state.selectedId);
}

function clonePlot(plot) {
  return JSON.parse(JSON.stringify(plot));
}

function copySelected() {
  const selected = selectedItem();
  if (!selected) return;
  clipboardItem = clonePlot(selected);
}

function cutSelected() {
  const selected = selectedItem();
  if (!selected) return;
  clipboardItem = clonePlot(selected);
  withHistory(() => {
    state.items = state.items.filter((plot) => plot.id !== selected.id);
    state.selectedId = null;
  });
}

function pasteClipboard() {
  if (!clipboardItem) return;
  const position = clampPlotPosition(
    (clipboardItem.x || 0) + 0.5,
    (clipboardItem.y || 0) + 0.5,
    clipboardItem.w,
    clipboardItem.h
  );

  withHistory(() => {
    const pasted = {
      ...clonePlot(clipboardItem),
      id: `${clipboardItem.type}-${Date.now()}`,
      x: position.x,
      y: position.y,
      label: clipboardItem.label
    };
    state.items.push(pasted);
    state.selectedId = pasted.id;
    clipboardItem = clonePlot(pasted);
  });
}

function duplicateSelected() {
  copySelected();
  pasteClipboard();
  const selected = selectedItem();
  if (selected && !selected.label.endsWith(" kopie")) {
    selected.label = `${selected.label} kopie`;
    save();
    render();
  }
}

function addPlotAt(clientX, clientY) {
  if (currentWorkMode() === "boundary") return;
  const rect = board.getBoundingClientRect();
  const stamp = currentStamp();
  if (!stamp) {
    if (state.selectedId) {
      state.selectedId = null;
      save();
      render();
    }
    return;
  }
  const width = gardenWidth();
  const height = gardenHeight();
  const itemW = clamp(stamp.w, minItemSize, width);
  const itemH = clamp(stamp.h, minItemSize, height);
  const rawX = ((clientX - rect.left) / rect.width) * width - itemW / 2;
  const rawY = ((clientY - rect.top) / rect.height) * height - itemH / 2;
  const position = clampPlotPosition(rawX, rawY, itemW, itemH);

  withHistory(() => {
    const created = {
      ...item(stamp.type, stamp.label, position.x, position.y, itemW, itemH, stamp.cropId),
      rotation: stamp.rotation || 0,
      notes: stamp.notes || "",
      shape: stamp.shape,
      points: stamp.shape === "free" ? normalizeFreePoints(stamp.points) : null,
      color: stamp.color
    };
    state.items.push(created);
    state.selectedId = created.id;
    state.activeTool = null;
    state.stamp = null;
    state.workMode = "select";
  });
}

function snap(value) {
  return snapAxis(value, "x");
}

function snapAxis(value, axis) {
  if (!state.snap) return Number(value.toFixed(2));
  const grid = gridOptions[state.gridSize] || gridOptions["1x1"];
  return roundToStep(value, grid[axis] || 1);
}

function fine(value) {
  return roundStep(value);
}

function pointFromItemEvent(event, rect) {
  return {
    x: roundToStep(clamp(((event.clientX - rect.left) / rect.width) * 100, 0, 100), 0.5),
    y: roundToStep(clamp(((event.clientY - rect.top) / rect.height) * 100, 0, 100), 0.5)
  };
}

function absoluteFreePoints(plot, points = normalizeFreePoints(plot.points)) {
  return points.map((point) => ({
    x: plot.x + (point.x / 100) * plot.w,
    y: plot.y + (point.y / 100) * plot.h
  }));
}

function fitFreeShapeToAbsolutePoints(plot, absolutePoints) {
  const width = gardenWidth();
  const height = gardenHeight();
  const clippedPoints = absolutePoints.map((point) => ({
    x: clamp(point.x, 0, width),
    y: clamp(point.y, 0, height)
  }));
  const minX = clamp(Math.min(...clippedPoints.map((point) => point.x)), 0, width - minItemSize);
  const minY = clamp(Math.min(...clippedPoints.map((point) => point.y)), 0, height - minItemSize);
  const maxX = clamp(Math.max(...clippedPoints.map((point) => point.x)), minX + minItemSize, width);
  const maxY = clamp(Math.max(...clippedPoints.map((point) => point.y)), minY + minItemSize, height);
  const newW = roundStep(maxX - minX);
  const newH = roundStep(maxY - minY);

  plot.x = roundStep(minX);
  plot.y = roundStep(minY);
  plot.w = Math.max(minItemSize, newW);
  plot.h = Math.max(minItemSize, newH);
  plot.points = clippedPoints.map((point) => ({
    x: roundToStep(((point.x - plot.x) / plot.w) * 100, 0.5),
    y: roundToStep(((point.y - plot.y) / plot.h) * 100, 0.5)
  })).map((point) => ({
    x: clamp(point.x, 0, 100),
    y: clamp(point.y, 0, 100)
  }));
}

function expandFreePointFromDelta(plot, original, dx, dy, pointIndex) {
  const absolutePoints = absoluteFreePoints(original, normalizeFreePoints(original.points));
  absolutePoints[pointIndex] = {
    x: absolutePoints[pointIndex].x + dx,
    y: absolutePoints[pointIndex].y + dy
  };
  fitFreeShapeToAbsolutePoints(plot, absolutePoints);
}

function startShapePointPointer(event, id, pointIndex) {
  event.preventDefault();
  event.stopPropagation();

  if (state.drawingItemId === id) return;

  const plot = state.items.find((candidate) => candidate.id === id);
  if (!plot) return;
  const undoOriginal = clonePlot(plot);

  state.selectedId = id;
  if (normalizeShape(plot.shape) !== "free") return;
  plot.points = normalizeFreePoints(plot.points);
  plot.selectedPointIndex = pointIndex;
  plot.lastPointIndex = pointIndex;

  event.currentTarget.parentElement?.querySelectorAll(".shape-point").forEach((handle) => {
    handle.dataset.selected = String(Number(handle.dataset.pointIndex) === pointIndex);
  });

  interaction = {
    id,
    mode: "point",
    pointIndex,
    startX: event.clientX,
    startY: event.clientY,
    rect: board.getBoundingClientRect(),
    itemRect: event.currentTarget.parentElement.getBoundingClientRect(),
    original: { ...plot, points: normalizeFreePoints(plot.points) },
    undoOriginal,
    changed: false
  };

  save();
  try {
    event.currentTarget.setPointerCapture?.(event.pointerId);
  } catch {
    // Some browser automation/touch layers do not expose an active pointer id.
  }
}

function startItemPointer(event, id) {
  event.preventDefault();
  event.stopPropagation();

  const plot = state.items.find((candidate) => candidate.id === id);
  if (!plot) return;
  const mode = currentWorkMode();

  if (state.selectedId !== id) {
    state.selectedId = id;
    save();
    render();
  }

  if (mode === "boundary") return;

  const rect = board.getBoundingClientRect();
  const itemRect = event.currentTarget.getBoundingClientRect();

  if (state.drawingItemId === id) {
    const original = clonePlot(plot);
    plot.shape = "free";
    plot.points = [pointFromItemEvent(event, itemRect)];
    plot.selectedPointIndex = null;
    plot.lastPointIndex = null;
    interaction = {
      id,
      mode: "draw",
      rect,
      itemRect,
      original,
      undoOriginal: original,
      changed: true
    };
    try {
      event.currentTarget.setPointerCapture?.(event.pointerId);
    } catch {
      // Some browser automation/touch layers do not expose an active pointer id.
    }
    renderBoard();
    renderDetails();
    return;
  }

  const isResize = event.target.classList.contains("resize-handle");
  const isShapePoint = event.target.classList.contains("shape-point");
  const pointIndex = isShapePoint ? Number(event.target.dataset.pointIndex) : null;

  if (mode === "place" && isShapePoint) return;
  if (mode !== "select" && isResize) return;

  interaction = {
    id,
    mode: isShapePoint ? "point" : isResize ? "resize" : "move",
    corner: isResize ? event.target.dataset.corner || "se" : null,
    pointIndex,
    startX: event.clientX,
    startY: event.clientY,
    rect,
    itemRect,
    original: { ...plot },
    changed: false
  };

  if (isShapePoint) {
    interaction.original = { ...plot, points: normalizeFreePoints(plot.points) };
    plot.selectedPointIndex = pointIndex;
    plot.lastPointIndex = pointIndex;
    save();
  }

  if (event.currentTarget.setPointerCapture) {
    try {
      event.currentTarget.setPointerCapture(event.pointerId);
    } catch {
      // Some browser automation/touch layers do not expose an active pointer id.
    }
  }
}

function moveInteraction(event) {
  if (!interaction) return;

  const plot = state.items.find((candidate) => candidate.id === interaction.id);
  if (!plot) return;

  const width = gardenWidth();
  const height = gardenHeight();
  const dx = ((event.clientX - interaction.startX) / interaction.rect.width) * width;
  const dy = ((event.clientY - interaction.startY) / interaction.rect.height) * height;

  if (Math.abs(dx) > 0.02 || Math.abs(dy) > 0.02) interaction.changed = true;

  if (interaction.mode === "move") {
    const position = clampPlotPosition(interaction.original.x + dx, interaction.original.y + dy, plot.w, plot.h, false);
    plot.x = position.x;
    plot.y = position.y;
  } else if (interaction.mode === "point") {
    plot.shape = "free";
    expandFreePointFromDelta(plot, interaction.original, dx, dy, interaction.pointIndex);
    plot.selectedPointIndex = interaction.pointIndex;
    plot.lastPointIndex = interaction.pointIndex;
  } else if (interaction.mode === "draw") {
    plot.shape = "free";
    plot.points = plot.points || [];
    const point = pointFromItemEvent(event, interaction.itemRect);
    const last = plot.points[plot.points.length - 1];
    if (!last || Math.hypot(point.x - last.x, point.y - last.y) > 3) {
      plot.points.push(point);
    }
  } else {
    resizePlotFromCorner(plot, interaction.original, dx, dy, interaction.corner, width, height);
  }

  renderBoard();
  renderDetails();
}

function resizePlotFromCorner(plot, original, dx, dy, corner, boardWidth, boardHeight) {
  const minSize = minItemSize;
  const leftChanging = corner.includes("w");
  const topChanging = corner.includes("n");
  const newX = leftChanging ? roundStep(clamp(original.x + dx, 0, original.x + original.w - minSize)) : original.x;
  const newY = topChanging ? roundStep(clamp(original.y + dy, 0, original.y + original.h - minSize)) : original.y;
  const rawW = leftChanging ? original.w + (original.x - newX) : original.w + dx;
  const rawH = topChanging ? original.h + (original.y - newY) : original.h + dy;

  plot.x = newX;
  plot.y = newY;
  plot.w = roundStep(clamp(rawW, minSize, boardWidth - newX));
  plot.h = roundStep(clamp(rawH, minSize, boardHeight - newY));
  const position = clampPlotPosition(plot.x, plot.y, plot.w, plot.h, false);
  plot.x = position.x;
  plot.y = position.y;
  const range = rectXRange(plot.y, plot.h);
  plot.w = roundStep(clamp(plot.w, minSize, Math.max(minSize, range.max - plot.x)));
}

function endInteraction() {
  if (!interaction) return;

  const livePlot = state.items.find((candidate) => candidate.id === interaction.id);
  if (interaction.mode === "draw" && livePlot) {
    const simplified = simplifyDrawnFreePoints(livePlot.points || []);
    if (simplified.length >= 3) {
      livePlot.shape = "free";
      livePlot.points = simplified;
      livePlot.selectedPointIndex = null;
      livePlot.lastPointIndex = null;
    } else {
      Object.assign(livePlot, interaction.original);
      interaction.changed = false;
    }
  }

  if (interaction.changed) {
    const previous = JSON.parse(JSON.stringify(state));
    const plot = previous.items.find((candidate) => candidate.id === interaction.id);
    Object.assign(plot, interaction.undoOriginal || interaction.original);
    history.push(JSON.stringify(previous));
    if (history.length > 40) history.shift();
    redoHistory = [];
    save();
  }

  if (interaction.mode === "draw") {
    state.drawingItemId = null;
    save();
  }

  interaction = null;
}

function updateSelectedFromInputs() {
  const plot = selectedItem();
  const width = gardenWidth();
  const height = gardenHeight();

  if (!plot) {
    const stamp = currentStamp();
    if (!stamp) return;
    const nextShape = normalizeShape(inputs.itemShape.value);
    const previousShape = normalizeShape(stamp.shape);
    state.stamp = {
      ...stamp,
      label: inputs.itemLabel.value.trim() || stamp.label,
      w: fine(clamp(Number(inputs.itemW.value) || minItemSize, minItemSize, width)),
      h: fine(clamp(Number(inputs.itemH.value) || minItemSize, minItemSize, height)),
      rotation: normalizeDegrees(Number(inputs.itemRotation.value) || 0),
      color: inputs.itemColor.value || stamp.color,
      shape: nextShape,
      points: nextShape === "free"
        ? previousShape === "free" ? normalizeFreePoints(stamp.points) : freePointsForShape(previousShape)
        : null,
      notes: inputs.itemNotes.value
    };
    save();
    renderDetails();
    return;
  }

  withHistory(() => {
    const previousShape = normalizeShape(plot.shape);
    const nextShape = normalizeShape(inputs.itemShape.value);
    plot.label = inputs.itemLabel.value.trim() || plot.label;
    plot.w = fine(clamp(Number(inputs.itemW.value) || minItemSize, minItemSize, width));
    plot.h = fine(clamp(Number(inputs.itemH.value) || minItemSize, minItemSize, height));
    const position = clampPlotPosition(Number(inputs.itemX.value) || 0, Number(inputs.itemY.value) || 0, plot.w, plot.h, false);
    plot.x = fine(position.x);
    plot.y = fine(position.y);
    const range = rectXRange(plot.y, plot.h);
    plot.w = fine(clamp(plot.w, minItemSize, Math.max(minItemSize, range.max - plot.x)));
    plot.rotation = normalizeDegrees(Number(inputs.itemRotation.value) || 0);
    plot.color = inputs.itemColor.value || plot.color;
    plot.shape = nextShape;
    plot.points = nextShape === "free"
      ? previousShape === "free" ? normalizeFreePoints(plot.points) : freePointsForShape(previousShape)
      : null;
    plot.notes = inputs.itemNotes.value;
  });
}

function attachEvents() {
  board.addEventListener("pointerdown", (event) => {
    if (event.target !== board) return;
    addPlotAt(event.clientX, event.clientY);
  });
  board.addEventListener("dragover", (event) => event.preventDefault());
  board.addEventListener("drop", (event) => {
    event.preventDefault();
    try {
      const data = JSON.parse(event.dataTransfer.getData("text/plain") || "{}");
      applyPaletteData(data);
      addPlotAt(event.clientX, event.clientY);
    } catch {
      addPlotAt(event.clientX, event.clientY);
    }
  });
  window.addEventListener("pointermove", moveInteraction);
  window.addEventListener("pointerup", endInteraction);
  window.addEventListener("pointercancel", endInteraction);
  window.addEventListener("pointermove", moveBoundaryPointer);
  window.addEventListener("pointerup", endBoundaryPointer);
  window.addEventListener("pointercancel", endBoundaryPointer);
  window.addEventListener("pointermove", movePaletteDrag);
  window.addEventListener("pointerup", endPaletteDrag);
  window.addEventListener("pointercancel", cancelPaletteDrag);
  window.addEventListener("pointermove", movePanelSplitter);
  window.addEventListener("pointerup", endPanelSplitter);
  window.addEventListener("pointercancel", endPanelSplitter);
  document.addEventListener("keydown", handleKeyboardShortcuts);
  document.querySelector("#leftSplitter").addEventListener("pointerdown", (event) => startPanelSplitter(event, "tools"));
  document.querySelector("#rightSplitter").addEventListener("pointerdown", (event) => startPanelSplitter(event, "details"));

  inputs.gardenTop.addEventListener("change", () => resizeGarden("topWidth", Number(inputs.gardenTop.value)));
  inputs.gardenRight.addEventListener("change", () => resizeGarden("rightLength", Number(inputs.gardenRight.value)));
  inputs.gardenBottom.addEventListener("change", () => resizeGarden("bottomWidth", Number(inputs.gardenBottom.value)));
  inputs.gardenLeft.addEventListener("change", () => resizeGarden("leftLength", Number(inputs.gardenLeft.value)));
  document.querySelector("#addCropBtn").addEventListener("click", addCustomCrop);
  designSelect?.addEventListener("change", (event) => switchDesign(event.target.value));
  document.querySelector("#newDesignBtn")?.addEventListener("click", createBlankDesign);
  document.querySelector("#saveAsBtn")?.addEventListener("click", saveAsDesign);
  document.querySelector("#exportBtn")?.addEventListener("click", exportDesign);
  document.querySelector("#importBtn")?.addEventListener("click", () => importFile?.click());
  importFile?.addEventListener("change", (event) => importDesignFile(event.target.files?.[0]));

  Object.values(inputs).forEach((input) => {
    if (input.id.startsWith("item")) {
      input.addEventListener("change", updateSelectedFromInputs);
    }
  });

  document.querySelector("#snapToggle").addEventListener("change", (event) => {
    state.snap = event.target.checked;
    save();
    render();
  });
  document.querySelector("#gridSize").addEventListener("change", (event) => {
    state.gridSize = event.target.value;
    save();
    render();
  });
  document.querySelector("#zoomOutBtn").addEventListener("click", () => updateZoom(-0.25));
  document.querySelector("#zoomInBtn").addEventListener("click", () => updateZoom(0.25));
  document.querySelector("#zoomResetBtn").addEventListener("click", () => setZoom(1));
  document.querySelector("#boundaryEditBtn").addEventListener("click", () => setWorkMode(currentWorkMode() === "boundary" ? "select" : "boundary"));
  document.querySelector("#addBoundaryPointBtn").addEventListener("click", addBoundaryPoint);
  document.querySelector("#removeBoundaryPointBtn").addEventListener("click", removeBoundaryPoint);
  document.querySelector("#addPointBtn").addEventListener("click", addFreePoint);
  document.querySelector("#removePointBtn").addEventListener("click", removeFreePoint);
  document.querySelector("#drawShapeBtn").addEventListener("click", startDrawShape);

  document.querySelector("#deleteBtn").addEventListener("click", () => {
    if (!selectedItem()) return;
    withHistory(() => {
      state.items = state.items.filter((plot) => plot.id !== state.selectedId);
      state.selectedId = null;
    });
  });
  document.querySelector("#copyBtn").addEventListener("click", copySelected);
  document.querySelector("#cutBtn").addEventListener("click", cutSelected);
  document.querySelector("#pasteBtn").addEventListener("click", pasteClipboard);

  document.querySelector("#rotateLeftBtn").addEventListener("click", () => rotateSelected(-5));
  document.querySelector("#rotateBtn").addEventListener("click", () => {
    rotateSelected(90);
  });
  document.querySelector("#rotateRightBtn").addEventListener("click", () => rotateSelected(5));
  document.querySelector("#parallelTopBtn").addEventListener("click", () => alignSelectedToSide("top"));
  document.querySelector("#parallelLeftBtn").addEventListener("click", () => alignSelectedToSide("left"));
  document.querySelector("#parallelRightBtn").addEventListener("click", () => alignSelectedToSide("right"));
  document.querySelector("#parallelBottomBtn").addEventListener("click", () => alignSelectedToSide("bottom"));

  document.querySelector("#openGreenhouseBtn").addEventListener("click", () => {
    const selected = selectedItem();
    if (selected?.type === "greenhouse") openGreenhouse(selected.id);
  });

  document.querySelector("#closeGreenhouseBtn").addEventListener("click", closeGreenhouse);
  greenhouseBoard.addEventListener("pointerdown", startGreenhousePointer);
  window.addEventListener("pointermove", moveGreenhousePlant);
  window.addEventListener("pointerup", endGreenhousePlant);
  window.addEventListener("pointercancel", endGreenhousePlant);
  document.querySelector("#deleteGreenhousePlantBtn").addEventListener("click", deleteGreenhousePlant);

  document.querySelector("#duplicateBtn").addEventListener("click", () => {
    duplicateSelected();
  });

  document.querySelector("#undoBtn").addEventListener("click", () => {
    undo();
  });
  document.querySelector("#redoBtn").addEventListener("click", () => {
    redo();
  });

  document.querySelector("#printBtn").addEventListener("click", () => window.print());
  document.querySelector("#sampleBtn").addEventListener("click", () => createSample(true));
  document.querySelector("#clearBtn").addEventListener("click", () => {
    withHistory(() => {
      state.items = [];
      state.selectedId = null;
    });
  });
}

function resizeGarden(key, value) {
  const next = clamp(value || state[key], 1, key.includes("Width") ? 60 : 80);
  withHistory(() => {
    state[key] = next;
    state.stepAt = clamp(state.stepAt || gardenHeight() / 2, 0.5, Math.max(0.5, gardenHeight() - 0.5));
    state.stepWidth = clamp(state.stepWidth || (state.topWidth + state.bottomWidth) / 2, 1, gardenBaseWidth());
    const width = gardenWidth();
    const height = gardenHeight();
    state.items = state.items.map((plot) => ({
      ...plot,
      w: Math.min(plot.w, width),
      h: Math.min(plot.h, height)
    })).map((plot) => {
      const position = clampPlotPosition(plot.x, plot.y, plot.w, plot.h, false);
      return { ...plot, x: position.x, y: position.y };
    });
  });
}

function updateGardenShape(key, value) {
  withHistory(() => {
    if (key === "shapeMode") {
      state.shapeMode = value;
    } else if (key === "stepAt") {
      state.stepAt = clamp(value || gardenHeight() / 2, 0.5, Math.max(0.5, gardenHeight() - 0.5));
    } else if (key === "stepWidth") {
      state.stepWidth = clamp(value || (state.topWidth + state.bottomWidth) / 2, 1, Math.max(gardenBaseWidth(), value || 1));
    }
  });
}

function setZoom(value) {
  state.zoom = clamp(value, 0.5, 3);
  save();
  sizeBoard();
  renderRulers();
  fitPlotLabels();
  renderDetails();
}

function updateZoom(delta) {
  setZoom((state.zoom || 1) + delta);
}

function setWorkMode(mode) {
  const nextMode = normalizeWorkMode(mode);
  const applyMode = () => {
    state.workMode = nextMode;
    state.editBoundary = state.workMode === "boundary";
    state.drawingItemId = null;
    if (state.workMode !== "boundary") state.selectedBoundaryIndex = null;
    clearTransientPlacementForMode();
    if (state.workMode === "boundary") ensureBoundaryPoints();
  };

  applyMode();
  save();
  render();
}

function clearTransientPlacementForMode() {
  if (state.workMode === "place") return;
  state.activeTool = null;
  state.stamp = null;
}

function toggleBoundaryEdit() {
  setWorkMode(currentWorkMode() === "boundary" ? "select" : "boundary");
}

function startBoundaryPointer(event) {
  if (!state.editBoundary) return;
  const index = Number(event.currentTarget.dataset.boundaryIndex);
  state.selectedBoundaryIndex = index;
  state.lastBoundaryIndex = index;
  const rect = board.getBoundingClientRect();
  boundaryInteraction = {
    index,
    rect,
    original: JSON.stringify(state)
  };
  try {
    event.currentTarget.setPointerCapture?.(event.pointerId);
  } catch {
    // Some browser automation/touch layers do not expose an active pointer id.
  }
  event.preventDefault();
  event.stopPropagation();
}

function moveBoundaryPointer(event) {
  if (!boundaryInteraction) return;
  const width = gardenWidth();
  const height = gardenHeight();
  const x = roundStep(clamp(((event.clientX - boundaryInteraction.rect.left) / boundaryInteraction.rect.width) * width, 0, width));
  const y = roundStep(clamp(((event.clientY - boundaryInteraction.rect.top) / boundaryInteraction.rect.height) * height, 0, height));
  state.boundaryPoints = state.boundaryPoints || gardenPointsMeters().map((point) => ({ ...point }));
  state.boundaryPoints[boundaryInteraction.index] = { x, y };
  state.selectedBoundaryIndex = boundaryInteraction.index;
  state.lastBoundaryIndex = boundaryInteraction.index;
  renderBoard();
  renderDetails();
}

function endBoundaryPointer() {
  if (!boundaryInteraction) return;
  history.push(boundaryInteraction.original);
  if (history.length > 40) history.shift();
  redoHistory = [];
  boundaryInteraction = null;
  save();
}

function ensureBoundaryPoints() {
  if (!Array.isArray(state.boundaryPoints) || state.boundaryPoints.length < 3) {
    state.boundaryPoints = gardenPointsMeters().map((point) => ({ ...point }));
  }
  state.editBoundary = true;
}

function addBoundaryPoint() {
  state.workMode = "boundary";
  state.editBoundary = true;
  withHistory(() => {
    ensureBoundaryPoints();
    const points = state.boundaryPoints;
    let insertAt = 1;
    let longest = -1;
    points.forEach((point, index) => {
      const next = points[(index + 1) % points.length];
      const distance = Math.hypot(point.x - next.x, point.y - next.y);
      if (distance > longest) {
        longest = distance;
        insertAt = index + 1;
      }
    });
    const prev = points[(insertAt - 1 + points.length) % points.length];
    const next = points[insertAt % points.length];
    points.splice(insertAt, 0, { x: roundStep((prev.x + next.x) / 2), y: roundStep((prev.y + next.y) / 2) });
    state.selectedBoundaryIndex = insertAt;
    state.lastBoundaryIndex = insertAt;
  });
}

function removeBoundaryPoint() {
  state.workMode = "boundary";
  state.editBoundary = true;
  withHistory(() => {
    ensureBoundaryPoints();
    const points = state.boundaryPoints;
    if (points.length <= 3) return;
    const selectedIndex = Number(state.selectedBoundaryIndex);
    const lastIndex = Number(state.lastBoundaryIndex);
    const removeIndex = Number.isInteger(selectedIndex)
      ? clamp(selectedIndex, 0, points.length - 1)
      : Number.isInteger(lastIndex)
        ? clamp(lastIndex, 0, points.length - 1)
        : points.length - 1;
    points.splice(removeIndex, 1);
    state.selectedBoundaryIndex = Math.min(points.length - 1, Math.max(0, removeIndex - 1));
    state.lastBoundaryIndex = state.selectedBoundaryIndex;
  });
}

function addFreePoint() {
  const selected = selectedItem();
  if (!selected) return;

  withHistory(() => {
    state.workMode = "select";
    state.editBoundary = false;
    if (normalizeShape(selected.shape) === "free") {
      selected.points = normalizeFreePoints(selected.points);
    } else {
      selected.points = freePointsForShape(normalizeShape(selected.shape));
      selected.shape = "free";
    }
    const points = normalizeFreePoints(selected.points);
    let insertAt = 1;
    let longest = -1;
    points.forEach((point, index) => {
      const next = points[(index + 1) % points.length];
      const distance = Math.hypot(point.x - next.x, point.y - next.y);
      if (distance > longest) {
        longest = distance;
        insertAt = index + 1;
      }
    });
    const prev = points[(insertAt - 1 + points.length) % points.length];
    const next = points[insertAt % points.length];
    points.splice(insertAt, 0, { x: roundToStep((prev.x + next.x) / 2, 0.5), y: roundToStep((prev.y + next.y) / 2, 0.5) });
    selected.points = points;
    selected.selectedPointIndex = insertAt;
    selected.lastPointIndex = insertAt;
  });
}

function removeFreePoint() {
  const selected = selectedItem();
  if (!selected) return;

  withHistory(() => {
    if (normalizeShape(selected.shape) !== "free") {
      selected.points = freePointsForShape(normalizeShape(selected.shape));
      selected.shape = "free";
    }
    const points = normalizeFreePoints(selected.points);
    if (points.length > 3) {
      const fallback = points.length - 1;
      const selectedIndex = Number(selected.selectedPointIndex);
      const lastIndex = Number(selected.lastPointIndex);
      const index = Number.isInteger(selectedIndex)
        ? selectedIndex
        : Number.isInteger(lastIndex)
          ? lastIndex
          : fallback;
      const removeIndex = clamp(index, 0, points.length - 1);
      points.splice(removeIndex, 1);
      selected.selectedPointIndex = Math.min(points.length - 1, Math.max(0, removeIndex - 1));
      selected.lastPointIndex = selected.selectedPointIndex;
    }
    selected.shape = "free";
    selected.points = points;
  });
}

function startDrawShape() {
  const selected = selectedItem();
  if (!selected) return;
  state.workMode = "select";
  state.editBoundary = false;
  state.drawingItemId = selected.id;
  save();
  render();
}

function applyPaletteData(data) {
  if (data.toolId === "crop" && data.cropId) {
    state.activeCrop = data.cropId;
    state.activeTool = "crop";
    state.stamp = makeStamp("crop", data.cropId);
  } else if (data.toolId) {
    state.activeTool = data.toolId;
    state.stamp = makeStamp(data.toolId, state.activeCrop);
  }
  state.selectedId = null;
}

function startPaletteDrag(event, data) {
  if (event.button !== 0 && event.pointerType !== "touch" && event.pointerType !== "pen") return;
  paletteDrag = {
    data,
    startX: event.clientX,
    startY: event.clientY,
    dragging: false
  };
}

function movePaletteDrag(event) {
  if (!paletteDrag) return;
  const distance = Math.hypot(event.clientX - paletteDrag.startX, event.clientY - paletteDrag.startY);
  if (distance > 8) {
    paletteDrag.dragging = true;
    document.body.dataset.paletteDragging = "true";
  }
}

function endPaletteDrag(event) {
  if (!paletteDrag) return;
  const drag = paletteDrag;
  paletteDrag = null;
  delete document.body.dataset.paletteDragging;

  if (!drag.dragging) return;
  suppressPaletteClick = true;
  const target = document.elementFromPoint(event.clientX, event.clientY);
  if (!target || !target.closest("#gardenBoard")) return;
  applyPaletteData(drag.data);
  addPlotAt(event.clientX, event.clientY);
}

function cancelPaletteDrag() {
  paletteDrag = null;
  delete document.body.dataset.paletteDragging;
}

function renderPanelSizes() {
  const sizes = state.panelSizes || { tools: 300, details: 340 };
  document.documentElement.style.setProperty("--tools-width", `${sizes.tools}px`);
  document.documentElement.style.setProperty("--details-width", `${sizes.details}px`);
}

function startPanelSplitter(event, panel) {
  if (window.matchMedia("(max-width: 1120px)").matches) return;
  panelResize = {
    panel,
    startX: event.clientX,
    original: { ...(state.panelSizes || { tools: 300, details: 340 }) }
  };
  document.body.dataset.resizing = "true";
  event.preventDefault();
}

function movePanelSplitter(event) {
  if (!panelResize) return;
  const dx = event.clientX - panelResize.startX;
  const next = { ...panelResize.original };

  if (panelResize.panel === "tools") {
    next.tools = clamp(panelResize.original.tools + dx, 220, 420);
  } else {
    next.details = clamp(panelResize.original.details - dx, 240, 460);
  }

  state.panelSizes = next;
  renderPanelSizes();
  sizeBoard();
}

function endPanelSplitter() {
  if (!panelResize) return;
  panelResize = null;
  delete document.body.dataset.resizing;
  save();
}

function handleKeyboardShortcuts(event) {
  const usesCommand = event.metaKey || event.ctrlKey;
  if (!usesCommand || isEditableTarget(event.target)) return;
  const key = event.key.toLowerCase();

  if (key === "z") {
    event.preventDefault();
    if (event.shiftKey) redo();
    else undo();
  } else if (key === "c") {
    event.preventDefault();
    copySelected();
  } else if (key === "x") {
    event.preventDefault();
    cutSelected();
  } else if (key === "v") {
    event.preventDefault();
    pasteClipboard();
  }
}

function isEditableTarget(target) {
  const tag = target?.tagName?.toLowerCase();
  return tag === "input" || tag === "textarea" || target?.isContentEditable;
}

function rotateSelected(delta) {
  const selected = selectedItem();
  if (!selected) return;
  withHistory(() => {
    selected.rotation = normalizeDegrees((selected.rotation || 0) + delta);
  });
}

function alignSelectedToSide(side) {
  const selected = selectedItem();
  if (!selected) return;
  const angles = gardenSideAngles();

  withHistory(() => {
    selected.rotation = angles[side];
  });
}

function addCustomCrop() {
  const name = inputs.newCropName.value.trim();
  if (!name) return;
  const isHerb = inputs.newCropKind.value === "herb";
  const isFruit = inputs.newCropKind.value === "fruit";

  const crop = {
    id: `${isHerb ? "custom-herb" : isFruit ? "custom-fruit" : "custom"}-${Date.now()}`,
    name,
    color: colorFromName(name),
    sow: parseMonths(inputs.newCropSow.value),
    plant: [],
    harvest: parseMonths(inputs.newCropHarvest.value),
    spacing: "zelf invullen",
    note: "Eigen gewas."
  };

  withHistory(() => {
    if (isHerb) {
      state.customHerbs = [...(state.customHerbs || []), crop];
    } else if (isFruit) {
      state.customFruits = [...(state.customFruits || []), crop];
    } else {
      state.customCrops = [...(state.customCrops || []), crop];
    }
    state.activeCrop = crop.id;
    state.activeTool = "crop";
    state.stamp = makeStamp("crop", crop.id);
  });

  inputs.newCropName.value = "";
  inputs.newCropSow.value = "";
  inputs.newCropHarvest.value = "";
}

function parseMonths(value) {
  const parts = value
    .split(/[,\s]+/)
    .flatMap((part) => {
      if (!part.includes("-")) return [part];
      const [start, end] = part.split("-").map(Number);
      if (!start || !end) return [];
      if (start <= end) {
        return Array.from({ length: end - start + 1 }, (_, index) => start + index);
      }
      return [...Array.from({ length: 13 - start }, (_, index) => start + index), ...Array.from({ length: end }, (_, index) => index + 1)];
    })
    .map(Number)
    .filter((month) => month >= 1 && month <= 12);

  return [...new Set(parts)];
}

function colorFromName(name) {
  const palette = ["#83a75f", "#db6b50", "#e69b42", "#68a96d", "#6f8fb8", "#d95862", "#9c7ab8", "#caa66a"];
  const score = [...name].reduce((total, letter) => total + letter.charCodeAt(0), 0);
  return palette[score % palette.length];
}

function openGreenhouse(id) {
  greenhouseId = id;
  greenhousePlantId = null;
  greenhouseActiveCrop = "tomaat";
  greenhouseModal.hidden = false;
  renderGreenhouse();
}

function closeGreenhouse() {
  greenhouseModal.hidden = true;
  greenhouseId = null;
  greenhousePlantId = null;
}

function greenhouseItem() {
  return state.items.find((plot) => plot.id === greenhouseId && plot.type === "greenhouse");
}

function renderGreenhouse() {
  const kas = greenhouseItem();
  if (!kas) {
    closeGreenhouse();
    return;
  }

  kas.children = kas.children || [];
  document.querySelector("#greenhouseTitle").textContent = kas.label;
  greenhouseCropList.innerHTML = "";
  allCrops().forEach((crop) => {
    const button = document.createElement("button");
    button.className = "crop-button";
    button.dataset.active = greenhouseActiveCrop === crop.id;
    button.style.setProperty("--crop", crop.color);
    button.innerHTML = `<span class="crop-dot"></span><span>${crop.name}</span><small>${monthRange(crop.harvest)}</small>`;
    button.addEventListener("click", () => {
      greenhouseActiveCrop = crop.id;
      renderGreenhouse();
    });
    greenhouseCropList.append(button);
  });

  greenhouseBoard.innerHTML = "";
  greenhouseBoard.style.setProperty("--greenhouse-ratio", `${Math.max(kas.w, 0.5)} / ${Math.max(kas.h, 0.5)}`);
  requestAnimationFrame(() => sizeGreenhouseBoard(kas));
  kas.children.forEach((plant) => {
    const crop = cropById(plant.cropId);
    const el = document.createElement("button");
    el.className = "greenhouse-plant";
    el.dataset.id = plant.id;
    el.dataset.selected = greenhousePlantId === plant.id;
    el.style.left = `${plant.x}%`;
    el.style.top = `${plant.y}%`;
    el.style.setProperty("--plant-color", crop?.color || "#83a75f");
    el.textContent = crop?.name?.slice(0, 2) || "P";
    greenhouseBoard.append(el);
  });
}

function sizeGreenhouseBoard(kas) {
  const wrap = greenhouseBoard.parentElement;
  if (!wrap || !kas) return;

  const style = getComputedStyle(wrap);
  const availableWidth = wrap.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
  const availableHeight = wrap.clientHeight - parseFloat(style.paddingTop) - parseFloat(style.paddingBottom);
  const ratio = Math.max(kas.w, 0.5) / Math.max(kas.h, 0.5);
  const width = Math.max(120, Math.min(availableWidth, availableHeight * ratio));
  const height = width / ratio;

  greenhouseBoard.style.setProperty("--greenhouse-width", `${width}px`);
  greenhouseBoard.style.setProperty("--greenhouse-height", `${height}px`);
}

function startGreenhousePointer(event) {
  const kas = greenhouseItem();
  if (!kas) return;

  const plantEl = event.target.closest(".greenhouse-plant");
  const rect = greenhouseBoard.getBoundingClientRect();

  if (!plantEl) {
    const crop = cropById(greenhouseActiveCrop);
    const x = clamp(((event.clientX - rect.left) / rect.width) * 100, 4, 96);
    const y = clamp(((event.clientY - rect.top) / rect.height) * 100, 4, 96);

    withHistory(() => {
      kas.children = kas.children || [];
      const plant = {
        id: `plant-${Date.now()}-${Math.random().toString(16).slice(2)}`,
        cropId: crop?.id || "tomaat",
        x: Number(x.toFixed(1)),
        y: Number(y.toFixed(1))
      };
      kas.children.push(plant);
      greenhousePlantId = plant.id;
    });
    renderGreenhouse();
    return;
  }

  greenhousePlantId = plantEl.dataset.id;
  const plant = kas.children.find((candidate) => candidate.id === greenhousePlantId);
  greenhouseInteraction = {
    id: greenhousePlantId,
    rect,
    startX: event.clientX,
    startY: event.clientY,
    original: { ...plant },
    changed: false
  };
  renderGreenhouse();
  event.preventDefault();
  event.stopPropagation();
}

function moveGreenhousePlant(event) {
  if (!greenhouseInteraction) return;
  const kas = greenhouseItem();
  const plant = kas?.children?.find((candidate) => candidate.id === greenhouseInteraction.id);
  if (!plant) return;

  const dx = ((event.clientX - greenhouseInteraction.startX) / greenhouseInteraction.rect.width) * 100;
  const dy = ((event.clientY - greenhouseInteraction.startY) / greenhouseInteraction.rect.height) * 100;
  if (Math.abs(dx) > 0.2 || Math.abs(dy) > 0.2) greenhouseInteraction.changed = true;
  plant.x = Number(clamp(greenhouseInteraction.original.x + dx, 4, 96).toFixed(1));
  plant.y = Number(clamp(greenhouseInteraction.original.y + dy, 4, 96).toFixed(1));
  renderGreenhouse();
}

function endGreenhousePlant() {
  if (!greenhouseInteraction) return;
  if (greenhouseInteraction.changed) save();
  greenhouseInteraction = null;
}

function deleteGreenhousePlant() {
  const kas = greenhouseItem();
  if (!kas || !greenhousePlantId) return;
  withHistory(() => {
    kas.children = kas.children.filter((plant) => plant.id !== greenhousePlantId);
    greenhousePlantId = null;
  });
  renderGreenhouse();
}

function render() {
  renderPanelSizes();
  renderDesignSelect();
  renderTools();
  renderCrops();
  renderFruits();
  renderHerbs();
  renderBoard();
  renderDetails();
}

function registerOfflineCache() {
  if (!("serviceWorker" in navigator)) return;
  navigator.serviceWorker.register("./sw.js", { scope: "./" }).then(() => {
    return navigator.serviceWorker.ready;
  }).catch(() => {
    // Offline support is optional; the app still works online if registration fails.
  });
}

function preparePrintLayout() {
  const ratio = gardenWidth() / gardenHeight();
  const maxWidth = 250;
  const maxHeight = 165;
  let width = maxWidth;
  let height = width / ratio;

  if (height > maxHeight) {
    height = maxHeight;
    width = height * ratio;
  }

  document.documentElement.style.setProperty("--print-board-width", `${width.toFixed(1)}mm`);
  document.documentElement.style.setProperty("--print-board-height", `${height.toFixed(1)}mm`);
  fitPlotLabels();
}

function markAppReady() {
  document.body.classList.remove("no-js");
  document.body.classList.add("js-ready");
}

function showStartupError(error) {
  console.error(error);
  const warning = document.querySelector("#runtimeWarning");
  if (!warning) return;
  warning.textContent = "De planner kon hier niet volledig starten. Open de app in Safari via een webadres; vanuit Bestanden/WritePDF werkt bewerken niet betrouwbaar.";
}

function startApp() {
  try {
    load();
    attachEvents();
    render();
    markAppReady();
    registerOfflineCache();
    window.addEventListener("beforeprint", preparePrintLayout);

    if ("ResizeObserver" in window) {
      new ResizeObserver(() => {
        sizeBoard();
        renderRulers();
        fitPlotLabels();
      }).observe(board.closest(".board-shell"));

      new ResizeObserver(() => {
        const kas = greenhouseItem();
        if (kas && !greenhouseModal.hidden) sizeGreenhouseBoard(kas);
      }).observe(greenhouseBoard.parentElement);
    }
  } catch (error) {
    showStartupError(error);
  }
}

startApp();
