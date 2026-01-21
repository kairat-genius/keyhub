import Icon from "@/shared/icon";
import AnimatedBadge from "@/shared/ui/animated-badge";
import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-orange-50 via-white to-amber-50">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-linear-to-r from-orange-200/30 to-amber-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-linear-to-r from-orange-200/30 to-amber-200/30 rounded-full blur-3xl"
        />
      </div>

      <div className="container py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}

          <AnimatedBadge className="bg-white/80 backdrop-blur-sm border-orange-200 mb-8 border">
            <Icon icon="sparkles" className="size-4 text-orange-600" />
            <span className="text-sm text-gray-600">
              Trusted by 10,000+ Auto Locksmiths Worldwide
            </span>
          </AnimatedBadge>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl mb-6"
          >
            <span className="bg-linear-to-r from-orange-600 via-amber-600 to-orange-600 bg-clip-text text-transparent">
              Master Key Programming
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            Complete database of verified instructions for automotive key
            programming, coding, repair & diagnostics. Work faster. Work
            smarter.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <button className="flex justify-center items-center h-10 rounded-md text-primary-foreground bg-linear-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-lg px-8 py-6 group">
              Get Started Now
              <Icon
                icon="arrow"
                className="ml-2 size-5 group-hover:translate-x-1 transition-transform"
              />
            </button>
            <button className="flex justify-center items-center h-10 rounded-md border bg-background text-foreground hover:bg-accent hover:text-accent-foreground text-lg px-8 py-6 group">
              <Icon
                icon="play"
                className="mr-2 size-5 group-hover:scale-110 transition-transform"
              />
              Watch Demo
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div>
              <div className="text-3xl md:text-4xl bg-linear-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-2">
                500+
              </div>
              <div className="text-sm text-gray-600">Car Models</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl bg-linear-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-2">
                2,000+
              </div>
              <div className="text-sm text-gray-600">Procedures</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl bg-linear-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-sm text-gray-600">Access</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="size-1.5 bg-gray-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
