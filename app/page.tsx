'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  Feather,
  Image as ImageIcon,
  Layers3,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

type StoryType = 'Text' | 'Image' | 'Mixed';

type Story = {
  id: number;
  title: string;
  type: StoryType;
  date: string;
  readTime: string;
  excerpt: string;
  palette: string;
  body: string[];
};

const stories: Story[] = [
  {
    id: 1,
    title: 'The Lantern Keeper',
    type: 'Text',
    date: 'August 24, 2026',
    readTime: '6 min read',
    excerpt:
      'Every evening, Mara lit one lamp for the living and another for those still finding their way home.',
    palette: 'story-card--ink',
    body: [
      'By the time the tide erased the last footprints from the harbor, Mara had already climbed the ninety-three steps to the lantern room.',
      'She lit the first wick for the boats returning through the fog. The second she placed in the eastern window, where no ship had sailed in forty years.',
      '“Some journeys take longer,” her mother used to say. Mara had never asked whether she meant the dead, the lost, or simply those who had forgotten the shape of home.',
      'That night, beyond the glass, a small answering light appeared on the horizon.',
    ],
  },
  {
    id: 2,
    title: 'Postcards from a Quiet Planet',
    type: 'Image',
    date: 'August 12, 2026',
    readTime: '8 frames',
    excerpt:
      'A visual letter from a world where gardens grow upward and the moons rise in threes.',
    palette: 'story-card--clay',
    body: [
      'Field note 01 — The wind here carries silver seeds. They gather at the doors of empty houses as if waiting to be invited inside.',
      'Field note 02 — At dusk, the hills turn violet and every window reflects a different moon.',
    ],
  },
  {
    id: 3,
    title: 'A House That Remembered Rain',
    type: 'Mixed',
    date: 'July 29, 2026',
    readTime: '4 min read',
    excerpt:
      'The summer the wells ran dry, one old house continued to dream in the language of storms.',
    palette: 'story-card--moss',
    body: [
      'The house remembered rain in small, stubborn ways: a coolness beneath the stairs, the smell of wet stone at noon, a soft tapping in the walls.',
      'Nico pressed his ear to the wallpaper and heard gutters overflowing, frogs calling from the road, his grandmother laughing with both hands open to the sky.',
      'He began to draw what the house told him. Cloud by cloud, the ceiling filled with weather.',
    ],
  },
  {
    id: 4,
    title: 'The Mapmaker’s Last Garden',
    type: 'Text',
    date: 'July 03, 2026',
    readTime: '7 min read',
    excerpt:
      'At the edge of every finished map, Elian planted something no compass could name.',
    palette: 'story-card--paper',
    body: [
      'Elian had mapped seven kingdoms, three vanished rivers, and the migration of a blue bird no one else believed existed.',
      'But the garden behind his workshop remained blank. Each morning it rearranged itself before he could sharpen his pencil.',
      'On the final day of summer, he folded the empty map into a paper boat and set it on the pond. For once, the garden stayed still.',
    ],
  },
];

const filters = ['All', 'Text', 'Image', 'Mixed'] as const;
type Filter = (typeof filters)[number];

const typeIcon: Record<StoryType, typeof BookOpen> = {
  Text: BookOpen,
  Image: ImageIcon,
  Mixed: Layers3,
};

