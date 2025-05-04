"use client";

import { useScopedI18n } from "@/locales/client";

export enum SponsorLevel {
  DIAMOND = "diamond",
  GOLD = "gold",
  SILVER = "silver",
  BRONZE = "bronze",
  SUPPORT = "support",
}

const levelsColors = {
  [SponsorLevel.DIAMOND]: "bg-camarao-alternative",
  [SponsorLevel.GOLD]: "bg-camarao-alternative",
  [SponsorLevel.SILVER]: "bg-tacaca-light",
  [SponsorLevel.BRONZE]: "bg-jambu-alternative",
  [SponsorLevel.SUPPORT]: "bg-cabloca-light",
};

type Sponsor = {
  id: string;
  name: string;
  logo: string;
  url: string;
};

type SponsorsLevel = {
  level: SponsorLevel;
  sponsors: Sponsor[];
};

const levelImages = {
  [SponsorLevel.DIAMOND]: "sponsors_level/diamante.png",
  [SponsorLevel.GOLD]: "sponsors_level/ouro.png",
  [SponsorLevel.SILVER]: "sponsors_level/prata.png",
  [SponsorLevel.BRONZE]: "sponsors_level/bronze.png",
  [SponsorLevel.SUPPORT]: "sponsors_level/apoiador.png",
};

const imgWidth = {
  [SponsorLevel.DIAMOND]: "w-[350px] h-[94px]",
  [SponsorLevel.GOLD]: "w-[300px] h-[50px]",
  [SponsorLevel.SILVER]: "w-[250px] h-[50px]",
  [SponsorLevel.BRONZE]: "w-[200px] h-[50px]",
  [SponsorLevel.SUPPORT]: "w-[150px] h-[50px]",
};

const SponsorsLevel = ({ sponsors, level }: SponsorsLevel) => {
  const t = useScopedI18n("component.sponsors");
  const width =
    level === SponsorLevel.DIAMOND ? "w-full" : "w-[calc(100%/2-29px)]";

  return (
    <div className={`${width} `}>
      <div className="relative top-12 flex justify-center items-center">
        <img src={levelImages[level]} className="w-[168px] h-[94px]" />
      </div>
      <div
        className={`rounded-[9px] ${levelsColors[level]} flex flex-col items-center justify-center py-4 mx-auto gap-6`}
      >
        <div className="flex flex-row flex-wrap justify-center gap-16 items-center lg:h-[400px] ">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className={`flex justify-center items-center py-[50px] ${imgWidth[level]} `}
            >
              <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className={`${imgWidth[level]} object-contain`}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsorsLevel;
