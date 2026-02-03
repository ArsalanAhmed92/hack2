import { z } from 'zod';

// Login form validation schema
export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  rememberMe: z.boolean().optional(),
});

// Signup form validation schema
export const signupSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

// Task form validation schema
export const taskSchema = z.object({
  title: z.string().min(1, 'Title is required').max(200, 'Title must be less than 200 characters'),
  description: z.string().max(1000, 'Description must be less than 1000 characters').optional(),
  priority: z.enum(['low', 'medium', 'high'], {
    required_error: 'Priority is required',
    invalid_type_error: 'Priority must be low, medium, or high',
  }),
  status: z.enum(['pending', 'in-progress', 'completed'], {
    required_error: 'Status is required',
    invalid_type_error: 'Status must be pending, in-progress, or completed',
  }),
  dueDate: z.coerce.date().optional(),
  category: z.string().optional(),
  tags: z.array(z.string()).optional(),
});

// Type exports
export type LoginFormData = z.infer<typeof loginSchema>;
export type SignupFormData = z.infer<typeof signupSchema>;
export type TaskFormData = z.infer<typeof taskSchema>;