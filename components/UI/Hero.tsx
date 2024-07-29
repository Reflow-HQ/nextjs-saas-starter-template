import { SiTailwindcss, SiPrisma, SiPaddle, SiReact } from "react-icons/si";
import { BsStripe } from "react-icons/bs";

export default function Hero() {
  return (
    <div className="hero-gradient flex w-full flex-col place-items-center gap-y-2 px-6 pb-32 pt-24 text-center dark:bg-gray-950 dark:pb-16">
      <div className="mb-6 flex h-[93px] w-[93px] -rotate-6 items-center justify-center rounded-[17px] bg-white text-5xl shadow-blue-lg dark:bg-gray-100">
        <span className="rotate-6">👍️</span>
      </div>

      <h1 className="mb-4 text-5xl font-extrabold">
        Next.js <span className="text-blue-600">SAAS</span>
      </h1>

      <h2 className="text-2xl font-normal">
        Auth and Subscriptions Starter Template for Next.js Apps
      </h2>

      <p className="text-secondary mb-5 text-lg">
        A free and open-source template for supercharging your project
      </p>

      <div className="mb-16 flex w-full justify-center gap-x-4 text-4xl text-blue-600">
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

      <img
        src="/hero.webp"
        alt="Hero"
        className="block -translate-x-5 rounded-lg object-cover dark:hidden md:max-w-[700px]"
      />
    </div>
  );
}
