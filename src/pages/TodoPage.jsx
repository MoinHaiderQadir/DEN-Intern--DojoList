import { useState, useEffect } from "react";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

export default function TodoPage() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTask = (id, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">📝 To-Do List</h1>
        <TodoInput onAdd={addTask} />
        <TodoList
          tasks={tasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
          onUpdate={updateTask}
        />
      </div>
    </div>
  );
}
