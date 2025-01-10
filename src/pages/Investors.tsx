import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Investors = () => {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
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
              We acquire stable, profitable companies and unlock their full potential through operational excellence and strategic digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Invest Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
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
        </div>
      </section>

      {/* Investment Approach Section */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-display font-semibold mb-12 text-center">Our Investment Approach</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-display font-semibold mb-4">Strategic Acquisition</h3>
                <ul className="space-y-4">
                  <li>We acquire established, profitable businesses in traditional industries with room for operational and digital improvement.</li>
                  <li>Each acquisition is carefully vetted through rigorous financial, operational, and digital due diligence.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold mb-4">Expert-Led Operations</h3>
                <ul className="space-y-4">
                  <li>We install and empower experienced operators with a track record of excellence.</li>
                  <li>These leaders are given the freedom to maintain and elevate the business's performance, ensuring stability and continuity.</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Target Returns Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-display font-semibold mb-8">Target Returns</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-gold">25% IRR</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Achieved through operational cash flow, capital appreciation, and strategic exits.</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-gold">4-6x EBITDA</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Exit multiples driven by enhanced profitability and modernized operations.</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-gold">Multiple Arbitrage</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Acquiring businesses at lower multiples and exiting at higher valuations.</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Message Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-display font-semibold mb-8">A Message to Our Investors</h2>
            <blockquote className="text-lg italic text-navy/80">
              "At Heritage Digital Partners, we focus on delivering exceptional returns by transforming stable, lower middle market service businesses. With reliable cash flows, strong community roots, and untapped potential, these businesses offer a unique combination of stability and opportunity."
            </blockquote>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Investors;