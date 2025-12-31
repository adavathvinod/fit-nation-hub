import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";
import gymInterior from "@/assets/gym-interior.png";
import gymOffice from "@/assets/gym-office.png";
import galleryGroup from "@/assets/gallery-group.png";
import galleryVisitors from "@/assets/gallery-visitors.png";
import galleryWeights from "@/assets/gallery-weights.png";
import galleryYoga from "@/assets/gallery-yoga.png";
import galleryTeam from "@/assets/gallery-team.png";

const galleryImages = [
  { src: galleryGroup, alt: "Group Training Session" },
  { src: galleryWeights, alt: "Weight Training Area" },
  { src: galleryVisitors, alt: "Gym Members" },
  { src: galleryYoga, alt: "Yoga & Flexibility Zone" },
  { src: galleryTeam, alt: "Our Team" },
  { src: gymInterior, alt: "Gym Interior" },
  { src: gymOffice, alt: "Consultation Office" },
];

const GallerySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      id="gallery"
      ref={containerRef}
      className="py-20 md:py-32 relative overflow-hidden"
    >
      <motion.div style={{ opacity }} className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Our Facility</h2>
          <div className="cyber-line mt-4" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            State-of-the-art equipment at KDR Towers, designed for champions
          </p>
        </motion.div>

        {/* Masonry Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02, 
                rotateY: 5, 
                z: 50,
                transition: { duration: 0.3 }
              }}
              onClick={() => setSelectedImage(image.src)}
              className={`relative overflow-hidden rounded-2xl cursor-pointer tilt-card ${
                index === 0 || index === 3 ? "md:row-span-2" : ""
              }`}
              style={{ transformStyle: "preserve-3d" }}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className={`w-full object-cover ${
                  index === 0 || index === 3 ? "h-[400px] md:h-full" : "h-[200px] md:h-[300px]"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-sm font-display text-primary">{image.alt}</p>
              </div>
              {/* Hover Glow Effect */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 border-2 border-primary rounded-2xl pointer-events-none"
                style={{ boxShadow: "inset 0 0 30px hsla(75, 100%, 50%, 0.3)" }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-xl p-4"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-2 text-foreground hover:text-primary transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={selectedImage}
            alt="Gallery Preview"
            className="max-w-full max-h-[90vh] object-contain rounded-2xl"
          />
        </motion.div>
      )}
    </section>
  );
};

export default GallerySection;
