import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

interface PricingSectionProps {
  onBookClick: () => void;
}

const pricingPlans = [
  {
    name: "Starter",
    price: "₹1,500",
    period: "/month",
    features: [
      "Gym Access (5:30 AM - 10:30 PM)",
      "Basic Equipment Usage",
      "Locker Facility",
      "Fitness Assessment",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "₹2,500",
    period: "/month",
    features: [
      "All Starter Features",
      "Group Classes (Zumba, Yoga)",
      "Personal Training (2 sessions)",
      "Diet Consultation",
      "Priority Booking",
    ],
    popular: true,
  },
  {
    name: "Elite",
    price: "₹4,000",
    period: "/month",
    features: [
      "All Pro Features",
      "Unlimited Personal Training",
      "CrossFit Sessions",
      "Premium Locker",
      "Guest Passes (2/month)",
      "24/7 Support",
    ],
    popular: false,
  },
];

const PricingSection = ({ onBookClick }: PricingSectionProps) => {
  return (
    <section id="pricing" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-charcoal-light/50 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Membership Plans</h2>
          <div className="cyber-line mt-4" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Choose the perfect plan for your fitness journey
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className={`relative glass-card p-8 flex flex-col ${
                plan.popular ? "border-primary border-2 glow-lime" : ""
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-display font-bold rounded-full flex items-center gap-1"
                >
                  <Star className="w-3 h-3" /> MOST POPULAR
                </motion.div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl md:text-5xl font-display font-bold text-primary">
                  {plan.price}
                </span>
                <span className="text-muted-foreground text-sm">{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                onClick={onBookClick}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={plan.popular ? "lime-btn w-full" : "neuro-btn w-full text-center"}
              >
                Join Now
              </motion.button>

              {/* Floating Effect */}
              {plan.popular && (
                <motion.div
                  animate={{ 
                    boxShadow: [
                      "0 0 30px hsla(75, 100%, 50%, 0.2)",
                      "0 0 50px hsla(75, 100%, 50%, 0.4)",
                      "0 0 30px hsla(75, 100%, 50%, 0.2)",
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Free Trial CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Not sure yet? Try us out first!
          </p>
          <button onClick={onBookClick} className="neuro-btn">
            Get Free Trial →
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
