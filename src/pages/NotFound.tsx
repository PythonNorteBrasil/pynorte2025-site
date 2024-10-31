import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-900 bg-cover object-top p-8 text-white sm:bg-zinc-900">
      <header>
        <Link className="block w-fit" to="/">
          <p>Python Norte 2025</p>
        </Link>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center gap-12">
        <p className="text-center text-lg font-bold md:text-4xl">
          Ops! Página não encontrada.
        </p>

        <Link
          className="rounded-full bg-green-600 px-6 py-3 text-sm font-bold text-zinc-800 transition-colors hover:bg-green-500 md:px-8 md:py-4 md:text-base"
          to="/"
        >
          Voltar para o início
        </Link>
      </main>
    </div>
  )
}
