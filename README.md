# My Story Factory

My Story Factory is a personal project I built to organize and preserve my own stories, writing, and artwork in one place.

The current version is a frontend MVP that presents stories in a shelf-based gallery and supports text, image, and mixed-media content.

![My Story Factory preview](public/og.png)

## Demo

[Open My Story Factory](https://my-story-factory.juexuanl.chatgpt.site)

The hosted demo is currently access-restricted.

## Current Features

* Responsive story gallery organized by content type
* Support for text, image, and mixed-media stories
* Story cover artwork with image fallback behavior
* Keyboard-accessible story reader dialogs
* Bilingual story content
* Automated content and documentation tests
* Hosted demo deployment

The current stories are demo data defined in the frontend source. Authentication, in-browser editing, persistent storage, and media uploads are not implemented yet.

## Tech Stack

* React 19
* TypeScript
* Tailwind CSS
* Vinext
* shadcn / Base UI
* Vite
* Node.js test runner
* OpenAI Sites

## Running Locally

Requirements:

* Node.js 22.13+
* pnpm

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Run tests, linting, and a production build:

```bash
pnpm test
pnpm lint
pnpm build
```

## Project Structure

```text
app/                  Application routes, layout, and global styles
components/ui/        Reusable UI components
lib/                  Shared frontend utilities
public/               Static artwork and metadata images
tests/                Automated tests
```

## Next Steps

The current version is intentionally a frontend MVP. Future iterations may include:

* User authentication and invitation-only access
* Admin and reviewer roles
* Story creation and editing
* Persistent story storage
* Private media uploads
* Backend APIs and AWS infrastructure

More detailed design notes and possible backend architecture are documented in [DEVELOPMENT_PLAN.md](DEVELOPMENT_PLAN.md).

## Why I Built This

I wanted a simple place to keep and browse stories that I had written or collected, including both text and artwork. I used the project as an opportunity to turn that idea into a working MVP and to experiment with AI-assisted development while still reviewing, testing, and iterating on the implementation myself.

## Project Status

This is an actively evolving personal project. The current repository represents the MVP stage rather than a finished production application.
