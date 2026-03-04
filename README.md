# Refinery Ecommerce

React frontend for **Refinery / Tracking Unlimited** — ecommerce and tracking. Built with Vite, TypeScript, Tailwind CSS, and GraphQL (Apollo Client + codegen). Uses the staging GraphQL API; no backend code in this repo.

---

## Stack

| Layer        | Tech |
|-------------|------|
| Build       | Vite 7, TypeScript 5.9 |
| UI          | React 19, React Router 7 |
| Styling     | Tailwind CSS 4 (@tailwindcss/postcss) |
| Data        | Apollo Client 4, GraphQL 16 |
| Codegen     | @graphql-codegen/cli + client-preset |

---

## Prerequisites

- **Node.js** 18+ (22 recommended; use `nvm use 22` if available)
- **npm** or **yarn**

---

## Setup

1. **Clone and install**

   ```bash
   git clone <repo-url>
   cd refinery-cursor-final
   npm install
   ```

2. **Environment**

   Copy `.env.example` to `.env` and set the GraphQL endpoint (default is staging):

   ```bash
   cp .env.example .env
   ```

   `.env` should contain:

   ```env
   VITE_GRAPHQL_HTTP_URI=https://api.app-stage.tracking-unlimited.com/graphql
   ```

   Optional: `VITE_GRAPHQL_WS_URI` for subscriptions.

3. **Generate GraphQL types** (required after clone or schema changes)

   ```bash
   npm run codegen
   ```

   This fetches the schema from the API and writes types and document nodes to `src/generated/graphql/`. Do not edit generated files by hand.

---

## Scripts

| Command           | Description |
|------------------|-------------|
| `npm run dev`    | Start Vite dev server (default: http://localhost:5173) |
| `npm run build`  | TypeScript check + production build → `dist/` |
| `npm run preview`| Serve production build locally |
| `npm run codegen`| Run GraphQL codegen (schema + documents → `src/generated/graphql/`) |
| `npm run lint`   | Run ESLint |

---

## Project structure

```
refinery-cursor-final/
├── src/
│   ├── components/       # Reusable UI (e.g. ProtectedRoute)
│   ├── constants/        # Route paths, config (ROUTES)
│   ├── contexts/         # React context (AuthContext)
│   ├── generated/        # GraphQL codegen output (do not edit)
│   │   └── graphql/
│   ├── graphql/          # GraphQL operations (gql``) used by codegen
│   ├── hooks/            # Custom hooks (useAuth)
│   ├── layouts/          # AuthLayout, (future: MainLayout)
│   ├── pages/            # Route-level screens
│   │   └── auth/         # Login, ForgotPassword
│   ├── services/         # Apollo client, auth API (login, logout, forgotPassword)
│   ├── App.tsx            # Router + route config
│   ├── main.tsx           # ApolloProvider, AuthProvider, root render
│   └── index.css          # Tailwind import + base styles
├── guidelines/            # Project guidelines (layout, design, init)
├── cursor-plans/          # Implementation plans (install, layout, auth)
├── codegen.ts             # GraphQL codegen config
├── postcss.config.js      # Tailwind PostCSS
├── .env.example
└── package.json
```

---

## Authentication

- **Login**: Staff/admin uses **email + password** via the `login` mutation. Token is stored in `localStorage` and sent as `Authorization: Bearer <token>` on all GraphQL requests.
- **Routes**: `/login`, `/forgot-password` (auth layout); `/dashboard` is protected (redirects to login when not authenticated).
- **Context**: `AuthProvider` in `main.tsx`; `useAuth()` exposes `isAuthenticated`, `login`, `logout`, `forgotPassword`, `isLoading`.
- **API**: `login(loginInput: { email, password })`, `customerForgotPassword(customerForgotPasswordInput: { userName })`. Types and operations live in `src/generated/graphql/` and `src/graphql/auth.ts`.

---

## API

- **Endpoint**: Configured via `VITE_GRAPHQL_HTTP_URI` (default: `https://api.app-stage.tracking-unlimited.com/graphql`).
- **Docs**: Schema and types are the source of truth; run `npm run codegen` and use `src/generated/graphql/graphql.ts` and the generated document types for integration.

---

## Guidelines and plans

- **guidelines/** — How to set up the project, layout, and design (see `guidelines/project-initialization.md`, `guidelines/frontend-layout-structure.md`, `guidelines/design-guidelines.md`).
- **cursor-plans/** — Stepwise plans for project installation, main layout, and authentication. Use these when implementing or extending features.

---

## License

Private. All rights reserved.
