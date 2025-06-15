# 🧛‍♀️ Eternal Hearts: A Ravencroft Romance

A sophisticated sapphic vampire romance visual novel where you inherit the mysterious Ravencroft Manor and discover a world of immortal passion, ancient secrets, and choices that determine your eternal fate.

![Game Screenshot](attached_assets/splash_1749977043861.png)

## ✨ Features

- **Interactive Romance Storyline**: Navigate complex relationships with 8 unique vampire characters
- **Character Creation System**: Customize your protagonist with traits, flaws, and boons that affect gameplay
- **Branching Narrative**: Meaningful choices that impact character relationships and story outcomes
- **Professional Artwork**: Gothic atmosphere with 8 custom background locations
- **Save/Load System**: Progress tracking with multiple save slots
- **Adaptive Storytelling**: Dynamic hints based on your choice patterns and relationships
- **Cross-Platform Distribution**: Standalone launchers for Windows, macOS, and Linux

## 🎭 Characters

Meet the diverse coven of vampire women at Ravencroft Manor:

- **Lilith** - Ancient coven leader with millennia of wisdom
- **Morgana** - Shadow mystic with mastery over darkness
- **Seraphina** - Fallen angel seeking redemption
- **Valentina** - Revolutionary fighting for vampire rights
- **Celeste** - Scholar and keeper of ancient knowledge
- **Raven** - Huntress and protector of the coven
- **Isadora** - Sophisticated socialite with hidden depths
- **Luna** - Mysterious seer with prophetic abilities
- **Elena** - Artistic soul and creative spirit

## 🚀 Quick Start

### Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/eternal-hearts-ravencroft-romance.git
   cd eternal-hearts-ravencroft-romance
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up the database**
   ```bash
   npm run db:push
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser** to `http://localhost:5000`

### Standalone Distribution

For end users who want to play without setting up a development environment:

1. Download the latest release package
2. Extract all files to a folder
3. Double-click the launcher for your platform:
   - **Windows**: `Start Game - Windows.bat`
   - **macOS**: `Start Game - macOS.command`
   - **Linux**: `Start Game - Linux.sh`

**Requirements**: Node.js (download from [nodejs.org](https://nodejs.org))

## 🛠️ Technology Stack

### Frontend
- **React** with TypeScript for the user interface
- **Vite** for fast development and optimized builds
- **Tailwind CSS** with custom gothic theme
- **Shadcn/ui** components built on Radix UI primitives
- **TanStack Query** for server state management
- **Wouter** for lightweight client-side routing

### Backend
- **Express.js** with TypeScript for the API server
- **PostgreSQL** with Drizzle ORM for type-safe database operations
- **Neon** serverless PostgreSQL with connection pooling
- **Session management** with connect-pg-simple

### Distribution
- **Cross-platform launchers** for Windows, macOS, and Linux
- **Embedded HTTP server** for standalone deployment
- **Self-contained packages** requiring only Node.js runtime

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Application pages
│   │   ├── contexts/       # React context providers
│   │   ├── data/           # Game data and character definitions
│   │   └── types/          # TypeScript type definitions
├── server/                 # Backend Express application
│   ├── routes.ts           # API route definitions
│   ├── storage.ts          # Database abstraction layer
│   └── db.ts              # Database connection setup
├── shared/                 # Shared code between client and server
│   └── schema.ts          # Database schema and types
├── attached_assets/        # Game artwork and backgrounds
└── EternalHearts-Standalone/ # Distribution package
```

## 🎮 Gameplay Features

### Character Creation
- **Traits**: Physical, social, and mental characteristics that unlock special dialogue options
- **Flaws**: Character weaknesses that add challenge and story depth
- **Boons**: Special abilities that provide advantages in certain situations

### Story Mechanics
- **Affection System**: Track relationships with each character
- **Choice Consequences**: Decisions affect character relationships and story progression
- **Adaptive Hints**: Personalized guidance based on your play style
- **Multiple Endings**: Different story outcomes based on your choices and relationships

### Visual Novel Elements
- **Professional Artwork**: Custom gothic backgrounds for each location
- **Atmospheric Design**: Dark romantic aesthetic with calligraphic typography
- **Immersive Experience**: Rich storytelling with detailed character development

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run check` - Run TypeScript checks
- `npm run db:push` - Push database schema changes

### Building Distribution Packages

```bash
node final-distribution.cjs
```

This creates a complete standalone package in `EternalHearts-Standalone/` with cross-platform launchers.

## 🎨 Customization

### Adding New Characters
1. Define character data in `client/src/data/gameData.ts`
2. Add character relationships and interactions
3. Create character-specific story scenes
4. Update the character selection and affection systems

### Creating New Scenes
1. Add scene definitions to the appropriate chapter in `gameData.ts`
2. Include background assignments for atmosphere
3. Define character interactions and choice consequences
4. Test story flow and choice validation

### Modifying the UI
- Components are in `client/src/components/`
- Styling uses Tailwind CSS with custom gothic theme variables
- UI primitives from Shadcn/ui can be customized in `client/src/components/ui/`

## 📊 Database Schema

The game uses PostgreSQL with the following main tables:

- **users**: Player accounts and authentication
- **game_states**: Saved game progress and state data

Database operations are handled through Drizzle ORM with full type safety.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by classic vampire romance literature
- Built with modern web technologies for optimal performance
- Designed for the sapphic community with authentic representation
- Art and design focused on gothic atmosphere and romantic storytelling

## 📞 Support

If you encounter issues or have questions:

1. Check the [Issues](https://github.com/yourusername/eternal-hearts-ravencroft-romance/issues) page
2. Review the troubleshooting section in the standalone distribution README
3. Create a new issue with detailed information about the problem

---

*Enter the shadows of Ravencroft Manor and discover your eternal destiny...* 🌹