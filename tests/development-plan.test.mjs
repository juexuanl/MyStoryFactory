import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const plan = await readFile(
  new URL('../DEVELOPMENT_PLAN.md', import.meta.url),
  'utf8',
);

test('development plan records the selected hosting and AWS architecture', () => {
  for (const requiredDecision of [
    'https://my-story-factory.juexuanl.chatgpt.site',
    'Amazon Cognito',
    'Amazon DynamoDB',
    'Amazon S3',
    'Amazon API Gateway',
    'AWS Lambda',
  ]) {
    assert.match(plan, new RegExp(requiredDecision));
  }
});

test('development plan defines and secures both initial roles', () => {
  assert.match(plan, /Admin/);
  assert.match(plan, /Reviewer/);
  assert.match(plan, /Every write endpoint must require the `Admin` group/);
  assert.match(plan, /Reviewer and anonymous write requests return `403` or `401`/);
});

test('development plan preserves the demo and supports mixed content', () => {
  assert.match(plan, /current shelf-based demo is the UI baseline/);
  for (const blockType of ['`text`', '`image`', '`video`']) {
    assert.match(plan, new RegExp(blockType));
  }
});

test('development plan provides phased work and measurable completion criteria', () => {
  for (let phase = 0; phase <= 6; phase += 1) {
    assert.match(plan, new RegExp(`### Phase ${phase}`));
  }
  assert.match(plan, /## 9\. Acceptance criteria/);
  assert.match(plan, /## 10\. Explicit non-goals/);
});
