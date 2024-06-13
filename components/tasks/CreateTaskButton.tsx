"use client";

import { useState } from "react";

import EditTaskDialog from "@/components/tasks/EditTaskDialog";
import { Button, type ButtonStyleProps } from "@/components/UI/Button";
import { createTask } from "@/actions/tasks";
import type { User } from "@reflowhq/auth-next/types";
import type { Task } from "@/types/Task";
import { useRouter } from "next/navigation";

export function CreateTaskTrigger({
  user,
  children,
}: {
  user: User;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const submit = async (data: Partial<Task>) => {
    const newTask = await createTask({
      ...data,
      userId: user.id,
    });

    if (newTask) {
      router.refresh();
    }
  };

  return (
    <>
      <div className="w-fit" onClick={() => setIsOpen((isOpen) => !isOpen)}>
        {children}
      </div>
      <EditTaskDialog
        task={null}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onSubmit={submit}
      />
    </>
  );
}

export async function CreateTaskButton({
  user,
  appearance,
}: {
  user: User;
  appearance?: ButtonStyleProps;
}) {
  return (
    <CreateTaskTrigger user={user}>
      <Button appearance={appearance}>Add Task</Button>
    </CreateTaskTrigger>
  );
}
