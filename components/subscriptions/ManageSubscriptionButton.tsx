"use client";

import { useRouter } from "next/navigation";
import { modifySubscription } from "@reflowhq/auth-next/client";

interface Props {
  onSuccess?: () => void;
  onError?: () => void;
  children: React.ReactNode;
}

export default function ManageSubscriptionButton({
  children,
  onSuccess,
}: Props) {
  const router = useRouter();
  return (
    <div
      className="cursor-pointer"
      onClick={() =>
        modifySubscription({
          onSuccess: () => {
            if (onSuccess) {
              onSuccess();
            } else {
              router.refresh();
            }
          },
        })
      }
    >
      {children}
    </div>
  );
}
