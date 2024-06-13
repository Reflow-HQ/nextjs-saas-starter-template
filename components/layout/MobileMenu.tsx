"use client";

import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { useRouter } from "next/navigation";
import clsx from "clsx";

import { BsGithub } from "react-icons/bs";
import ThemeSwitcher from "@/components/layout/ThemeSwitcher";
import NavLink from "@/components/layout/NavLink";
import SignInButton from "../auth/SignInButton";
import SignOutButton from "../auth/SignOutButton";
import type { NavLinkItem } from "./Navbar";

export default function MobileMenu({
  isSignedIn,
  navLinkItems,
}: {
  isSignedIn: boolean;
  navLinkItems: NavLinkItem[];
}) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const onSignin = () => {
    setOpen(false);
    router.push("/profile");
    router.refresh();
  };

  const onSignout = () => {
    setOpen(false);
    router.refresh();
  };

  return (
    <div>
      <div className="flex items-center gap-2 sm:hidden">
        <ThemeSwitcher />
        <BiMenu
          size={30}
          className="cursor-pointer"
          onClick={() => setOpen((open) => !open)}
        />
      </div>
      <div
        className={clsx(
          "fixed bottom-0 left-0 right-0 top-0 bg-gray-500 bg-opacity-75 transition-opacity",
          open ? "block" : "hidden",
        )}
        onClick={() => setOpen(false)}
      ></div>
      <nav
        className={clsx(
          "fixed bottom-0 right-0 top-0 flex min-w-[300px] flex-col gap-4 bg-white p-10 shadow-lg transition-transform dark:bg-gray-800",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        {navLinkItems.map((item) => (
          <NavLink
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </NavLink>
        ))}

        {isSignedIn ? (
          <>
            <hr className="dark:border-gray-900" />
            <NavLink href="/profile" onClick={() => setOpen(false)}>
              Account
            </NavLink>
            <SignOutButton
              appearance={{ style: "outline" }}
              onSignout={onSignout}
            >
              Sign out
            </SignOutButton>
          </>
        ) : (
          <>
            <SignInButton
              onSignin={onSignin}
              step="login"
              appearance={{ style: "outline" }}
            >
              Sign in
            </SignInButton>
            <SignInButton onSignin={onSignin} step="register">
              Sign up
            </SignInButton>
          </>
        )}

        <a
          href="https://github.com/danny-mark/subflow"
          className="mt-12 text-4xl"
          target="_blank"
        >
          <BsGithub />
        </a>
      </nav>
    </div>
  );
}
