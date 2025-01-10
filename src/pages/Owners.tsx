import { motion } from "framer-motion";

const Owners = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-cream">
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

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-semibold mb-6">Your Business, Our Commitment</h2>
            <p className="text-lg mb-8">
              At Heritage Digital Partners, we understand the effort, passion, and care it takes to build a successful business. When the time comes to transition, you deserve a partner who values what you've achieved and is committed to carrying your vision forward.
            </p>

            <h3 className="text-2xl font-display font-semibold mb-4">What We Offer:</h3>
            <ul className="list-disc list-inside mb-8 space-y-2">
              <li>A seamless transition that protects your employees, customers, and the community.</li>
              <li>Creative deal structures designed to ensure a high valuation for your exit.</li>
              <li>A commitment to modernising and growing your business without compromising its core strengths.</li>
            </ul>

            <h2 className="text-3xl font-display font-semibold mb-6">Is Your Business the Right Fit?</h2>
            <h3 className="text-2xl font-display font-semibold mb-4">Our Criteria Includes:</h3>
            <ul className="list-disc list-inside mb-8 space-y-2">
              <li>Financial Strength: A history of stable profitability and sustainable growth.</li>
              <li>Operational Excellence: A commitment to quality and reliability.</li>
              <li>Digital Opportunity: Untapped potential for modernisation and innovation.</li>
            </ul>

            <div className="bg-navy/5 p-8 rounded-lg mt-12">
              <h2 className="text-2xl font-display font-semibold mb-4">A Message From Our Team</h2>
              <p className="text-lg italic">
                "We understand how personal this decision is for you. At Heritage Digital Partners, we're not just here to buy your business; we're here to ensure its next chapter is one of growth, innovation, and continued success. Let us help you transition with confidence, knowing that the legacy you've worked so hard to create is in expert hands."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Owners;