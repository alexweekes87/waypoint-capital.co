import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const WhyInvest = () => {
  return (
    <section className="py-20 bg-white">
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
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-display font-semibold mb-8">Why Invest with Heritage Digital Partners?</h2>
        <p className="text-lg mb-12">
          At Heritage Digital Partners, we combine the reliability of established businesses with the transformative power of modern strategy. By empowering expert operators and implementing innovative digital solutions, we deliver exceptional value to our investors.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-navy/5 border-none">
            <CardHeader>
              <CardTitle className="text-xl">Reliable Foundations</CardTitle>
            </CardHeader>
            <CardContent>
              <p>We acquire businesses with strong financial performance and sustainable operations.</p>
            </CardContent>
          </Card>

          <Card className="bg-navy/5 border-none">
            <CardHeader>
              <CardTitle className="text-xl">Operational Excellence</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Our expert operators maintain and elevate business performance, ensuring stability and growth.</p>
            </CardContent>
          </Card>

          <Card className="bg-navy/5 border-none">
            <CardHeader>
              <CardTitle className="text-xl">Transformative Digital Strategy</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Utilizing our EDISCS digital proficiency model, we identify companies with untapped digital optimization potential.</p>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  );
};

export default WhyInvest;