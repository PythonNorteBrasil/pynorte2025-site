"use client";

import { useScopedI18n } from "@/locales/client";

const EventInfos = () => {
  const t = useScopedI18n("component.aboutTheEvent.eventInfos");

  return (
    <div className="flex justify-center lg:justify-end items-center gap-4 lg:gap-6 mt-2">
      <InfoBlock value={"03"} label={t("days")} />
      <Divider />
      <InfoBlock value={"15"} label={t("experts")} />
      <Divider />
      <InfoBlock value={"21"} label={t("participants")} />
    </div>
  );
};

const InfoBlock = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <div className="text-3xl md:text-4xl font-bold text-acai">{value}</div>
    <div className="text-xs text-acai">{label}</div>
  </div>
);

const Divider = () => <div className="w-[4px] h-[40px] bg-camarao" />;

export default EventInfos;
