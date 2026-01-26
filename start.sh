#!/usr/bin/env sh
set -e

cd "Front End"

npm ci
npm run build
npm run preview -- --host 0.0.0.0 --port "${PORT:-4173}"
