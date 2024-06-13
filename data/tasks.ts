import "server-only";

import prisma from "@/db";
import getAuth from "@/auth";

async function getUserTasks() {
  const auth = getAuth();
  const user = await auth.user();

  if (!user) return [];

  return await prisma.task.findMany({
    where: { userId: user.id },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export { getUserTasks };
