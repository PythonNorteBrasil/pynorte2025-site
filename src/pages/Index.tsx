import Hero from "@/components/Hero";
import Location from "@/components/Location";
import Schedule from "@/components/Schedule";
import Sponsors from "@/components/Sponsors";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <>
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
    </>
  );
};

export default Index;