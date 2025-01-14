import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="logo-dark.png" 
              alt="Waypoint Capital" 
              className="h-12 w-auto"
            />
          </Link>
          <div className="hidden md:flex space-x-8">
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;