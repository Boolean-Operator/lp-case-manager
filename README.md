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


### Notes

May need to use ```--legacy-peer-deps flag```

***package.json***

 //  Sentry not quite ready for TurboPack

 Replace  this line of code
 
 ```
 "dev": "next dev --turbopack",
 ```
 with
 ```
    "dev": "next dev",
 ```