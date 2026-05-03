# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Backend MySQL

This project includes a minimal backend in `src/backend/server.js` using `express` and `mysql2`.

1. Copy `.env.example` to `.env` and fill in your MySQL credentials.
2. Install dependencies with `npm install`.
3. Start the backend with `npm run server`.

Available endpoints:

- `GET /health` checks if the MySQL connection is working.
- `GET /api/ping` runs `SELECT NOW()` against the database.
- `POST /api/login` authenticates against the login table configured in `DB_LOGIN_TABLE`.
