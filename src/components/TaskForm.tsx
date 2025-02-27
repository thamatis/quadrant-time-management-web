"use client";

import { useState } from "react";

type QuadrantType = "urgent-important" | "not-urgent-important" | "urgent-not-important" | "not-urgent-not-important";

interface TaskFormProps {
  onAddTask: (task: string, quadrant: QuadrantType) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [task, setTask] = useState("");
  const [quadrant, setQuadrant] = useState<QuadrantType>("urgent-important");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onAddTask(task, quadrant);
        setTask("");
      }}
    >
      <input value={task} onChange={(e) => setTask(e.target.value)} />
      <select value={quadrant} onChange={(e) => setQuadrant(e.target.value as QuadrantType)}>
        <option value="urgent-important">Urgent & Important</option>
        <option value="not-urgent-important">Not Urgent & Important</option>
        <option value="urgent-not-important">Urgent & Not Important</option>
        <option value="not-urgent-not-important">Not Urgent & Not Important</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
