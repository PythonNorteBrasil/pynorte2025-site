import Hero from "@/components/Hero";
import Location from "@/components/Location";
import Schedule from "@/components/Schedule";
import Sponsors from "@/components/Sponsors";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Description from "@/components/Description";

const Index = () => {
  return (
    <div className="bg-theme-background">
      <Hero />
      <Description />
      <Location />
      <Schedule />
      {process.env.NODE_ENV === "development" && (
        <>
          <Sponsors />
        </>
      )}
      <FAQ />
      <Contact />
    </div>
  );
};

export default Index;
