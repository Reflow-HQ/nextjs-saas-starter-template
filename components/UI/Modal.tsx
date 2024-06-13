import { Fragment, ReactNode } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import clsx from "clsx";
import { useState } from "react";

import { Button, ButtonStyleProps } from "@/components/UI/Button";

interface ButtonOptions {
  show: boolean;
  text?: string;
  appearance?: ButtonStyleProps;
  onClick?: () => void;
}

export interface ModalOptions {
  title: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  size?: "lg" | "md" | "sm";
  confirmButton?: ButtonOptions;
  cancelButton?: ButtonOptions;
  children: ReactNode;
}

export function Modal({
  title,
  children,
  isOpen,
  setIsOpen,
  size = "md",
  confirmButton = {
    show: true,
    text: "OK",
    appearance: {
      style: "primary",
    },
  },
  cancelButton = {
    show: true,
    text: "Cancel",
    appearance: {
      style: "outline",
    },
  },
}: ModalOptions) {
  const [isLoading, setIsLoading] = useState(false);

  const onConfirm = async () => {
    setIsLoading(true);

    try {
      confirmButton.onClick && (await confirmButton.onClick());
    } catch (e) {
      setIsLoading(false);
      throw e;
    }

    setIsLoading(false);
    setIsOpen(false);
  };

  const onCancel = async () => {
    cancelButton.onClick && (await cancelButton.onClick());
    setIsOpen(false);
  };

  const showButtons = confirmButton.show || cancelButton.show;

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setIsOpen}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 sm:items-center sm:p-0">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel
                className={clsx(
                  "sm:max-w-lg relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all dark:bg-gray-800 sm:my-8 sm:w-full",
                  size === "lg" && "max-w-[800px]",
                  size === "sm" && "max-w-[450px]",
                  !size || (size == "md" && "max-w-[600px]"),
                )}
              >
                <div className="bg-white px-7 pb-4 pt-5 dark:bg-gray-800 md:p-10">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 w-full sm:mt-0">
                      <DialogTitle
                        as="h3"
                        className="mb-5 text-2xl font-bold text-gray-900 dark:text-white"
                      >
                        {title}
                      </DialogTitle>
                      <div className="mt-2">{children}</div>
                    </div>
                  </div>
                </div>
                {showButtons && (
                  <div className="flex gap-3 px-7 pb-7 md:px-10 md:pb-10">
                    {confirmButton.show && (
                      <Button
                        appearance={confirmButton.appearance}
                        onClick={onConfirm}
                        disabled={isLoading}
                      >
                        {confirmButton.text}
                      </Button>
                    )}
                    {cancelButton.show && (
                      <Button
                        appearance={cancelButton.appearance}
                        onClick={onCancel}
                        disabled={isLoading}
                      >
                        {cancelButton.text}
                      </Button>
                    )}
                  </div>
                )}
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
