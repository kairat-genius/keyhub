import Icon from "@/shared/icon";
import AnimatedBadge from "@/shared/ui/animated-badge";
import { motion } from "motion/react";

const HowItWorks = () => {
  return (
    <section
      id="showcase"
      className="py-24 bg-linear-to-br from-gray-50 to-white"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <AnimatedBadge className="bg-orange-100 text-orange-600">
              How It Works
            </AnimatedBadge>
            <h2 className="text-4xl md:text-5xl mb-6">
              Access Thousands of Verified Procedures
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Simply search for your vehicle make, model, and year. Get instant
              access to detailed step-by-step instructions with diagrams, pin
              codes, and video tutorials.
            </p>

            <div className="space-y-4">
              {[
                "Search by make, model, year, or VIN",
                "View step-by-step photo instructions",
                "Access wiring diagrams & pin locations",
                "Watch video tutorials from experts",
                "Download procedures for offline use",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="shrink-0 w-6 h-6 bg-linear-to-r from-orange-600 to-amber-600 rounded-full flex items-center justify-center">
                    <Icon icon="check" className="size-4 text-white" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Search preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              {/* Search Interface */}
              <div className="p-6 bg-linear-to-r from-orange-600 to-amber-600">
                <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3">
                  <Icon icon="search" className="size-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by make, model, year..."
                    className="flex-1 outline-none text-gray-700"
                    disabled
                  />
                </div>
              </div>

              {/* Results Preview */}
              <div className="p-6 space-y-4">
                {[
                  {
                    make: "Toyota Camry",
                    year: "2020-2023",
                    procedures: "12 procedures",
                  },
                  {
                    make: "Honda Accord",
                    year: "2018-2023",
                    procedures: "15 procedures",
                  },
                  {
                    make: "BMW 3 Series",
                    year: "2019-2023",
                    procedures: "18 procedures",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-orange-200 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-gray-900 mb-1">{item.make}</div>
                        <div className="text-sm text-gray-500">{item.year}</div>
                      </div>
                      <div className="text-sm text-orange-600">
                        {item.procedures}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Glowing effect */}
              <div className="absolute -inset-1 bg-linear-to-r from-orange-600 to-amber-600 rounded-2xl blur-xl opacity-20 -z-10" />
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 hidden lg:block"
            >
              <div className="text-sm text-gray-600 mb-1">Success Rate</div>
              <div className="text-2xl bg-linear-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                98.5%
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 hidden lg:block"
            >
              <div className="text-sm text-gray-600 mb-1">Avg. Time Saved</div>
              <div className="text-2xl bg-linear-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                45min
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
