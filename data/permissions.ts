import type { Task } from "@/types/Task";
import type { User } from "@reflowhq/auth-next/types";

export const canCreateTasks = (user: User | null) => {
  return !!user;
};

export const ownsTask = (task: Task, user: User | null) => {
  return task.userId === user?.id;
};

export const canUpdateTask = (task: Task, user: User | null) => {
  return ownsTask(task, user);
};

export const canDeleteTask = (task: Task, user: User | null) => {
  return ownsTask(task, user);
};
