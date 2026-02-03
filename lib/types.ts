// Task entity representing a user's to-do item
export interface Task {
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

// User entity representing an authenticated user
export interface User {
  id: string;
  email: string;
  name?: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
  preferences: UserPreferences;
}

// User preferences entity
export interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  language: string; // Default 'en'
  notifications: boolean;
  timezone: string; // Default to browser timezone
}

// Task filters entity
export interface TaskFilters {
  status?: ('pending' | 'in-progress' | 'completed')[];
  priority?: ('low' | 'medium' | 'high')[];
  searchQuery?: string;
  dueDateRange?: { start: Date; end: Date };
  category?: string;
  sortBy?: 'dueDate' | 'priority' | 'createdAt' | 'updatedAt';
  sortOrder?: 'asc' | 'desc';
}

// API response types
export interface ApiResponse<T> {
  data?: T;
  error?: ApiError;
  success: boolean;
  message?: string;
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, any>;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  meta: {
    page: number;
    pageSize: number;
    totalCount: number;
    totalPages: number;
  };
}

// Form interfaces
export interface LoginForm {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface SignupForm extends LoginForm {
  name: string;
  confirmPassword: string;
}

export interface TaskForm {
  title: string;
  description?: string;
  priority: 'low' | 'medium' | 'high';
  status: 'pending' | 'in-progress' | 'completed';
  dueDate?: Date;
  category?: string;
  tags?: string[];
}

// State management types
export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface TaskState {
  tasks: Task[];
  filteredTasks: Task[];
  selectedTask: Task | null;
  isLoading: boolean;
  error: string | null;
  filters: TaskFilters;
}