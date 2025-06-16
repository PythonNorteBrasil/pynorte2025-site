"use client";

import { useScopedI18n } from "@/locales/client";
import { SpeakerCard } from "@/components/ui/SpeakerCard";
import { link } from "fs";

const Keynotes = () => {
  const t = useScopedI18n("component.sponsors");

  const speakers = [
    {
      avatarUrl: "/iris.png",
      username: "irisplena",
      fullName: "Iris Ferreira",
      talkTitle:
        "Arquiteta de Soluções na AWS, com foco em Machine Learning, e atua para aumentar a presença feminina na tecnologia",
      link: "https://br.linkedin.com/in/iris-ferreira",
    },
    {
      avatarUrl: "/thayana.jpeg",
      username: "thayanacmamore.dev",
      fullName: "Thayana Mamoré",
      talkTitle:
        "Coordenadora na Compass UOL e voluntária em comunidades tech, com foco em desenvolvimento web, inovação e colaboração",
      link: "https://www.linkedin.com/in/thayanacmamore",
    },
    {
      avatarUrl: "/alex.jpeg",
      username: "allexlimas",
      fullName: "Allex Lima",
      talkTitle:
        "Arquiteto de Deep Learning na AWS, com foco em IA Generativa e experiência em AI/ML e open source",
      link: "https://br.linkedin.com/in/allexlimas",
    },
  ];
  return (
    <section className="bg-theme-background relative mt-[56px]">
      <h2 className="mb-[100px] text-center tracking-wide text-3xl text-acai font-medium  font-mono">
        Keynotes
      </h2>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 justify-items-center ">
        {speakers.map((speaker) => (
          <SpeakerCard key={speaker.username} {...speaker} />
        ))}
      </div>
    </section>
  );
};

export default Keynotes;
