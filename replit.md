# Replit.md

## Overview

This is a vampire-themed visual novel game called "Crimson Embrace" built as a full-stack web application. The project implements an interactive story experience where players make choices that affect character relationships and story progression. The application features a React frontend with a gothic vampire aesthetic and an Express.js backend with PostgreSQL database integration for saving/loading game states.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **UI Framework**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom vampire/gothic theme variables
- **State Management**: React Context API for game state management
- **Data Fetching**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Driver**: Neon serverless PostgreSQL with connection pooling
- **Session Management**: Connect-pg-simple for PostgreSQL-backed sessions
- **Development**: tsx for TypeScript execution in development

### Database Schema
The application uses two main tables:
- `users`: Stores user authentication data (id, username, password)
- `game_states`: Stores saved game progress (id, userId, slotName, gameData, timestamps)

## Key Components

### Game Engine
- **GameContext**: Central state management for character relationships, current scene, and game progression
- **Story System**: Structured chapters, scenes, and choices with character affection tracking
- **Choice System**: Dynamic choice consequences that affect character relationships
- **Choice History**: Tracks player decisions for adaptive storytelling analysis

### User Interface
- **GameInterface**: Main game layout with sidebar and story panels
- **StoryPanel**: Displays current scene text and character information
- **ChoicePanel**: Interactive choice selection with visual feedback
- **Sidebar**: Character relationship tracking, player stats, and adaptive story hints
- **GameStateModal**: Save/load functionality with slot management
- **StoryHints**: Adaptive storytelling hints based on player choice patterns

### Character System
- **Character Profiles**: Eight datable vampire characters with unique personalities, backgrounds, and motivations
  - Core Trio: Lilith (Ancient Leader), Morgana (Shadow Mystic), Seraphina (Fallen Angel)
  - New Members: Valentina (Revolutionary), Celeste (Scholar), Raven (Huntress), Isadora (Socialite), Luna (Seer), Elena (Artist)
- **Relationship Dynamics**: Complex web of alliances, rivalries, and political factions within the coven
- **Character Secrets**: Each vampire has hidden motivations and tragic backstories that impact gameplay
- **Affection Tracking**: Individual relationship progression with meaningful status changes
- **Visual Representation**: Color-coded character indicators and progress bars

### Adaptive Storytelling System
- **Choice Pattern Analysis**: Tracks romantic, cautious, and bold decision patterns
- **Character Focus Detection**: Identifies which character the player is most interested in
- **Relationship Momentum**: Analyzes recent affection changes to predict story developments
- **Contextual Hints**: Provides personalized guidance based on current scene and history

## Data Flow

1. **Game Initialization**: GameProvider loads initial game state and character data
2. **Story Progression**: Players navigate through scenes by making choices
3. **Choice Processing**: Choices trigger character affection changes and scene transitions
4. **State Persistence**: Game states can be saved to database with custom slot names
5. **State Restoration**: Saved games can be loaded to restore previous progress

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Neon PostgreSQL serverless driver
- **drizzle-orm**: Type-safe SQL query builder and ORM
- **@tanstack/react-query**: Server state management
- **express**: Web application framework
- **react**: UI library
- **tailwindcss**: Utility-first CSS framework

### UI Components
- **@radix-ui/***: Comprehensive set of UI primitives
- **shadcn/ui**: Pre-built component library
- **lucide-react**: Icon library
- **class-variance-authority**: Component variant management

## Deployment Strategy

The application is configured for deployment on Replit with:
- **Build Process**: Vite builds the frontend, esbuild bundles the backend
- **Production Mode**: Serves static files through Express
- **Development Mode**: Hot reloading with Vite dev server
- **Database**: PostgreSQL module enabled in Replit environment
- **Environment Variables**: DATABASE_URL for database connection

The deployment uses autoscale target with npm scripts for build and start commands. The application listens on port 5000 internally and exposes port 80 externally.

## Changelog

```
Changelog:
- June 14, 2025. Initial setup with vampire RPG dating simulator
- June 14, 2025. Added character creation system with traits, flaws, and boons
- June 14, 2025. Integrated PostgreSQL database with Drizzle ORM
- June 14, 2025. Restructured storylines with inheritance backstory and endgame transformation
- June 14, 2025. Expanded branching narrative with character-specific romance paths
- June 14, 2025. Implemented adaptive storytelling hints with choice pattern analysis
- June 14, 2025. Fixed character creation scene transition bug (now starts with "The Inheritance")
- June 14, 2025. Completed all missing story branches - eliminated "loading story" issues
- June 14, 2025. Added comprehensive character development scenes and sanctuary covenant system
- June 14, 2025. Built active character effects system that modifies choices based on traits
- June 14, 2025. Expanded vampire community to 8 datable characters with unique personalities
- June 14, 2025. Added complex relationship dynamics, political factions, and character rivalries
- June 14, 2025. Integrated trait-specific special choices with purple styling distinction
- June 14, 2025. Created extensive backstories and secrets for all new vampire characters
- June 15, 2025. Added Umbra - shy eldritch horror companion with starlight constellation form
- June 15, 2025. Created developer mode story tree visualizer with scrollable navigation
- June 15, 2025. Built Chapter 2 "Contentious Proposal" - major political conflict between Valentina and Isadora
- June 15, 2025. Added advisory consultation scenes with Lilith and Celeste for informed decision-making
- June 15, 2025. Implemented branching outcomes: revolutionary alliance, traditionalist victory, compromise, or neutrality
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```