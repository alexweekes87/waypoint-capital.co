import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-display font-semibold text-navy">
            Heritage Digital Partners
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/owners" className="text-navy/80 hover:text-navy transition-colors">
              For Owners
            </Link>
            <Link to="/investors" className="text-navy/80 hover:text-navy transition-colors">
              For Investors
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;