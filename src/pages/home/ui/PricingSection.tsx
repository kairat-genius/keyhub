import { motion } from "motion/react";
import Icon from "@/shared/icon";
import PricingCard from "@/entities/pricing-card";
import { pricingPlans } from "../model/pricing-plans";
import AnimatedBadge from "@/shared/ui/animated-badge";

const PricingSection = () => {
  return (
    <section
      id="pricing"
      className="py-24 bg-linear-to-br from-gray-50 to-white"
    >
      <div className="container">
        <div className="text-center mb-16">
          <AnimatedBadge className="bg-orange-100 text-orange-600">
            Pricing
          </AnimatedBadge>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl mb-4"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Choose the plan that works best for you. Cancel anytime.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, i) => (
            <PricingCard key={i} index={i} {...plan} />
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center space-y-4"
        >
          <p className="text-gray-600">Secure payment. Cancel anytime.</p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Icon icon="check" className="size-4 text-green-600" />
              <span>Instant access</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon icon="check" className="size-4 text-green-600" />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon icon="check" className="size-4 text-green-600" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
