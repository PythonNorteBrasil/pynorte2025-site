import { Star } from "lucide-react";

export interface SpeakerCardProps {
  avatarUrl: string;
  username: string;
  fullName: string;
  talkTitle: string;
  link?: string;
}

export function SpeakerCard({
  avatarUrl,
  username,
  fullName,
  talkTitle,
  link,
}: SpeakerCardProps) {
  return (
    <button className="relative flex flex-col  items-center text-center w-[330px] h-[300px] rounded shadow-lg bg-vibora pt-16 pb-8 px-6 mb-8 lg:mb-0">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center"
      >
        {/* Avatar */}
        <img
          src={avatarUrl}
          alt={`Foto de ${fullName}`}
          className="absolute -top-8 h-24 w-24 rounded-full object-cover  border-cyan-800 self-center shadow-lg border-4"
        />

        {/* Arroba */}

        <span className="mb-3 text-sm font-medium tracking-wide text-tacaca">
          @{username}
        </span>

        {/* Selo Keynote */}
        <span className="mb-4 inline-flex items-center gap-1 rounded bg-amber-500 px-4 py-1 text-xs font-semibold tracking-wider text-acai">
          <Star className="h-4 w-4 shrink-0" />
          Keynote
        </span>

        {/* Nome */}
        <h3 className="mb-4 font-mono text-lg font-bold leading-tight text-tacaca">
          {fullName}
        </h3>

        {/* Título da palestra */}
        <p className="text-sm leading-relaxed text-tacaca">{talkTitle}</p>
      </a>
    </button>
  );
}
