import { Fragment } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
  Transition,
} from "@headlessui/react";
import { BiCheck, BiChevronDown } from "react-icons/bi";

type Item = {
  label: string;
  value: string;
};

export default function Select({
  items,
  selected,
  setSelected,
}: {
  items: Item[];
  selected?: Item;
  setSelected: (item: Item) => void;
}) {
  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative mt-1">
        <ListboxButton className="relative w-full min-w-0 cursor-default rounded-lg border border-gray-300 bg-transparent px-5 py-2.5 text-left text-gray-700 focus:outline-none focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-offset-1 dark:border-gray-500 dark:text-white">
          <span className="block truncate">{selected?.label || ""}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <BiChevronDown
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </ListboxButton>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ListboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
            {items.map((item, itemIndex) => (
              <ListboxOption
                key={itemIndex}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                  }`
                }
                value={item}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {item.label}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                        <BiCheck className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Transition>
      </div>
    </Listbox>
  );
}
