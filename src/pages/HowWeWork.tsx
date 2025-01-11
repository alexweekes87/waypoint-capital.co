import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const HowWeWork = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-cream relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=2000")',
            backgroundBlendMode: 'overlay' 
          }}
        />
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
      </section>

      <section className="py-20 bg-white relative">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=2000")',
            backgroundBlendMode: 'overlay' 
          }}
        />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            <div>
              <h2 className="text-3xl font-display font-semibold mb-8">Identifying Opportunities</h2>
              <p className="text-lg mb-6">
                We acquire businesses with strong foundations and significant growth potential, using a rigorous and targeted approach to identify the right opportunities.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-navy/5 border-none">
                  <CardHeader>
                    <CardTitle className="text-xl">Selective Criteria</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>We focus on profitable, service-based businesses with stable cash flows, strong reputations, and clear opportunities for growth.</p>
                  </CardContent>
                </Card>
                <Card className="bg-navy/5 border-none">
                  <CardHeader>
                    <CardTitle className="text-xl">Three-Pronged Due Diligence</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Financial assessment</li>
                      <li>Operational evaluation</li>
                      <li>Digital opportunity analysis</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-navy/5 border-none">
                  <CardHeader>
                    <CardTitle className="text-xl">Collaborative Engagement</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>We work closely with business owners to understand their goals and align on shared outcomes for a smooth transition.</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-display font-semibold mb-8">Structuring the Deal</h2>
              <p className="text-lg mb-6">
                We use flexible, creative deal structures to meet the needs of business owners while maximising long-term growth for investors.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-navy/5 border-none">
                  <CardHeader>
                    <CardTitle className="text-xl">Competitive Valuations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>We ensure owners receive a fair valuation by factoring in both current performance and future potential.</p>
                  </CardContent>
                </Card>
                <Card className="bg-navy/5 border-none">
                  <CardHeader>
                    <CardTitle className="text-xl">Tailored Financing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Through seller financing, earn-outs, and phased payments, we align incentives and optimise capital allocation.</p>
                  </CardContent>
                </Card>
                <Card className="bg-navy/5 border-none">
                  <CardHeader>
                    <CardTitle className="text-xl">Seamless Transition</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Our structured approach supports owners' goals, whether they plan to retire, stay involved, or transition gradually.</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-display font-semibold mb-8">Empowering Leadership</h2>
              <p className="text-lg mb-6">
                We ensure operational excellence by installing experienced leaders with a proven track record of success.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-navy/5 border-none">
                  <CardHeader>
                    <CardTitle className="text-xl">Expert Operators</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>We hire and empower leaders to manage and elevate business performance.</p>
                  </CardContent>
                </Card>
                <Card className="bg-navy/5 border-none">
                  <CardHeader>
                    <CardTitle className="text-xl">Unencumbered Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>These operators are given the autonomy to maintain stability and implement strategic improvements.</p>
                  </CardContent>
                </Card>
                <Card className="bg-navy/5 border-none">
                  <CardHeader>
                    <CardTitle className="text-xl">Strategic Support</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Our team provides resources, insights, and high-level guidance to ensure long-term operational success.</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-display font-semibold mb-8">Transforming Through Innovation</h2>
              <p className="text-lg mb-6">
                We unlock growth by leveraging our proprietary EDISCS framework to implement digital and operational improvements.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-navy/5 border-none">
                  <CardHeader>
                    <CardTitle className="text-xl">Engagement & Efficiency</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Strengthening customer relationships and improving retention</li>
                      <li>Modernising processes and systems to reduce costs</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-navy/5 border-none">
                  <CardHeader>
                    <CardTitle className="text-xl">Data & Innovation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Enhancing business intelligence and decision-making</li>
                      <li>Developing new products or services to expand revenue</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-display font-semibold mb-8">Realising Value</h2>
              <p className="text-lg mb-6">
                We deliver measurable results for all stakeholders through disciplined management and strategic exits.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-navy/5 border-none">
                  <CardHeader>
                    <CardTitle className="text-xl">Sustainable Growth</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Long-term sustainability through operational improvements</li>
                      <li>Higher EBITDA multiples, typically 4x-6x at exit</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-navy/5 border-none">
                  <CardHeader>
                    <CardTitle className="text-xl">Strong Returns</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Target 25% IRR over 5-8 year horizon</li>
                      <li>Balanced approach to liquidity and maximised returns</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowWeWork;
