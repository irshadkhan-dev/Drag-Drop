import { useEffect, useState } from "react";
import "./App.css";
import TaskInput from "./components/TaskInput";
import TaskSections from "./components/TaskSections";
import { CheckCircle, Stars, Target, UndoDotIcon } from "lucide-react";
import DeletedSections from "./components/DeletedSection";

export type TaskData = {
  task: string;
  category: string;
};

function App() {
  //this is the state for the item which is being dragged
  const [activeCard, setActiveCard] = useState(null);

  //state storing all the todos
  const [task, setTasks] = useState<TaskData[]>(() => {
    const oldTasks = localStorage.getItem("tasks");
    return oldTasks ? JSON.parse(oldTasks) : [];
  });

  //state storing all the delted todos
  const [deletedTasks, setDeletedTasks] = useState<
    { task: TaskData; index: number }[]
  >(() => {
    const savedDeletedTasks = localStorage.getItem("deletedTasks");
    return savedDeletedTasks ? JSON.parse(savedDeletedTasks) : [];
  });

  //setting up the tasks && deleted to localstorage when ever dependency array changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task));
  }, [task]);

  useEffect(() => {
    localStorage.setItem("deletedTasks", JSON.stringify(deletedTasks));
  }, [deletedTasks]);

  //function for deleting the task from todos section and adding them in delete section so user can undo or restore the todos
  const handleDeleteTask = (taskIndex: number) => {
    const deletedTask = task[taskIndex];
    const newTask = task.filter((_, index) => index !== taskIndex);
    setTasks(newTask);

    setDeletedTasks((prev) => [
      ...prev,
      { task: deletedTask, index: taskIndex },
    ]);
  };

  //function for deleting todos permanently
  const handleHardDelete = (taskIndex: number) => {
    const newTask = deletedTasks.filter((_, index) => index !== taskIndex);
    setDeletedTasks(newTask);
  };

  //deleting from the task and storing in delete section so user can get back their todos
  const handleUndoDelete = (index: number) => {
    const deletedTask = deletedTasks[index];
    if (!deletedTask) return;

    const updatedTask = [...task];
    updatedTask.splice(deletedTask.index, 0, deletedTask.task);
    setTasks(updatedTask);

    setDeletedTasks((prev) => prev.filter((_, i) => i !== index));
  };

  //OnDrop function for delete task
  const onDropDelete = () => {
    if (activeCard === null || activeCard === undefined) return;

    const taskToDelete = task[activeCard];
    const updatedTasks = task.filter((_, index) => index !== activeCard);

    setTasks(updatedTasks);
    setDeletedTasks((prev) => [
      ...prev,
      { task: taskToDelete, index: activeCard },
    ]);
  };

  //OnDrop function for three todo category
  const onDropOther = (category: string, position: number) => {
    if (activeCard === null || activeCard === undefined) return;

    let taskToMove: TaskData | undefined;
    let sourceList: TaskData[];

    taskToMove = task[activeCard];
    sourceList = task;

    if (!taskToMove) return;

    const updatedTasks = sourceList.filter((_, index) => index !== activeCard);
    updatedTasks.splice(position, 0, { ...taskToMove, category });
    setTasks(updatedTasks);
  };

  return (
    <div className="w-full h-screen max-w-7xl mx-auto flex flex-col space-y-10">
      <div className="w-full flex items-center justify-center">
        <TaskInput setTasks={setTasks} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-x-10">
        <TaskSections
          category="todo"
          title="To-Do"
          tasks={task}
          categoryIcon={Target}
          handleDelete={handleDeleteTask}
          setActiveCard={setActiveCard}
          onDrop={onDropOther}
        />
        <TaskSections
          category="doing"
          title="Doing"
          tasks={task}
          categoryIcon={Stars}
          handleDelete={handleDeleteTask}
          setActiveCard={setActiveCard}
          onDrop={onDropOther}
        />
        <TaskSections
          category="done"
          title="Done"
          tasks={task}
          categoryIcon={CheckCircle}
          handleDelete={handleDeleteTask}
          setActiveCard={setActiveCard}
          onDrop={onDropOther}
        />

        <DeletedSections
          category="deleted"
          title="Deleted Todo's"
          tasks={deletedTasks}
          categoryIcon={UndoDotIcon}
          handleUndo={handleUndoDelete}
          setActiveCard={setActiveCard}
          onDrop={onDropDelete}
          handleHardDelete={handleHardDelete}
        />
      </div>
    </div>
  );
}

export default App;
