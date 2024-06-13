import Accordion from "@/components/UI/Accordion";

const items = [
  {
    title: "Is this starter kit free?",
    description: (
      <>
        The starter kit is free and can be used and modified by everyone. It is
        also open-source and available on{" "}
        <a className="text-link" href="https://github.com/danny-mark/subflow">
          GitHub
        </a>
        .
      </>
    ),
  },
  {
    title: "How often is the starter kit updated?",
    description: (
      <>
        We strive to maintain and improve the starter kit continuously. Updates
        are released periodically to integrate new features, update to the
        latest Next.js version and address bugs.
      </>
    ),
  },
  {
    title: "How can I contribute to this starter kit?",
    description: (
      <>
        All contributions are welcome! You can contribute by submitting bug
        reports, feature requests, or pull requests on{" "}
        <a className="text-link" href="https://github.com/danny-mark/subflow">
          GitHub
        </a>
        .
      </>
    ),
  },
  {
    title: "Is technical support available?",
    description: (
      <>
        While we don't offer dedicated technical support for the starter kit,
        you can seek help and guidance from the community on our{" "}
        <a
          className="text-link"
          href="https://github.com/danny-mark/subflow/issues"
        >
          GitHub Discussions
        </a>
        .
      </>
    ),
  },
  {
    title: "I have another question.",
    description: (
      <>
        Write to us directly at{" "}
        <a className="text-link" href="mailto:hi@reflow.com">
          hi@reflow.com
        </a>
        . We'd love to hear your feedback and questions!
      </>
    ),
  },
];

export default function FAQ() {
  return (
    <div
      className="flex w-full flex-col place-items-center bg-gray-50 p-5 py-24 dark:bg-gray-900"
      id="faq"
    >
      <p className="mb-5 rounded-full border border-blue-500 px-3 py-1 text-sm text-blue-500">
        FAQ
      </p>
      <h2 className="mb-8 text-3xl font-bold sm:mb-12 sm:text-4xl">
        Common questions
      </h2>
      <Accordion items={items} />
    </div>
  );
}
