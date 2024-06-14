import Link from "next/link";
import Logo from "@/components/UI/Logo";
import { BsGithub } from "react-icons/bs";
import ThemeSwitcher from "@/components/layout/ThemeSwitcher";
import SignInButton from "../auth/SignInButton";
import UserDropdown from "@/components/auth/UserDropdown";
import NavLink from "@/components/layout/NavLink";
import MobileMenu from "@/components/layout/MobileMenu";
import { urbanist } from "@/lib/fonts";
import { appName } from "@/lib/app-config";
import getAuth from "@/auth";
import { Dropdown, DropdownMenuItem } from "@/components/UI/Dropdown";
import { BiChevronDown } from "react-icons/bi";

export type NavLinkItem = {
  label: string;
  href: string;
};

export async function Navbar() {
  const auth = getAuth();
  const user = await auth.user();
  const isSignedIn = !!user;

  const navLinkItems: NavLinkItem[] = [
    {
      label: "Features",
      href: "/#features",
    },
    {
      label: "Get Started",
      href: "/#get-started",
    },
    {
      label: "FAQ",
      href: "/#faq",
    },
  ];

  const navDropdownLink: {
    label: string;
    items: DropdownMenuItem[];
  } = {
    label: "Demos",
    items: [
      {
        label: "Auth",
        href: "/signin",
      },
      {
        label: "Subscriptions",
        href: "/pricing",
      },
      {
        label: "Database",
        href: "/database",
      },
    ],
  };

  const mobileMenuLinkItems: NavLinkItem[] = [
    ...navLinkItems,
    ...(navDropdownLink.items as NavLinkItem[]).map((item) => ({
      ...item,
      label: `${item.label} Demo`,
    })),
  ];

  return (
    <div className="sticky top-0 z-10 w-full bg-white px-5 py-3 shadow-subtle dark:bg-gray-900 dark:text-white dark:shadow-gray-950 xl:px-10">
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between">
        <div className="text-xl font-bold">
          <Link href="/" className="flex items-center gap-2">
            <Logo size="sm" />
            <span className={urbanist.className}>{appName}</span>
          </Link>
        </div>
        <div className="ml-10 hidden flex-1 items-center justify-between sm:flex">
          <div className="flex items-center gap-7 text-gray-700">
            {navLinkItems.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}

            <Dropdown
              menuButton={
                <div className="mr-2 flex items-center text-gray-700 dark:text-gray-200">
                  {navDropdownLink.label}
                  <BiChevronDown />
                </div>
              }
              menuItems={navDropdownLink.items}
            />
          </div>
          <div className="flex items-center gap-2">
            <ThemeSwitcher />

            {isSignedIn ? (
              <UserDropdown user={user} />
            ) : (
              <>
                <SignInButton appearance={{ style: "outline", size: "md" }}>
                  Sign in
                </SignInButton>
                <SignInButton step={"register"} appearance={{ size: "md" }}>
                  Sign up
                </SignInButton>
              </>
            )}

            <a
              href="https://github.com/danny-mark/subflow"
              className="text-3xl"
              target="_blank"
            >
              <BsGithub />
            </a>
          </div>
        </div>
        <MobileMenu
          isSignedIn={isSignedIn}
          navLinkItems={mobileMenuLinkItems}
        />
      </div>
    </div>
  );
}
