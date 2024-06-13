"use client";

import { useRouter } from "next/navigation";
import { createSubscription } from "@reflowhq/auth-next/client";
import { Button, ButtonStyleProps } from "../UI/Button";

interface Props {
  children: React.ReactNode;
  priceID: number;
  paymentProvider?: string;
  onSignin?: () => void;
  onSubscribe?: () => void;
  onError?: () => void;
  appearance?: ButtonStyleProps;
}

export default function CreateSubscriptionButton({
  children,
  priceID,
  paymentProvider,
  onSignin,
  onSubscribe,
  onError,
  appearance,
}: Props) {
  const router = useRouter();

  const createSubscriptionOptions: Parameters<typeof createSubscription>[0] = {
    priceID,
    paymentProvider,
    onSignin:
      onSignin ||
      (() => {
        router.refresh();
      }),
    onSubscribe:
      onSubscribe ||
      (() => {
        router.push("/profile");
        router.refresh();
      }),
    onError,
  };

  return (
    <Button
      appearance={appearance}
      onClick={() => createSubscription(createSubscriptionOptions)}
    >
      {children}
    </Button>
  );
}
