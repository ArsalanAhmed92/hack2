'use client';

import { useState, useEffect } from 'react';
import { Task } from '@/lib/types';
import { TaskCard } from './task-card';
import { EmptyState } from './empty-state';
import { LoadingSpinner } from '../common/loading-spinner';

// Mock data for now - in a real app this would come from an API
const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Complete project proposal',
    description: 'Finish the project proposal document for the client meeting',
    status: 'pending',
    priority: 'high',
    dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: 'user1',
    category: 'Work',
  },
  {
    id: '2',
    title: 'Buy groceries',
    description: 'Milk, eggs, bread, fruits, vegetables',
    status: 'pending',
    priority: 'medium',
    dueDate: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000), // 1 day from now
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: 'user1',
    category: 'Personal',
  },
  {
    id: '3',
    title: 'Schedule dentist appointment',
    description: 'Call the dental clinic to schedule a checkup',
    status: 'completed',
    priority: 'low',
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: 'user1',
    category: 'Health',
  },
];

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to fetch tasks
    setTimeout(() => {
      setTasks(mockTasks);
      setFilteredTasks(mockTasks);
      setIsLoading(false);
    }, 500);
  }, []);

  const handleTaskComplete = (task: Task) => {
    // In a real app, this would update the task via API
    const updatedTasks = tasks.map(t =>
      t.id === task.id ? { ...t, status: t.status === 'completed' ? 'pending' : 'completed' } : t
    );
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  const handleTaskEdit = (task: Task) => {
    // In a real app, this would open an edit modal
    console.log('Editing task:', task);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <LoadingSpinner />
      </div>
    );
  }

  if (filteredTasks.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="space-y-4">
      {filteredTasks.map(task => (
        <TaskCard
          key={task.id}
          task={task}
          onEdit={handleTaskEdit}
          onComplete={handleTaskComplete}
        />
      ))}
    </div>
  );
}