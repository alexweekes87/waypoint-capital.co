import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-cream relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.15]"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=2000")',
            backgroundBlendMode: 'overlay' 
          }}
        />
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-display font-semibold leading-tight mb-6">
              Let's Start the Conversation
            </h1>
            <p className="text-xl md:text-2xl text-navy/80 mb-8">
              Whether you're exploring a business transition or looking for a strategic investment opportunity, we're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white relative">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2000")',
            backgroundBlendMode: 'overlay' 
          }}
        />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-display font-semibold mb-6">Get in Touch</h2>
                <p className="text-lg mb-8">
                  We'd love to hear from you. Contact us today to learn more about how Heritage Digital Partners can deliver exceptional results for you.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Email</h3>
                    <a href="mailto:alex.weekes@weekesglobalconsulting.com" className="text-navy hover:text-navy/80 transition-colors">
                      alex.weekes@weekesglobalconsulting.com
                    </a>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Phone</h3>
                    <a href="tel:+447886415352" className="text-navy hover:text-navy/80 transition-colors">
                      +44 7886 415352
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-display font-semibold mb-6">About Alexander Weekes</h2>
                <p className="text-lg mb-6">
                  As the General Partner of Heritage Digital Partners, Alexander Weekes combines years of experience in strategy, digital transformation, and operational leadership with a passion for elevating businesses.
                </p>
                <ul className="list-disc list-inside space-y-2 text-navy/80">
                  <li>Led over 30 product development and digital transformation projects</li>
                  <li>Author of the "Strategic Projects Mastery Playbook"</li>
                  <li>MBA from UCL, focusing on business strategy and M&A</li>
                  <li>Extensive experience training and mentoring product teams</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
