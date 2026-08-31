import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const page = await readFile(new URL('../app/page.tsx', import.meta.url), 'utf8');
const layout = await readFile(
  new URL('../app/layout.tsx', import.meta.url),
  'utf8',
);

test('the demo includes text, image, and mixed-media stories', () => {
  for (const storyType of ["type: 'Text'", "type: 'Image'", "type: 'Mixed'"]) {
    assert.match(page, new RegExp(storyType.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  }
  assert.equal((page.match(/^\s+id: \d+,/gm) ?? []).length, 9);
});

test('the homepage is an all-stories gallery grouped by format', () => {
  assert.match(page, /<h1>Story gallery<\/h1>/);
  assert.match(page, /id: 'text-stories'/);
  assert.match(page, /id: 'image-stories'/);
  assert.match(page, /id: 'mixed-stories'/);
  assert.match(page, /categories\.map\(\(category, categoryIndex\)/);
  assert.match(page, /stories\.filter\(/);
});

test('gallery cards open an accessible story reader', () => {
  assert.match(page, /aria-label={`Open \${story\.title}`}/);
  assert.match(page, /<DialogContent className="reader-dialog">/);
  assert.match(page, /story-frame text-frame tone-/);
  assert.match(page, /story-frame image-frame tone-/);
  assert.match(page, /story-frame mixed-frame tone-/);
  assert.match(page, /src="\/og\.png"/);
});

test('site metadata describes the story archive', () => {
  assert.match(layout, /My Story Factory — A Personal Story Archive/);
  assert.match(layout, /original short fiction, illustrated moments/);
  assert.match(layout, /url: '\/og\.png'/);
  assert.match(layout, /card: 'summary_large_image'/);
});
