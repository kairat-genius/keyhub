import { motion } from "motion/react";
import type { PricingCardType } from "../model/pricing-card.type";
import Icon from "@/shared/icon";
import { cn } from "@/shared/utils/clsx";

interface PricingCardProps extends PricingCardType {
  index: number;
}

const PricingCard = ({
  index,
  name,
  description,
  price,
  period,
  icon,
  gradient,
  popular,
  savePercent,
  billedAnnually,
  features,
}: PricingCardProps) => {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10, scale: popular ? 1.02 : 1 }}
      className="relative"
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-linear-to-r from-orange-600 to-amber-600 text-white text-sm rounded-full shadow-lg z-10">
          Most Popular - Save {savePercent}%
        </div>
      )}

      <div
        className={cn(
          "h-full bg-white rounded-2xl border-2 transition-all duration-300 overflow-hidden",
          popular
            ? "border-orange-500 shadow-2xl"
            : "border-gray-200 hover:border-orange-200"
        )}
      >
        <div className="p-8">
          {/* Icon */}
          <div
            className={cn(
              "inline-flex p-3 rounded-xl bg-linear-to-r mb-4",
              gradient
            )}
          >
            <Icon icon={icon} className="w-6 h-6 text-white" />
          </div>

          {/* Plan name */}
          <h3 className="text-2xl mb-2">{name}</h3>
          <p className="text-gray-600 text-sm mb-6">{description}</p>

          {/* Price */}
          <div className="mb-6">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl">$</span>
              <span className="text-5xl bg-linear-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                {price}
              </span>
            </div>
            <div className="text-gray-500 text-sm mt-1">{period}</div>
            {billedAnnually && (
              <div className="text-gray-400 text-xs mt-1">{billedAnnually}</div>
            )}
          </div>

          {/* CTA Button */}
          <button
            className={cn(
              "w-full mb-8 rounded-md text-sm font-medium text-center h-9 px-4 py-",
              popular ?
                "bg-linear-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-primary-foreground" : "border bg-background text-foreground hover:bg-accent hover:text-accent-foreground"
            )}
            type="button"
          >
            Subscribe Now
          </button>

          {/* Features */}
          <div className="space-y-3">
            {features.map((feature, fIndex) => (
              <motion.div
                key={fIndex}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + fIndex * 0.05 }}
                className="flex items-start gap-3"
              >
                <div
                  className={cn(
                    "shrink-0 w-5 h-5 bg-linear-to-r rounded-full flex items-center justify-center mt-0.5",
                    gradient
                  )}
                >
                  <Icon icon="check" className="size-3 text-white" />
                </div>
                <span className="text-gray-700 text-sm">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom gradient bar */}
        {popular && <div className={cn("h-1 bg-linear-to-r", gradient)} />}
      </div>
    </motion.div>
  );
};

export default PricingCard;
