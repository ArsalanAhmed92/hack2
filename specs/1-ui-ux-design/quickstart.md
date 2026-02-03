# Quickstart Guide: Evolution of Todo Phase II Frontend

## Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Git for version control

## Setup Instructions

### 1. Clone and Install Dependencies
```bash
git clone <repository-url>
cd <repository-directory>
npm install
# or
yarn install
```

### 2. Environment Configuration
Create a `.env.local` file in the root directory:
```env
# Better Auth Configuration
AUTH_SECRET=your-secret-key-here
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# API Configuration (if using external API)
NEXT_PUBLIC_API_BASE_URL=http://localhost:3001
```

### 3. Run Development Server
```bash
npm run dev
# or
yarn dev
```

The application will start on `http://localhost:3000`

## Key Scripts

### Development
```bash
npm run dev          # Start development server with hot reload
```

### Build & Production
```bash
npm run build        # Create production build
npm run start        # Start production server
```

### Testing
```bash
npm run test         # Run unit tests
npm run test:e2e     # Run end-to-end tests
npm run lint         # Check code quality
npm run type-check   # Run TypeScript type checking
```

## Project Structure Overview

### Pages (App Router)
- `app/login/page.tsx` - User login interface
- `app/signup/page.tsx` - User registration interface
- `app/dashboard/page.tsx` - Main task dashboard
- `app/layout.tsx` - Root layout with providers

### Components
- `components/auth/` - Authentication-related components
- `components/layout/` - Navigation and layout components
- `components/tasks/` - Task management components
- `components/ui/` - Reusable UI components (shadcn/ui)

### Utilities
- `lib/auth.ts` - Better Auth integration
- `lib/api.ts` - API client and request handling
- `lib/types.ts` - TypeScript type definitions
- `lib/utils.ts` - Helper functions

## Key Features

### Authentication
- Secure login with email/password
- Protected routes for authenticated users
- Session management with Better Auth

### Task Management
- Create, read, update, and delete tasks
- Filter and search functionality
- Responsive design for all device sizes

### Theming
- Light and dark mode support
- System preference detection
- Theme persistence across sessions

## Development Guidelines

### Component Development
1. Place reusable components in `components/ui/`
2. Organize feature-specific components in dedicated folders
3. Use TypeScript interfaces for all props
4. Include proper accessibility attributes (aria-labels, roles, etc.)

### Styling
1. Use Tailwind CSS utility classes
2. Leverage shadcn/ui components for consistency
3. Follow the design system defined in `styles/`
4. Ensure responsive design at all breakpoints

### State Management
1. Use server components for data fetching when possible
2. Limit client components to interactive elements
3. Use React Context for global state
4. Implement proper error boundaries

## Troubleshooting

### Common Issues
- **Module not found**: Ensure dependencies are installed with `npm install`
- **Environment variables not loaded**: Check `.env.local` file exists and is properly formatted
- **TypeScript errors**: Run `npm run type-check` to identify issues
- **Authentication not working**: Verify AUTH_SECRET is set in environment variables

### Performance Optimization
- Check bundle size with `npm run build -- --analyze`
- Verify server components are being used appropriately
- Monitor network requests for unnecessary API calls