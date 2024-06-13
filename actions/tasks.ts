"use server";

import prisma from "@/db";
import getAuth from "@/auth";
import { canUpdateTask, canDeleteTask } from "@/data/permissions";

import type { Task } from "@/types/Task";

async function getUser() {
  const auth = getAuth();
  const user = await auth.user();

  if (!user) {
    throw new Error("Not signed in.");
  }

  return user;
}

async function createTask(data: Partial<Task>) {
  const user = await getUser();

  const existingCount = await prisma.task.count({
    where: { userId: user.id },
  });

  if (existingCount > 20) {
    throw new Error("Max number of tasks reached.");
  }

  const taskData: Task = {
    userId: 0,
    title: "",
    description: "",
    is_completed: false,
  };

  if (data.userId != user.id) return;
  taskData.userId = user.id;

  if (typeof data.title !== "string" || !data.title.trim().length)
    throw new Error("Invalid title");
  taskData.title = data.title;

  if (typeof data.description !== "string" || !data.description.trim().length)
    throw new Error("Invalid description");
  taskData.description = data.description;

  return await prisma.task.create({ data: taskData });
}

async function updateTask(task: Task, data: Partial<Task>) {
  const user = await getUser();

  if (!canUpdateTask(task, user)) {
    throw new Error("403 Forbidden");
  }

  if (
    data.title &&
    (typeof data.title !== "string" || !data.title.trim().length)
  )
    throw new Error("Invalid title");

  if (
    data.description &&
    (typeof data.description !== "string" || !data.description.trim().length)
  )
    throw new Error("Invalid description");

  return await prisma.task.update({
    where: {
      id: task.id,
    },
    data,
  });
}

async function deleteTask(task: Task) {
  const user = await getUser();

  if (!canDeleteTask(task, user)) {
    throw new Error("403 Forbidden");
  }

  await prisma.task.delete({
    where: {
      id: task.id,
    },
  });

  return { success: true };
}

async function deleteUserTasks() {
  const user = await getUser();

  await prisma.task.deleteMany({
    where: {
      userId: user.id,
    },
  });

  return { success: true };
}

export { createTask, updateTask, deleteTask, deleteUserTasks };
