# CASE MANAGER

The case manager platform is built to assist case managers with tracking and coordinating clients and client interactions to drive better client and patient outcomes.

## To be Deployed on Vercel

- vercel
- github repo

## Dev Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Tech Stack

- Next JS
- React JS
- TypeScript
- React Hook Form
- Neon DB
- Drizzle
- Zod
- TailwindCSS
- ShadCN-UI
- Kinde

### Notes

May need to use `--legacy-peer-deps flag`

**_package.json_**

// Sentry not quite ready for TurboPack

Replace this line of code

```
"dev": "next dev --turbopack",
```

with

```
   "dev": "next dev",
```
