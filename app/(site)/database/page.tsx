import Container from "@/components/layout/Container";
import UserTaskList from "@/components/tasks/UserTaskList";
import getAuth from "@/auth";
import { SignInDialogToggle } from "@/components/auth/SignInDialog";
import { Button } from "@/components/UI/Button";
import { canCreateTasks } from "@/data/permissions";
import { CreateTaskButton } from "@/components/tasks/CreateTaskButton";
import type { User } from "@reflowhq/auth-next/types";

export default async function TasksPage() {
  const auth = getAuth();
  const user = await auth.user();

  return (
    <Container size="sm">
      <div>
        <h2 className="mb-5 text-3xl font-bold">Database Demo</h2>

        <p className="mb-4 text-lg leading-7">
          SubFlow comes with a flexible{" "}
          <a href="#" className="text-link">
            Prisma configuration
          </a>{" "}
          that can be connected to any database of your choice.
        </p>

        <p className="mb-10 text-lg leading-7">
          This demo showcases a simple task managing app based on{" "}
          <a href="https://vercel.com/storage/postgres" className="text-link">
            Vercel Postgress
          </a>
          . You can switch to any other database by modifying the Prisma config.
        </p>
      </div>

      <h2 className="mb-6 text-3xl font-bold">Tasks</h2>

      {canCreateTasks(user) ? (
        <>
          <CreateTaskButton user={user as User} />
          <UserTaskList user={user as User} />
        </>
      ) : (
        <SignInDialogToggle>
          <Button>Add New Task</Button>
        </SignInDialogToggle>
      )}
    </Container>
  );
}
