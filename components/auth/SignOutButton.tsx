"use client";

import { signOut } from "@reflowhq/auth-next/client";
import { Button, ButtonStyleProps } from "../UI/Button";
import { useRouter } from "next/navigation";

interface Props {
  children: React.ReactNode;
  appearance?: ButtonStyleProps;
  onSignout?: () => void;
}

export default function SignOutButton({
  children,
  appearance,
  onSignout,
}: Props) {
  const router = useRouter();

  onSignout =
    onSignout ||
    (() => {
      router.push("/");
      router.refresh();
    });

  return (
    <Button
      appearance={appearance}
      onClick={() => signOut({ onSuccess: onSignout })}
    >
      {children}
    </Button>
  );
}
