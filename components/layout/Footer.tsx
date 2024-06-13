import Link from "next/link";
import Logo from "@/components/UI/Logo";

export default async function Footer() {
  return (
    <div className="flex w-full flex-col items-center gap-4 bg-white px-5 py-7 shadow-subtle dark:bg-gray-800 dark:text-white dark:shadow-gray-900 md:px-10 md:py-10">
      <Logo />
      <nav className="flex flex-wrap justify-center gap-3 font-semibold sm:gap-4 sm:text-lg">
        <Link href="/pricing">Pricing</Link>
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
        <Link href="mailto:example@example.com" target="_blank">
          Contact
        </Link>
      </nav>
      <p className="text-gray-500 dark:text-gray-300">
        Company © {new Date().getFullYear()}
      </p>
    </div>
  );
}
