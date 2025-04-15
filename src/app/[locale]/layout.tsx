import { ReactElement } from "react"
import { I18nProviderClient } from "@/locales/client"
import { getStaticParams } from "@/locales/server"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ScrollWrapper from "@/components/ScrollWrapper";

export function generateStaticParams() {
  return getStaticParams()
}

export default async function SubLayout({
  params,
  children,
}: {
  params: Promise<{ locale: string }>;
  children: ReactElement;
}) {
  const { locale } = await params;

  return (
    <body>
      <I18nProviderClient locale={locale}>
        <ScrollWrapper>
          <div className="min-h-screen bg-theme-cream">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </ScrollWrapper>
      </I18nProviderClient>
    </body>
  );
}
