"use client";

import { useState } from "react";

interface TaskFormProps {
  onAddTask: (task: string, quadrant: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [task, setTask] = useState("");
  const [quadrant, setQuadrant] = useState("urgent-important");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!task.trim()) return;
    onAddTask(task, quadrant);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white p-4 rounded-lg shadow-md">
      <input
        type="text"
        placeholder="Enter task name"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="border p-2 rounded-md focus:outline-blue-500"
      />
      <select
        value={quadrant}
        onChange={(e) => setQuadrant(e.target.value)}
        className="border p-2 rounded-md"
      >
        <option value="urgent-important">Urgent & Important</option>
        <option value="not-urgent-important">Not Urgent but Important</option>
        <option value="urgent-not-important">Urgent but Not Important</option>
        <option value="not-urgent-not-important">Not Urgent & Not Important</option>
      </select>
      <button
        type="submit"
        className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
      >
        Save Task
      </button>
    </form>
  );
};

export default TaskForm;
