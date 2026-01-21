import { testimonials } from "../model/testimonials";
import { motion } from "motion/react";
import ReviewCard from "@/entities/review-card";
import AnimatedBadge from "@/shared/ui/animated-badge";

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="container py-24">
        <div className="text-center mb-16">
          <AnimatedBadge className="bg-orange-100 text-orange-600">
            Testimonials
          </AnimatedBadge>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl mb-4"
          >
            Trusted by Professionals
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Join thousands of locksmiths and technicians who rely on our
            database every day
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <ReviewCard key={i} {...testimonial} index={i} />
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8 text-gray-400"
        >
          <div className="text-center">
            <div className="text-3xl bg-linear-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-1">
              4.9/5
            </div>
            <div className="text-sm">Average Rating</div>
          </div>
          <div className="h-12 w-px bg-gray-300" />
          <div className="text-center">
            <div className="text-3xl bg-linear-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-1">
              10K+
            </div>
            <div className="text-sm">Active Users</div>
          </div>
          <div className="h-12 w-px bg-gray-300" />
          <div className="text-center">
            <div className="text-3xl bg-linear-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-1">
              98%
            </div>
            <div className="text-sm">Would Recommend</div>
          </div>
        </motion.div>
    </section>
  );
};

export default TestimonialsSection;
