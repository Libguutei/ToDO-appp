"use client";
import { useState } from "react";
import Button from "@/components/Button";
import TaskInput from "@/components/TaskInput";
import TaskItem from "@/components/TaskItem";
import TaskStats from "@/components/TaskStats";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [datalist, setDatalist] = useState([
    { text: "All", isActiveted: true },
    { text: "Active", isActiveted: false },
    { text: "Completed", isActiveted: false },
  ]);

  const handleAdd = () => {
    if (inputValue.trim() === "") return;
    setTasks([
      { text: inputValue, completed: false, id: Date.now() },
      ...tasks,
    ]);
    setInputValue("");
  };
  const deleteTask = (id) => {
    if (window.confirm("Shaalaa shu?")) {
      setTasks(tasks.filter((t) => t.id !== id));
    }
  };
  const toggleCheck = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  };
  const isActive = (index) => {
    setDatalist(
      datalist.map((item, i) => ({ ...item, isActiveted: i === index })),
    );
  };
  const currentFilter =
    datalist.find((item) => item.isActiveted)?.text || "All";
  const filteredTasks = tasks.filter((t) => {
    if (currentFilter === "Active") return !t.completed;
    if (currentFilter === "Completed") return t.completed;
    return true;
  });

  return (
    <div className="min-h-screen bg-[#F4F4F4] flex items-center justify-center p-4">
      <div className="bg-white shadow-sm rounded-[32px] p-10 w-full max-w-[450px]">
        <h1 className="text-center text-3xl font-bold mb-6 text-black">
          To-Do list
        </h1>

        <TaskInput
          value={inputValue}
          onChange={setInputValue}
          onAdd={handleAdd}
        />
        <div className="flex gap-2 mb-10">
          {datalist.map((el, i) => (
            <Button
              key={i}
              onButtonClick={() => isActive(i)}
              isActiveted={el.isActiveted}
              allButton={el.text}
            />
          ))}
        </div>
        <div className="min-h-[200px] flex flex-col gap-2">
          {tasks.length === 0 ? (
            <div className="text-center text-gray-400 pt-10">No tasks yet.</div>
          ) : (
            filteredTasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={toggleCheck}
                onDelete={deleteTask}
              />
            ))
          )}
        </div>
        <TaskStats
          total={tasks.length}
          completed={tasks.filter((t) => t.completed).length}
          onClear={() => setTasks(tasks.filter((t) => !t.completed))}
        />
        <div className="text-center text-gray-400 text-sm mt-12">
          Powered by{" "}
          <span className="text-[#4F80FF] font-medium">Pinecone academy</span>
        </div>
      </div>
    </div>
  );
}
