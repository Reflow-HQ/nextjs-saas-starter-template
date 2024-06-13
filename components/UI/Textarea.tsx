"use client";

import { ReactNode } from "react";

interface TextareaProps {
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  children?: ReactNode;
}

export default function Textarea({
  placeholder = "",
  value = "",
  disabled = false,
  onChange,
  children,
}: TextareaProps) {
  return (
    <textarea
      className="w-full resize-none text-gray-900 bg-white border border-gray-300 disabled:bg-gray-300 focus:outline-none 
  focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 pe-20
  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:enabled:hover:border-gray-600 
  dark:focus:ring-gray-700"
      disabled={disabled}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    >
      {children}
    </textarea>
  );
}
