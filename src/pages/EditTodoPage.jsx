import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditTodoPage({ tasks, setTasks }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const task = tasks.find((t) => t.id === Number(id));
  const [text, setText] = useState(task?.text || "");

  const handleSave = () => {
    setTasks(
      tasks.map((t) => (t.id === Number(id) ? { ...t, text } : t))
    );
    navigate("/"); // go back to TodoPage
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-xl font-bold mb-4 text-center">✏️ Edit Todo</h1>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleSave}
          className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          Save
        </button>
      </div>
    </div>
  );
}
