import { Checkbox as HeadlessCheckbox, Field, Label } from "@headlessui/react";
import clsx from "clsx";

interface Props {
  label?: string;
  className?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export default function Checkbox({
  label,
  className,
  checked,
  onChange,
}: Props) {
  return (
    <Field className="flex items-center gap-2">
      <HeadlessCheckbox
        checked={checked}
        onChange={onChange}
        className={clsx(
          "group block size-5 rounded border border border-gray-400 bg-white data-[checked]:bg-blue-500",
          className,
        )}
      >
        <svg
          className="stroke-white opacity-0 group-data-[checked]:opacity-100"
          viewBox="0 0 14 14"
          fill="none"
        >
          <path
            d="M3 8L6 11L11 3.5"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </HeadlessCheckbox>
      {label && <Label>{label}</Label>}
    </Field>
  );
}
