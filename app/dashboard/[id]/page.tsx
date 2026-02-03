import { TaskModal } from '@/components/tasks/task-modal';

// This would normally fetch the task by ID from an API
// For now, we'll use mock data
const mockTask = {
  id: '1',
  title: 'Complete project proposal',
  description: 'Finish the project proposal document for the client meeting',
  status: 'pending',
  priority: 'high',
  dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 3 days from now in YYYY-MM-DD format
  createdAt: new Date(),
  updatedAt: new Date(),
  userId: 'user1',
  category: 'Work',
};

export default function EditTaskPage() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Edit Task</h1>
      <TaskModal task={mockTask} />
    </div>
  );
}