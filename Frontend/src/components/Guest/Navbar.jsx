import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  let navigate = useNavigate();

  return (
    <nav className="relative bg-white " >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-xl font-bold text-gray-900">
            <span className="cursor-pointer"><span onClick={() => navigate("/")} className="text-red-500">Ved Mata</span> Temple</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-10">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="#" onClick={() => toast.success("We are working on it.")}>Donation</Link>
            <Link to="/gallary">Gallary</Link>
            <Link to="/contact">Contact Us</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} > {isOpen ? <X size={24} /> : <Menu size={24} />}  </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`lg:hidden bg-white shadow-md ${isOpen ? "block" : "hidden"}`}
      >
        <div className="flex flex-col items-center space-y-4 py-4">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="#" onClick={() => toast.success("We are working on it.")}>Donation</Link>
          <Link to="/gallary">Gallary</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </motion.div>
    </nav>
  );
}

