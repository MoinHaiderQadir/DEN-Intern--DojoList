export default function TodoItem({ task, onToggle, onDelete }) {
    return (
      <li className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-lg shadow-sm">
        <span
          onClick={() => onToggle(task.id)}
          className={`flex-1 cursor-pointer ${
            task.completed ? "line-through text-gray-400" : ""
          }`}
        >
          {task.text}
        </span>
        <button
          onClick={() => onDelete(task.id)}
          className="text-red-500 hover:text-red-700 ml-2"
        >
          ✕
        </button>
      </li>
    );
  }
  