import Hero from "@/components/investors/Hero";
import WhyInvest from "@/components/investors/WhyInvest";
import FAQ from "@/components/investors/FAQ";
import Footer from "@/components/Footer";

const Investors = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Hero />
      <WhyInvest />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Investors;