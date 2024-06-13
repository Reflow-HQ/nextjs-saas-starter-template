import Card from "./Card";

type Feature = {
  title: string;
  icon: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: "🚀",
    title: "Get Started in Minutes",
    description:
      "Kickstart your next project and focus on building your application instead of configuring tools.",
  },
  {
    icon: "🔓",
    title: "Secure Authentication",
    description:
      "Comes with seamless Reflow integration for user accounts and social sign in. No coding required!",
  },
  {
    icon: "💳",
    title: "Flexible Subscriptions",
    description:
      "Connect your Reflow PRO account and start selling in no time! Supports flexible pricing plans, free trials, and more. Payments by Stripe or Paddle.",
  },
  {
    icon: "👩‍💻",
    title: "Great for Developers",
    description:
      "A modern tech stack that makes development a breeze! Comes with TypeScript, Prisma and Tailwind configured and ready to go.",
  },
  {
    icon: "⚡",
    title: "Amazing Performance",
    description:
      "Built with Next.js 14 for top-notch performance and great SEO results. Deploy anywhere with confidence and deliver a smooth user experience.",
  },
  {
    icon: "✨",
    title: "Open Source",
    description:
      "Fully customizable and open-source under the MIT license. Grab the code on GitHub and modify or extend the functionality as needed!",
  },
];

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <Card>
      <h3 className="mb-4 text-2xl font-bold">
        <span className="mr-2">{feature.icon}</span> {feature.title}
      </h3>
      <p className="text-secondary mb-4">{feature.description}</p>
    </Card>
  );
}

export default function Features() {
  return (
    <div
      className="flex w-full flex-col place-items-center bg-gray-50 px-5 py-24 dark:bg-gray-900"
      id="features"
    >
      <p className="mb-5 rounded-full border border-blue-500 px-3 py-1 text-sm text-blue-500">
        Features
      </p>
      <h2 className="mb-8 text-3xl font-bold sm:mb-12 sm:text-4xl">
        What's included
      </h2>

      <div className="grid w-full max-w-[1200px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.title}>
            <FeatureCard feature={feature} />
          </div>
        ))}
      </div>
    </div>
  );
}
