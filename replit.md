# Overview

This is a full-stack web application built around the "$WALKER" cryptocurrency meme character. The application features a React frontend with a mystical/crypto-themed landing page showcasing an animated character presentation with social media links and community features. The backend is built with Express.js and includes authentication capabilities with PostgreSQL database integration through Drizzle ORM.

The application appears to be a promotional/community site for a cryptocurrency token, featuring character lore, animations, and social engagement elements typical of meme coin projects.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design system
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Animation**: Framer Motion for smooth animations and transitions
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Development**: Hot reloading with tsx for TypeScript execution
- **Session Management**: PostgreSQL-based session storage with connect-pg-simple
- **API Structure**: RESTful API with `/api` prefix routing

## Database Design
- **Primary Database**: PostgreSQL configured through Drizzle
- **Schema Location**: Centralized in `/shared/schema.ts` for type sharing between frontend and backend
- **User Management**: Basic user schema with username/password authentication
- **Migration System**: Drizzle Kit for database schema migrations

## Development Environment
- **Monorepo Structure**: Client and server code in separate directories with shared types
- **Path Aliases**: Configured for clean imports (`@/` for client, `@shared/` for shared code)
- **Development Tools**: ESBuild for production bundling, TypeScript for type checking
- **Replit Integration**: Custom plugins for development banner and error handling

## Key Design Decisions
- **Type Safety**: Full TypeScript implementation across frontend, backend, and shared schemas
- **Component Architecture**: Modular React components with clear separation of concerns (hero, character, stats, footer sections)
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
- **Performance**: Vite for fast builds, TanStack Query for efficient data fetching and caching
- **Styling System**: CSS variables for theming with dark mode support built-in

# External Dependencies

## Database & ORM
- **PostgreSQL**: Primary database (configured but may need provisioning)
- **Neon Database**: Serverless PostgreSQL provider via `@neondatabase/serverless`
- **Drizzle ORM**: Type-safe database operations and migrations

## UI & Styling
- **Radix UI**: Comprehensive set of accessible React primitives for complex UI components
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Framer Motion**: Animation library for smooth transitions and interactions
- **Lucide React**: Icon library for consistent iconography

## Development & Build Tools
- **Vite**: Build tool and development server
- **React**: Frontend framework
- **Express.js**: Backend web framework
- **TypeScript**: Static type checking across the entire application

## Third-Party Services
- **Social Media Integration**: Links configured for Twitter/X, Telegram, and Discord communities
- **Font Integration**: Google Fonts (Inter, Orbitron) for typography
- **Session Storage**: PostgreSQL-based session management for user authentication

## Form & Validation
- **React Hook Form**: Form state management and validation
- **Zod**: Schema validation library integrated with Drizzle for type-safe data validation
- **Hookform Resolvers**: Integration between React Hook Form and validation libraries