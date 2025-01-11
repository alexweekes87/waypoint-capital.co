import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Hero from "@/components/how-we-work/Hero";
import ProcessSection from "@/components/how-we-work/ProcessSection";

const HowWeWork = () => {
  return (
    <div className="min-h-screen pt-20">
      <Hero />

      <section className="py-20 bg-white relative">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=2000")',
            backgroundBlendMode: 'overlay' 
          }}
        />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            <ProcessSection
              title="Identifying Opportunities"
              description="We acquire businesses with strong foundations and significant growth potential, using a rigorous and targeted approach to identify the right opportunities."
              cards={[
                {
                  title: "Selective Criteria",
                  content: "We focus on profitable, service-based businesses with stable cash flows, strong reputations, and clear opportunities for growth."
                },
                {
                  title: "Three-Pronged Due Diligence",
                  content: (
                    <ul className="list-disc list-inside space-y-2">
                      <li>Financial assessment</li>
                      <li>Operational evaluation</li>
                      <li>Digital opportunity analysis</li>
                    </ul>
                  )
                },
                {
                  title: "Collaborative Engagement",
                  content: "We work closely with business owners to understand their goals and align on shared outcomes for a smooth transition."
                }
              ]}
            />

            <ProcessSection
              title="Structuring the Deal"
              description="We use flexible, creative deal structures to meet the needs of business owners while maximising long-term growth for investors."
              cards={[
                {
                  title: "Competitive Valuations",
                  content: "We ensure owners receive a fair valuation by factoring in both current performance and future potential."
                },
                {
                  title: "Tailored Financing",
                  content: "Through seller financing, earn-outs, and phased payments, we align incentives and optimise capital allocation."
                },
                {
                  title: "Seamless Transition",
                  content: "Our structured approach supports owners' goals, whether they plan to retire, stay involved, or transition gradually."
                }
              ]}
            />

            <ProcessSection
              title="Empowering Leadership"
              description="We ensure operational excellence by installing experienced leaders with a proven track record of success."
              cards={[
                {
                  title: "Expert Operators",
                  content: "We hire and empower leaders to manage and elevate business performance."
                },
                {
                  title: "Unencumbered Management",
                  content: "These operators are given the autonomy to maintain stability and implement strategic improvements."
                },
                {
                  title: "Strategic Support",
                  content: "Our team provides resources, insights, and high-level guidance to ensure long-term operational success."
                }
              ]}
            />

            <ProcessSection
              title="Transforming Through Innovation"
              description="We unlock growth by leveraging our proprietary EDISCS framework to implement digital and operational improvements."
              cards={[
                {
                  title: "Engagement & Efficiency",
                  content: (
                    <ul className="list-disc list-inside space-y-2">
                      <li>Strengthening customer relationships and improving retention</li>
                      <li>Modernising processes and systems to reduce costs</li>
                    </ul>
                  )
                },
                {
                  title: "Data & Innovation",
                  content: (
                    <ul className="list-disc list-inside space-y-2">
                      <li>Enhancing business intelligence and decision-making</li>
                      <li>Developing new products or services to expand revenue</li>
                    </ul>
                  )
                }
              ]}
              columns={2}
            />

            <ProcessSection
              title="Realising Value"
              description="We deliver measurable results for all stakeholders through disciplined management and strategic exits."
              cards={[
                {
                  title: "Sustainable Growth",
                  content: (
                    <ul className="list-disc list-inside space-y-2">
                      <li>Long-term sustainability through operational improvements</li>
                      <li>Higher EBITDA multiples, typically 4x-6x at exit</li>
                    </ul>
                  )
                },
                {
                  title: "Strong Returns",
                  content: (
                    <ul className="list-disc list-inside space-y-2">
                      <li>Target 25% IRR over 5-8 year horizon</li>
                      <li>Balanced approach to liquidity and maximised returns</li>
                    </ul>
                  )
                }
              ]}
              columns={2}
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HowWeWork;