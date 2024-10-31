import { GrTwitter, GrInstagram, GrFacebook, GrLinkedin } from 'react-icons/gr'

export function Contatos() {
  return (
    <div className="mx-auto max-w-2xl overflow-hidden rounded-3xl bg-custom-gray p-16 shadow-xl md:max-w-2xl lg:max-w-2xl xl:max-w-2xl">
      {/* Top */}
      <div className="flex flex-col items-center justify-center">
        <h3 className="mb-6 text-3xl font-bold text-white">Nossos Contatos</h3>
        <section className="flex gap-8 text-white">
          <a
            className="text-4xl"
            href="https://twitter.com/pythonnortebr"
            target="_blank"
            rel="noreferrer"
          >
            <GrTwitter />
          </a>

          <a
            className="text-4xl"
            href="https://www.instagram.com/pythonnortebrasil/"
            target="_blank"
            rel="noreferrer"
          >
            <GrInstagram />
          </a>

          <a
            className="text-4xl"
            href="https://www.facebook.com/profile.php?id=61568143374581"
            target="_blank"
            rel="noreferrer"
          >
            <GrFacebook />
          </a>

          <a
            className="text-4xl"
            href="https://www.linkedin.com/company/pynorte/"
            target="_blank"
            rel="noreferrer"
          >
            <GrLinkedin />
          </a>
        </section>
      </div>

      {/* Bottom */}
      <div className="mt-16 flex flex-col items-center justify-center text-white">
        <p className="text-center text-lg font-semibold uppercase leading-loose text-gray-300">
          EMAIL
        </p>
        <a href="mailto:norte@python.org.br">
          <p className="text-center text-2xl font-bold leading-loose text-green-600 underline">
            norte@python.org.br
          </p>
        </a>
      </div>
    </div>
  )
}
