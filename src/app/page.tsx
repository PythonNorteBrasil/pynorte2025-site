import Link from "next/link";
import { redirect } from "next/navigation";

const Index = () => {
  redirect("/pt");

  return (
    <body>
      <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-mono font-light text-theme-primary text-center mb-12">
          Redirecionando...
        </h1>

        <Link href="/pt">
          <button className="bg-theme-primary text-white px-4 py-2 rounded-md">
            Clique se não for redirecionado
          </button>
        </Link>
      </div>
    </body>
  )
};

export default Index;