import { sunsetAmount, SOLAR_CYCLE_MS } from './solarCycle.js';

export { SOLAR_CYCLE_MS } from './solarCycle.js';
export const FLOCK_DURATION_MS = 9000;
export const QUETZAL_FLIGHT_MS = 7800 / 1.1;

// Reserve enough daylight to finish the entire flock before the sunset tint.
export function hasDaylightForFlock(elapsed, duration = FLOCK_DURATION_MS) {
  const phase = ((elapsed % SOLAR_CYCLE_MS) + SOLAR_CYCLE_MS) % SOLAR_CYCLE_MS / SOLAR_CYCLE_MS;
  const endPhase = phase + duration / SOLAR_CYCLE_MS;
  return endPhase < 0.4 && sunsetAmount(phase) < 0.12 && sunsetAmount(endPhase) < 0.12;
}

export function isDaylight(elapsed) {
  return sunsetAmount(((elapsed % SOLAR_CYCLE_MS) + SOLAR_CYCLE_MS) % SOLAR_CYCLE_MS / SOLAR_CYCLE_MS) < 0.12;
}

// Keep the flock's trajectories inside the visible sky, preserving the birds'
// own shape/scale. The supplied animation was designed for a full-screen
// overlay; its original low paths would otherwise sit behind the mountains.
export function prepareFlock(source, { width, height }) {
  const data = JSON.parse(JSON.stringify(source));
  const scale = Math.max(width / 1920, height / 1080);
  const visibleTop = 1080 - height / scale;
  const factor = height / scale * .32 / data.h;
  data.layers.forEach((layer) => {
    const position = layer.ks?.p;
    if (!position) return;
    if (position.a === 1) {
      position.k.forEach((frame) => {
        for (const key of ['s', 'e']) if (frame[key]) frame[key][1] = visibleTop + frame[key][1] * factor;
        for (const key of ['to', 'ti']) if (frame[key]) frame[key][1] *= factor;
      });
    } else if (Array.isArray(position.k)) position.k[1] = visibleTop + position.k[1] * factor;
  });
  return data;
}

// Map a point in the foreground's 1920×1080 artwork to bottom-centered cover.
// Portrait screens crop the tall left tree, so use the visible lower foliage.
export function wildlifeLayout({ width, height }) {
  const scale = Math.max(width / 1920, height / 1080);
  const visibleLeft = 960 - width / (2 * scale);
  const visibleTop = 1080 - height / scale;
  let worldX = 275;
  let worldY = Math.max(455, visibleTop + 65);
  if (width / 2 + (worldX - 960) * scale < 40) {
    worldX = visibleLeft + 65 / scale;
    const contour = [[480, 700], [640, 810], [750, 905], [860, 970], [1000, 1020]];
    const index = contour.findIndex(([x]) => x >= worldX);
    const [x0, y0] = contour[Math.max(0, index - 1)];
    const [x1, y1] = contour[index < 0 ? contour.length - 1 : index];
    const t = x1 === x0 ? 0 : Math.min(1, Math.max(0, (worldX - x0) / (x1 - x0)));
    worldY = y0 + (y1 - y0) * t;
  }
  return {
    x: Math.min(width - 36, Math.max(36, width / 2 + (worldX - 960) * scale)),
    y: Math.min(height - 45, Math.max(45, height - (1080 - worldY) * scale)),
    size: Math.min(190, Math.max(112, width * 0.12)),
    width,
    height,
  };
}

// Bake the supplied quetzal's four simple After Effects loopOut expressions
// into keyframes. This keeps its wingbeat with the smaller, expression-free
// SVG player and never evaluates expressions from downloaded animation data.
export function prepareQuetzal(source) {
  const data = JSON.parse(JSON.stringify(source));
  const visit = (value) => {
    if (!value || typeof value !== 'object') return;
    if (typeof value.x === 'string' && /loopOut\('cycle',\s*0\)/.test(value.x) && Array.isArray(value.k)) {
      const original = value.k;
      const start = original[0].t;
      const period = original[original.length - 1].t - start;
      if (period > 0) {
        const frames = [];
        for (let base = 0; start + base < data.op + period; base += period) {
          original.slice(0, -1).forEach((frame) => frames.push({ ...JSON.parse(JSON.stringify(frame)), t: frame.t + base }));
        }
        value.k = frames;
        delete value.x;
      }
    }
    Object.values(value).forEach(visit);
  };
  visit(data);
  return data;
}
