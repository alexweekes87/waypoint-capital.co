import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="py-20 bg-cream relative">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000")',
          backgroundBlendMode: 'overlay' 
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-5xl md:text-6xl font-display font-semibold leading-tight mb-6">
          A Seamless Path to Maximising Value for All Stakeholders
        </h1>
        <p className="text-xl md:text-2xl text-navy/80 mb-8">
          Tailored transitions, expert leadership, and strategic innovation; we deliver exceptional outcomes for owners, employees, and investors.
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;