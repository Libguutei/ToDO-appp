"use client";

import Button from "@/components/Button";
import DeleteTask from "@/components/DeleteTask";
import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [datalist, setDatalist] = useState([
    { text: "All", isActiveted: false },
    { text: "Active", isActiveted: false },
    { text: "Completed", isActiveted: false },
  ]);
  const deleteTask = (id) => {
    if (window.alert("Neeree yu") === true) {
    }
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };
  const handleAdd = () => {
    if (inputValue === "") return;
    setTasks([
      { text: inputValue, completed: false, id: Date.now() },
      ...tasks,
    ]);
    setInputValue("");
  };
  const isActive = (index) => {
    const updatedDatalist = datalist.map((item, i) => {
      return {
        ...item,
        isActiveted: i === index,
      };
    });

    setDatalist(updatedDatalist);
  };

  const toggleCheck = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };
  const currentFilter =
    datalist.find((item) => item.isActiveted)?.text || "All";

  const filteredTasks = tasks.filter((task) => {
    if (currentFilter === "Active") return !task.completed;
    if (currentFilter === "Completed") return task.completed;
    return true;
  });
  return (
    <div className="min-h-screen bg-[#F4F4F4] flex items-center justify-center p-4 font-sans text-gray-900">
      <div className="bg-white shadow-sm rounded-[32px] p-10 w-full max-w-[450px]">
        <h1 className="text-center text-3xl font-bold text-black mb-6">
          To-Do list
        </h1>

        <div className="flex gap-2 mb-6">
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 border border-gray-200 rounded-xl px-4 py-2.5 outline-none text-gray-600"
          />
          <button
            onClick={handleAdd}
            className="bg-[#4F83F1] text-white px-6 py-2.5 rounded-xl font-medium"
          >
            Add
          </button>
        </div>
        <div className="flex gap-2 mb-10">
          {datalist.map((element, index) => (
            <Button
              key={index}
              onButtonClick={() => isActive(index)}
              isActiveted={element.isActiveted}
              allButton={element.text}
            />
          ))}
        </div>
        <div className="min-h-[200px]">
          {tasks.length === 0 ? (
            <div className="text-center text-gray-400 font-normal text-lg pt-10">
              No tasks yet. Add one above!
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {filteredTasks.map((task, index) => (
                <div
                  className="flex items-center justify-between group bg-gray-100 rounded-md p-2"
                  key={task.id}
                >
                  <div className="flex items-center gap-4">
                    <div
                      onClick={() => toggleCheck(index)}
                      className={`w-6 h-6 flex items-center justify-center cursor-pointer border-2 rounded-md 
                        ${task.completed ? "bg-[#4F80FF] border-[#4F80FF]" : "bg-white border-gray-300"}`}
                    >
                      {task.completed && (
                        <svg
                          width="12"
                          height="10"
                          viewBox="0 0 14 13"
                          fill="none"
                        >
                          <path
                            d="M1.06067 6.42947L5.06067 10.4295L12.5607 0.929474"
                            stroke="white"
                            strokeWidth="2.5"
                          />
                        </svg>
                      )}
                    </div>
                    <span
                      className={`text-[16px] ${task.completed ? "line-through text-gray-300" : "text-gray-700"}`}
                    >
                      {task.text}
                    </span>
                  </div>
                  <DeleteTask id={task.id} deleteTask={deleteTask} />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="text-center text-gray-400 text-sm mt-12">
          Powered by{" "}
          <span className="text-[#4F80FF] font-medium">Pinecone academy</span>
        </div>
      </div>
    </div>
  );
}
