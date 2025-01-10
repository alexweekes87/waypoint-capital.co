import { motion } from "framer-motion";

const Investors = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
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
              We acquire stable, profitable companies and unlock their full potential through operational excellence and strategic digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-semibold mb-6">Why Invest with Heritage Digital Partners?</h2>
            <p className="text-lg mb-8">
              At Heritage Digital Partners, we combine the reliability of established businesses with the transformative power of modern strategy. By empowering expert operators and implementing innovative digital solutions, we deliver exceptional value to our investors.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-navy/5 p-6 rounded-lg">
                <h3 className="text-xl font-display font-semibold mb-4">Target Returns</h3>
                <ul className="space-y-2">
                  <li>25% IRR through operational improvements</li>
                  <li>Exit Multiples of 4-6x EBITDA</li>
                  <li>Multiple Arbitrage Opportunities</li>
                </ul>
              </div>
              <div className="bg-navy/5 p-6 rounded-lg">
                <h3 className="text-xl font-display font-semibold mb-4">What Sets Us Apart</h3>
                <ul className="space-y-2">
                  <li>Empowered Expert Operators</li>
                  <li>Digital Transformation Expertise</li>
                  <li>Stability Meets Upside</li>
                </ul>
              </div>
            </div>

            <div className="bg-navy/5 p-8 rounded-lg mt-12">
              <h2 className="text-2xl font-display font-semibold mb-4">A Message to Our Investors</h2>
              <p className="text-lg italic">
                "At Heritage Digital Partners, we focus on delivering exceptional returns by transforming stable, lower middle market service businesses. With reliable cash flows, strong community roots, and untapped potential, these businesses offer a unique combination of stability and opportunity."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Investors;