import { motion } from "framer-motion";

const HowWeWork = () => {
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
              A Seamless Path to Maximising Value for All Stakeholders
            </h1>
            <p className="text-xl md:text-2xl text-navy/80 mb-8">
              Tailored transitions, expert leadership, and strategic innovation; we deliver exceptional outcomes for owners, employees, and investors.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-semibold mb-6">Identifying Opportunities</h2>
            <p className="text-lg mb-8">
              We acquire businesses with strong foundations and significant growth potential, using a rigorous and targeted approach to identify the right opportunities.
            </p>

            <h3 className="text-2xl font-display font-semibold mb-4">Our Process:</h3>
            <ul className="list-disc list-inside mb-8 space-y-2">
              <li>Selective Criteria: Focus on profitable, service-based businesses</li>
              <li>Three-Pronged Due Diligence: Financial, Operational, and Digital assessment</li>
              <li>Collaborative Engagement with business owners</li>
            </ul>

            <div className="bg-navy/5 p-8 rounded-lg mt-12">
              <h2 className="text-2xl font-display font-semibold mb-4">Our Commitment</h2>
              <p className="text-lg italic">
                "We ensure operational excellence by installing experienced leaders with a proven track record of success, while providing the resources and support needed for long-term growth."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowWeWork;