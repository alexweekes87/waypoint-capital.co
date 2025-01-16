import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/5064ef83-bfad-43b5-9ffc-b62be0b670e2.png" 
              alt="Waypoint Capital" 
              className="h-18 w-auto"
            />
          </Link>
          {isMobile ? (
            <button
              onClick={toggleMenu}
              className="md:hidden text-navy p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          ) : (
            <div className="hidden md:flex space-x-12">
              <Link to="/owners" className="text-navy/80 hover:text-navy transition-colors">
                For Owners
              </Link>
              <Link to="/investors" className="text-navy/80 hover:text-navy transition-colors">
                For Investors
              </Link>
              <Link to="/how-we-work" className="text-navy/80 hover:text-navy transition-colors">
                How We Work
              </Link>
              <Link to="/contact" className="text-navy/80 hover:text-navy transition-colors">
                Contact Us
              </Link>
            </div>
          )}
        </div>
        
        {/* Mobile Menu */}
        {isMobile && isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 py-4 animate-fadeIn">
            <div className="flex flex-col space-y-4 px-4">
              <Link 
                to="/owners" 
                className="text-navy/80 hover:text-navy transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                For Owners
              </Link>
              <Link 
                to="/investors" 
                className="text-navy/80 hover:text-navy transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                For Investors
              </Link>
              <Link 
                to="/how-we-work" 
                className="text-navy/80 hover:text-navy transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                How We Work
              </Link>
              <Link 
                to="/contact" 
                className="text-navy/80 hover:text-navy transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;