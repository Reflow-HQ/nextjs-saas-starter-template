"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Modal, ModalOptions } from "@/components/UI/Modal";
import AccountBenefitsList from "@/components/auth/AccountBenefitsList";
import { signIn } from "@reflowhq/auth-next/client";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function SignInDialogToggle({
  children,
  className = "cursor-pointer",
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={className} onClick={() => setIsOpen((open) => !open)}>
        {children}
      </div>
      <SignInDialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export function SignInDialog({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  const router = useRouter();

  return (
    <Modal
      title="Sign In to Proceed"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      confirmButton={{
        show: true,
        text: "Sign In",
        appearance: {
          style: "primary",
        },
        onClick: () => {
          signIn({ onSignin: () => router.refresh() });
        },
      }}
    >
      <p className="mb-12 text-xl leading-6">
        Sign in to try out the Prisma database integration.
      </p>

      <AccountBenefitsList />
    </Modal>
  );
}
