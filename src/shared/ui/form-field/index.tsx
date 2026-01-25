import { cn } from "@/shared/utils/clsx";
import type { ReactNode } from "react";

type FormFieldProps = {
  id?: string;
  label?: string;
  error?: string | (string | undefined)[];
  children?: ReactNode;
  className?: string;
};

const FormField = ({
  id,
  label,
  error,
  children,
  className,
}: FormFieldProps) => {
  const errorMessages = Array.isArray(error)
    ? error.filter(Boolean)
    : error
      ? [error]
      : [];

  const LabelTag = id ? "label" : "div";

  return (
    <div className={cn("flex flex-col gap-2",className)}>
      {label && (
        <LabelTag
          {...(id ? { htmlFor: id } : {})}
          className="block text-sm font-semibold text-slate-700"
        >
          {label}
        </LabelTag>
      )}
      {children}

      {errorMessages.length > 0 && (
        <div className="mt-1 text-xs text-red-500">
          {errorMessages.map((msg, idx) => (
            <p key={idx}>{msg}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default FormField;
