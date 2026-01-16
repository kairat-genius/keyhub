import { motion } from 'motion/react';
import { Check, Calendar, Crown } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

const plans = [
  {
    name: 'Monthly',
    icon: Calendar,
    price: '49',
    period: 'per month',
    description: 'Perfect for trying out',
    features: [
      'Unlimited access to all procedures',
      '500+ car models covered',
      'Step-by-step photo instructions',
      'Wiring diagrams & pin codes',
      'Video tutorials library',
      'Mobile & desktop access',
      'Email support'
    ],
    gradient: 'from-indigo-600 to-purple-600',
    popular: false,
    savePercent: null
  },
  {
    name: 'Annual',
    icon: Crown,
    price: '39',
    period: 'per month',
    billedAnnually: '$468 billed annually',
    description: 'Best value for professionals',
    features: [
      'Everything in Monthly, plus:',
      'Save 20% compared to monthly',
      'Priority email support',
      'Early access to new features',
      'Downloadable PDF procedures',
      'Advanced search filters',
      'Bookmark favorite procedures',
      'No price increases for 12 months'
    ],
    gradient: 'from-violet-600 to-indigo-600',
    popular: true,
    savePercent: '20'
  }
];

export function NewPricing() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-violet-100 rounded-full text-violet-600 text-sm mb-4"
          >
            Pricing
          </motion.div>
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
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: plan.popular ? 1.02 : 1 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm rounded-full shadow-lg z-10">
                    Most Popular - Save {plan.savePercent}%
                  </div>
                )}

                <div className={`h-full bg-white rounded-2xl border-2 ${plan.popular ? 'border-violet-500 shadow-2xl' : 'border-gray-200 hover:border-violet-200'} transition-all duration-300 overflow-hidden`}>
                  <div className="p-8">
                    {/* Icon */}
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${plan.gradient} mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Plan name */}
                    <h3 className="text-2xl mb-2">{plan.name}</h3>
                    <p className="text-gray-600 text-sm mb-6">{plan.description}</p>

                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl">$</span>
                        <span className="text-5xl bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                          {plan.price}
                        </span>
                      </div>
                      <div className="text-gray-500 text-sm mt-1">{plan.period}</div>
                      {plan.billedAnnually && (
                        <div className="text-gray-400 text-xs mt-1">{plan.billedAnnually}</div>
                      )}
                    </div>

                    {/* CTA Button */}
                    <Button
                      className={`w-full mb-8 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700'
                          : ''
                      }`}
                      variant={plan.popular ? 'default' : 'outline'}
                    >
                      Subscribe Now
                    </Button>

                    {/* Features */}
                    <div className="space-y-3">
                      {plan.features.map((feature, fIndex) => (
                        <motion.div
                          key={fIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + fIndex * 0.05 }}
                          className="flex items-start gap-3"
                        >
                          <div className={`flex-shrink-0 w-5 h-5 bg-gradient-to-r ${plan.gradient} rounded-full flex items-center justify-center mt-0.5`}>
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom gradient bar */}
                  {plan.popular && (
                    <div className={`h-1 bg-gradient-to-r ${plan.gradient}`} />
                  )}
                </div>
              </motion.div>
            );
          })}
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
              <Check className="w-4 h-4 text-green-600" />
              <span>Instant access</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-600" />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-600" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}