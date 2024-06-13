"use client";

import { signIn } from "@reflowhq/auth-next/client";
import { Button, ButtonStyleProps } from "../UI/Button";
import { useRouter } from "next/navigation";

interface Props {
  children: React.ReactNode;
  appearance?: ButtonStyleProps;
  onSignin?: () => void;
  onError?: () => void;
  step?: "login" | "register";
}

export default function SignInButton({
  children,
  appearance,
  onSignin,
  onError,
  step,
}: Props) {
  const router = useRouter();

  onSignin =
    onSignin ||
    (() => {
      router.push("/profile");
      router.refresh();
    });

  return (
    <Button
      appearance={appearance}
      onClick={() => signIn({ onSignin, onError, step })}
    >
      {children}
    </Button>
  );
}
