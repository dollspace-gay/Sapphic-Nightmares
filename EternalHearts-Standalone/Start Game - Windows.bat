@echo off
title Eternal Hearts: A Ravencroft Romance
cls
echo.
echo     🧛‍♀️ Eternal Hearts: A Ravencroft Romance
echo     ═══════════════════════════════════════
echo.

:: Check if Node.js is available
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo     ❌ Node.js is required to run this game.
    echo.
    echo     Please download and install Node.js from:
    echo     https://nodejs.org
    echo.
    echo     After installing Node.js, restart your computer
    echo     and try running this game again.
    echo.
    pause
    exit /b 1
)

echo     🌹 Starting game server...
echo.
echo     The game will open in your browser automatically.
echo     Keep this window open while playing.
echo.
echo     Press Ctrl+C to stop the game.
echo.

node game-launcher.cjs