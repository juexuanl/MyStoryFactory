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

test('the homepage presents story types as rows rather than category links', () => {
  assert.match(page, /className="story-shelves"/);
  assert.match(page, /className="story-row"/);
  assert.doesNotMatch(page, /category-index/);
  for (const label of ['漫画', '文字', '图文', '连载']) {
    assert.match(page, new RegExp(label));
  }
});

test('row blocks show covers with a first-image fallback', () => {
  assert.match(page, /const image = story\.cover \?\? story\.images\?\.\[0\]/);
  assert.match(page, /className="cover-grid"/);
  assert.match(page, /aria-label={`Open \${story\.title}`}/);
});

test('empty story types show a waiting illustration', () => {
  assert.match(page, /type: 'Series' as const/);
  assert.match(page, /rowStories\.length > 0/);
  assert.match(page, /src="\/waiting-story\.png"/);
  assert.match(page, /还没有故事/);
});

test('cover blocks open an accessible story reader', () => {
  assert.match(page, /<DialogContent className="reader-dialog">/);
  assert.match(page, /open=\{Boolean\(selectedStory\)\}/);
});

test('site metadata describes the story archive', () => {
  assert.match(layout, /My Story Factory — A Personal Story Archive/);
  assert.match(layout, /original short fiction, illustrated moments/);
  assert.match(layout, /url: '\/og\.png'/);
  assert.match(layout, /card: 'summary_large_image'/);
});
