# Technology Stack

## Core Technologies
- **React 19.1.1** - UI library with latest features
- **TypeScript 5.8.3** - Type-safe JavaScript development
- **Vite 7.1.2** - Fast build tool and dev server with HMR
- **SWC** - Fast TypeScript/JSX compilation via @vitejs/plugin-react-swc

## Development Tools
- **ESLint 9.33.0** - Code linting with React-specific rules
- **pnpm** - Package manager (evidenced by pnpm-lock.yaml)

## Build System
Vite-based build system with TypeScript compilation.

## Common Commands
```bash
# Development server with hot reload
pnpm dev

# Production build (TypeScript compilation + Vite build)
pnpm build

# Code linting
pnpm lint

# Preview production build
pnpm preview
```

## Configuration Files
- `vite.config.ts` - Vite configuration with React SWC plugin
- `tsconfig.json` - TypeScript configuration
- `eslint.config.js` - ESLint rules and React-specific linting