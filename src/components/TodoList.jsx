import TodoItem from "./TodoItem";

export default function TodoList({ tasks, onToggle, onDelete, onUpdate }) {
  if (tasks.length === 0) {
    return <p className="text-gray-500 text-center">No tasks yet 🚀</p>;
  }

  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </ul>
  );
}