export default function Home() {
  const [filter, setFilter] = useState<Filter>('All');
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  const visibleStories = useMemo(
    () =>
      filter === 'All'
        ? stories
        : stories.filter((story) => story.type === filter),
    [filter],
  );

  return (
    <main className="min-h-screen overflow-hidden">
      <header className="site-header">
        <a href="#top" className="brand" aria-label="My Story Factory home">
          <span className="brand-mark">
            <Feather aria-hidden="true" />
          </span>
          <span>My Story Factory</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#collection">Stories</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <section id="top" className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">A personal archive of imagined worlds</p>
          <h1>
            Stories are
            <br />
            small doors.
          </h1>
          <p className="hero-intro">
            Short fiction, illustrated moments, and quiet worlds—collected in
            one place and made to be wandered through.
          </p>
          <a className="primary-link" href="#collection">
            Browse the collection
            <ArrowDown aria-hidden="true" />
          </a>
        </div>

        <article className="featured-story">
          <div className="featured-orbit" aria-hidden="true" />
          <div className="featured-kicker">Featured story · 01</div>
          <div className="featured-content">
            <p>Short fiction</p>
            <h2>The Lantern Keeper</h2>
            <p className="featured-excerpt">{stories[0].excerpt}</p>
            <button
              type="button"
              className="featured-open"
              onClick={() => setSelectedStory(stories[0])}
            >
              Read story <ArrowUpRight aria-hidden="true" />
            </button>
          </div>
          <span className="featured-number" aria-hidden="true">
            01
          </span>
        </article>
      </section>

      <section id="collection" className="collection-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">The collection</p>
            <h2>Choose a world to enter.</h2>
          </div>
          <p>
            Text, image, and mixed-media stories—each one made slowly and kept
            here with care.
          </p>
        </div>

        <fieldset className="filter-row">
          <legend className="sr-only">Filter stories</legend>
          {filters.map((option) => (
            <Button
              key={option}
              type="button"
              variant={filter === option ? 'default' : 'ghost'}
              className="filter-button"
              aria-pressed={filter === option}
              onClick={() => setFilter(option)}
            >
              {option}
            </Button>
          ))}
        </fieldset>

        <div className="story-grid" aria-live="polite">
          {visibleStories.map((story) => {
            const TypeIcon = typeIcon[story.type];

            return (
              <article key={story.id} className="story-card">
                <button
                  type="button"
                  className={`story-cover ${story.palette}`}
                  onClick={() => setSelectedStory(story)}
                  aria-label={`Open ${story.title}`}
                >
                  <span className="story-index">
                    {String(story.id).padStart(2, '0')}
                  </span>
                  <span className="story-cover-title">{story.title}</span>
                  <ArrowUpRight className="story-cover-arrow" aria-hidden="true" />
                </button>
                <div className="story-meta">
                  <span>
                    <TypeIcon aria-hidden="true" /> {story.type}
                  </span>
                  <span>{story.readTime}</span>
                </div>
                <h3>{story.title}</h3>
                <p>{story.excerpt}</p>
              </article>
            );
          })}
        </div>
      </section>

      <figure className="manifesto-art">
        <Image
          src="/og.png"
          alt="A glowing lantern beside a winding path leading to an open doorway under an indigo night sky."
          width={1536}
          height={1024}
        />
        <figcaption>
          <span>Every story begins with an invitation.</span>
          <span>My Story Factory · 2026</span>
        </figcaption>
      </figure>

      <section id="about" className="about-section">
        <p className="about-quote">
          “I write to remember places that never existed.”
        </p>
        <div>
          <p className="eyebrow">About this collection</p>
          <p>
            My Story Factory is a growing cabinet of original fiction and
            visual storytelling. This demo shows how each piece can have its
            own mood while still belonging to one recognizable home.
          </p>
        </div>
      </section>

      <footer>
        <a href="#top" className="brand">
          <span className="brand-mark">
            <Feather aria-hidden="true" />
          </span>
          <span>My Story Factory</span>
        </a>
        <p>Original stories · Text &amp; image · 2026</p>
      </footer>

      <Dialog
        open={Boolean(selectedStory)}
        onOpenChange={(open) => !open && setSelectedStory(null)}
      >
        {selectedStory && (
          <DialogContent className="reader-dialog">
            <DialogHeader className="reader-header">
              <p className="eyebrow">
                {selectedStory.type} story · {selectedStory.date}
              </p>
              <DialogTitle>{selectedStory.title}</DialogTitle>
              <DialogDescription>{selectedStory.excerpt}</DialogDescription>
            </DialogHeader>
            {selectedStory.type !== 'Text' && (
              <div className="reader-art">
                <Image
                  src="/og.png"
                  alt={`Atmospheric doorway artwork accompanying ${selectedStory.title}.`}
                  width={1536}
                  height={1024}
                />
              </div>
            )}
            <div className="reader-body">
              {selectedStory.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="reader-end" aria-hidden="true">
              <span />
              End
              <span />
            </div>
          </DialogContent>
        )}
      </Dialog>
    </main>
  );
}
