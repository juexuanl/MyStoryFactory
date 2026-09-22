# My Story Factory

My Story Factory is a personal project for organizing and preserving my own stories, writing, and artwork in one place.

The current version is a frontend MVP that presents stories as a bilingual, shelf-based gallery with support for text, image, and mixed-media content. I am currently planning the next stage of the project, including authentication, content management, persistence, and backend infrastructure.

![My Story Factory preview](public/og.png)

## Hosted Demo

[Open My Story Factory](https://my-story-factory.juexuanl.chatgpt.site)

The hosted demo is currently access-restricted.

## Current MVP

The current implementation includes:

* Responsive story shelves for different content types
* Nine representative demo stories
* Text, image, and mixed-media story presentation
* Cover artwork with first-image fallback behavior
* Keyboard-accessible story reader dialogs
* Empty-shelf handling for content types without stories
* Site metadata and social-sharing artwork
* Automated content and documentation tests
* Hosted deployment through OpenAI Sites

The current stories are demo data defined in the frontend source.

## Next Stage — In Planning

I am currently designing the next stage of the application rather than implementing these features yet.

The planned product will introduce two invitation-only roles:

| Role     | Access                                                         |
| -------- | -------------------------------------------------------------- |
| Admin    | Create, edit, publish, unpublish, and delete stories and media |
| Reviewer | Read published stories and media without changing them         |

The planned content model uses ordered blocks so that text, images, and video can be mixed within a story.

The current backend design uses:

* Amazon Cognito for authentication
* DynamoDB for story metadata and structured content
* Amazon S3 for private media
* API Gateway and AWS Lambda for application APIs

Authentication, in-browser editing, AWS persistence, media uploads, and these backend services are **planned but not implemented yet**.

Detailed architecture decisions, security considerations, implementation phases, and acceptance criteria are documented in [DEVELOPMENT_PLAN.md](DEVELOPMENT_PLAN.md).

## Tech Stack

### Current

* React 19
* TypeScript
* Tailwind CSS
* Vinext
* shadcn / Base UI
* Lucide
* Vite
* Node.js test runner
* OpenAI Sites

### Planned Backend

* AWS Lambda
* API Gateway
* Amazon Cognito
* DynamoDB
* Amazon S3

## Local Development

Requirements:

* Node.js 22.13+
* pnpm

Install dependencies:

```bash id="3r12g5"
pnpm install
```

Start the development server:

```bash id="5bk1if"
pnpm dev
```

Run tests, linting, and a production build:

```bash id="afh6f7"
pnpm test
pnpm lint
pnpm build
```

## Project Structure

```text id="kkjmxu"
app/                  Application routes, layout, and global styles
components/ui/        Reusable interface components
lib/                  Shared frontend utilities
public/               Static artwork and metadata images
tests/                Automated project-content tests
DEVELOPMENT_PLAN.md   Architecture and implementation planning
```

The planned AWS implementation is expected to add `backend/` for application code and `infra/` for infrastructure definitions.

## Why I Built This

I wanted a simple place to organize and preserve stories that I had written or collected, including both text and artwork.

I also use this project to experiment with AI-assisted development: using AI to accelerate implementation and planning while reviewing the generated code, making design decisions, validating behavior, and iterating on the result myself.

## Project Status

**Current stage: frontend MVP complete; backend and content-management architecture in planning.**
