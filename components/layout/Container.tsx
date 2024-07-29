import clsx from "clsx";

interface Props {
  margin?: boolean;
  padding?: boolean;
  className?: string;
  size?: "md" | "lg" | "sm";
  children: React.ReactNode;
}

export default function Container({
  margin = true,
  padding = true,
  size = "md",
  className = "",
  children,
}: Props) {
  return (
    <div
      className={clsx(
        className,
        "w-full",
        {
          "max-w-[1200px]": size === "lg",
          "max-w-[600px]": size === "sm",
          "max-w-[900px]": size === "md",
        },
        {
          "my-10": margin,
        },
        {
          "p-5": padding,
        },
      )}
    >
      {children}
    </div>
  );
}
