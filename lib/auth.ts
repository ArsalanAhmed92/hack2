import { BetterAuthClient, createAuthClient } from 'better-auth/client';

// Initialize Better Auth client
const authClient: BetterAuthClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
  // Additional configuration as needed
});

export default authClient;

// Export authentication utilities
export const signIn = async (email: string, password: string) => {
  try {
    // Sign in implementation with Better Auth
    const response = await fetch('/api/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Sign in failed');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Sign in error:', error);
    throw error;
  }
};

export const signUp = async (email: string, password: string, name: string) => {
  try {
    // Sign up implementation with Better Auth
    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, name }),
    });

    if (!response.ok) {
      throw new Error('Sign up failed');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Sign up error:', error);
    throw error;
  }
};

export const signOut = async () => {
  try {
    // Sign out implementation with Better Auth
    const response = await fetch('/api/auth/signout', {
      method: 'POST',
    });

    if (!response.ok) {
      throw new Error('Sign out failed');
    }

    return response.json();
  } catch (error) {
    console.error('Sign out error:', error);
    throw error;
  }
};