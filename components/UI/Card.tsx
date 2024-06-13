import { ReactNode } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  background?: boolean;
  children: ReactNode;
}

export default function Card({
  background = true,
  className = "",
  children,
}: Props) {
  return (
    <div
      className={clsx(
        "h-full w-full rounded-xl border border-gray-200 p-5 dark:border-gray-700 md:p-6 md:px-8",
        className,
        {
          "bg-white shadow-md dark:bg-gray-950": background,
          "hover:bg-gray-50 hover:shadow-md dark:hover:bg-gray-700":
            !background,
        },
      )}
    >
      {children}
    </div>
  );
}
