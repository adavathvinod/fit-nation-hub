import { motion } from "framer-motion";
import { Dumbbell, Heart, Users, Flame, Music, Sparkles } from "lucide-react";

const services = [
  {
    icon: Dumbbell,
    title: "Strength Training",
    description: "Build muscle and power with our premium weight training equipment and expert guidance.",
    color: "from-primary to-lime-glow",
  },
  {
    icon: Flame,
    title: "CrossFit",
    description: "High-intensity functional training to boost your overall fitness and endurance.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Heart,
    title: "Cardio Zone",
    description: "State-of-the-art treadmills, cycles, and ellipticals for heart-pumping workouts.",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: Music,
    title: "Zumba Classes",
    description: "Dance your way to fitness with our energetic Zumba sessions.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Sparkles,
    title: "Yoga & Meditation",
    description: "Find balance and flexibility with our certified yoga instructors.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Users,
    title: "Personal Training",
    description: "One-on-one sessions tailored to your specific fitness goals.",
    color: "from-primary to-lime-glow",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-32 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-cyber-grid bg-cyber-grid opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Our Services</h2>
          <div className="cyber-line mt-4" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Transform your body and mind with our comprehensive fitness programs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                y: -10, 
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="glass-card p-8 group cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Icon Container */}
              <motion.div
                whileHover={{ scale: 1.1, rotateZ: 5 }}
                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 glow-lime`}
              >
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-primary/50 transition-colors pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
