import { Button } from "@/components/ui/button";
import { MapPin, Car, Bus } from "lucide-react";

const Location = () => {
  const googleMapsUrl = `https://maps.app.goo.gl/ykwhX5FJXRGitJyKA`;
  const uberUrl = `https://m.uber.com/go/home?drop%5B0%5D=%7B%22addressLine1%22%3A%22Unama-Universidade%20da%20Amaz%C3%B4nia%22%2C%22addressLine2%22%3A%22Av.%20Alcindo%20Cacela%2C%20287%20-%20Umarizal%20-%20Bel%C3%A9m%20-%20PA%2C%2066060-902%22%2C%22id%22%3A%22df44bd68-0d08-31ff-bafa-38473df34aff%22%2C%22source%22%3A%22SEARCH%22%2C%22latitude%22%3A-1.439031%2C%22longitude%22%3A-48.478555%2C%22provider%22%3A%22uber_places%22%7D&effect=`;
  const moovitUrl = `https://moovitapp.com/belem-3183/poi/Unama%20-%20Alcindo%20Cacela/t/pt-br?lang=pt&tll=-1.438845_-48.478719`;
  const googleMapsIframeUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.1401361307472!2d-48.47846231750041!3d-1.4387127775476543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48ea7879bca93%3A0xd1eb9c08b4629a11!2sUNAMA%20-%20Alcindo%20Cacela!5e0!3m2!1spt-BR!2sus!4v1738853698511!5m2!1spt-BR!2sus"

  return (
    <section id="local" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div>
              <h2 className="text-4xl font-bold text-theme-green mb-6">Local do Evento</h2>
              <p className="text-theme-brown text-lg mb-6">
                O Python Norte 2025 será realizado na Universidade da Amazônia (UNAMA) da Alcindo Cacela,
                proporcionando uma estrutura completa para o evento com fácil acesso.
                O campus Alcindo Cacela é um dos principais pontos de referência educacional de Belém.
              </p>
              <div className="space-y-4 text-theme-brown">
                <p className="flex items-center">
                  <span className="font-bold mr-2">Endereço:</span>
                  Av. Alcindo Cacela, 287 - Umarizal, Belém - PA, 66060-902
                </p>
              </div>
              <div className="flex space-x-4 mt-6">
                <Button asChild variant="outline" className="flex items-center gap-2">
                  <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                    <MapPin size={20} /> Google Maps
                  </a>
                </Button>
                <Button asChild variant="outline" className="flex items-center gap-2">
                  <a href={uberUrl} target="_blank" rel="noopener noreferrer">
                    <Car size={20} /> Uber
                  </a>
                </Button>
                <Button asChild variant="outline" className="flex items-center gap-2">
                  <a href={moovitUrl} target="_blank" rel="noopener noreferrer">
                    <Bus size={20} /> Moovit
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <iframe
              src={googleMapsIframeUrl}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Localização da UNAMA Alcindo Cacela"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;