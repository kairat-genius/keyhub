import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Michael Johnson',
    role: 'Automotive Locksmith',
    company: 'KeyMasters Inc.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    content: 'This database has been a game-changer for my business. I can find any procedure I need in seconds and complete jobs 50% faster.',
    rating: 5
  },
  {
    name: 'Sarah Williams',
    role: 'Service Center Manager',
    company: 'AutoTech Solutions',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    content: 'The video tutorials and detailed diagrams make training new technicians so much easier. Worth every penny.',
    rating: 5
  },
  {
    name: 'David Chen',
    role: 'Mobile Locksmith',
    company: 'Quick Key Services',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    content: 'As a mobile locksmith, having instant access to procedures on my phone is invaluable. This platform has increased my confidence on every job.',
    rating: 5
  }
];

export function NewTestimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-indigo-100 rounded-full text-indigo-600 text-sm mb-4"
          >
            Testimonials
          </motion.div>
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
            Join thousands of locksmiths and technicians who rely on our database every day
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-violet-200 transition-all duration-300 hover:shadow-xl"
            >
              <Quote className="w-10 h-10 text-violet-200 mb-4" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role} @ {testimonial.company}
                  </div>
                </div>
              </div>

              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 opacity-0 hover:opacity-5 rounded-2xl transition-opacity duration-300 pointer-events-none" />
            </motion.div>
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
            <div className="text-3xl bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent mb-1">
              4.9/5
            </div>
            <div className="text-sm">Average Rating</div>
          </div>
          <div className="h-12 w-px bg-gray-300" />
          <div className="text-center">
            <div className="text-3xl bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent mb-1">
              10K+
            </div>
            <div className="text-sm">Active Users</div>
          </div>
          <div className="h-12 w-px bg-gray-300" />
          <div className="text-center">
            <div className="text-3xl bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent mb-1">
              98%
            </div>
            <div className="text-sm">Would Recommend</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}