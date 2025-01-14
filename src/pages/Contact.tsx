import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

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
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-display font-semibold mb-6">Get in Touch</h2>
                <p className="text-lg mb-8">
                  We'd love to hear from you. Contact us today to learn more about how Waypoint Capital can deliver exceptional results for you.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Email</h3>
                    <Button 
                      variant="outline"
                      className="w-full sm:w-auto"
                      onClick={() => window.location.href = 'mailto:alex.weekes@weekesglobalconsulting.com'}
                    >
                      <Mail className="mr-2" />
                      Send Email
                    </Button>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Phone</h3>
                    <Button 
                      variant="outline"
                      className="w-full sm:w-auto"
                      onClick={() => window.location.href = 'tel:+447886415352'}
                    >
                      <Phone className="mr-2" />
                      Call Us
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-2/3">
                  <h2 className="text-3xl font-display font-semibold mb-6">About Alexander Weekes</h2>
                  <div className="space-y-4 text-lg text-navy/80">
                    <p>
                      As the general partner of Waypoint Capital, Alexander Weekes combines years of operational experience in leadership and execution with a classical business education and a passion for elevating businesses.
                    </p>
                    <p>
                      Alex's professional journey is nothing short of extraordinary. With a career that spans North America, Europe, and Asia, he has been an integral part of ground-breaking projects, working with a spectrum of clients from solo entrepreneurs to large multinational corporations. His success is rooted in his uniquely defined processes and frameworks, which he enthusiastically shares with others.
                    </p>
                    <p>
                      Beyond his project-based achievements, Alex's expertise extends into academia and professional training. He has enriched minds as a university associate lecturer in Bristol, specialising in enterprise and entrepreneurship. His wealth of knowledge has also been imparted to professionals through his role as a CPD trainer for esteemed organisations such as Harvey Nichols, Sky Group, and various local government bodies in the UK.
                    </p>
                    <p>
                      Alex's approach to excellence is a blend of his extensive education — including an MBA from UCL — and his rich, real-world experience across five continents and diverse industries. This unique amalgamation of formal education and practical experience gives him a distinctive perspective in delivering excellence and enhancing project value, making him a sought-after authority in his field.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/3">
                  <img 
                    src="/lovable-uploads/2880ef68-a9b7-4ead-b8f6-322e39294e5c.png"
                    alt="Alexander Weekes"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
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