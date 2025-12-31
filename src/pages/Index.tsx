import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GallerySection from "@/components/GallerySection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import LocationSection from "@/components/LocationSection";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import QuickBookButton from "@/components/QuickBookButton";
import BookingModal from "@/components/BookingModal";

const Index = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection onBookClick={() => setIsBookingOpen(true)} />
      <GallerySection />
      <ServicesSection />
      <PricingSection onBookClick={() => setIsBookingOpen(true)} />
      <LocationSection />
      <ReviewsSection />
      <Footer />
      
      {/* Floating Elements */}
      <FloatingButtons />
      <QuickBookButton onClick={() => setIsBookingOpen(true)} />
      
      {/* Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
};

export default Index;
