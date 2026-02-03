# Implementation Plan: Frontend for Evolution of Todo Phase II

**Branch**: `1-ui-ux-design` | **Date**: 2026-02-03 | **Spec**: [link to spec.md](./spec.md)
**Input**: Feature specification from `/specs/1-ui-ux-design/spec.md`

**Note**: This plan details the frontend architecture and implementation for the Evolution of Todo Phase II project.

## Summary

Implementation of the complete frontend for Phase II of the Evolution of Todo project using Next.js 16+ with App Router. This includes authentication flow, protected layouts, dashboard, and task management interfaces. The solution will follow modern React practices with server components where possible, implement a responsive design system, and ensure full accessibility compliance.

## Technical Context

**Language/Version**: TypeScript 5.x with React 19.x
**Primary Dependencies**: Next.js 16+ (App Router), Tailwind CSS, shadcn/ui, next-themes, lucide-react, Better Auth
**Storage**: Browser storage for theme preferences, JWT tokens in httpOnly cookies via Better Auth
**Testing**: Jest, React Testing Library, Playwright for E2E testing
**Target Platform**: Web browsers (Chrome, Firefox, Safari, Edge) with progressive enhancement
**Project Type**: Web application
**Performance Goals**: Sub-100ms FCP, sub-300ms LCP, 95%+ Lighthouse performance score
**Constraints**: Must work on screens from 320px to 4K, WCAG 2.2 AA compliance, mobile-first approach
**Scale/Scope**: Single application supporting 10,000+ concurrent users with responsive interface

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

Based on AGENTS.md constitution:
- ✅ SDD compliance: Following Specify → Plan → Tasks → Implement workflow
- ✅ Task-first implementation: Will create detailed task list before implementation
- ✅ Multi-phase evolution: Building Phase II (web application) with foundation for future phases
- ✅ Tech stack adherence: Using Next.js, TypeScript, Tailwind CSS as specified
- ✅ Clean code standards: Following TypeScript best practices, clean component architecture
- ✅ Internationalization: Planning for future Urdu support in component structure

## Project Structure

### Documentation (this feature)
```text
specs/1-ui-ux-design/
├── plan.md              # This file
├── research.md          # Research on Next.js patterns, authentication
├── data-model.md        # Frontend data structures and state
├── quickstart.md        # How to set up and run the frontend
├── contracts/           # API contract definitions
└── tasks.md             # Implementation tasks
```

### Source Code (repository root)
```text
app/
├── layout.tsx                    # Root layout with theme provider
├── page.tsx                      # Home page redirect
├── login/
│   └── page.tsx                  # Login page
├── signup/
│   └── page.tsx                  # Signup page
├── dashboard/
│   ├── layout.tsx                # Protected layout wrapper
│   └── page.tsx                  # Dashboard page
├── globals.css                   # Global styles
├── providers.tsx                 # Client providers wrapper
└── error.tsx                     # Global error boundary
components/
├── ui/                           # shadcn/ui components
│   ├── button.tsx
│   ├── card.tsx
│   ├── input.tsx
│   ├── dialog.tsx
│   └── ...
├── auth/
│   ├── login-form.tsx
│   ├── signup-form.tsx
│   └── protected-route.tsx
├── layout/
│   ├── navbar.tsx
│   ├── sidebar.tsx
│   └── mobile-menu.tsx
├── tasks/
│   ├── task-card.tsx
│   ├── task-list.tsx
│   ├── task-modal.tsx
│   ├── task-filters.tsx
│   └── empty-state.tsx
├── theme/
│   └── theme-toggle.tsx
└── common/
    ├── loading-spinner.tsx
    ├── error-boundary.tsx
    └── toast-provider.tsx
lib/
├── auth.ts                       # Better Auth integration
├── api.ts                        # API client with JWT handling
├── utils.ts                      # Utility functions
├── validations.ts                # Zod validation schemas
└── types.ts                      # Type definitions
hooks/
├── use-mobile.ts                 # Mobile detection hook
└── use-task-actions.ts           # Task management hooks
styles/
└── globals.css                   # Global styles and Tailwind config
public/
└── favicon.ico
```

**Structure Decision**: Single Next.js application with App Router following Next.js recommended patterns. Component organization by feature with shared UI components in a dedicated directory.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| Multiple dependencies | Modern React ecosystem requires opinionated libraries for productivity | Could build everything from scratch but would be inefficient |

## 1. Frontend Overview & Goals

The frontend implementation aims to create a modern, accessible, and performant todo application with:

- **Modern UI/UX**: Clean, minimalist design with smooth interactions
- **Responsive Design**: Fully functional across all device sizes
- **Accessibility**: WCAG 2.2 AA compliance with keyboard navigation and screen reader support
- **Performance**: Optimized loading times and smooth interactions
- **Security**: Secure authentication flow with Better Auth
- **Maintainability**: Well-structured components and clear separation of concerns

## 2. Folder Structure & Monorepo Integration

The project follows Next.js App Router conventions with a component-first architecture:

- `app/` - Contains route handlers and page components
- `components/` - Reusable UI components organized by feature
- `lib/` - Shared utilities, API clients, and business logic
- `hooks/` - Custom React hooks
- `styles/` - Global styling and Tailwind configuration
- `public/` - Static assets

This structure promotes reusability and maintainability while following Next.js best practices.

## 3. Routing Architecture (App Router)

