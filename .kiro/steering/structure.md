# Project Structure

## Architecture Pattern
Component-based React architecture with TypeScript, following a feature-organized structure.

## Folder Organization

```
src/
├── components/          # Reusable UI components
│   ├── TrackItem/      # Individual track display component
│   └── TrackList/      # Track listing component
├── views/              # Page-level components/screens
│   ├── Home/           # Home page view
│   └── Search/         # Search page view
├── constant/           # Application constants
│   └── API.ts          # API endpoints and configuration
├── hooks/              # Custom React hooks (currently empty)
├── assets/             # Static assets (images, icons)
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## Naming Conventions
- **Components**: PascalCase with index.tsx files in folders (`TrackItem/index.tsx`)
- **Views**: PascalCase with index.tsx files in folders (`Home/index.tsx`)
- **Constants**: UPPER_SNAKE_CASE for values, PascalCase for files
- **Exports**: Named exports preferred (`export const ComponentName`)

## Component Structure
- Each component lives in its own folder with an `index.tsx` file
- Components use functional components with TypeScript
- Views represent full page components, components are reusable UI pieces

## API Integration
- API constants centralized in `src/constant/API.ts`
- Currently integrates with Audius API at `discoveryprovider3.audius.co`