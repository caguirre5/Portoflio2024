const smoothstep = (value) => {
  const t = Math.min(1, Math.max(0, value));
  return t * t * (3 - 2 * t);
};

// Match the artwork's bottom-centered background-size: cover coordinates.
export function solarPosition(phase, { width, height }) {
  const scale = Math.max(width / 1920, height / 1080);
  const visibleTop = 1080 - height / scale;
  const diameter = Math.min(90, Math.max(38, Math.min(width, height) * 0.085));
  const visibleWidth = width / scale;
  const startX = 960 - Math.min(310, visibleWidth * 0.25);
  const endX = width >= 1024 ? 1050 : 960 + Math.min(90, visibleWidth * 0.15);
  // Start above the viewport, including the glow. Reset there only after
  // the entire disc has descended behind the mountains at the valley.
  const startY = visibleTop - (diameter + 110) / scale;
  const endY = Math.max(430, visibleTop + 240);
  const t = phase >= 0.75 ? 0 : Math.min(1, phase / 0.65);
  const u = 1 - t;
  const controlX1 = startX + (endX - startX) * 0.65;
  const controlX2 = endX - 15;
  const controlY1 = startY + 40;
  const controlY2 = startY + (endY - startY) * 0.45;
  const worldX = u ** 3 * startX + 3 * u ** 2 * t * controlX1 + 3 * u * t ** 2 * controlX2 + t ** 3 * endX;
  const worldY = u ** 3 * startY + 3 * u ** 2 * t * controlY1 + 3 * u * t ** 2 * controlY2 + t ** 3 * endY;
  return {
    x: width / 2 + (worldX - 960) * scale - diameter / 2,
    y: height - (1080 - worldY) * scale - diameter / 2,
    diameter,
  };
}

export function sunsetAmount(phase) {
  // Day during entry, sunset during descent, then return to day while
  // the sun waits above the viewport for the next pass.
  return phase < 0.85
    ? smoothstep((phase - 0.3) / 0.35)
    : 1 - smoothstep((phase - 0.85) / 0.15);
}
