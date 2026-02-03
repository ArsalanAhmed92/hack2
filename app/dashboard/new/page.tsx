import { TaskModal } from '@/components/tasks/task-modal';

export default function NewTaskPage() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Create New Task</h1>
      <TaskModal />
    </div>
  );
}