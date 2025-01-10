import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
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

      {/* Who We Are Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6 text-center">
              Who We Are
            </h2>
            <p className="text-lg text-navy/80 mb-12">
              At Heritage Digital Partners, we specialise in acquiring and modernising successful service-based businesses in traditional industries. With roots in strategy, digital transformation, and execution, we bring a fresh perspective to unlocking growth potential. Our approach respects what makes these businesses successful while preparing them to thrive in a changing world.
            </p>

            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6 text-center">
              Why Heritage Digital Partners?
            </h2>
            <p className="text-lg text-navy/80 mb-12">
              Our expertise lies not in traditional finance, but in the strategic execution of transformative change. Leveraging insights from decades of product development, digital strategy, and operational improvement, we drive sustainable growth in businesses often overlooked by conventional investors.
            </p>

            {/* Our Promise Section */}
            <div className="bg-navy/5 p-8 rounded-lg">
              <h2 className="text-2xl font-display font-semibold mb-6">Our Promise to Business Owners</h2>
              <p className="text-lg mb-6">
                We promise to honour your vision while building a future that endures and rewards the years of hard work you've invested.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Continuity and Stability</h3>
                  <p>We ensure your business remains true to its values, maintaining the stability and trust your employees, customers, and community have come to rely on.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Legacy Preservation</h3>
                  <p>Your reputation, achievements, and role in the community are at the heart of our approach. We are committed to building on what you've created, ensuring your business continues to thrive and grow under new ownership.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Rewarding Exits</h3>
                  <p>We understand the importance of securing the fruits of your labour. Through creative deal structuring and strategic financing, we ensure high valuations for your business, providing a seamless path for you to retire or transition with confidence.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Value-Driven Growth</h3>
                  <p>With our expert operational team and digital transformation expertise, we add value to your employees, customers, and community. Our tailored strategies modernise operations, unlock growth potential, and ensure the business thrives in a rapidly changing landscape.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <a href="mailto:alex.weekes@weekesglobalconsulting.com" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Mail className="w-5 h-5" />
              alex.weekes@weekesglobalconsulting.com
            </a>
            <a href="tel:+447886415352" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone className="w-5 h-5" />
              +44 7886 415352
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;