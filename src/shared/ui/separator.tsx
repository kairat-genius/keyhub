import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/shared/utils/clsx";

type SeparatorProps = ComponentPropsWithoutRef<"hr"> & {
  decorative?: boolean;
};

const Separator = ({
  className,
  decorative = true,
  ...props
}: SeparatorProps) => {
  return (
    <hr
      role={decorative ? "presentation" : "separator"}
      aria-orientation="horizontal"
      className={cn("bg-border shrink-0 h-px w-full", className)}
      {...props}
    />
  );
};

export default Separator;
