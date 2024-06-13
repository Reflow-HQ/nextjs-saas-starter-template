"use client";

import { useRouter } from "next/navigation";
import { signOut } from "@reflowhq/auth-next/client";
import { BiUserCircle, BiLogOutCircle, BiChevronDown } from "react-icons/bi";

import UserAvatar from "@/components/auth/UserAvatar";
import { Dropdown, DropdownMenuItem } from "@/components/UI/Dropdown";
import type { User } from "@reflowhq/auth-next/types";

export default function UserDropdown({ user }: { user: User }) {
  const router = useRouter();

  const menuItems: DropdownMenuItem[] = [
    {
      label: user.name,
      disabled: true,
    },
    {
      label: "Account",
      icon: <BiUserCircle size={16} />,
      onClick: () => router.push("/profile"),
    },
    {
      label: "Sign out",
      icon: <BiLogOutCircle size={16} />,
      onClick: () =>
        signOut({
          onSuccess: () => {
            router.push("/");
            router.refresh();
          },
        }),
    },
  ];

  return (
    <Dropdown
      menuButton={
        <div className="mr-2 flex items-center">
          <UserAvatar src={user.photo} />
          <BiChevronDown />
        </div>
      }
      menuItems={menuItems}
    />
  );
}
