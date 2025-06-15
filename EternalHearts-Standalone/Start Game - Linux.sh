#!/bin/bash

clear
echo ""
echo "    🧛‍♀️ Eternal Hearts: A Ravencroft Romance"
echo "    ═══════════════════════════════════════"
echo ""

# Check if Node.js is available
if ! command -v node &> /dev/null; then
    echo "    ❌ Node.js is required to run this game."
    echo ""
    echo "    Please install Node.js using your package manager:"
    echo "    Ubuntu/Debian: sudo apt install nodejs npm"
    echo "    Fedora: sudo dnf install nodejs npm"
    echo "    Arch: sudo pacman -S nodejs npm"
    echo ""
    echo "    Or download from: https://nodejs.org"
    echo ""
    read -p "Press Enter to exit..."
    exit 1
fi

echo "    🌹 Starting game server..."
echo ""
echo "    The game will open in your browser automatically."
echo "    Keep this terminal open while playing."
echo ""
echo "    Press Ctrl+C to stop the game."
echo ""

node game-launcher.js