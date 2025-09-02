import { useState } from "react";

export default function TodoItem({ task, onToggle, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleSave = () => {
    if (editText.trim() === "") return;
    onUpdate(task.id, editText.trim());
    setIsEditing(false);
  };

  return (
    <li className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-lg shadow-sm">
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSave()}
          className="flex-1 px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      ) : (
        <span
          onClick={() => onToggle(task.id)}
          className={`flex-1 cursor-pointer ${
            task.completed ? "line-through text-gray-400" : ""
          }`}
        >
          {task.text}
        </span>
      )}

      <div className="flex gap-2 ml-2">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="text-green-500 hover:text-green-700"
          >
            💾
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="text-blue-500 hover:text-blue-700"
          >
            ✏️
          </button>
        )}
        <button
          onClick={() => onDelete(task.id)}
          className="text-red-500 hover:text-red-700"
        >
          ✕
        </button>
      </div>
    </li>
  );
}
