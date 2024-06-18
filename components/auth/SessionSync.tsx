"use client";

import { useSessionSync } from "@reflowhq/auth-next/client";
import { useState } from "react";
import clsx from "clsx";

export default function SessionSync() {
  let [show, setShow] = useState(false);
  let [message, setMessage] = useState("");

  useSessionSync({
    onChange: (e) => {
      if (e == "signout") {
        setMessage("You've been signed out in another tab.");
      }
      if (e == "signin") {
        setMessage(
          "You've signed-in in another tab. Reload the page to see your profile.",
        );
      }
      setShow(true);
    },
  });
  return (
    <div
      className={clsx(
        "bg-red-500 p-4 text-center text-white",
        show ? "block" : "hidden",
      )}
    >
      {message}
    </div>
  );
}
