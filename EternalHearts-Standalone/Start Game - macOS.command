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
    echo "    Please download and install Node.js from:"
    echo "    https://nodejs.org"
    echo ""
    echo "    After installing Node.js, restart your computer"
    echo "    and try running this game again."
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

node game-launcher.cjs