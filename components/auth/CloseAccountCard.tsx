"use client";

import { useState } from "react";

import Card from "@/components/UI/Card";
import { Button } from "@/components/UI/Button";
import ConfirmDialog from "@/components/UI/ConfirmDialog";
import ManageSubscriptionButton from "@/components/subscriptions/ManageSubscriptionButton";

interface Props {
  canCloseAccount: boolean;
  deleteUser: () => Promise<any>;
}

export default function CloseAccountCard({
  canCloseAccount,
  deleteUser,
}: Props) {
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);

  return (
    <>
      <Card>
        <div className="grid gap-y-5 p-2 md:p-5">
          <h3 className="mb-2 text-xl font-bold">Close Account</h3>
          <p className="">
            You can close your account and delete your data from our servers at
            any time.{" "}
            {canCloseAccount ? "Press the button below to proceed." : ""}
          </p>
          {canCloseAccount ? (
            <Button
              appearance={{ style: "danger" }}
              onClick={() => setIsConfirmDialogOpen(true)}
            >
              Close Account
            </Button>
          ) : (
            <>
              <p className="text-rose-500">
                To delete your account you first need to cancel your
                subscription.
              </p>
              <ManageSubscriptionButton>
                <Button appearance={{ style: "outline" }}>
                  Cancel Subscription
                </Button>
              </ManageSubscriptionButton>
            </>
          )}
        </div>
      </Card>

      <ConfirmDialog
        title="Close account"
        bodyText="Are you sure you want to permanently close your account?"
        confirmButton={{
          show: true,
          text: "Yes, close my account",
          appearance: {
            style: "danger",
          },
          onClick: deleteUser,
        }}
        isOpen={isConfirmDialogOpen}
        setIsOpen={setIsConfirmDialogOpen}
      />
    </>
  );
}
