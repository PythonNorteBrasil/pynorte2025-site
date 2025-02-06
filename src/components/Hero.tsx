import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-theme-background overflow-hidden">
      <div className="absolute inset-0 bg-[url('/background_hero.png.png')] bg-cover bg-center opacity-10" />
      <div className="container mx-auto px-4 pt-16 text-center relative z-10">
        <img
          src="/logo_v1.png"
          alt="Python Norte 2025"
          className="mx-auto mb-6 h-32"
        />
        <p className="font-mono text-xl md:text-2xl text-[rgb(127,104,97)] mb-8 max-w-2xl mx-auto">
          O maior evento de Python da região Norte do Brasil.
          Junte-se a nós em Belém do Pará para três dias de
          aprendizado, networking e cultura amazônica.
        </p>
        <p className="text-[rgb(127,104,97)] text-lg mb-8">
          4 a 6 de Julho de 2025 • Belém, Pará
        </p>
        {import.meta.env.MODE !== "production" && (
          <Button className="bg-theme-warning hover:bg-theme-warning/90 text-white text-lg px-8 py-6">
            Adquira seu ingresso
          </Button>
        )}
      </div>
    </div>
  );
};

export default Hero;