const Location = () => {
  return (
    <section id="local" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-theme-green mb-6">
              Local do Evento
            </h2>
            <p className="text-theme-brown text-lg mb-6">
              O Python Norte 2025 será realizado no coração de Belém, 
              proporcionando fácil acesso e uma experiência única com a 
              cultura paraense. O local escolhido combina modernidade com 
              a tradicional hospitalidade do Norte.
            </p>
            <div className="space-y-4 text-theme-brown">
              <p className="flex items-center">
                <span className="font-bold mr-2">Endereço:</span>
                Av. Presidente Vargas, 1000 - Campina, Belém - PA
              </p>
              <p className="flex items-center">
                <span className="font-bold mr-2">Como chegar:</span>
                Próximo ao Ver-o-Peso, com fácil acesso por transporte público
              </p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://placehold.co/800x600/F5EFB3/444817?text=Mapa+do+Evento"
              alt="Localização do evento"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;