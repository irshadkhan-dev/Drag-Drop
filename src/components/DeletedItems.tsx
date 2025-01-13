import { Trash } from "lucide-react";

const DeletedItems = ({
  title,
  handleUndo,
  index,
  setActiveCard,
  category,
  handleHardDelete,
}: {
  title: string;
  handleUndo: (args: any) => void;
  index: number;
  setActiveCard: (args: any) => void;
  category: string;
  handleHardDelete: (args: any) => void;
}) => {
  return (
    <div
      onDragStart={() => setActiveCard(index)}
      onDragEnd={() => setActiveCard(null)}
      className={`w-full rounded-lg border border-neutral-100   p-3 flex justify-between items-center  ${
        category === "todo"
          ? "bg-indigo-500"
          : category === "doing"
          ? "bg-orange-500"
          : category === "done"
          ? "bg-lime-500"
          : "bg-red-500"
      }`}
    >
      <div className="flex items-center w-full justify-between">
        <span className="text-neutral-100">{title}</span>
        <div className="flex flex-col gap-2 items-center">
          <button
            onClick={() => handleUndo(index)}
            className="text-gray-100 text-xs border rounded-xl px-1 border-gray-200 shadow-sm"
          >
            Undo
          </button>
          <button
            onClick={() => handleHardDelete(index)}
            className="text-gray-100 text-xs px-1 border-gray-200"
          >
            <Trash className="h-5 w-5 flex-shrink-0 hover:text-red-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeletedItems;
