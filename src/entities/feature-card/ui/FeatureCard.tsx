import { motion } from "motion/react";
import type { FeatureCardType } from "../model/feature-card.type";
import { cn } from "@/shared/utils/clsx";
import Icon from "@/shared/icon";

interface FeatureCardProps extends FeatureCardType {
  index: number;
}

const FeatureCard = ({gradient, icon, title, description, index}: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="relative group"
    >
      <div className="h-full p-8 bg-linear-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:border-violet-200 transition-all duration-300 hover:shadow-xl">
        <div
          className={cn(
            "inline-flex p-3 rounded-xl bg-linear-to-r mb-4",
            gradient
          )}
        >
          <Icon icon={icon} className="size-6 text-white" />
        </div>
        <h3 className="text-xl mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>

        <div
          className={cn(
            "absolute inset-0 bg-linear-to-r opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300",
            gradient
          )}
        />
      </div>
    </motion.div>
  );
};

export default FeatureCard;
