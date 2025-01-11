import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-display font-semibold mb-4">Heritage Digital Partners</h3>
            <p className="text-white/80">
              Transforming established businesses with innovative digital and operational strategies.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-display font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <motion.a 
                whileHover={{ scale: 1.02 }}
                href="mailto:alex.weekes@weekesglobalconsulting.com" 
                className="flex items-center gap-3 hover:text-gold transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>Email Us</span>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.02 }}
                href="tel:+447886415352" 
                className="flex items-center gap-3 hover:text-gold transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+44 7886 415352</span>
              </motion.a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-display font-semibold mb-4">Follow Us</h3>
            <div className="space-y-2">
              <motion.a 
                whileHover={{ scale: 1.02 }}
                href="https://github.com/heritage-digital-partners" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-gold transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.02 }}
                href="https://linkedin.com/company/heritage-digital-partners" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-gold transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </motion.a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-display font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <motion.a 
                  whileHover={{ scale: 1.02 }}
                  href="/owners"
                  className="hover:text-gold transition-colors"
                >
                  For Business Owners
                </motion.a>
              </li>
              <li>
                <motion.a 
                  whileHover={{ scale: 1.02 }}
                  href="/investors"
                  className="hover:text-gold transition-colors"
                >
                  For Investors
                </motion.a>
              </li>
              <li>
                <motion.a 
                  whileHover={{ scale: 1.02 }}
                  href="/how-we-work"
                  className="hover:text-gold transition-colors"
                >
                  How We Work
                </motion.a>
              </li>
              <li>
                <motion.a 
                  whileHover={{ scale: 1.02 }}
                  href="/contact"
                  className="hover:text-gold transition-colors"
                >
                  Contact Us
                </motion.a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/20 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Heritage Digital Partners. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;