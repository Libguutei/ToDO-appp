"use client";
import DeleteTask from "./DeleteTask";

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className="flex items-center justify-between group bg-gray-100 rounded-md p-2 mb-3 transition-all hover:bg-gray-200">
      <div className="flex items-center gap-4">
        <div
          onClick={() => onToggle(task.id)}
          className={`w-6 h-6 flex items-center justify-center cursor-pointer border-2 rounded-md transition-all 
            ${task.completed ? "bg-[#4F80FF] border-[#4F80FF]" : "bg-white border-gray-300"}`}
        >
          {task.completed && (
            <svg width="12" height="10" viewBox="0 0 14 13" fill="none">
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
      {/* Чиний DeleteTask-ийг энд ашиглаж байна */}
      <DeleteTask id={task.id} deleteTask={onDelete} />
    </div>
  );
}
