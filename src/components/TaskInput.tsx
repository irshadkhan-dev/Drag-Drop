import React, { useState } from "react";

const TaskInput = ({ setTasks }: { setTasks: React.Dispatch<any> }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    category: "todo",
  });

  const handleSelect = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setTaskData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddTask = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setTasks((prev: any) => {
      return [...prev, taskData];
    });
    setTaskData({
      task: "",
      category: "todo",
    });
  };

  return (
    <div className="flex flex-row space-x-4 items-center p-4">
      <div className="flex w-96 ">
        <input
          placeholder="Enter your task"
          className=" py-2 px-2 outline-none w-full bg-black text-gray-100 border-2 border-indigo-500 rounded-md"
          onChange={handleSelect}
          value={taskData.task}
          name="task"
        />
      </div>

      <div className="">
        <select
          name="category"
          value={taskData.category}
          className="outline-none p-2 rounded-md bg-black text-gray-50 border border-indigo-500"
          onChange={handleSelect}
        >
          <option value="todo">Todo</option>
          <option value="doing">Doing</option>
          <option value="done">Done</option>
        </select>
      </div>

      <button
        className="bg-indigo-500 text-gray-100 rounded-lg p-2 text-center"
        onClick={handleAddTask}
      >
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;
