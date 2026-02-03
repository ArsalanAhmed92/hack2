import { Task } from '@/lib/types';
import { formatDate } from '@/lib/utils';

interface TaskCardProps {
  task: Task;
  onEdit?: (task: Task) => void;
  onComplete?: (task: Task) => void;
}

export function TaskCard({ task, onEdit, onComplete }: TaskCardProps) {
  const getPriorityClass = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'completed':
        return 'line-through text-gray-400';
      case 'in-progress':
        return 'text-blue-600';
      default:
        return 'text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div className="flex-1 min-w-0">
          <h3 className={`text-lg font-medium truncate ${getStatusClass(task.status)}`}>
            {task.title}
          </h3>
          {task.description && (
            <p className="mt-1 text-sm text-gray-500 truncate">{task.description}</p>
          )}
        </div>
        <span className={`ml-2 px-2 py-1 text-xs font-medium rounded-full ${getPriorityClass(task.priority)}`}>
          {task.priority}
        </span>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <div className="text-xs text-gray-500">
          {task.dueDate && (
            <span>Due: {formatDate(new Date(task.dueDate))}</span>
          )}
        </div>

        <div className="flex space-x-2">
          {onComplete && (
            <button
              onClick={() => onComplete(task)}
              className={`text-xs px-2 py-1 rounded ${
                task.status === 'completed'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {task.status === 'completed' ? 'Completed' : 'Mark Complete'}
            </button>
          )}

          {onEdit && (
            <button
              onClick={() => onEdit(task)}
              className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded hover:bg-blue-200"
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}