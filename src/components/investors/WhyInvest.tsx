import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Shield, Lightbulb } from "lucide-react";

const WhyInvest = () => {
  return (
    <section className="py-20 bg-white relative">
      <div 
        className="absolute right-0 top-0 w-1/3 h-full opacity-10 bg-cover bg-center hidden lg:block"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&w=800")',
          backgroundBlendMode: 'overlay' 
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4"
      >
        <div className="max-w-4xl">
          <h2 className="text-3xl font-display font-semibold mb-8">Why Invest with Heritage Digital Partners?</h2>
          <p className="text-lg mb-12">
            At Heritage Digital Partners, we combine the reliability of established businesses with the transformative power of modern strategy. Our unique approach focuses on three key pillars that drive exceptional returns while maintaining operational stability.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-navy/5 border-none">
              <CardHeader>
                <Shield className="w-10 h-10 text-gold mb-2" />
                <CardTitle className="text-xl">Reliable Foundations</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We target businesses with proven track records, stable cash flows, and established market positions. Our acquisition criteria includes:</p>
                <ul className="list-disc list-inside mt-4 space-y-2 text-navy/80">
                  <li>$2-10M EBITDA</li>
                  <li>10+ years of operation</li>
                  <li>Recurring revenue model</li>
                  <li>Strong customer retention</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-navy/5 border-none">
              <CardHeader>
                <BarChart3 className="w-10 h-10 text-gold mb-2" />
                <CardTitle className="text-xl">Operational Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Our expert operators implement proven systems to enhance efficiency and scalability:</p>
                <ul className="list-disc list-inside mt-4 space-y-2 text-navy/80">
                  <li>Process optimization</li>
                  <li>Team development</li>
                  <li>Market expansion</li>
                  <li>Strategic partnerships</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-navy/5 border-none">
              <CardHeader>
                <Lightbulb className="w-10 h-10 text-gold mb-2" />
                <CardTitle className="text-xl">Digital Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We leverage our EDISCS digital proficiency model to drive growth:</p>
                <ul className="list-disc list-inside mt-4 space-y-2 text-navy/80">
                  <li>Customer experience enhancement</li>
                  <li>Data-driven decision making</li>
                  <li>Automation implementation</li>
                  <li>Digital marketing optimization</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 p-8 bg-navy/5 rounded-lg">
            <h3 className="text-2xl font-display font-semibold mb-6">Investment Performance Metrics</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-gold">25%+</p>
                <p className="text-sm mt-2">Target IRR</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-gold">4-6x</p>
                <p className="text-sm mt-2">Exit Multiple</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-gold">5-8</p>
                <p className="text-sm mt-2">Year Horizon</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-gold">15%</p>
                <p className="text-sm mt-2">Cash Yield</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default WhyInvest;