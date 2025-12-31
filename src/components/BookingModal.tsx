import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Phone, Mail, ArrowRight, ArrowLeft, Check } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type BookingType = "trial" | "membership";

const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  const [step, setStep] = useState(1);
  const [bookingType, setBookingType] = useState<BookingType | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    preferredTime: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    // Here you would typically send the data to a backend
    setIsSubmitted(true);
    setTimeout(() => {
      onClose();
      setStep(1);
      setBookingType(null);
      setFormData({ name: "", phone: "", email: "", preferredTime: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-xl p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-card w-full max-w-lg p-8 relative"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Success State */}
            {isSubmitted ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-center py-12"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="w-20 h-20 rounded-full bg-primary mx-auto flex items-center justify-center mb-6"
                >
                  <Check className="w-10 h-10 text-primary-foreground" />
                </motion.div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                  Booking Confirmed!
                </h3>
                <p className="text-muted-foreground">
                  We'll contact you shortly at {formData.phone}
                </p>
              </motion.div>
            ) : (
              <>
                {/* Step Indicator */}
                <div className="flex items-center justify-center gap-2 mb-8">
                  {[1, 2, 3].map((s) => (
                    <div
                      key={s}
                      className={`w-3 h-3 rounded-full transition-all ${
                        s === step ? "bg-primary w-8" : s < step ? "bg-primary" : "bg-muted"
                      }`}
                    />
                  ))}
                </div>

                {/* Step 1: Choose Type */}
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <h3 className="text-2xl font-display font-bold text-foreground text-center mb-6">
                      Choose Your Path
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <button
                        onClick={() => {
                          setBookingType("trial");
                          setStep(2);
                        }}
                        className={`glass-card p-6 text-left hover:border-primary transition-colors ${
                          bookingType === "trial" ? "border-primary" : ""
                        }`}
                      >
                        <h4 className="font-display font-bold text-foreground mb-2">
                          Free Trial
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          Try our gym for 1 day absolutely free
                        </p>
                      </button>
                      <button
                        onClick={() => {
                          setBookingType("membership");
                          setStep(2);
                        }}
                        className={`glass-card p-6 text-left hover:border-primary transition-colors ${
                          bookingType === "membership" ? "border-primary" : ""
                        }`}
                      >
                        <h4 className="font-display font-bold text-foreground mb-2">
                          Membership
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          Join our fitness family today
                        </p>
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Personal Details */}
                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <h3 className="text-2xl font-display font-bold text-foreground text-center mb-6">
                      Your Details
                    </h3>
                    <div className="space-y-4">
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                          type="text"
                          name="name"
                          placeholder="Full Name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full bg-input border border-border rounded-xl py-3 pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                        />
                      </div>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full bg-input border border-border rounded-xl py-3 pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                        />
                      </div>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                          type="email"
                          name="email"
                          placeholder="Email (Optional)"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-input border border-border rounded-xl py-3 pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                    <div className="flex gap-4 mt-8">
                      <button
                        onClick={() => setStep(1)}
                        className="neuro-btn flex items-center gap-2"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        Back
                      </button>
                      <button
                        onClick={() => setStep(3)}
                        disabled={!formData.name || !formData.phone}
                        className="lime-btn flex-1 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Next
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Schedule */}
                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <h3 className="text-2xl font-display font-bold text-foreground text-center mb-6">
                      Preferred Time
                    </h3>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="w-full bg-input border border-border rounded-xl py-3 px-4 text-foreground focus:border-primary focus:outline-none transition-colors"
                    >
                      <option value="">Select a time slot</option>
                      <option value="morning">Morning (5:30 AM - 9:00 AM)</option>
                      <option value="midday">Midday (9:00 AM - 1:00 PM)</option>
                      <option value="afternoon">Afternoon (1:00 PM - 5:00 PM)</option>
                      <option value="evening">Evening (5:00 PM - 10:30 PM)</option>
                    </select>
                    <div className="flex gap-4 mt-8">
                      <button
                        onClick={() => setStep(2)}
                        className="neuro-btn flex items-center gap-2"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        Back
                      </button>
                      <button
                        onClick={handleSubmit}
                        disabled={!formData.preferredTime}
                        className="lime-btn flex-1 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <Check className="w-4 h-4" />
                        Confirm Booking
                      </button>
                    </div>
                  </motion.div>
                )}
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
