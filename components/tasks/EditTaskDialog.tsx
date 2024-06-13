"use client";

import { Modal } from "@/components/UI/Modal";
import type { Task } from "@/types/Task";
import { useEffect, useState } from "react";
import Tip from "../UI/Tip";

interface Props {
  task: Task | null;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onSubmit: (data: Partial<any>) => Promise<any>;
}

export default function EditTaskDialog({
  task,
  isOpen,
  setIsOpen,
  onSubmit,
}: Props) {
  const [title, setTitle] = useState(task?.title || "");
  const [description, setDescription] = useState(task?.description || "");

  useEffect(() => {
    if (!isOpen) {
      setTitle("");
      setDescription("");
      return;
    }

    if (task) {
      setTitle(task.title);
      setDescription(task.description);
    }
  }, [isOpen, task]);

  const updateTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const updateDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const saveTask = async () => {
    await onSubmit(getTaskData());
  };

  const getTaskData = () => {
    return {
      ...(task || {}),
      title,
      description,
    };
  };

  return (
    <Modal
      title={task ? "Edit Task" : "Add New Task"}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      size="md"
      confirmButton={{
        show: true,
        text: "Save",
        onClick: saveTask,
      }}
    >
      <form>
        <div className="mb-3">
          <div className="mb-2 flex items-center justify-between gap-1 sm:justify-start">
            <label
              htmlFor="title"
              className="flex items-center gap-1 text-sm font-medium leading-6 text-gray-500 dark:text-gray-300"
            >
              <span>Title</span>
            </label>
          </div>
          <div>
            <input
              type="text"
              name="title"
              id="title"
              className="w-full min-w-0 rounded-lg border border-gray-300 bg-transparent px-5 py-2.5 text-gray-700 dark:border-gray-500 dark:text-white"
              value={title}
              onChange={updateTitle}
              required
              minLength={3}
              maxLength={50}
            />
          </div>
        </div>
        <div className="mb-3">
          <div className="mb-2 flex items-center justify-between gap-1 sm:justify-start">
            <label
              htmlFor="description"
              className="flex items-center gap-1 text-sm font-medium leading-6 text-gray-500 dark:text-gray-300"
            >
              <span>Description</span>
            </label>
            <Tip
              id="prompt-tooltip"
              description="A description of the task and any notes you might want to remember for later."
            />
          </div>
          <div>
            <textarea
              id="description"
              name="description"
              rows={3}
              className="w-full min-w-0 resize-none rounded-lg border border-gray-300 bg-transparent px-5 py-2.5 text-gray-700 dark:border-gray-500 dark:text-white"
              value={description}
              onChange={updateDescription}
              required
              minLength={10}
              maxLength={1000}
            />
          </div>
        </div>
      </form>
    </Modal>
  );
}
