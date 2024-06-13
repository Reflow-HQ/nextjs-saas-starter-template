"use client";

import {
  Menu,
  MenuItems,
  MenuItem,
  MenuButton,
  Transition,
} from "@headlessui/react";
import React, { Fragment, ReactNode } from "react";
import Link from "next/link";
import clsx from "clsx";
import { v4 as uuidv4 } from "uuid";

interface Props {
  menuButton: ReactNode;
  menuItems: DropdownMenuItem[];
}

export type DropdownMenuItem = {
  icon?: React.ReactNode;
  label: string;
  disabled?: boolean;
  onClick?: () => void;
  href?: string;
};

export function Dropdown({ menuButton, menuItems }: Props) {
  const onClick = (cb?: () => void) => {
    return (event: React.MouseEvent<HTMLButtonElement>) => {
      event?.stopPropagation();
      event?.nativeEvent?.stopImmediatePropagation();
      cb && cb();
    };
  };

  return (
    <Menu as="div" className="relative">
      <div className="flex items-center justify-center">
        <MenuButton>{menuButton}</MenuButton>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems className="absolute right-0 z-50 mt-2 w-36 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
          <div className="px-1 py-1">
            {menuItems?.map((item) => (
              <MenuItem key={uuidv4()} disabled={item.disabled}>
                {({ focus }) => {
                  const commonClasses = clsx(
                    focus && "bg-gray-100",
                    item.disabled ? "text-gray-600" : "text-gray-900",
                    "group flex w-full items-center gap-1 rounded-md px-2 py-2 text-sm",
                  );

                  return item.href ? (
                    <Link href={item.href} className={commonClasses}>
                      {item.icon && (
                        <div className="text-blue-500">{item.icon}</div>
                      )}
                      <span className="ml-1 overflow-hidden text-ellipsis">
                        {item.label}
                      </span>
                    </Link>
                  ) : (
                    <button
                      className={commonClasses}
                      onClick={onClick(item.onClick)}
                    >
                      {item.icon && (
                        <div className="text-blue-500">{item.icon}</div>
                      )}
                      <span className="ml-1 overflow-hidden text-ellipsis">
                        {item.label}
                      </span>
                    </button>
                  );
                }}
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  );
}
