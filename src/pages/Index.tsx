import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="relative h-screen flex items-center">
        <div className="absolute inset-0 gradient-overlay"></div>
        <div className="container mx-auto px-4 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-display font-semibold leading-tight mb-6">
              Honouring the Past, Building the Future
            </h1>
            <p className="text-xl md:text-2xl text-navy/80 mb-8">
              We transform established businesses with innovative digital and operational strategies, preserving their heritage while unlocking their full potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/owners"
                className="inline-flex items-center justify-center px-8 py-3 bg-navy text-white rounded-lg hover:bg-navy/90 transition-colors"
              >
                For Business Owners
              </a>
              <a
                href="/investors"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-navy text-navy rounded-lg hover:bg-navy/5 transition-colors"
              >
                For Investors
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">
              Who We Are
            </h2>
            <p className="text-lg text-navy/80">
              At Heritage Digital Partners, we specialise in acquiring and modernising successful service-based businesses in traditional industries. With roots in strategy, digital transformation, and execution, we bring a fresh perspective to unlocking growth potential. Our approach respects what makes these businesses successful while preparing them to thrive in a changing world.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;