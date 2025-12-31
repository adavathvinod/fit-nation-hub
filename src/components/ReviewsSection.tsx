import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Rajesh Kumar",
    rating: 5,
    text: "Best gym in Hyderabad! The trainers are incredibly knowledgeable and the equipment is top-notch.",
    date: "2 weeks ago",
  },
  {
    name: "Priya Sharma",
    rating: 5,
    text: "Amazing Zumba classes! Lost 10kg in 3 months. The atmosphere is so motivating!",
    date: "1 month ago",
  },
  {
    name: "Mohammed Ali",
    rating: 5,
    text: "The CrossFit sessions pushed me beyond my limits. Absolutely transformative experience.",
    date: "3 weeks ago",
  },
  {
    name: "Sneha Reddy",
    rating: 5,
    text: "Clean facility, friendly staff, and excellent personal training. Highly recommend!",
    date: "1 week ago",
  },
  {
    name: "Vikram Singh",
    rating: 5,
    text: "The yoga sessions are peaceful and the instructors are very patient. Perfect for beginners.",
    date: "2 months ago",
  },
  {
    name: "Anjali Patel",
    rating: 5,
    text: "Value for money! The Pro membership gives you access to everything you need.",
    date: "1 month ago",
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-light/30 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">What Members Say</h2>
          <div className="cyber-line mt-4" />
          
          {/* Overall Rating */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="mt-8 inline-flex items-center gap-3 glass-card px-8 py-4"
          >
            <span className="text-4xl font-display font-bold text-primary">5.0</span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-muted-foreground text-sm">Google Reviews</span>
          </motion.div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card p-6 relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-foreground/80 text-sm leading-relaxed mb-4">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-lime-glow flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-foreground font-medium text-sm">{review.name}</p>
                    <p className="text-muted-foreground text-xs">{review.date}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://www.google.com/search?q=The+Fit+Nation+Hyderabad+Reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="neuro-btn inline-block"
          >
            See All Reviews on Google →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsSection;
