# Frontend Data Model: Evolution of Todo Phase II

## Task Entity
```typescript
interface Task {
  id: string;
  title: string;
  description?: string;
  status: 'pending' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  dueDate?: Date;
  createdAt: Date;
  updatedAt: Date;
  userId: string; // Associated user
  category?: string;
  tags?: string[];
}
```

### Validation Rules:
- `title`: Required, maximum 200 characters
- `description`: Optional, maximum 1000 characters
- `status`: Enum with allowed values
- `priority`: Enum with allowed values
- `dueDate`: Optional, must be in the future
- `createdAt`: Auto-generated on creation
- `updatedAt`: Auto-generated on update

## User Entity
```typescript
interface User {
  id: string;
  email: string;
  name?: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
  preferences: UserPreferences;
}
```

### Validation Rules:
- `email`: Required, valid email format
- `name`: Optional, maximum 100 characters
- `preferences`: Object with user-specific settings

## UserPreferences Entity
```typescript
interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  language: string; // Default 'en'
  notifications: boolean;
  timezone: string; // Default to browser timezone
}
```

## Filter Entity
```typescript
interface TaskFilters {
  status?: ('pending' | 'in-progress' | 'completed')[];
  priority?: ('low' | 'medium' | 'high')[];
  searchQuery?: string;
  dueDateRange?: { start: Date; end: Date };
  category?: string;
  sortBy?: 'dueDate' | 'priority' | 'createdAt' | 'updatedAt';
  sortOrder?: 'asc' | 'desc';
}
```

## API Response Types
```typescript
interface ApiResponse<T> {
  data?: T;
  error?: ApiError;
  success: boolean;
  message?: string;
}

interface ApiError {
  code: string;
  message: string;
  details?: Record<string, any>;
}

interface PaginatedResponse<T> extends ApiResponse<T[]> {
  meta: {
    page: number;
    pageSize: number;
    totalCount: number;
    totalPages: number;
  };
}
```

## Form Validation Schemas
```typescript
interface LoginForm {
  email: string;
  password: string;
  rememberMe?: boolean;
}

interface SignupForm extends LoginForm {
  name: string;
  confirmPassword: string;
}

interface TaskForm {
  title: string;
  description?: string;
  priority: 'low' | 'medium' | 'high';
  status: 'pending' | 'in-progress' | 'completed';
  dueDate?: Date;
  category?: string;
  tags?: string[];
}
```

## State Management Types
```typescript
interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

interface TaskState {
  tasks: Task[];
  filteredTasks: Task[];
  selectedTask: Task | null;
  isLoading: boolean;
  error: string | null;
  filters: TaskFilters;
}
```