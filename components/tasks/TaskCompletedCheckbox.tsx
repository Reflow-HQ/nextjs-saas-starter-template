"use client";

import { updateTask } from "@/actions/tasks";
import { Task } from "@/types/Task";
import Checkbox from "../UI/Checkbox";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function TaskCompletedCheckbox({ task }: { task: Task }) {
  const [isCompleted, setIsCompleted] = useState<boolean>(task.is_completed);
  const router = useRouter();

  const onCheckboxChange = async (enabled: boolean) => {
    setIsCompleted(enabled);

    const data = {
      is_completed: enabled,
    };

    await updateTask(task, data);

    router.refresh();
  };

  return <Checkbox checked={isCompleted} onChange={onCheckboxChange} />;
}
