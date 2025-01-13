import React from "react";
import TaskItems from "./TaskItems";
import { TaskData } from "../App";
import { LucideProps } from "lucide-react";
import DropArea from "./DropArea";

export type Task = {
  task: string;
  category: string;
};

const TaskSections = ({
  title,
  category,
  categoryIcon: Icon,
  tasks,
  handleDelete,
  setActiveCard,
  onDrop,
}: {
  title: string;
  category: string;
  categoryIcon: React.ComponentType<LucideProps>;
  tasks: TaskData[];
  handleDelete: (args: any) => void;
  setActiveCard: (args: any) => void;
  onDrop: (...args: any[]) => void;
}) => {
  return (
    <section
      className={`w-full px-4 border-[3px] border-dashed overflow-y-scroll no-scrollbar border-slate-600 col-span-full md:col-span-1 p-4 rounded-md h-[50vh] md:h-[70vh]`}
    >
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-6">
          <div
            className={`flex flex-row items-center space-x-2  ${
              category === "todo"
                ? "text-indigo-500"
                : category === "doing"
                ? "text-orange-500"
                : "text-lime-500"
            }`}
          >
            <Icon className="w-6 h-6 flex-shrink-0" />
            <span className="text-2xl font-bold">{title}</span>
          </div>
          <DropArea onDrop={onDrop} category={category} index={0} />
        </div>

        {tasks.map(
          (task, index) =>
            task.category === category && (
              <React.Fragment key={index}>
                <TaskItems
                  title={task.task}
                  handleDelete={handleDelete}
                  index={index}
                  setActiveCard={setActiveCard}
                  category={category}
                />

                <DropArea
                  onDrop={onDrop}
                  category={category}
                  index={index + 1}
                />
              </React.Fragment>
            )
        )}
      </div>
    </section>
  );
};

export default TaskSections;
