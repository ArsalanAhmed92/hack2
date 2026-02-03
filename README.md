# Evolution of Todo - Phase II

A modern todo application built with Next.js 16+, TypeScript, Tailwind CSS, and shadcn/ui.

## Features

- **Authentication**: Secure login and signup with Better Auth
- **Task Management**: Create, read, update, and delete tasks
- **Filtering & Search**: Advanced filtering and search capabilities
- **Responsive Design**: Fully responsive across all device sizes
- **Dark/Light Mode**: Automatic theme switching with next-themes
- **Accessibility**: WCAG 2.2 AA compliant

## Tech Stack

- **Framework**: Next.js 16+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Theming**: next-themes
- **Authentication**: Better Auth
- **Forms**: React Hook Form + Zod for validation

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

Create a `.env.local` file in the root directory:

```env
# Better Auth Configuration
AUTH_SECRET=your-secret-key-here
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# API Configuration (if using external API)
NEXT_PUBLIC_API_BASE_URL=http://localhost:3001
```

## Project Structure

```
app/
├── layout.tsx            # Root layout with providers
├── page.tsx              # Home page redirect
├── login/
│   └── page.tsx          # Login page
├── signup/
│   └── page.tsx          # Signup page
├── dashboard/
│   ├── layout.tsx        # Protected layout with navigation
│   └── page.tsx          # Task dashboard
├── dashboard/new/
│   └── page.tsx          # New task form
├── dashboard/[id]/
│   └── page.tsx          # Individual task view/edit
└── providers.tsx         # Client-side providers wrapper
components/
├── ui/                   # shadcn/ui components
├── auth/                 # Authentication components
├── layout/               # Navigation and layout components
├── tasks/                # Task management components
├── theme/                # Theme toggle component
└── common/               # Shared components
lib/
├── auth.ts               # Better Auth integration
├── api.ts                # API client with JWT handling
├── utils.ts              # Utility functions
├── validations.ts        # Zod validation schemas
└── types.ts              # Type definitions
hooks/
├── use-mobile.ts         # Mobile detection hook
└── use-task-actions.ts   # Task management hooks
```

## Learn More

To learn more about the technologies used in this project, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/docs)
- [Better Auth Documentation](https://better-auth.com/docs)