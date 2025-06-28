# Venu Madhav Portfolio - Full Stack Web Application

## Overview

This is a modern full-stack portfolio website built with React and Express.js, showcasing the work and achievements of Venu Madhav Bandarupalli, a Full Stack Developer and AI/ML Engineer. The application features an interactive 3D portfolio with smooth animations, responsive design, and modern UI components.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **3D Graphics**: Three.js for interactive background animations
- **State Management**: React hooks for local state, TanStack React Query for server state
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL session store with connect-pg-simple
- **Development**: Hot module reloading with Vite middleware integration

### Build System
- **Frontend Build**: Vite with React plugin and custom configuration
- **Backend Build**: esbuild for server-side bundling
- **Development**: Concurrent development server with Vite middleware
- **TypeScript**: Shared configuration across client, server, and shared modules

## Key Components

### Client-Side Components
1. **Interactive Portfolio Sections**:
   - Hero section with 3D animated background
   - About section with animated statistics
   - Education timeline with smooth transitions
   - Experience showcase with achievement highlights
   - Projects grid with gradient overlays
   - Skills visualization with progress bars
   - Achievements cards with icons
   - Contact form with validation

2. **Custom Hooks**:
   - `useScrollAnimation`: Intersection Observer for scroll-triggered animations
   - `useTypingEffect`: Animated typing text effect
   - `use-mobile`: Responsive design helper

3. **3D Scene Management**:
   - Three.js scene initialization with floating geometric shapes
   - Animated materials with transparency and color gradients
   - Performance-optimized rendering

### Server-Side Architecture
1. **Express Server**: RESTful API structure with middleware setup
2. **Storage Interface**: Abstracted storage layer with memory implementation
3. **Development Tools**: Hot reloading, error handling, and logging middleware

### Database Schema
- **Users Table**: Basic user authentication structure with username/password
- **Drizzle ORM**: Type-safe database operations with PostgreSQL dialect
- **Migration System**: Automated database migrations with drizzle-kit

## Data Flow

1. **Client-Server Communication**: RESTful API endpoints with JSON data exchange
2. **Static Asset Serving**: Vite handles static assets in development, Express serves built assets in production
3. **Database Operations**: Drizzle ORM provides type-safe database queries
4. **Session Management**: PostgreSQL-based session storage for user authentication

## External Dependencies

### Core Technologies
- **React Ecosystem**: React 18, React DOM, React Hook Form
- **UI Framework**: Radix UI primitives, Tailwind CSS, shadcn/ui components
- **Build Tools**: Vite, esbuild, TypeScript
- **3D Graphics**: Three.js for interactive animations
- **Database**: Drizzle ORM, Neon Database, PostgreSQL

### Development Tools
- **Replit Integration**: Custom plugins for Replit development environment
- **Font Awesome**: Icon library for UI elements
- **Google Fonts**: Typography with Inter, Poppins, and JetBrains Mono
- **PostCSS**: CSS processing with autoprefixer

### Authentication & Storage
- **Session Storage**: connect-pg-simple for PostgreSQL session management
- **Validation**: Zod schema validation with Drizzle integration
- **Query Management**: TanStack React Query for server state management

## Deployment Strategy

### Development Environment
- **Replit Integration**: Custom Vite plugins for Replit development
- **Hot Module Reloading**: Full-stack development with live updates
- **Error Handling**: Runtime error overlay for development debugging

### Production Build
- **Frontend**: Vite production build with optimized assets
- **Backend**: esbuild bundling for Node.js deployment
- **Static Assets**: Served from Express in production environment
- **Database**: Neon Database for serverless PostgreSQL hosting

### Environment Configuration
- **Database URL**: Environment variable for database connection
- **Development/Production**: NODE_ENV-based configuration
- **Build Process**: Separate build steps for client and server

## Changelog
- June 28, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.