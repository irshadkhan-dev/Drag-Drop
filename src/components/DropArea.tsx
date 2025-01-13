import { useState } from "react";

const DropArea = ({
  category,
  index,
  onDrop,
}: {
  category: string;
  index: number;

  onDrop: (...args: any[]) => void;
}) => {
  const [showDrop, setShowDrop] = useState(false);

  return (
    <div
      className={`${
        showDrop
          ? "w-full border-[3px] border-dashed border-indigo-600 p-4 rounded-lg opacity-100 transition-all backdrop-blur-lg mt-4"
          : "opacity-0"
      }`}
      onDragEnter={() => setShowDrop(true)}
      onDragLeave={() => setShowDrop(false)}
      onDrop={() => {
        onDrop(category, index);
        setShowDrop(false);
      }}
      onDragOver={(e) => e.preventDefault()}
    >
      DropArea
    </div>
  );
};

export default DropArea;
