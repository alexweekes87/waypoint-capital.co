import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Investors = () => {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
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
              We acquire stable, profitable companies and unlock their full potential through operational excellence and strategic digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Invest Section */}
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

      {/* Investment Approach Section */}
      <section className="py-20 bg-navy text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=2000")',
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
                  <li>We hire and install proven leaders with a track record of excellence.</li>
                  <li>These operators are given the autonomy to maintain stability and implement strategic improvements.</li>
                </ul>
              </div>
            </div>
          </motion.div>
      </section>

      {/* Target Returns Section */}
      <section className="py-20 bg-cream relative">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=2000")',
            backgroundBlendMode: 'overlay' 
          }}
        />
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
              <Card className="bg-white border-none shadow-lg backdrop-blur-sm bg-white/90">
                <CardHeader>
                  <CardTitle className="text-xl text-gold">25% IRR</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Achieved through operational cash flow, capital appreciation, and strategic exits.</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none shadow-lg backdrop-blur-sm bg-white/90">
                <CardHeader>
                  <CardTitle className="text-xl text-gold">4-6x EBITDA</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Exit multiples driven by enhanced profitability and modernized operations.</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none shadow-lg backdrop-blur-sm bg-white/90">
                <CardHeader>
                  <CardTitle className="text-xl text-gold">Multiple Arbitrage</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Implementing digital systems that increase the exit valuations vs acquisition valuations.</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-display font-semibold mb-8">What Sets Us Apart</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-navy/5 border-none">
                <CardHeader>
                  <CardTitle className="text-xl">Empowered Expert Operators</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    <li>We hire and install proven leaders with a track record of operational excellence.</li>
                    <li>Empowered to manage without unnecessary interference, focusing on performance.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-navy/5 border-none">
                <CardHeader>
                  <CardTitle className="text-xl">Digital Transformation Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Our team specializes in creating and executing digital strategies.</li>
                    <li>Dual approach ensures businesses thrive through innovation.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-navy/5 border-none">
                <CardHeader>
                  <CardTitle className="text-xl">Stability Meets Upside</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Focus on profitable, established businesses reduces risk.</li>
                    <li>Digital transformation expertise unlocks significant growth.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-navy/5 border-none">
                <CardHeader>
                  <CardTitle className="text-xl">Aligned Incentives</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    <li>No annual management fees.</li>
                    <li>Returns tied directly to the value we create.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Message Section */}
      <section className="py-20 bg-cream">
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

      {/* FAQs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-display font-semibold mb-8">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is your typical investment strategy?</AccordionTrigger>
                <AccordionContent>
                  We acquire stable, profitable service businesses in lower middle market industries, driving growth through operational improvements and digital transformation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>What is your target return on investment?</AccordionTrigger>
                <AccordionContent>
                  We target a 25% IRR over a 5-8 year horizon, combining cash flow, capital appreciation, and strategic exits.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>How do you mitigate risk?</AccordionTrigger>
                <AccordionContent>
                  We acquire businesses with stable cash flows, loyal customers, and engaged employees, using rigorous financial, operational, and digital due diligence.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>What makes Heritage Digital Partners different from other investment firms?</AccordionTrigger>
                <AccordionContent>
                  Our expertise lies in operational execution and digital transformation, allowing us to unlock value often overlooked by traditional firms.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>What is your approach to exits?</AccordionTrigger>
                <AccordionContent>
                  We employ a staggered exit strategy to maximise value and liquidity, typically achieving exit multiples of 4x-6x EBITDA.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>How are returns distributed to investors?</AccordionTrigger>
                <AccordionContent>
                  Returns are delivered through consistent cash flows during the holding period and capital gains at exit, ensuring alignment and performance-based outcomes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger>How do you use seller financing to fund acquisitions?</AccordionTrigger>
                <AccordionContent>
                  Seller financing reduces upfront capital requirements and aligns incentives with business owners, supporting long-term growth.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Investors;
