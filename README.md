This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Installation

This project is using [nvm](https://github.com/nvm-sh/nvm) to manage Node.js version.

```bash
nvm use
npm install
```

Build and run the app:

```bash
npm run build
npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

❗️Run development server (`npm run dev`) only for development. Since data is stored only in memory there are side effects.

Run tests:

```bash
npm run test
```

### Project description

This project utilizes GrpahQL for managing CRUD operations. Data is stored only in memory, so if you restart the app you'll loose all data.  
`Apollo Client` is used for state management on the client.  
`MUI` is used for components styling.  
`Toolpad core` from MUI is used for handling the Dialogs.  
`react-hook-form` is used for handling forms.  
`zod` is used for validation.  
`vitest` is used for unit tests.  


***What where***


GraphQL API - `/app/api/graphql`.  
Features - `features/` (Everything related to the feature. Such as: schemas, resolvers, types, feature specific components, hooks, etc.)  
Common stuff - `common/`-  (Reusable common things. Such as:  components, hooks, utils, etc.)


