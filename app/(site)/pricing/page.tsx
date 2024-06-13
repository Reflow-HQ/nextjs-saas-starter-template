import type { Metadata } from "next";

import Container from "@/components/layout/Container";
import PricingTable from "@/components/subscriptions/PricingTable";
import { getPlans } from "@/data/subscription";
import { paymentProvider } from "@/lib/app-config";
import getAuth from "@/auth";

export const metadata: Metadata = {
  title: "Pricing",
};

export default async function PricingPage() {
  const plans = (await getPlans()).data;

  const auth = getAuth();
  const isSubscribed = await auth.isSubscribed();

  return (
    <Container size="md">
      <div className="mb-12">
        <h2 className="mb-5 text-3xl font-bold">Pricing</h2>
        <p className="mb-4 text-lg leading-7">
          SubFlow makes it super easy to setup subscriptions for your app or
          SaaS product.
        </p>

        <p className="mb-8 text-lg leading-7">
          You can try the subscription flow by choosing one of the plans below.
          You will not be charged - payments are handled through Stripe's{" "}
          <a href="https://docs.stripe.com/testing" className="text-link">
            test mode
          </a>{" "}
          checkout.
        </p>

        <div className="text-md text-secondary w-72 rounded bg-slate-100 p-4 text-left dark:bg-gray-600">
          <h6 className="mb-2 text-lg font-semibold">Stripe testing card:</h6>
          <p>
            Number:
            <span className="ml-1 mr-1 font-mono">4242</span>
            <span className="mr-1 font-mono">4242</span>
            <span className="mr-1 font-mono">4242</span>
            <span className="mr-1 font-mono">4242</span>
          </p>
          <p>CVC: Any 3 digits</p>
          <p>Date: Any future date</p>
        </div>

        <PricingTable
          plans={plans}
          paymentProvider={paymentProvider}
          isSubscribed={isSubscribed}
        />
      </div>
    </Container>
  );
}
