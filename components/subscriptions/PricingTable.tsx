"use client";

import CreateSubscriptionButton from "./CreateSubscriptionButton";
import clsx from "clsx";
import { useState } from "react";
import Link from "next/link";
import { Button } from "../UI/Button";

export default function PricingTable({
  plans,
  paymentProvider,
  isSubscribed,
}: {
  plans: Plan[];
  paymentProvider?: string;
  isSubscribed: boolean;
}) {
  const preselectedPlanID: number | null =
    plans.find((plan) => plan.name === "Standard")?.id || null;

  const [selectedPlan, setSelectedPlan] = useState<number | null>(
    preselectedPlanID,
  );

  return (
    <div className="mx-auto mt-24">
      <div className="flex flex-col justify-center gap-6 md:flex-row">
        {plans.map((plan) => (
          <div
            key={plan.id}
            onClick={() => setSelectedPlan(plan.id)}
            className={clsx(
              "card-yellow flex flex-1 flex-col justify-between gap-y-8 rounded-lg border p-6 text-left shadow-lg transition",
              { "scale-110": selectedPlan == plan.id },
            )}
          >
            <div>
              <h3 className="mb-2 text-xl font-semibold">{plan.name}</h3>
              <p>{plan.description}</p>
            </div>

            <div key={plan.prices[0].id} className="">
              <span className="text-2xl font-bold">
                {plan.prices[0].price == 0
                  ? "$0"
                  : plan.prices[0].price_formatted}
              </span>
              <span>/{plan.prices[0].billing_period}</span>
            </div>
            <ul className="">
              {plan.features.map((feature: string, index: number) => (
                <li key={index} className="mb-1">
                  - {feature}
                </li>
              ))}
            </ul>

            {isSubscribed ? (
              <Link href="/profile">
                <Button
                  appearance={
                    selectedPlan === plan.id
                      ? { style: "primary" }
                      : { style: "muted" }
                  }
                >
                  Subscribe
                </Button>
              </Link>
            ) : (
              <CreateSubscriptionButton
                priceID={plan.prices[0].id}
                paymentProvider={paymentProvider}
                appearance={
                  selectedPlan === plan.id
                    ? { style: "primary" }
                    : { style: "muted" }
                }
              >
                Subscribe
              </CreateSubscriptionButton>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

interface Plan {
  object: "plan";
  id: number;
  name: string;
  description: string;
  prices: {
    object: "plan_price";
    id: number;
    price: number;
    price_formatted: string;
    currency: {
      code: string;
      name: string;
      zero_decimal: boolean;
    };
    billing_period: string;
  }[];
  parameters: Record<string, any>;
  features: Record<string, any>;
  trial_days: number;
  subscription_setup_fee: null | {
    name: string;
    description: string;
    price: number;
    price_formatted: string;
    currency: {
      code: string;
      name: string;
      zero_decimal: boolean;
    };
  };
  is_archived: boolean;
  created: number;
}
