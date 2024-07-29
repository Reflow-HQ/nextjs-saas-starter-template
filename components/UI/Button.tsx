"use client";

import { ReactNode } from "react";
import clsx from "clsx";

export interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  type?: "button" | "submit" | "reset";
  appearance?: ButtonStyleProps;
  disabled?: boolean;
  children: ReactNode;
}

export interface ButtonStyleProps {
  style?: "primary" | "outline" | "danger" | "muted";
  size?: "sm" | "md" | "lg";
  fontWeight?: "light" | "medium" | "bold";
}

export function Button({
  onClick,
  type = "button",
  appearance = {},
  disabled = false,
  children,
}: ButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    onClick && onClick(e);
  };

  return (
    <button
      className={clsx(
        "w-fit text-sm text-gray-900 enabled:hover:shadow-md disabled:opacity-50 dark:border-gray-600 dark:text-white ",
        {
          "bg-blue-600 text-white shadow-md hover:bg-blue-700":
            !appearance.style || appearance.style === "primary",
          "bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-rose-500 hover:to-red-500":
            appearance.style === "danger",
          "bg-gray-400 text-white hover:bg-gray-600":
            appearance.style === "muted",
          "border border-gray-300 hover:border-gray-600 dark:hover:border-gray-200":
            appearance.style === "outline",
        },
        {
          "font-bold":
            !appearance.fontWeight || appearance.fontWeight === "bold",
          "font-medium": appearance.fontWeight === "medium",
          "font-light": appearance.fontWeight === "light",
        },
        {
          "rounded-full px-8 py-3":
            !appearance.size || appearance.size === "lg",
          "rounded-full px-6 py-2": appearance.size === "md",
          "rounded-lg px-2 py-1 text-xs": appearance.size === "sm",
        },
      )}
      type={type}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
