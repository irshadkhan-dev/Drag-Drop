import { Trash2 } from "lucide-react";

const TaskItems = ({
  title,
  handleDelete,
  index,
  setActiveCard,
  category,
}: {
  title: string;
  handleDelete: (args: any) => void;
  index: number;
  setActiveCard: (args: any) => void;
  category: string;
}) => {
  return (
    <div
      draggable
      onDragStart={() => setActiveCard(index)}
      onDragEnd={() => setActiveCard(null)}
      className={`w-full rounded-lg border border-neutral-100   p-4 flex justify-between items-center  cursor-grab  ${
        category === "todo"
          ? "bg-indigo-500"
          : category === "doing"
          ? "bg-orange-500"
          : category === "done"
          ? "bg-lime-500"
          : null
      }`}
    >
      <span className="text-neutral-100">{title}</span>
      <button onClick={() => handleDelete(index)}>
        <Trash2 className="w-5 h-5 hover:text-red-500" />
      </button>
    </div>
  );
};

export default TaskItems;
