import { redirect } from 'next/navigation';

export default function HomePage() {
  // Redirect to login page if not authenticated
  // In a real app, we would check authentication here
  redirect('/login');
}