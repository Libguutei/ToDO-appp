"use client";

export default function TaskInput({ value, onChange, onAdd }) {
  return (
    <div className="flex gap-2 mb-6">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onAdd()}
        placeholder="Add a new task..."
        className="flex-1 border border-gray-200 rounded-xl px-4 py-2.5 outline-none text-gray-600 focus:border-[#4F80FF]"
      />
      <button
        onClick={onAdd}
        className="bg-[#4F83F1] text-white px-6 py-2.5 rounded-xl font-medium active:scale-95 transition-all"
      >
        Add
      </button>
    </div>
  );
}
