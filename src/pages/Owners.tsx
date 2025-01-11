import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Footer from "@/components/Footer";

const Owners = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-cream relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000")',
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
              Your Legacy, Secured. Your Future, Rewarded.
            </h1>
            <p className="text-xl md:text-2xl text-navy/80 mb-8">
              We specialise in acquiring businesses like yours, preserving what you've built while rewarding you for your years of dedication.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white relative">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=2000")',
            backgroundBlendMode: 'overlay' 
          }}
        />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-semibold mb-6">Your Business, Our Commitment</h2>
            <p className="text-lg mb-8">
              At Heritage Digital Partners, we understand the effort, passion, and care it takes to build a successful business. When the time comes to transition, you deserve a partner who values what you've achieved and is committed to carrying your vision forward.
            </p>

            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-display font-semibold mb-4">What We Offer:</h3>
                <ul className="list-disc list-inside mb-8 space-y-2">
                  <li>A seamless transition that protects your employees, customers, and the community.</li>
                  <li>Creative deal structures designed to ensure a high valuation for your exit.</li>
                  <li>A commitment to modernising and growing your business without compromising its core strengths.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-display font-semibold mb-6">Is Your Business the Right Fit?</h2>
                <p className="text-lg mb-6">
                  We work exclusively with businesses that demonstrate strength across key areas of performance. This ensures we can honour your legacy while unlocking the full potential of your business.
                </p>
                <h3 className="text-2xl font-display font-semibold mb-4">Our Criteria Includes:</h3>
                <ul className="list-disc list-inside mb-8 space-y-2">
                  <li>Financial Strength: A history of stable profitability and sustainable growth, showcasing the foundation for long-term success.</li>
                  <li>Operational Excellence: A commitment to quality and reliability that has earned the trust of employees, customers, and the community.</li>
                  <li>Digital Opportunity: Untapped potential for modernisation and innovation that can enhance efficiency and drive future growth.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-display font-semibold mb-6">Our Process</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-display font-semibold mb-4">1. Understanding Your Vision</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>We start by understanding your goals, values, and priorities for the future of your business.</li>
                      <li>Whether you're planning to retire or stay involved during the transition, we tailor our approach to suit your unique circumstances.</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-display font-semibold mb-4">2. Unlocking Value Through Strategic Deal Structuring</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>We recognise the true worth of your business—not just its current success, but its future potential.</li>
                      <li>Our deal structures are designed to align with your goals, using creative options like seller financing and earn-outs to provide flexibility and maximise your reward.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-display font-semibold mb-4">3. A Smooth and Respectful Transition</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>We work closely with you to ensure the handover is seamless, prioritising stability for employees and continuity for customers.</li>
                      <li>If desired, we provide opportunities for ongoing involvement during the transition, whether as an advisor, consultant, or in another role that fits your preferences.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-display font-semibold mb-4">4. Elevating the Business You Built</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Using our expertise in operational improvement and digital transformation, we unlock the growth potential within your business.</li>
                      <li>Our focus is on enhancing the strengths you've cultivated, modernising where it matters most, and positioning the business for long-term success.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-display font-semibold mb-6">What Makes Us Different?</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>A Strategic Partnership: We're not just here to acquire your business; we're here to preserve its strengths, build on its successes, and ensure it thrives in a rapidly changing world.</li>
                  <li>Operational Expertise Meets Digital Innovation: Our unique approach blends years of experience in strategy and execution with a deep understanding of modern technologies and practices.</li>
                  <li>A Thoughtful Transition: Your employees, customers, and community are central to our process. We work to ensure the business remains stable, respected, and ready for the future.</li>
                </ul>
              </div>
            </div>

            <div className="bg-navy/5 p-8 rounded-lg mt-12">
              <h2 className="text-2xl font-display font-semibold mb-4">A Message From Our Team</h2>
              <p className="text-lg italic">
                "We understand how personal this decision is for you. At Heritage Digital Partners, we're not just here to buy your business; we're here to ensure its next chapter is one of growth, innovation, and continued success. Let us help you transition with confidence, knowing that the legacy you've worked so hard to create is in expert hands."
              </p>
            </div>

            <div className="mt-12">
              <h2 className="text-3xl font-display font-semibold mb-6">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What types of businesses do you acquire?</AccordionTrigger>
                  <AccordionContent>
                    We focus on profitable, service-based businesses in traditional industries with stable cash flows, loyal customers, and strong community roots.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>How do you value my business?</AccordionTrigger>
                  <AccordionContent>
                    We consider current financial performance and future potential, offering a fair valuation that reflects growth opportunities through operational and digital transformation.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>What happens to my employees after the sale?</AccordionTrigger>
                  <AccordionContent>
                    We prioritise your employees' roles, providing stability, training, and opportunities for growth under expert leadership.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Will my customers and community see changes?</AccordionTrigger>
                  <AccordionContent>
                    We preserve your business's reputation while enhancing customer experiences and supporting the community through thoughtful innovation.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>Can I stay involved in the business after the sale?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we can structure a role that aligns with your goals, whether as an advisor, consultant, or part-time contributor.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger>How does the sale process work?</AccordionTrigger>
                  <AccordionContent>
                    We begin by understanding your goals and conducting due diligence. After structuring a tailored deal, we ensure a smooth transition for all stakeholders.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger>What is seller financing, and how does it work?</AccordionTrigger>
                  <AccordionContent>
                    Seller financing allows a portion of the sale price to be paid over time, giving you ongoing cash flow while aligning with the business's future success.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Owners;
