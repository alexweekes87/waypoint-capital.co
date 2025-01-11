import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
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
  );
};

export default FAQ;