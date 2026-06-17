#!/usr/bin/env bash
# ============================================================
# Nestoria — Quick Redeploy Script for EC2
# Run after pushing changes to GitHub:  ~/redeploy.sh
# ============================================================
set -e

REPO_DIR="/home/ubuntu/Nestoria_2"
cd "$REPO_DIR"

echo "⟹  Pulling latest code…"
git pull origin main

echo "⟹  Installing backend dependencies…"
cd "$REPO_DIR/backend"
npm install --omit=dev

echo "⟹  Restarting backend (PM2)…"
pm2 restart nestoria-api

echo "⟹  Installing frontend dependencies…"
cd "$REPO_DIR/frontend"
npm install

echo "⟹  Building frontend…"
npm run build

echo "⟹  Reloading Nginx…"
sudo systemctl reload nginx

echo "✓  Redeploy complete!"
