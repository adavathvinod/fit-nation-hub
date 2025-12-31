import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LiveStatus = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const currentMinutes = hours * 60 + minutes;
      
      // Open: 5:30 AM (330 minutes) to 10:30 PM (1350 minutes)
      const openTime = 5 * 60 + 30; // 5:30 AM
      const closeTime = 22 * 60 + 30; // 10:30 PM
      
      setIsOpen(currentMinutes >= openTime && currentMinutes < closeTime);
      setCurrentTime(now);
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const getStatusMessage = () => {
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const currentMinutes = hours * 60 + minutes;
    const closeTime = 22 * 60 + 30;
    
    if (!isOpen) return "CLOSED";
    if (closeTime - currentMinutes <= 60) return "CLOSING SOON";
    return "OPEN NOW";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-3"
    >
      <div className={isOpen ? "status-open" : "status-closed"}>
        <span className={`w-2 h-2 rounded-full ${isOpen ? "bg-green-500 animate-pulse" : "bg-red-500"}`} />
        <span className="text-xs font-display">{getStatusMessage()}</span>
      </div>
      <span className="text-muted-foreground text-xs hidden md:block">
        {currentTime.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })}
      </span>
    </motion.div>
  );
};

export default LiveStatus;
