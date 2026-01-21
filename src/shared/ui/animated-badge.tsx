import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "../utils/clsx";

interface AnimatedBadgeProps {
  children: ReactNode;
  className?: string;
  animateOnView?: boolean;
};

const AnimatedBadge = ({ children, className }: AnimatedBadgeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-4",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedBadge;
