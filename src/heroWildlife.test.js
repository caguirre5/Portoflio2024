import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { hasDaylightForFlock, isDaylight, prepareFlock, prepareQuetzal, wildlifeLayout, FLOCK_DURATION_MS, SOLAR_CYCLE_MS } from './heroWildlife.js';

test('every permitted flock finishes in daylight, including across repeated solar cycles', () => {
  let allowed = 0;
  for (let time = 0; time < SOLAR_CYCLE_MS * 3; time += 250) {
    if (!hasDaylightForFlock(time)) continue;
    allowed++;
    for (let offset = 0; offset <= FLOCK_DURATION_MS; offset += 250) assert.equal(isDaylight(time + offset), true);
  }
  assert.ok(allowed > 0);
  assert.equal(hasDaylightForFlock(30000), false);
  assert.equal(hasDaylightForFlock(47000), false);
});

test('foreground hotspot remains reachable in portrait, desktop and ultrawide layouts', () => {
  for (const [width, height] of [[320, 740], [375, 812], [768, 1024], [1440, 900], [1920, 1080], [2560, 800]]) {
    const point = wildlifeLayout({ width, height });
    assert.ok(point.x >= 31 && point.x <= width - 31);
    assert.ok(point.y >= 31 && point.y <= height - 31);
    assert.ok(point.size >= 112 && point.size <= 190);
  }
  const desktop = wildlifeLayout({ width: 1920, height: 1080 });
  assert.equal(desktop.x, 275);
  assert.equal(desktop.y, 455);
});

test('quetzal wingbeats continue beyond the original short cycle without modifying the supplied source', () => {
  const source = JSON.parse(readFileSync(new URL('./assets/animations/Quetzal.json', import.meta.url), 'utf8'));
  const original = JSON.stringify(source);
  const data = prepareQuetzal(source);
  const wing = data.layers.find((layer) => layer.nm === 'wings Outlines').ks.s;
  assert.equal(wing.x, undefined);
  assert.deepEqual(wing.k.find((frame) => frame.t === 7.5).s, wing.k.find((frame) => frame.t === 2.5).s);
  assert.deepEqual(wing.k.find((frame) => frame.t === 30).s, wing.k[0].s);
  assert.ok(wing.k.at(-1).t > data.op);
  assert.equal(JSON.stringify(source), original);
});

test('flock paths reach the visible sky without distorting bird silhouettes', () => {
  const source = JSON.parse(readFileSync(new URL('./assets/animations/Birds.json', import.meta.url), 'utf8'));
  for (const [width, height] of [[375, 812], [1440, 900], [2560, 800]]) {
    const data = prepareFlock(source, { width, height });
    const scale = Math.max(width / 1920, height / 1080);
    const visibleTop = 1080 - height / scale;
    source.layers.forEach((layer, index) => {
      assert.deepEqual(data.layers[index].ks.s, layer.ks.s);
      assert.deepEqual(data.layers[index].shapes, layer.shapes);
    });
    const destination = data.layers[0].ks.p.k.at(-1).s[1];
    assert.ok(destination > visibleTop - 10 && destination < visibleTop + 10);
  }
});
