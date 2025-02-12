import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { EVENT_API_ENDPOINT } from "@/utils/apiendpoint";

const Marquee = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    let getAllEvents = async () => {
      try {
        let res = await axios.get(`${EVENT_API_ENDPOINT}/all`, { withCredentials: true });

        if (res.data.success) {
          setEvents(res.data.events);
        }
      }
      catch (e) {
        toast.error(e?.response?.data?.message);
      }
    }

    getAllEvents();
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
        {events.map((event) => (
          <span key={event._id} className="sm:text-lg max-sm:text-sm font-semibold text-red-600">
            {event.message}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
