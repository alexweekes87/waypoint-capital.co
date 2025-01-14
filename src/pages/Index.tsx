import { motion } from "framer-motion";
import { Mail, Phone, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="relative min-h-[90vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.15]"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=2000")',
            backgroundBlendMode: 'overlay' 
          }}
        />
        <div className="container mx-auto px-4 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-7xl font-display font-semibold leading-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-navy to-navy/80">
              Honouring the Past
              <span className="block mt-2 mb-2">—</span>
              Building the Future
            </h1>
            <p className="text-xl md:text-2xl text-navy/80 mb-8 max-w-2xl mx-auto">
              Augmenting value in established business, through acquisition and digital transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="/owners"
                className="group inline-flex items-center justify-center px-8 py-4 bg-navy text-white rounded-lg hover:bg-navy/90 transition-all shadow-lg hover:shadow-xl"
              >
                For Business Owners
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="/investors"
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-navy text-navy rounded-lg hover:bg-navy/5 transition-all"
              >
                For Investors
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      <section className="py-24 bg-white relative">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.15]"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2000")',
            backgroundBlendMode: 'overlay' 
          }}
        />
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-12"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-semibold text-center mb-6">
                Who We Are
              </h2>
              <p className="text-lg md:text-xl text-navy/80 text-center">
                At Waypoint Capital, we specialise in acquiring and modernising successful service-based businesses in traditional industries. With roots in strategy, digital transformation, and execution, we bring a fresh perspective to unlocking growth potential. Our approach respects what makes these businesses successful while preparing them to thrive in a changing world.
              </p>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-display font-semibold text-center mb-6">
                Why Waypoint Capital?
              </h2>
              <p className="text-lg md:text-xl text-navy/80 text-center">
                Our expertise lies not in traditional finance, but in the strategic execution of transformative change. Leveraging insights from decades of product development, digital strategy, and operational improvement, we drive sustainable growth in businesses often overlooked by conventional investors.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-display font-semibold text-center mb-6">Our Promise to Business Owners</h2>
              <div className="bg-gradient-to-b from-navy/5 to-transparent p-8 rounded-2xl">
                <p className="text-lg mb-12 text-center max-w-3xl mx-auto">
                  We promise to honour your vision while building a future that endures and rewards the years of hard work you've invested.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4">Continuity and Stability</h3>
                      <p className="text-navy/80">We ensure your business remains true to its values, maintaining the stability and trust your employees, customers, and community have come to rely on.</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4">Legacy Preservation</h3>
                      <p className="text-navy/80">Your reputation, achievements, and role in the community are at the heart of our approach. We are committed to building on what you've created, ensuring your business continues to thrive and grow under new ownership.</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4">Rewarding Exits</h3>
                      <p className="text-navy/80">We understand the importance of securing the fruits of your labour. Through creative deal structuring and strategic financing, we ensure high valuations for your business, providing a seamless path for you to retire or transition with confidence.</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4">Value-Driven Growth</h3>
                      <p className="text-navy/80">With our expert operational team and digital transformation expertise, we add value to your employees, customers, and community. Our tailored strategies modernise operations, unlock growth potential, and ensure the business thrives in a rapidly changing landscape.</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-navy text-white relative">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=2000")',
            backgroundBlendMode: 'overlay' 
          }}
        />
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <motion.a 
              whileHover={{ scale: 1.02 }}
              href="mailto:alex.weekes@weekesglobalconsulting.com" 
              className="flex items-center gap-3 hover:text-gold transition-colors bg-white/10 px-6 py-3 rounded-lg"
            >
              <Mail className="w-5 h-5" />
              alex.weekes@weekesglobalconsulting.com
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.02 }}
              href="tel:+447886415352" 
              className="flex items-center gap-3 hover:text-gold transition-colors bg-white/10 px-6 py-3 rounded-lg"
            >
              <Phone className="w-5 h-5" />
              +44 7886 415352
            </motion.a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
