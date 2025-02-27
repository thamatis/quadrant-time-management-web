"use client";

import { useState } from "react";
import TaskForm from "@/components/TaskForm";
import Quadrant from "@/components/Quadrant";

export default function Home() {
  const [tasks, setTasks] = useState({
    "urgent-important": [] as string[],
    "not-urgent-important": [] as string[],
    "urgent-not-important": [] as string[],
    "not-urgent-not-important": [] as string[],
  });

  type QuadrantType = "urgent-important" | "not-urgent-important" | "urgent-not-important" | "not-urgent-not-important";

  const addTask = (task: string, quadrant: QuadrantType) => {
    setTasks((prev) => ({
      ...prev,
      [quadrant]: [...prev[quadrant], task],
    }));
  };
  
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">4 Quadrant Task Manager</h1>
      <TaskForm onAddTask={addTask} />

      {/* Grid Layout for Quadrants */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        <Quadrant title="Urgent & Important" tasks={tasks["urgent-important"]} />
        <Quadrant title="Not Urgent but Important" tasks={tasks["not-urgent-important"]} />
        <Quadrant title="Urgent but Not Important" tasks={tasks["urgent-not-important"]} />
        <Quadrant title="Not Urgent & Not Important" tasks={tasks["not-urgent-not-important"]} />
      </div>
    </div>
  );
}
