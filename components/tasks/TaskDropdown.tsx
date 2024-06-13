"use client";

import { useState } from "react";
import { BiChevronDown, BiEdit, BiShareAlt, BiTrash } from "react-icons/bi";
import { Dropdown, DropdownMenuItem } from "@/components/UI/Dropdown";
import EditTaskDialog from "@/components/tasks/EditTaskDialog";
import { updateTask } from "@/actions/tasks";
import ConfirmDialog from "../UI/ConfirmDialog";
import { deleteTask } from "@/actions/tasks";
import { Task } from "@/types/Task";
import { useRouter } from "next/navigation";

export default function TaskDropdown({ task }: { task: Task }) {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const router = useRouter();

  const menuItems: DropdownMenuItem[] = [
    {
      label: "Edit",
      icon: <BiEdit size={16} />,
      onClick: () => setIsEditDialogOpen(true),
    },
    {
      label: "Delete",
      icon: <BiTrash size={16} />,
      onClick: () => setIsDeleteDialogOpen(true),
    },
  ];

  const onEditConfirmed = async (data: Partial<Task>) => {
    await updateTask(task, data);
    router.refresh();
  };

  const onDeleteConfirmed = async () => {
    await deleteTask(task);
    router.refresh();
  };

  return (
    <>
      <Dropdown
        menuButton={
          <div className="rounded-lg p-2 hover:bg-white">
            <BiChevronDown size={20} />
          </div>
        }
        menuItems={menuItems}
      />
      <EditTaskDialog
        isOpen={isEditDialogOpen}
        setIsOpen={setIsEditDialogOpen}
        task={task}
        onSubmit={onEditConfirmed}
      />
      <ConfirmDialog
        title="Delete Task"
        bodyText="Are you sure you want to delete this task?"
        confirmButton={{
          show: true,
          text: "Confirm",
          appearance: {
            style: "danger",
            size: "lg",
          },
          onClick: onDeleteConfirmed,
        }}
        isOpen={isDeleteDialogOpen}
        setIsOpen={setIsDeleteDialogOpen}
      />
    </>
  );
}
