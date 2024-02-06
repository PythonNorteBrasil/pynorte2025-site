import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const CodeOfConduct = () => {
  const handleReport = () => {
    window.location.href = "https://github.com/PythonNorteBrasil/pynorte2025-org/issues/url";
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <article className="space-y-8">
          {/* Header */}
          <header>
            <h1 className="font-mono text-h1 text-jambu mb-8">Código de Conduta</h1>
          </header>

          {/* Introduction */}
          <section className="space-y-6">
            <p className="text-lg leading-relaxed text-jiboia">
              O evento Python Norte tem o compromisso de proporcionar um ambiente seguro, inclusivo e respeitoso para todas as pessoas envolvidas. Nosso objetivo é fomentar a troca de conhecimento e experiências de forma acolhedora e plural.
            </p>

            <p className="text-lg leading-relaxed text-jiboia">
              Para garantir um ambiente harmonioso, contamos com a colaboração de todas as pessoas presentes no evento. Com esta finalidade, a organização do evento conta com uma Equipe de Resposta que atua para garantir um ambiente com essas qualidades.
            </p>
          </section>

          {/* Rules Section */}
          <section className="space-y-6">
            <h2 className="font-mono text-h4 text-jambu">Sendo assim:</h2>
            <ol className="list-decimal list-inside space-y-2 text-lg text-jiboia ml-4">
              <li>Não é tolerado nenhum tipo de assédio, discriminação inapropriada ou humilhação pública;</li>
              <li>Não é tolerado o descumprimento das leis brasileiras;</li>
              <li>Toda pessoa presente no evento, independentemente do seu papel, está sujeita a estas regras.</li>
            </ol>
          </section>

          {/* Definitions Section */}
          <section className="space-y-6">
            <h2 className="font-mono text-h4 text-jambu">Desta forma, entendemos que:</h2>
            <ul className="list-disc list-inside space-y-2 text-lg text-jiboia ml-4">
              <li>Assédio é a ação de insistir, perseguir ou coagir outra pessoa a um comportamento involuntário.</li>
              <li>Discriminação inapropriada é o ato de separar, injuriar ou humilhar alguém, promovendo sua exclusão por um atributo particular.</li>
              <li>Humilhação pública é o ato de submeter, rebaixar, ridicularizar ou promover o vexame de alguém publicamente.</li>
            </ul>
          </section>

          {/* Additional Information */}
          <section className="space-y-6">
            <p className="text-lg leading-relaxed text-jiboia">
              Como o evento pode incluir a participação de crianças e adolescentes, buscamos manter um ambiente apropriado para todas as faixas etárias. Por isso, linguagem e imagens sexualizadas não são adequadas para palestras, atividades e ações promocionais de patrocinadores.
            </p>

            <p className="text-lg leading-relaxed text-jiboia">
              Se você se sentiu assediado(a), discriminado(a) ou humilhado(a), ou presenciou qualquer comportamento inadequado, pedimos que entre em contato com a Equipe de Resposta do Código de Conduta por meio do <a href="https://github.com/PythonNorteBrasil/pynorte2025-org/issues/url" className="text-theme-warning hover:text-theme-warning/90 underline">formulário de contato</a>.
            </p>

            <p className="text-lg leading-relaxed text-jiboia">
              Havendo um relato de violação destes princípios, a Equipe de Resposta realizará a devida análise e, quando necessário, tomará as ações para impedir a reincidência. Estas ações podem, mas não se restringem nem implicam em ir desde uma conversa em busca da retratação até um convite para se retirar do evento por tempo indeterminado.
            </p>
          </section>

          {/* Closing Statements */}
          <section className="space-y-6">
            <p className="text-lg leading-relaxed text-jiboia">
              Nosso compromisso é garantir que o Python Norte seja um espaço acolhedor, diverso e respeitoso para toda a comunidade.
            </p>

            <p className="text-lg leading-relaxed text-jiboia">
              Este Código de Conduta baseia-se na versão elaborada pela Python Brasil & APyB (Associação Python Brasil) - <a href="https://apyb.python.org.br/pythonbrasil/cdc/" className="text-theme-warning hover:text-theme-warning/90 underline">Código de Conduta da Python Brasil</a>.
            </p>
          </section>

          {/* Report Button */}
          <div className="mt-12 flex justify-center">
            <Button
              onClick={handleReport}
              className="bg-theme-warning hover:bg-theme-warning/90 text-white text-lg px-6 py-3"
            >
              <Send className="mr-2 h-5 w-5" />
              Enviar Denúncia
            </Button>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default CodeOfConduct;