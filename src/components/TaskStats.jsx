"use client";

export default function TaskStats({ total, completed, onClear }) {
  return (
    <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100">
      <p className="text-sm text-gray-400 font-medium">
        {total > 0
          ? `${completed} of ${total} tasks completed`
          : "No tasks yet"}
      </p>
      {completed > 0 && (
        <button
          onClick={onClear}
          className="text-xs text-red-400 hover:text-red-500 font-bold uppercase tracking-wider transition-colors"
        >
          Clear Completed
        </button>
      )}
    </div>
  );
}
