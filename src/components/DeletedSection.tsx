import React from "react";

import { LucideProps } from "lucide-react";
import DropArea from "./DropArea";
import DeletedItems from "./DeletedItems";
import { TaskData } from "../App";

export type Task = {
  task: string;
  category: string;
};

const DeletedSections = ({
  title,
  category,
  categoryIcon: Icon,
  tasks,
  handleUndo,
  setActiveCard,
  onDrop,
  handleHardDelete,
}: {
  title: string;
  category: string;
  categoryIcon: React.ComponentType<LucideProps>;
  tasks: { task: TaskData; index: number }[];
  handleUndo: (args: any) => void;
  setActiveCard: (args: any) => void;
  onDrop: (...args: any[]) => void;
  handleHardDelete: (args: any) => void;
}) => {
  return (
    <section
      className={`w-full px-4 border-[3px] max-md:mb-16 border-dashed overflow-y-scroll no-scrollbar border-slate-600 col-span-full md:col-span-1 p-4 rounded-md h-[50vh] md:h-[70vh]`}
    >
      <div className="flex flex-col space-y-3">
        <div className="">
          <div
            className={`flex flex-row items-center space-x-2  ${
              category === "todo"
                ? "text-indigo-500"
                : category === "doing"
                ? "text-orange-500"
                : category === "done"
                ? "text-lime-500"
                : "text-red-500"
            }`}
          >
            <Icon className="w-6 h-6 flex-shrink-0" />
            <span className="text-2xl font-bold">{title}</span>
          </div>
          <DropArea onDrop={onDrop} category={category} index={0} />
        </div>

        {tasks.map((task, index) => (
          <React.Fragment key={index}>
            <DeletedItems
              title={task.task.task}
              handleUndo={handleUndo}
              index={index}
              setActiveCard={setActiveCard}
              category={task.task.category}
              handleHardDelete={handleHardDelete}
            />

            <DropArea onDrop={onDrop} category={category} index={index + 1} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default DeletedSections;
