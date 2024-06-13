import { redirect } from "next/navigation";
import type { Metadata } from "next";

import { deleteCurrentUser } from "@/actions/users";
import getAuth from "@/auth";
import Container from "@/components/layout/Container";
import Card from "@/components/UI/Card";
import { Button } from "@/components/UI/Button";
import ManageSubscriptionButton from "@/components/subscriptions/ManageSubscriptionButton";
import CloseAccountCard from "@/components/auth/CloseAccountCard";
import Link from "next/link";
import type { User } from "@reflowhq/auth-next/types";

export const metadata: Metadata = {
  title: "User Profile",
};

export default async function ProfilePage() {
  const auth = getAuth();
  const user = (await auth.user()) as User;
  const subscription = await auth.subscription();

  const canCloseAccount = !subscription || !!subscription?.cancel_at;

  const formatDate = (date: number) => {
    return new Date(date * 1000).toLocaleString("en-us", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  async function deleteUser() {
    "use server";

    await deleteCurrentUser();

    redirect("/");
  }

  return (
    <>
      {user && (
        <Container>
          <h3 className="mb-7 text-center text-3xl font-bold md:mb-12 md:text-4xl">
            Hello, {user.name}!
          </h3>
          <div className="mx-auto flex max-w-[500px] flex-col gap-3">
            <>
              {subscription ? (
                <Card>
                  <div className="grid gap-y-5 p-2 md:p-5">
                    <h3 className="mb-2 text-xl font-bold">Subscription</h3>

                    {subscription.cancel_at ? (
                      <p>
                        Your subscription to the{" "}
                        <strong>{subscription.plan.name} Plan</strong> is
                        scheduled to be canceled on{" "}
                        <strong>{formatDate(subscription.cancel_at)}</strong>.
                      </p>
                    ) : (
                      <>
                        <p>
                          You are subscribed to the{" "}
                          <strong>{subscription.plan.name} Plan</strong> for{" "}
                          <strong>
                            {subscription.price.price_formatted}/
                            {subscription.price.billing_period}
                          </strong>
                          .
                        </p>

                        {subscription.next_billing && (
                          <p>
                            The next payment is scheduled for{" "}
                            <strong>
                              {formatDate(subscription.next_billing)}
                            </strong>
                            .
                          </p>
                        )}

                        <p>
                          To update your payment method, switch to another plan
                          or cancel your subscription, click below.
                        </p>
                        <ManageSubscriptionButton>
                          <Button appearance={{ style: "outline" }}>
                            Manage
                          </Button>
                        </ManageSubscriptionButton>
                      </>
                    )}
                  </div>
                </Card>
              ) : (
                <Card>
                  <div className="p-2 md:p-5">
                    <h3 className="mb-4 text-xl font-bold">Subscription</h3>
                    <p className="mb-7">
                      You don't have an active subscription at the moment. To
                      unlock the full experience, check out our subscription
                      plans:
                    </p>
                    <Link href="/pricing">
                      <Button>Pricing Page</Button>
                    </Link>
                  </div>
                </Card>
              )}
            </>

            <CloseAccountCard
              canCloseAccount={canCloseAccount}
              deleteUser={deleteUser}
            />
          </div>
        </Container>
      )}
    </>
  );
}
