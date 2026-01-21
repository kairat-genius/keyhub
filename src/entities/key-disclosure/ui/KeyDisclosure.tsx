import Icon from "@/shared/icon";
import type { KeyDisclosureType } from "../model/key-disclosure.type";
import { useState } from "react";
import { cn } from "@/shared/utils/clsx";
import Badge from "@/shared/ui/badge";

const KeyDisclosure = ({ img, title, notes, status }: KeyDisclosureType) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-lg">
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        className="cursor-pointer w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          {img && (
            <img
              src={img}
              alt={title}
              className="size-12 object-contain bg-gray-100 rounded flex items-center justify-center"
            />
          )}
          <div className="text-left flex flex-col gap-2">
            <div className="font-medium text-sm md:text-base tracking-wide">
              {title}
            </div>
            <Badge className="bg-green-100 text-green-800">{status}</Badge>
          </div>
        </div>
        <Icon
          icon="chevron"
          className={cn(
            "size-5 text-gray-400 transition-transform rotate-90 shrink-0",
            isOpen && "-rotate-90",
          )}
        />
      </button>
      {isOpen && (
        <div className="px-4 pb-4 border-t border-gray-200">
          <p className="text-sm text-gray-600 mt-3 whitespace-pre-line">
            Note:
            <br />
            {notes}
          </p>
        </div>
      )}
    </div>
  );
};

export default KeyDisclosure;
