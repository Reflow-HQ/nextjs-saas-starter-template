import Card from "./Card";
import Link from "next/link";
import SignInButton from "../auth/SignInButton";
import { Button } from "./Button";

export default function GetStarted() {
  return (
    <div
      className="flex w-full flex-col place-items-center px-5 py-24 text-center"
      id="get-started"
    >
      <p className="mb-5 rounded-full border border-blue-500 px-3 py-1 text-sm text-blue-500">
        Get Started
      </p>
      <h2 className="mb-8 text-3xl font-bold sm:mb-12 sm:text-4xl">
        Check out the features in action
      </h2>

      <div className="grid w-full max-w-[600px] grid-cols-1 gap-8 text-center">
        <Card
          className="bg-white shadow-md dark:bg-gray-700"
          background={false}
        >
          <h3 className="mb-4 text-2xl font-bold">User Authentication</h3>
          <p className="text-secondary mb-4">
            This starter kit uses{" "}
            <a className="text-link" href="https://reflowhq.com">
              Reflow
            </a>{" "}
            for handling user auth. It supports standard email + password
            accounts, as well social media sign in using Google, Facebook and
            Apple among others.
          </p>
          <p className="text-secondary mb-4"></p>
          <p className="text-secondary mb-4">
            Try signing in using the button below:
          </p>
          <SignInButton>Demo Sign In</SignInButton>
        </Card>

        <Card
          className="bg-white shadow-md dark:bg-gray-700"
          background={false}
        >
          <h3 className="mb-4 text-2xl font-bold">Subscriptions</h3>
          <p className="text-secondary mb-4">
            Subscriptions are provided by{" "}
            <a className="text-link" href="https://reflowhq.com">
              Reflow
            </a>
            , which takes care of recurring billing, subscription management and
            handling webhooks. You can choose between Stripe and Paddle as your
            payment provider.
          </p>
          <p className="text-secondary mb-4"></p>
          <p className="text-secondary mb-4">
            Visit the pricing page and try subscribing (it's free):
          </p>
          <Link href="/pricing">
            <Button>Pricing Page Demo</Button>
          </Link>
        </Card>

        <Card
          className="bg-white shadow-md dark:bg-gray-700"
          background={false}
        >
          <h3 className="mb-4 text-2xl font-bold">Database Integration</h3>
          <p className="text-secondary mb-4">
            Connect to your database using{" "}
            <a
              className="text-link"
              target="_blank"
              href="https://www.prisma.io/"
            >
              Prisma
            </a>
            . It supports all major DB types and offers an unmatched developer
            experience with easy migrations and an excellent ORM.
          </p>
          <p className="text-secondary mb-4"></p>
          <p className="text-secondary mb-4">
            Check out an example integration in the database demo:
          </p>
          <Link href="/database">
            <Button>Database Demo</Button>
          </Link>
        </Card>
      </div>
    </div>
  );
}
