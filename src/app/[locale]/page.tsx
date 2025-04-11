import Hero from "@/components/Hero";
import Location from "@/components/Location";
import Schedule from "@/components/Schedule";
import Sponsors from "@/components/Sponsors";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="bg-theme-background">
      <Hero />
      <Location />
      {process.env.NODE_ENV === "development" && (
        <>
          <Schedule />
          <Sponsors />
        </>
      )}
      <FAQ />
      <Contact />
    </div>
  );
};

export default Index;