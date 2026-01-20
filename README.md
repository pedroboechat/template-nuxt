# Nuxt 4 Template with TypeScript & Vuetify 3

A modern, production-ready Nuxt 4 template with TypeScript, Vuetify 3, Pinia, and comprehensive development tooling. This template provides a solid foundation for building scalable Vue.js applications with best practices and modern development workflows.

## Table of Contents

- [Nuxt 4 Template with TypeScript \& Vuetify 3](#nuxt-4-template-with-typescript--vuetify-3)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Prerequisites](#prerequisites)
  - [Getting Started](#getting-started)
    - [Installation](#installation)
    - [Development Server](#development-server)
  - [Available Scripts](#available-scripts)
  - [Development](#development)
    - [Code Quality](#code-quality)
    - [Type Checking](#type-checking)
  - [Docker Deployment](#docker-deployment)
    - [Development Environment](#development-environment)
    - [Production Environment](#production-environment)
  - [Environment Variables](#environment-variables)
    - [General Variables](#general-variables)
    - [Docker Environment Variables](#docker-environment-variables)
  - [Project Structure](#project-structure)
  - [Technologies Used](#technologies-used)

## Features

- **Nuxt 4** - The intuitive Vue framework with hybrid rendering, server-side rendering, and static site generation
- **TypeScript** - Type-safe development with full TypeScript support
- **Vuetify 3** - Material Design component framework with beautiful, handcrafted Vue components
- **Pinia** - Intuitive, type-safe state management for Vue.js
- **Modern Tooling**:
  - ESLint with Nuxt ESLint configuration
  - Prettier for consistent code formatting
  - Vue TypeScript compiler for type checking
- **Built-in Modules**:
  - `@nuxt/a11y` - Accessibility auditing and improvements
  - `@nuxt/fonts` - Optimized font loading
  - `@nuxt/hints` - Performance and best practice hints
  - `@nuxt/image` - Optimized image handling
  - `@nuxt/scripts` - Script management utilities
  - `@nuxtjs/i18n` - Internationalization support
  - `@nuxtjs/sitemap` - Automatic sitemap generation
  - `@nuxt/test-utils` - Testing utilities
- **Docker Support** - Ready-to-use Docker configurations for development and production

## Prerequisites

- **Node.js** 18+ or 20+
- **PNPM** 8+ (recommended) or npm/yarn
- **Docker** & **Docker Compose** (optional, for containerized deployment)

## Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd template-nuxt
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

   _Alternatively, use `npm install` or `yarn install`_

3. Set up environment variables:

   ```bash
   cp example.env .env
   ```

   Edit `.env` file with your configuration (see [Environment Variables](#environment-variables)).

### Development Server

Start the development server with hot-reload:

```bash
pnpm dev
```

The application will be available at `http://localhost:3000`.

## Available Scripts

| Script                 | Description                                           |
| ---------------------- | ----------------------------------------------------- |
| `pnpm dev`             | Start development server with hot-reload              |
| `pnpm build`           | Build the application for production                  |
| `pnpm generate`        | Generate static site                                  |
| `pnpm preview`         | Preview production build locally                      |
| `pnpm lint`            | Run ESLint and Prettier checks                        |
| `pnpm lint:fix`        | Fix ESLint and Prettier issues automatically          |
| `pnpm lint:types`      | Run TypeScript type checking                          |
| `pnpm lint:all`        | Run all linting checks (ESLint, Prettier, TypeScript) |
| `pnpm lint:staged`     | Run linting on staged files (for pre-commit hooks)    |
| `pnpm lint:staged:fix` | Fix linting issues on staged files                    |

## Development

### Code Quality

This template includes comprehensive code quality tools:

- **ESLint** - JavaScript/TypeScript linting with Nuxt-specific rules
- **Prettier** - Consistent code formatting
- **Git Hooks** - Pre-commit hooks for staged files (configure in your CI/CD)

Run linting:

```bash
# Check for issues
pnpm lint

# Auto-fix issues
pnpm lint:fix

# Type checking only
pnpm lint:types
```

### Type Checking

TypeScript is fully integrated. The template uses `vue-tsc` for Vue component type checking:

```bash
pnpm lint:types
```

## Docker Deployment

### Development Environment

The included `docker-compose.yaml` is configured for development with hot-reload:

```yaml
services:
  frontend:
    build:
      context: "./frontend"
      dockerfile: "./container/dev.Dockerfile"
    container_name: "frontend"
    restart: "unless-stopped"
    environment:
      - "HOST=$FRONTEND_HOST"
      - "PORT=$FRONTEND_PORT"
      - "NUXT_PUBLIC_BASE_URL=$BASE_URL"
    ports:
      - "$FRONTEND_PORT:$FRONTEND_PORT"
    volumes:
      - ".:/srv/app"
```

Start development with Docker:

```bash
docker-compose up --build
```

### Production Environment

For production, use the production Dockerfile:

```yaml
services:
  frontend:
    build:
      context: "./frontend"
      dockerfile: "./container/prod.Dockerfile"
    container_name: "frontend"
    restart: "unless-stopped"
    environment:
      - "HOST=$FRONTEND_HOST"
      - "PORT=$FRONTEND_PORT"
      - "NUXT_PUBLIC_BASE_URL=$BASE_URL"
    ports:
      - "$FRONTEND_PORT:$FRONTEND_PORT"
```

Build and run production:

```bash
docker build -f ./container/prod.Dockerfile -t nuxt-app .
docker run -p 3000:3000 nuxt-app
```

## Environment Variables

### General Variables

| Variable   | Description               | Default     |
| ---------- | ------------------------- | ----------- |
| `HOST`     | Server binding host       | `localhost` |
| `PORT`     | Server binding port       | `3000`      |
| `BASE_URL` | Base URL for API requests | `undefined` |

### Docker Environment Variables

Configure in your `.env` file:

```env
# FRONTEND
FRONTEND_HOST="0.0.0.0"
FRONTEND_PORT="3000"
BASE_URL=
```

## Project Structure

```plain
├── app/                  # Nuxt application directory
│   ├── assets/           # Static assets (CSS, images, fonts)
│   ├── components/       # Vue components
│   ├── composables/      # Composable functions
│   ├── layouts/          # Layout components
│   ├── pages/            # Page components (file-based routing)
│   └── plugins/          # Vue plugins (Vuetify, etc.)
├── container/            # Docker configuration files
├── public/               # Static public files
├── docker-compose.yaml   # Docker Compose configuration
├── example.env           # Example environment variables
├── nuxt.config.ts        # Nuxt configuration
├── package.json          # Dependencies and scripts
└── tsconfig.json         # TypeScript configuration
```

## Technologies Used

- **[Nuxt 4](https://nuxt.com/)** - Vue.js framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Vuetify 3](https://vuetifyjs.com/)** - Material Design component framework
- **[Pinia](https://pinia.vuejs.org/)** - State management
- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[Docker](https://www.docker.com/)** - Containerization
- **[PNPM](https://pnpm.io/)** - Fast, disk space efficient package manager
