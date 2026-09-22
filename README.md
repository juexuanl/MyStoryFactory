# My Story Factory

My Story Factory is a personal story archive for text, image, and mixed-media storytelling. The current demo presents stories as a bilingual, shelf-based gallery in which every cover opens an accessible reader.

![My Story Factory preview](public/og.png)

## Hosted demo

[Open My Story Factory](https://my-story-factory.juexuanl.chatgpt.site)

The hosted demo is currently access-restricted. A public sign-in page, invitation-only accounts, and Admin/Reviewer permissions are part of the next development stages.

## Current features

- Responsive story shelves for image, text, mixed-media, and future serialized stories
- Nine representative demo stories
- Cover artwork with first-image fallback behavior
- Keyboard-accessible story reader dialogs
- Empty-shelf treatment for story types without content
- Site metadata and social-sharing artwork
- Automated content and documentation tests
- OpenAI Sites hosting configuration

The current stories are demo data defined in the frontend source. Authentication, in-browser editing, AWS persistence, and media uploads are planned but are not implemented yet.

## Planned product

The initial production product will support two invitation-only roles:

| Role | Access |
| --- | --- |
| Admin | Create, edit, publish, unpublish, and delete stories and media |
| Reviewer | Read published stories and media without changing them |

Stories will use an ordered block model so text, images, and video can be mixed freely. The recommended backend uses Amazon Cognito for accounts, DynamoDB for structured story data, S3 for private media, and API Gateway with Lambda for secured application operations.

See [DEVELOPMENT_PLAN.md](DEVELOPMENT_PLAN.md) for the architecture decisions, security rules, implementation phases, acceptance criteria, and launch plan.

## Technology

- React 19
- Vinext
- TypeScript
- Tailwind CSS
- shadcn and Base UI components
- Lucide icons
- Vite and the OpenAI Sites plugin
- Cloudflare Workers-compatible server output
- Node.js test runner, Oxlint, and Oxfmt

## Requirements

- Node.js 22.13 or newer
- pnpm

## Local development

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Use the local URL printed by the development server.

## Validation commands

```bash
pnpm test
pnpm lint
pnpm build
```

Format supported project files with:

```bash
pnpm format
```

Run the relevant tests and a production build before publishing a site update.

## Project structure

```text
app/                  Application routes, layout, and global styles
components/ui/        Reusable interface components
lib/                  Shared frontend utilities
public/               Static artwork and metadata images
tests/                Automated project-content tests
.openai/hosting.json  OpenAI Sites project binding
DEVELOPMENT_PLAN.md   Agreed product architecture and delivery roadmap
```

The future AWS implementation is expected to add `backend/` for Lambda application code and `infra/` for infrastructure definitions while keeping the frontend and backend in this repository.

## Deployment

The project is configured for OpenAI Sites and already has an associated hosted Site. Site releases should be built, tested, committed, and published through the project’s Sites workflow. Runtime secrets and credentials must be configured in the hosting or AWS environment and must never be committed to the repository.

## Repository rules

Project-specific development rules are documented in [AGENTS.md](AGENTS.md). In particular, every project update must have relevant passing tests and a Git commit.

## License

No open-source license has been selected. The stories, artwork, and source remain under the repository owner's control unless a license is added later.
