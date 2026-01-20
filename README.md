# Cosmic Flow Digital Site

Base técnica para el sitio oficial de Cosmic Flow Digital. Incluye estructura escalable, rutas listas para marketing y configuración de despliegue en Netlify.

## Stack

- React 18
- Vite
- React Router
- JavaScript (ESM)
- CSS moderno con variables

## Scripts disponibles

- `npm run dev`: inicia el entorno local de desarrollo.
- `npm run build`: genera la build de producción.
- `npm run preview`: previsualiza la build localmente.

## Desarrollo local

1. `npm install`
2. `npm run dev`

## Deploy en Netlify

El archivo `netlify.toml` incluye el build command (`npm run build`), el directorio de publicación (`dist`) y el redirect para SPA.
