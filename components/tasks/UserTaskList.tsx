import { getUserTasks } from "@/data/tasks";
import type { User } from "@reflowhq/auth-next/types";
import { Task } from "@/types/Task";
import { canUpdateTask } from "@/data/permissions";
import Card from "../UI/Card";
import TaskDropdown from "@/components/tasks/TaskDropdown";
import TaskCompletedCheckbox from "@/components/tasks/TaskCompletedCheckbox";
import clsx from "clsx";

interface Props {
  limit?: number;
  user: User;
}

export default async function UserTaskList({ user, limit }: Props) {
  const tasks = await getUserTasks();

  return (
    <>
      {tasks.length ? (
        <div className="mb-12 mt-8 grid gap-3">
          {tasks.map((task: Task) => (
            <Card
              key={task.id}
              className={clsx(
                "card-yellow relative flex min-h-[160px] items-start gap-6",
                {
                  "opacity-50": task.is_completed,
                },
              )}
            >
              {canUpdateTask(task, user) && (
                <TaskCompletedCheckbox task={task} key={task.id} />
              )}

              <div>
                <h3 className="mb-2 text-xl font-bold leading-none">
                  {task.title}
                </h3>
                <p>{task.description}</p>
              </div>

              {canUpdateTask(task, user) && (
                <div className="absolute right-4 top-3">
                  <TaskDropdown task={task} key={task.id} />
                </div>
              )}
            </Card>
          ))}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
