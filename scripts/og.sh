#!/usr/bin/env bash
# Renders scripts/og-card.html to public/og.png (1200×630) with headless Chromium.
set -euo pipefail
cd "$(dirname "$0")/.."
BROWSER="${CHROMIUM:-$(command -v chromium || command -v chromium-browser || command -v google-chrome)}"
"$BROWSER" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
  --virtual-time-budget=2000 --window-size=1200,630 \
  --screenshot="$PWD/public/og.png" "file://$PWD/scripts/og-card.html" 2>/dev/null
echo "wrote public/og.png"
