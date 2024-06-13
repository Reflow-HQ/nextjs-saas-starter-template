"use client";

import { BiRevision } from "react-icons/bi";

import { Button } from "@/components/UI/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mt-24 text-center">
      <p className="mb-5 text-sm font-semibold text-red-600 dark:text-red-400">
        Unexpected Error
      </p>
      <h2 className="mb-7 text-4xl font-bold">Something went wrong</h2>
      <p className="mb-12 text-gray-700 dark:text-gray-300">
        Please try again later.
      </p>
      <Button
        appearance={{ style: "outline" }}
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        <span className="-ml-2 flex items-center gap-2">
          <BiRevision size={20} />
          Try again
        </span>
      </Button>
    </div>
  );
}
