import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Simulating fetching data from backend
    setEvents([
      "Maha Shivratri Celebrations – Special Pooja at 6 PM Today",
      "Annual Rath Yatra on March 10",
      "Temple Anniversary Celebrations on April 5 - Join Us!",
    ]);
  }, []);

  return (
    <div className="w-full overflow-hidden bg-gray-100 py-1 ">
      <motion.div
        className="flex max-sm:gap-5 sm:gap-10 min-w-max whitespace-nowrap"
        animate={{ x: ["100%", "-100%"] }} // Moves from right to left
        transition={{
          ease: "linear",
          duration: 20, // Adjust speed
          repeat: Infinity,
        }}
      >
        {events.map((event, index) => (
          <span key={index} className="sm:text-lg max-sm:text-sm font-semibold text-red-600">
            {event}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
