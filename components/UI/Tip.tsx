import { BiQuestionMark } from "react-icons/bi";
import { Tooltip } from "react-tooltip";

interface Props {
  id: string;
  description: string;
}

export default function Tip({ id, description }: Props) {
  return (
    <span
      className="border rounded-full border-gray-600 dark:border-gray-300"
      data-tooltip-id={id}
      data-tooltip-content={description}
    >
      <BiQuestionMark className="hidden sm:block" size={13} />
      <BiQuestionMark className="block sm:hidden" size={15} />
      <Tooltip
        id={id}
        className="dark:bg-white dark:text-gray-900"
        style={{ maxWidth: "calc(100% - 20px)", width: "auto" }}
      />
    </span>
  );
}
