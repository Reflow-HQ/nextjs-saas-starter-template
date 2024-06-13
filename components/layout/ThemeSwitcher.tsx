"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BiSun, BiMoon } from "react-icons/bi";
import clsx from "clsx";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const [changeThemeValue, setChangeThemeValue] = useState<string>();

  useEffect(() => {
    setChangeThemeValue(theme === "dark" ? "light" : "dark");
  }, [theme]);

  useEffect(() => {
    const checkDarkTheme = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const newValue =
      theme === "dark"
        ? "light"
        : theme === "light"
          ? "dark"
          : checkDarkTheme
            ? "light"
            : "dark";
    setChangeThemeValue(newValue);
  }, [theme]);

  return (
    <button
      className={clsx(
        "-ml-3 flex h-8 w-8 items-center justify-center rounded-full",
        { "dark:text-white": theme === "dark" },
      )}
      onClick={() => setTheme(changeThemeValue ?? "dark")}
    >
      <BiMoon
        className={clsx({ hidden: theme !== "dark", block: theme === "dark" })}
        size={20}
      />
      <BiSun
        className={clsx({ block: theme !== "dark", hidden: theme === "dark" })}
        size={20}
      />
    </button>
  );
}
