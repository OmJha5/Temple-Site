import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="border-b-2 border-b-white sticky top-0 z-10 " >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-xl font-bold text-gray-900">
            Temple
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-10">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/donation">Donation</Link>
            <Link to="/gallary">Gallary</Link>
            <Link to="/contact">Contact Us</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} > {isOpen ? <X size={24} /> : <Menu size={24} />}  </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {
        isOpen && (
            <div className="md:hidden shadow-md">
                <div className="flex flex-col items-center space-y-4 py-4">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
        )
      }
    </nav>
  );
}

