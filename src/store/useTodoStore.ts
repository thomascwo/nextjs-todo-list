import { nanoid } from "nanoid";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const CACHE_KEY = "todo_tasks";

type State = {
  tasks: Task[];
};

type Action = {
  setTasks: (tasks: Task[]) => void;
  addTask: (text: string) => void;
  deleteTask: (task: Task) => void;
  editTask: (task: Task) => void;
  toggleTaskCompleted: (task: Task) => void;
};

export const useTodoStore = create(
  persist<State & Action>(
    (set, get) => ({
      tasks: [],
      setTasks: (tasks) => {
        set(() => ({ tasks: tasks }));
      },
      addTask: (text: string) => {
        const newTask: Task = {
          id: nanoid(),
          text: text,
          completed: false,
          createdAt: Date.now(),
          updatedAt: Date.now(),
        };
        set((state) => ({
          tasks: [newTask, ...state.tasks],
        }));
      },
      deleteTask: (task: Task) => {
        set((state) => ({
          tasks: state.tasks.filter((t) => t.id !== task.id),
        }));
      },
      editTask: (task: Task) => {
        task.updatedAt = Date.now();
        set((state) => ({
          tasks: state.tasks.map((t) => (t.id === task.id ? task : t)),
        }));
      },
      toggleTaskCompleted: (task: Task) => {
        task.completed = !task.completed;
        get().editTask(task);
      },
    }),
    { name: CACHE_KEY },
  ),
);
