"use client";

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
  [SponsorLevel.DIAMOND]: "lg:w-[300px] lg:h-[94px] w-[300px] h-[50px]",
  [SponsorLevel.GOLD]: "lg:w-[300px] lg:h-[94px] w-[300px] h-[50px]",
  [SponsorLevel.SILVER]: "lg:w-[250px] lg:h-[94px] w-[200px] h-[50px]",
  [SponsorLevel.BRONZE]: "lg:w-[200px] lg:h-[94px] w-[200px] h-[50px]",
  [SponsorLevel.SUPPORT]: "lg:w-[150px] lg:h-[94px] w-[100px] h-[80px]",
};

const SponsorsLevel = ({ sponsors, level }: SponsorsLevel) => {
  const width =
    level === SponsorLevel.DIAMOND ? "w-full" : "lg:w-[calc(100%/2-29px)]";

  return (
    <div className={`${width}`}>
      <div className="relative top-12 flex justify-center items-center">
        <img
          src={levelImages[level]}
          className="lg:w-[168px] lg:h-[94px] object-contain w-[120px] h-[60px]"
        />
      </div>
      <div
        className={`rounded-xl ${levelsColors[level]} flex flex-wrap justify-center items-center gap-12 py-10 px-4 w-full  mt-6  lg:h-[400px]`}
      >
        {sponsors.map((sponsor) => (
          <div
            key={sponsor.id}
            className={`flex justify-center items-center ${imgWidth[level]}`}
          >
            <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className={`object-contain ${imgWidth[level]}`}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorsLevel;
