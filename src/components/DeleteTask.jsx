import React from "react";

const DeleteTask = ({ deleteTask, id }) => {
  return (
    <div>
      <div
        onClick={() => {
          deleteTask(id);
        }}
      >
        <button className="  text-[14px] font-[400] leading-normal w-20 h-7 rounded-md text-red-800">
          <p className="">DELETE</p>
        </button>
      </div>
    </div>
  );
};

export default DeleteTask;
