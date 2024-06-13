"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { v4 as uuidv4 } from "uuid";
import clsx from "clsx";

type AccordionItem = {
  title: string;
  description: string | React.ReactNode;
};

export default function Accordion({
  style = "default",
  items,
}: {
  style?: "default" | "primary";
  items: AccordionItem[];
}) {
  return (
    <div className="mx-auto w-full max-w-[600px] rounded-2xl">
      {items.map((item) => (
        <Disclosure key={uuidv4()}>
          {({ open }) => (
            <>
              <DisclosureButton
                className={clsx(
                  "mb-2 flex w-full items-center justify-between rounded-lg px-6 py-3 text-left font-medium focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75",
                  {
                    "bg-blue-100 text-blue-900 hover:bg-blue-200 dark:bg-gray-700 dark:text-blue-300":
                      style === "primary",
                    "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-white":
                      style === "default",
                  },
                )}
              >
                <span>{item.title}</span>
                {open ? <BiChevronUp size={24} /> : <BiChevronDown size={24} />}
              </DisclosureButton>
              <DisclosurePanel className="mb-4 px-4 py-2 text-gray-600 dark:text-gray-300">
                {item.description}
              </DisclosurePanel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
}
