import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Location from "@/components/Location";
import Schedule from "@/components/Schedule";
import Sponsors from "@/components/Sponsors";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-theme-cream">
      <Navbar />
      <Hero />
      {import.meta.env.MODE !== "production" && (
        <>
          <Location />
          <Schedule />
          <Sponsors />
          <FAQ />
        </>
      )}
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;