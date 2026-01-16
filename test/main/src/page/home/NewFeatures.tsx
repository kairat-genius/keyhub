import { motion } from 'motion/react';
import { Key, BookOpen, Video, Search, Clock, Shield } from 'lucide-react';

const features = [
  {
    icon: Key,
    title: 'Key Programming Guides',
    description: 'Step-by-step instructions for programming keys, transponders, and remote controls for all major car brands.',
    gradient: 'from-violet-500 to-purple-500'
  },
  {
    icon: BookOpen,
    title: 'Detailed Procedures',
    description: 'Comprehensive database with technical specifications, wiring diagrams, and pin codes for each vehicle model.',
    gradient: 'from-amber-500 to-orange-500'
  },
  {
    icon: Video,
    title: 'Video Tutorials',
    description: 'Watch professional technicians demonstrate complex procedures with clear, high-quality training videos.',
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    icon: Search,
    title: 'Quick Search',
    description: 'Find the exact procedure you need in seconds by searching make, model, year, or specific key type.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Clock,
    title: 'Regular Updates',
    description: 'Database updated weekly with new car models, latest procedures, and industry best practices.',
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    icon: Shield,
    title: 'Verified Information',
    description: 'All procedures tested and verified by certified automotive locksmiths and technicians.',
    gradient: 'from-indigo-500 to-violet-500'
  }
];

export function NewFeatures() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-violet-100 rounded-full text-violet-600 text-sm mb-4"
          >
            Features
          </motion.div>
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
            Professional tools and resources to make every key programming job faster and more accurate
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div className="h-full p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:border-violet-200 transition-all duration-300 hover:shadow-xl">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.gradient} mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                  
                  {/* Hover gradient effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}