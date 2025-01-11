import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&w=2000")',
          backgroundBlendMode: 'overlay' 
        }}
      />
      <div className="absolute inset-0 gradient-overlay"></div>
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl font-display font-semibold leading-tight mb-6">
            Turning Proven Businesses into Exceptional Investments
          </h1>
          <p className="text-xl md:text-2xl text-navy/80 mb-8">
            We acquire stable, profitable companies and unlock their full potential through operational excellence and strategic digital transformation. Our unique approach combines traditional business values with modern digital innovation.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 bg-white/80 rounded-lg shadow-sm">
              <h3 className="text-2xl font-display font-semibold mb-2">25%+ IRR</h3>
              <p className="text-navy/70">Target Returns</p>
            </div>
            <div className="p-6 bg-white/80 rounded-lg shadow-sm">
              <h3 className="text-2xl font-display font-semibold mb-2">5-8 Years</h3>
              <p className="text-navy/70">Investment Horizon</p>
            </div>
            <div className="p-6 bg-white/80 rounded-lg shadow-sm">
              <h3 className="text-2xl font-display font-semibold mb-2">4-6x</h3>
              <p className="text-navy/70">Target Exit Multiple</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;