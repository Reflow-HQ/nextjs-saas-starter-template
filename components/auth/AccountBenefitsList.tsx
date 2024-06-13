import { BiCheck } from "react-icons/bi";

type Benefit = {
  title: string;
  description: string;
};

const benefits: Benefit[] = [
  {
    title: "Test Reflow Auth",
    description:
      "Try out the user-friendly authentication provided by Reflow. Accounts in this starter kit are for demo purposes only.",
  },
  {
    title: "No Spam",
    description:
      "Entering an email address may be required during account creation. It will be used for registration purposes only - we never send marketing emails. ",
  },
  {
    title: "We Respect Your Privacy",
    description:
      "You can close your account after you're done testing. We will delete all data collected during registration.",
  },
];

export default function AccountBenefitsList() {
  return (
    <div className="mb-12">
      {benefits.map((benefit) => (
        <div key={benefit.title}>
          <div className="mb-5 flex items-start gap-4 text-left">
            <div className="rounded-xl bg-gray-100 p-1 text-blue-500 dark:bg-gray-700 dark:text-blue-400">
              <BiCheck size={24} />
            </div>
            <div>
              <h6 className="font-semibold">{benefit.title}</h6>
              <p>{benefit.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
