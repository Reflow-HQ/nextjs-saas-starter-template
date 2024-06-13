import clsx from "clsx";
import { NextJsLogo, ReflowLogo } from "../SvgIcons";
import { appName } from "@/lib/app-config";
import { SiTailwindcss, SiPrisma, SiPaddle, SiReact } from "react-icons/si";
import { BsStripe } from "react-icons/bs";

function FrostedGlass({
  children,
  styles,
}: {
  children: React.ReactNode;
  styles: string;
}) {
  return (
    <div
      className={clsx(
        styles,
        "relative grid place-items-center rounded-3xl bg-white bg-opacity-0 backdrop-blur-lg sm:bg-opacity-10 sm:shadow-lg",
      )}
    >
      {children}
    </div>
  );
}

export default function Hero() {
  return (
    <div className="relative flex w-full flex-col place-items-center py-24 sm:pb-52">
      <img
        src="/hero.webp"
        alt="Hero"
        className="block rounded-lg object-cover opacity-0 dark:hidden sm:max-w-[560px] sm:opacity-100 md:max-w-[620px]"
      />
      <img
        src="/hero_dark.webp"
        alt="Hero"
        className="hidden rounded-lg object-cover opacity-0 dark:block sm:max-w-[560px] sm:opacity-100 md:max-w-[620px]"
      />
      <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-center bg-white bg-opacity-60 p-5 text-center dark:bg-black dark:bg-opacity-70 dark:text-white">
        <FrostedGlass styles="gap-y-6 sm:w-[450px] sm:h-[350px] lg:w-[650px] lg:h-auto sm:top-4 sm:right-24 md:right-36 p-8 lg:p-12">
          <h1 className="text-5xl font-bold">{appName}</h1>
          <h2 className="text-secondary text-3xl font-bold">
            Auth and Subscriptions Starter Kit for Next.js Apps
          </h2>
          <p className="text-secondary text-xl">
            A free and open-source template for supercharging the development of
            your next app.
          </p>
          <div className="flex w-full justify-center gap-x-4 text-4xl">
            <a target="_blank" href="https://react.dev/">
              <SiReact />
            </a>
            <a target="_blank" href="https://stripe.com/">
              <BsStripe />
            </a>
            <a target="_blank" href="https://www.paddle.com/">
              <SiPaddle />
            </a>
            <a target="_blank" href="https://www.prisma.io/">
              <SiPrisma />
            </a>
            <a target="_blank" href="https://tailwindcss.com/">
              <SiTailwindcss />
            </a>
          </div>
        </FrostedGlass>

        <a href="https://nextjs.org/" className="hidden sm:block">
          <FrostedGlass styles="h-36 w-36 top-0 left-72 md:left-80 p-4">
            <NextJsLogo />
          </FrostedGlass>
        </a>

        <a href="https://reflowhq.com/" className="hidden sm:block">
          <FrostedGlass styles="h-36 w-36 top-4 right-24 p-4">
            <ReflowLogo />
          </FrostedGlass>
        </a>
      </div>
    </div>
  );
}
