const Footer = () => {
  const quickLinks = [
    { name: "Adquira seu ingresso", href: "#" },
    { name: "Seja um Patrocinador", href: "#" },
    { name: "Local do Evento", href: "#" },
  ];

  return (
    <footer className="bg-jambu text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Python Norte</h3>
            <p className="max-w-md">
              Python Norte é uma conferência sem fins lucrativos dirigida por
              voluntários para promover a linguagem de programação Python de código
              aberto. É apoiado pela Associação Python Brasil (APyB).
            </p>
          </div>

          {process.env.NODE_ENV === "development" && (
            <div>
              <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="hover:text-jiboia transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;