# React + Vitest + GitHub Actions

En enkel counter-app byggd med Vite, React och Bootstrap.

## Installation
1. Klona detta repo: `git clone <repo-url>`
2. Gå in i mappen: `cd <folder-name>`
3. Installera beroenden: `npm install`
4. Starta utvecklingsservern: `npm run dev`

## Testning
Lägg till scriptet i `package.json`:
```json
  "scripts": {
    "dev": "vite",
    "test": "vitest",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
```
För att köra testerna:
```sh
npm test
```

## Deployment med GitHub Pages
1. Lägg till `vite.config.js` med:
```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/<base-here>/'
});
```
2. Lägg till GitHub Action för deploy:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Check out repository
        uses: actions/checkout@v3
      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18
      - name: Install dependencies
        run: npm install
      - name: Build project
        run: npm run build
      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          branch: gh-pages
          folder: dist
```
3. Push koden till `main`-branchen och aktivera GitHub Pages i repo-inställningarna.