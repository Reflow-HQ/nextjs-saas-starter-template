"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  const currentPath = usePathname();
  const active = currentPath === href;

  return (
    <Link
      href={href}
      className={
        active
          ? "font-semibold text-black dark:text-white"
          : "text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-100"
      }
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
