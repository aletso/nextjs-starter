# Aletso Next.js Starter

A modern, full-stack Next.js template with best practices and powerful technologies built-in:

- [Next.js 15](https://nextjs.org/docs)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Drizzle ORM](https://orm.drizzle.team/docs/overview)
- [PostgreSQL](https://www.postgresql.org/docs/)
- [tRPC](https://trpc.io/docs)
- [better-auth](https://better-auth.akrv.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/docs)
- [pnpm](https://pnpm.io/motivation)

## Quick Start

1. **Use this template:**

   - Navigate to the GitHub repository and click the "Use this template" button (or click [here](https://github.com/new?template_name=nextjs-starter&template_owner=aletso)).

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Set up your database:**

   - **Local PostgreSQL:**

     ```bash
     # Install PostgreSQL (macOS)
     brew install postgresql@16
     brew services start postgresql@16

     # Create a database
     createdb my_project_db

     # Your connection URL will be:
     # postgresql://[username]:[password]@localhost:5432/my_project_db
     # For local development with default settings, often this is:
     # postgresql://postgres:postgres@localhost:5432/my_project_db
     # or simply:
     # postgresql://localhost:5432/my_project_db
     ```

   - **OR use [Neon](https://neon.tech/)** (cloud PostgreSQL with a free tier)

4. **Create and update environment variables:**

   ```bash
   cp .env.example .env
   # Then edit .env with your database URL and auth secret
   ```

5. **Push the database schema:**

   ```bash
   pnpm db:push
   ```

6. **Start the development server:**

   ```bash
   pnpm dev
   ```

7. **Open** [http://localhost:3000](http://localhost:3000) in your browser.

## Key Features

### Database (Drizzle ORM)

- **Location in Project:** `src/server/db/schema/`
- **Key Insight:** Type-safe database operations with schema definitions in TypeScript.
- **How to Use:**
  ```typescript
  // Query example
  const posts = await db.query.post.findMany({
    where: (post, { eq }) => eq(post.createdById, userId),
  });
  ```
- **Documentation:** [Drizzle ORM Docs](https://orm.drizzle.team/docs/overview)

### API (tRPC)

- **Location in Project:** `src/server/api/routers/`
- **Key Insight:** End-to-end type safety between frontend and backend without code generation.
- **Context Access:** All procedures automatically have access to `ctx.db` and `ctx.session`.
- **How to Use:**

  ```typescript
  // Server: create a procedure
  const postRouter = createTRPCRouter({
    getAll: publicProcedure.query(async ({ ctx }) => {
      // ctx contains db and session
      return ctx.db.query.post.findMany();
    }),

    // Use session in a protected procedure
    getOwn: protectedProcedure.query(async ({ ctx }) => {
      const userId = ctx.session.user.id;
      return ctx.db.query.post.findMany({
        where: (post, { eq }) => eq(post.createdById, userId),
      });
    }),
  });

  // Client: use the procedure
  const { data } = api.post.getAll.useQuery();
  ```

- **Documentation:** [tRPC Docs](https://trpc.io/docs)

### Authentication (better-auth)

- **Location in Project:** `src/server/auth/`
- **Key Insight:** Simple email/password authentication with session management.
- **Note:** `getServerSession()` is a custom utility function that simplifies session access.
- **How to Use:**

  ```typescript
  // Check if user is authenticated using the custom utility
  import { getServerSession } from '@/server/auth/utils';

  const session = await getServerSession();
  if (session?.user) {
    // User is logged in
  }
  ```

- **Documentation:** [better-auth Docs](https://better-auth.akrv.dev/)

### UI (Tailwind CSS v4 & shadcn/ui)

- **Location in Project:** `src/components/ui/`
- **Key Insight:** Utility-first CSS with pre-built, customizable components.

This project utilizes [Tailwind CSS v4](https://tailwindcss.com/docs) for utility-first styling, enabling rapid and consistent design implementation. For UI components, it incorporates [shadcn/ui](https://ui.shadcn.com/docs), a collection of accessible and customizable components built on top of Radix UI primitives and styled with Tailwind CSS. These components are designed to be copied directly into your codebase, offering full control and easy customization.

To explore the available components, you can browse the [shadcn/ui components directory](https://ui.shadcn.com/docs/components), which includes elements like buttons, dialogs, forms, and more. Each component comes with detailed documentation and examples to facilitate integration into your project.

**Adding Components:**

To add a new component from shadcn/ui, use the following command:

```bash
npx shadcn@latest add [component-name]
```

Replace `[component-name]` with the desired component, such as `button` or `dialog`. This command will add the component's code directly into your project, allowing for immediate use and customization.

**Usage Example:**

Once added, you can import and use the components in your application as follows:

```tsx
import { Button } from '@/components/ui/button';

function Example() {
  return <Button>Click Me</Button>;
}
```

This approach ensures that your UI components are both consistent and easily maintainable across your application.

## Common Commands

```bash
pnpm dev         # Start development server
pnpm build       # Build for production
pnpm db:push     # Update database schema (dev)
pnpm db:studio   # Open visual database editor
pnpm db:generate # Create migration files
pnpm db:migrate  # Apply migrations (production)
pnpm lint        # Check for linting errors
pnpm typecheck   # Check TypeScript types
```

## Learn More

- [Next.js Docs](https://nextjs.org/docs)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [Drizzle ORM Docs](https://orm.drizzle.team/docs/overview)
- [PostgreSQL Docs](https://www.postgresql.org/docs/)
- [tRPC Docs](https://trpc.io/docs)
- [better-auth Docs](https://better-auth.com/docs)
