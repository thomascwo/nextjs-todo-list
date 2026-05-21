"use client";
import LanguageSwitcher from "@/src/components/language-switcher";
import MyLink from "@/src/components/my-link";
import MyTextArea from "@/src/components/my-textarea";
import TaskCard from "@/src/components/task-card";
import { Info } from "@/src/lib/info";
import { useTodoStore } from "@/src/store/useTodoStore";
import { Button } from "@heroui/react";
import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function () {
  const { t } = useTranslation();

  const { tasks, addTask, deleteTask, editTask, toggleTaskCompleted } =
    useTodoStore();

  const incompletedTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);
  const sortedTasks = [...incompletedTasks, ...completedTasks];

  const [input, setInput] = useState<string>("");

  const onClickAddTask = () => {
    const text = input.trim();
    if (text === "") return;
    addTask(text);
    setInput("");
  };

  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50">
      <main className="flex w-full max-w-3xl flex-1 flex-col">
        <div
          className={clsx(
            "bg-red-600 flex flex-col items-stretch justify-between",
            "gap-2 px-8 py-4 md:gap-4 md:px-16 md:py-8",
          )}
        >
          <LanguageSwitcher className="self-end" />
          <div className="flex flex-col gap-1 md:flex-row md:justify-between">
            <p className="text-4xl font-bold text-white">{t("todo-list")}</p>
            <div className="text-xs text-white md:self-end">
              {t("by")}{" "}
              <MyLink
                className="text-xs"
                text={Info.author}
                href={Info.linkedIn}
                target="_blank"
                showIcon
              />
            </div>
          </div>
        </div>

        <div
          className={clsx(
            "flex w-full max-w-3xl flex-1 flex-col gap-8 bg-white",
            "px-8 pt-8 pb-8 md:px-16 md:pb-16",
          )}
        >
          <div className="flex items-end justify-between gap-2">
            <MyTextArea
              value={input}
              placeholder={t("input-placeholder")}
              onChange={(e) => setInput(e.currentTarget.value)}
              onEnterSubmit={onClickAddTask}
            />
            <Button
              className={"bg-red-600 rounded-xl h-12"}
              onClick={onClickAddTask}
              isDisabled={input.trim().length === 0}
            >
              {t("add-task")}
            </Button>
          </div>

          <div className="flex flex-col gap-4">
            <AnimatePresence mode="popLayout">
              {sortedTasks.length === 0 ? (
                <p className="self-center text-sm text-zinc-300">
                  {t("no-tasks-yet")}
                </p>
              ) : (
                sortedTasks.map((task) => (
                  <motion.div
                    key={task.id}
                    layout
                    initial={{ opacity: 0, y: -60 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: 60 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 40,
                    }}
                  >
                    <TaskCard
                      key={task.id}
                      task={task}
                      onCheck={toggleTaskCompleted}
                      onDelete={deleteTask}
                      onUpdate={editTask}
                    />
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>
    </div>
  );
}
