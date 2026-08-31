'use client';

import Image from 'next/image';
import { useState } from 'react';
import {
  BookOpen,
  Feather,
  Image as ImageIcon,
  Layers3,
  Library,
} from 'lucide-react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

type StoryType = 'Image' | 'Text' | 'Mixed' | 'Series';

type Story = {
  id: number;
  title: string;
  type: Exclude<StoryType, 'Series'>;
  date: string;
  readTime: string;
  excerpt: string;
  body: string[];
  tone: string;
  cover?: string;
  images?: string[];
  imagePosition?: string;
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
    tone: 'cobalt',
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
    tone: 'coral',
    cover: '/og.png',
    images: ['/og.png'],
    imagePosition: 'center 44%',
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
    tone: 'sage',
    images: ['/og.png'],
    imagePosition: '72% center',
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
    tone: 'sand',
    body: [
      'Elian had mapped seven kingdoms, three vanished rivers, and the migration of a blue bird no one else believed existed.',
      'But the garden behind his workshop remained blank. Each morning it rearranged itself before he could sharpen his pencil.',
      'On the final day of summer, he folded the empty map into a paper boat and set it on the pond. For once, the garden stayed still.',
    ],
  },
  {
    id: 5,
    title: 'The Museum of Borrowed Names',
    type: 'Text',
    date: 'June 18, 2026',
    readTime: '5 min read',
    excerpt:
      'Behind a blue door, forgotten names waited patiently for someone to need them again.',
    tone: 'lilac',
    body: [
      'The museum kept no portraits, only labels: names pinned beneath glass in careful black letters.',
      'Visitors came when the names they carried had become too heavy. They left one at the desk and wandered until another felt like home.',
      'On Tuesdays, the curator opened the unclaimed drawer and read every name aloud so none would disappear from the world.',
    ],
  },
  {
    id: 6,
    title: 'The Orchard at Midnight',
    type: 'Image',
    date: 'June 02, 2026',
    readTime: '12 frames',
    excerpt:
      'Twelve quiet images trace the blue hour between the last birdcall and the rising moon.',
    tone: 'violet',
    images: ['/og.png'],
    imagePosition: '18% center',
    body: [
      'Frame 01 — A gate left open. Beyond it, the trees hold small circles of light.',
      'Frame 12 — Morning arrives without explanation, silvering every branch it touches.',
    ],
  },
  {
    id: 7,
    title: 'Instructions for Leaving a Dream',
    type: 'Mixed',
    date: 'May 20, 2026',
    readTime: '5 min read',
    excerpt:
      'First, find the door that was not there when you arrived. Do not ask who opened it.',
    tone: 'lemon',
    images: ['/og.png'],
    imagePosition: 'center 68%',
    body: [
      'First, find the door that was not there when you arrived. It will be warm at the handle and cold around the frame.',
      'Second, leave one impossible thing behind. A staircase, perhaps, or the memory of a song you have never heard.',
      'Last, wake slowly. Dreams are fragile when carried across a threshold.',
    ],
  },
  {
    id: 8,
    title: 'Three Windows, One Winter',
    type: 'Image',
    date: 'April 11, 2026',
    readTime: '9 frames',
    excerpt:
      'The same snowfall seen from three rooms and remembered in three different ways.',
    tone: 'blue',
    images: ['/og.png'],
    imagePosition: '86% center',
    body: [
      'North window — Snow covering the road before anyone can decide where it led.',
      'Kitchen window — Steam, a small handprint, and a light moving between the trees.',
      'Attic window — By morning, only the sky remembers that it snowed.',
    ],
  },
  {
    id: 9,
    title: 'Saltwater Almanac',
    type: 'Mixed',
    date: 'March 27, 2026',
    readTime: '6 min read',
    excerpt:
      'A tide chart, a family recipe, and the story of a town that moved one inch closer to the sea each year.',
    tone: 'sky',
    images: ['/og.png'],
    imagePosition: '42% center',
    body: [
      'The almanac predicted storms, weddings, fish migrations, and the exact afternoon the sea would reach the post office steps.',
      'Each family added a page. Some wrote recipes. Some drew maps. My grandmother pressed a strand of sea grass between September and October.',
      'When we finally left, I carried the book inland. It still smells of salt whenever rain is coming.',
    ],
  },
];

