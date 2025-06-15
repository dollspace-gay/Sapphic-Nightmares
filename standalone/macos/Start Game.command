#!/bin/bash
cd "$(dirname "$0")"

echo "==============================================="
echo " Eternal Hearts: A Ravencroft Romance"
echo "==============================================="
echo ""
echo "Starting game server..."
echo ""

node game-launcher.js

echo ""
echo "Game server stopped."
read -p "Press any key to continue..."