Using Next.js App Router with the following structure:

```
/app
├── layout.tsx            # Root layout with providers
├── page.tsx              # Redirects to /login if not authenticated
├── login/page.tsx        # Login page
├── signup/page.tsx       # Signup page
├── dashboard/
│   ├── layout.tsx        # Protected layout with navigation
│   └── page.tsx          # Task dashboard
├── dashboard/new/
│   └── page.tsx          # New task form
├── dashboard/[id]/
│   └── page.tsx          # Individual task view/edit
└── providers.tsx         # Client-side providers wrapper
```

Protected routes are handled through a higher-order component approach that redirects unauthenticated users.

## 4. Authentication & Authorization Flow

Using Better Auth for authentication with the following flow:

1. **Login**: User enters credentials → API validates → JWT token stored securely
2. **Session Management**: Session maintained via httpOnly cookies
3. **Protected Routes**: Middleware checks for valid session before rendering protected content
4. **Logout**: Session invalidated on both client and server

Authentication state is managed globally using React Context to avoid prop drilling.

## 5. Layout & Navigation Structure

The application uses a responsive layout with:

- **Desktop**: Sidebar navigation + top navbar with user controls
- **Mobile**: Bottom navigation bar with hamburger menu for additional options
- **Protected Layout**: Wrapper component that ensures authentication before rendering children
- **Consistent Header**: Logo, navigation, user profile, and theme toggle

Layout components are designed to be server-rendered where possible for performance.

## 6. Page Breakdown

### Login Page (`/login`)
- Centered form with email/password fields
- "Remember me" checkbox
- Link to signup page
- Social login options (future extension)

### Signup Page (`/signup`)
- Email, password, and confirm password fields
- Terms of service agreement
- Link to login page
- Form validation and error handling

### Dashboard Page (`/dashboard`)
- Task list with filtering and search
- Add task button
- Empty state when no tasks
- Responsive grid/list view based on screen size

### New Task Modal (`/dashboard/new`)
- Form with title, description, priority, due date
- Validation and error handling
- Cancel/save actions

### Edit Task Modal (`/dashboard/[id]`)
- Pre-filled form with existing task data
- Update/delete actions
- Confirmation for destructive actions

## 7. Component Hierarchy & Reusable Components

### High-Level Component Structure:
```
App Layout
├── Providers (Theme, Toast, Auth)
├── Main Layout
│   ├── Navbar
│   ├── Sidebar/Mobile Menu
│   └── Page Content
└── Global Modals (Toasts, Dialogs)
```

### Reusable Components:
- **UI Components**: Buttons, Cards, Inputs, Dialogs, etc. (from shadcn/ui)
- **Form Components**: Controlled form elements with validation
- **Data Components**: Task cards, lists, filters
- **Layout Components**: Grid systems, containers, responsive helpers
- **State Components**: Loading spinners, empty states, error displays

## 8. State Management Strategy

- **Global State**: Authentication and user preferences using React Context
- **Local State**: Component-specific state using useState and useReducer
- **Server Components**: Heavy use of server components for initial render performance
- **Client Components**: Only where interactivity is needed
- **URL State**: Query parameters for filtering and pagination
- **Cache Strategy**: Next.js data fetching and caching for optimal performance

## 9. API Integration Layer

### lib/api.ts contains:
- Base API client with JWT token handling
- Request/response interceptors
- Error handling and retry logic
- Type-safe request functions
- Loading and error state management

API calls are wrapped in React Query/SWR for caching, deduplication, and state management.

## 10. Theming & Responsive Design

### Theming:
- **next-themes** for theme switching
- **Tailwind CSS** with custom theme configuration
- **CSS variables** for consistent color system
- **Dark/light mode** with system preference detection

### Responsive Design:
- **Mobile-first** approach with progressive enhancement
- **Breakpoints**: sm: 640px, md: 768px, lg: 1024px, xl: 1280px
- **Touch-friendly** interactions and adequate tap targets
- **Adaptive layouts** that work across all device sizes

## 11. Key User Flows

### Authentication Flow:
1. User visits app → Redirected to login if not authenticated
2. User enters credentials → Submitted to auth service
3. Successful login → Redirected to dashboard
4. Failed login → Error message displayed

### Task Management Flow:
1. User on dashboard → Views task list
2. User filters/searches → List updates dynamically
3. User adds new task → Modal opens with form
4. User saves task → Task appears in list with success feedback

### Navigation Flow:
1. Desktop: Sidebar + top nav for primary navigation
2. Mobile: Bottom nav + hamburger menu for secondary options
3. Breadcrumb trail for deeper navigation levels

## 12. Non-functional Requirements

### Performance:
- **FCP**: Under 100ms
- **LCP**: Under 300ms
- **TTI**: Under 1s
- **Bundle size**: Under 250KB JS
- **Image optimization**: Next.js Image with WebP/AVIF support

### Accessibility:
- **WCAG 2.2 AA** compliance
- **Keyboard navigation** support
- **Screen reader** compatibility
- **Color contrast** ratio of 4.5:1 minimum
- **Focus management** for modals and dynamic content

### SEO:
- **SSR/SSG** for content indexing
- **Meta tags** for social sharing
- **Structured data** for rich snippets
- **Fast loading** times for ranking factors

### Security:
- **HTTPS** enforced
- **XSS protection** through React's escaping
- **Secure headers** configured
- **JWT token** security with httpOnly cookies