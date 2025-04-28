import Hero from "@/components/Hero";
import Location from "@/components/Location";
import Schedule from "@/components/Schedule";
import Sponsors from "@/components/Sponsors";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import AboutTheEvent from "@/components/AboutTheEvent";

const Index = () => {
  return (
    <div className="bg-theme-background">
      <Hero />
      <AboutTheEvent />
      <Location />
      <Schedule />
      <FAQ />
      <Sponsors />
      <Contact />
    </div>
  );
};

export default Index;
