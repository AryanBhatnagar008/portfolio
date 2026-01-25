# Mechanical Engineering Portfolio

## Overview

A modern, responsive single-page personal portfolio website for a Mechanical Engineering student. The site features a sleek, futuristic design with a deep black background, neon purple accents, and smooth animations. It showcases skills, projects across multiple categories (3D CAD, Coding, Woodworking, 3D Printing, Design), and includes a contact form.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing (lightweight alternative to React Router)
- **Styling**: Tailwind CSS with custom design tokens for the futuristic theme
- **UI Components**: shadcn/ui component library (Radix UI primitives with Tailwind styling)
- **Animations**: Framer Motion for complex animations and layout transitions
- **Smooth Scrolling**: react-scroll for navigation link scrolling
- **Forms**: react-hook-form with Zod validation via @hookform/resolvers
- **State Management**: TanStack React Query for server state management

### Backend Architecture
- **Runtime**: Node.js with Express 5
- **Language**: TypeScript with ESM modules
- **Build Tool**: Custom build script using esbuild for server, Vite for client
- **API Design**: RESTful endpoints defined in `shared/routes.ts` with Zod schemas for type safety

### Data Storage
- **Database**: PostgreSQL
- **ORM**: Drizzle ORM with drizzle-zod for schema validation
- **Schema Location**: `shared/schema.ts` contains all table definitions
- **Tables**:
  - `skills`: Technical skills with proficiency levels
  - `projects`: Portfolio projects with categories, images, and technologies
  - `messages`: Contact form submissions

### Project Structure
```
├── client/           # React frontend
│   └── src/
│       ├── components/   # UI components
│       ├── pages/        # Page components
│       ├── hooks/        # Custom React hooks
│       └── lib/          # Utilities
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Database operations
│   └── db.ts         # Database connection
├── shared/           # Shared code between client/server
│   ├── schema.ts     # Drizzle database schema
│   └── routes.ts     # API route contracts with Zod
└── migrations/       # Drizzle database migrations
```

### Design Patterns
- **Type-Safe API Contracts**: Route definitions with input/output Zod schemas shared between frontend and backend
- **Repository Pattern**: `DatabaseStorage` class abstracts all database operations
- **Component-Based UI**: Reusable shadcn/ui components with consistent styling
- **CSS Custom Properties**: Theme colors defined as CSS variables for easy customization

## External Dependencies

### Database
- **PostgreSQL**: Primary database, connection via `DATABASE_URL` environment variable
- **connect-pg-simple**: PostgreSQL session store (available but not currently used)

### Key NPM Packages
- **drizzle-orm** / **drizzle-kit**: Database ORM and migration tooling
- **@tanstack/react-query**: Async state management for API calls
- **framer-motion**: Animation library for typing effects and transitions
- **react-scroll**: Smooth scrolling navigation
- **zod**: Runtime type validation for API contracts

### Build & Development
- **Vite**: Frontend development server and bundler
- **tsx**: TypeScript execution for development
- **esbuild**: Production server bundling

### Replit-Specific
- **@replit/vite-plugin-runtime-error-modal**: Error overlay during development
- **@replit/vite-plugin-cartographer**: Development tooling