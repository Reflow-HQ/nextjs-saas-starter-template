import getAuth from "@/auth";
import { deleteUserTasks } from "@/actions/tasks";

async function deleteCurrentUser() {
  "use server";

  const auth = getAuth();
  const user = auth.user();

  if (!user) return false;

  let res = await deleteUserTasks();
  if (!res.success) throw new Error("500");

  res = await auth.deleteUser();
  if (!res.success) throw new Error("500");

  return true;
}

export { deleteCurrentUser };