const storyRows = [
  { type: 'Image' as const, label: '漫画', english: 'Image stories', icon: ImageIcon },
  { type: 'Text' as const, label: '文字', english: 'Text stories', icon: BookOpen },
  { type: 'Mixed' as const, label: '图文', english: 'Mixed stories', icon: Layers3 },
  { type: 'Series' as const, label: '连载', english: 'Series', icon: Library },
];

function StoryCover({ story }: { story: Story }) {
  const image = story.cover ?? story.images?.[0];

  if (image) {
    return (
      <span className={`cover-art cover-art-${story.tone}`}>
        <Image
          src={image}
          alt=""
          fill
          sizes="(max-width: 760px) 58vw, 240px"
          style={{ objectPosition: story.imagePosition }}
        />
      </span>
    );
  }

  return (
    <span className={`cover-art text-cover tone-${story.tone}`}>
      <span className="cover-kicker">My Story Factory</span>
      <strong>{story.title}</strong>
      <span className="cover-number">{String(story.id).padStart(2, '0')}</span>
    </span>
  );
}

export default function Home() {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  return (
    <main id="top">
      <header className="site-header">
        <a href="#top" className="brand" aria-label="My Story Factory home">
          <span className="brand-mark"><Feather aria-hidden="true" /></span>
          <span>My Story Factory</span>
        </a>
        <p>{stories.length} stories in the collection</p>
      </header>

      <section className="shelf-intro">
        <p className="eyebrow">Personal collection · 2026</p>
        <div>
          <h1>Stories,<br />shelf by shelf.</h1>
          <p>
            Every row is a format. Every cover opens a story.
          </p>
        </div>
      </section>

      <div className="story-shelves">
        {storyRows.map((row, rowIndex) => {
          const rowStories = stories.filter((story) => story.type === row.type);
          const Icon = row.icon;

          return (
            <section className="story-row" key={row.type}>
              <header className="row-label">
                <span>0{rowIndex + 1}</span>
                <Icon aria-hidden="true" />
                <h2>{row.label}</h2>
                <p>{row.english}</p>
                <strong>{String(rowStories.length).padStart(2, '0')}</strong>
              </header>

              <div className="row-content">
                {rowStories.length > 0 ? (
                  <div className="cover-grid">
                    {rowStories.map((story) => (
                      <button
                        type="button"
                        className="cover-button"
                        key={story.id}
                        onClick={() => setSelectedStory(story)}
                        aria-label={`Open ${story.title}`}
                      >
                        <StoryCover story={story} />
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="empty-shelf">
                    <Image
                      className="empty-illustration"
                      src="/waiting-story.png"
                      alt=""
                      width={1254}
                      height={1254}
                      aria-hidden="true"
                    />
                    <div>
                      <p>还没有故事</p>
                      <span>在这里等下一篇 · Waiting for a story</span>
                    </div>
                  </div>
                )}
              </div>
            </section>
          );
        })}
      </div>

      <footer>
        <a href="#top" className="brand">
          <span className="brand-mark"><Feather aria-hidden="true" /></span>
          <span>My Story Factory</span>
        </a>
        <p>Text · Image · Mixed media</p>
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
                  src={selectedStory.cover ?? selectedStory.images?.[0] ?? '/og.png'}
                  alt={`Artwork accompanying ${selectedStory.title}.`}
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
            <div className="reader-end" aria-hidden="true"><span />End<span /></div>
          </DialogContent>
        )}
      </Dialog>
    </main>
  );
}
