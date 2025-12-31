import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

interface QuickBookButtonProps {
  onClick: () => void;
}

const QuickBookButton = ({ onClick }: QuickBookButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed left-4 bottom-4 md:left-1/2 md:-translate-x-1/2 z-50 lime-btn flex items-center gap-2 text-sm md:text-base"
    >
      <Calendar className="w-5 h-5" />
      <span className="font-display">Quick Book</span>
    </motion.button>
  );
};

export default QuickBookButton;
