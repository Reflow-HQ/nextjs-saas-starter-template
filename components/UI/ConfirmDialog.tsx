import { Modal, ModalOptions } from "@/components/UI/Modal";

export interface ConfirmDialogOptions extends Omit<ModalOptions, "children"> {
  bodyText?: string;
}

export default function ConfirmDialog({
  title = "Are you sure?",
  bodyText,
  isOpen,
  setIsOpen,
  size = "sm",
  confirmButton = {
    show: true,
    text: "OK",
    appearance: {
      style: "primary",
      size: "lg",
    },
  },
  cancelButton = {
    show: true,
    text: "Cancel",
    appearance: {
      style: "outline",
      size: "lg",
    },
  },
}: ConfirmDialogOptions) {
  return (
    <Modal
      title={title}
      size={size}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      confirmButton={confirmButton}
      cancelButton={cancelButton}
    >
      {bodyText && (
        <p className="mb-5 text-gray-800 dark:text-white md:mb-0">{bodyText}</p>
      )}
    </Modal>
  );
}
