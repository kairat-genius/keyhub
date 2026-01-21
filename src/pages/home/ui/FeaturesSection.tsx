import { motion } from "motion/react";
import { features } from "../model/features";
import FeatureCard from "@/entities/feature-card";
import AnimatedBadge from "@/shared/ui/animated-badge";

const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24">
        <div className="text-center mb-16">
          <AnimatedBadge className="bg-orange-100 text-orange-600">Features</AnimatedBadge>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl mb-4"
          >
            Everything You Need in One Place
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Professional tools and resources to make every key programming job
            faster and more accurate
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <FeatureCard key={i} index={i} {...feature} />
          ))}
        </div>
    </section>
  );
};

export default FeaturesSection;
