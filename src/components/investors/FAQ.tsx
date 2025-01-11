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
                We focus on acquiring established service businesses in the lower middle market with EBITDA between $2-10M. Our strategy combines operational improvements with digital transformation initiatives to drive growth and enhance value. We typically maintain the existing management team while implementing our proven systems and processes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>What is your target return on investment?</AccordionTrigger>
              <AccordionContent>
                We target a 25% IRR over a 5-8 year investment horizon. This is achieved through a combination of regular cash distributions (targeting 15% annual cash yield) and capital appreciation at exit (targeting 4-6x multiple). Our focus on stable, cash-flowing businesses helps ensure consistent returns throughout the holding period.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>How do you mitigate risk?</AccordionTrigger>
              <AccordionContent>
                Risk mitigation is central to our strategy. We focus on businesses with proven track records, stable cash flows, and diversified customer bases. Our due diligence process includes comprehensive financial, operational, and digital audits. We maintain conservative leverage levels and implement robust reporting and governance structures.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>What makes Heritage Digital Partners different from other investment firms?</AccordionTrigger>
              <AccordionContent>
                Our unique advantage lies in combining traditional business expertise with digital transformation capabilities. We use our proprietary EDISCS digital proficiency model to identify and unlock value through technology implementation, while maintaining the core strengths that made the business successful. This balanced approach delivers superior returns while minimizing operational risk.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>What is your approach to exits?</AccordionTrigger>
              <AccordionContent>
                We develop clear exit strategies at acquisition, typically targeting strategic buyers or larger private equity firms. Our focus on digital transformation and operational excellence creates businesses that are attractive to a wide range of buyers, enabling us to achieve premium valuations of 4-6x EBITDA at exit.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>How are returns distributed to investors?</AccordionTrigger>
              <AccordionContent>
                We structure investments to provide regular cash distributions, targeting a 15% annual cash yield. These distributions come from operating cash flow, ensuring sustainable returns throughout the investment period. Additional returns are realized through capital appreciation at exit, with profits distributed according to a standard private equity waterfall structure.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>How do you use seller financing to fund acquisitions?</AccordionTrigger>
              <AccordionContent>
                Seller financing is a key component of our acquisition strategy, typically representing 20-40% of the purchase price. This approach aligns incentives with sellers, reduces upfront capital requirements, and provides flexibility in deal structuring. We work closely with sellers to create financing terms that benefit all parties while supporting the long-term growth of the business.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;