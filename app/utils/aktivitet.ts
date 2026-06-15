import { aktivitetsschema } from "../data/aktivitetsschema";
import type { ScheduleDay } from "../types/schedule";

export function dayAnchorId(date: string) {
  return `dag-${date.replace("/", "-")}`;
}

const monthNames = [
  "januari",
  "februari",
  "mars",
  "april",
  "maj",
  "juni",
  "juli",
  "augusti",
  "september",
  "oktober",
  "november",
  "december",
];

export function formatScheduleDate(date: string, weekday: string) {
  const [day, month] = date.split("/");
  const monthName = monthNames[Number(month) - 1] ?? month;
  return `${weekday} ${day} ${monthName}`;
}

export const weekdayShort: Record<string, string> = {
  Fredag: "Fre",
  Lördag: "Lör",
  Söndag: "Sön",
  Måndag: "Mån",
  Tisdag: "Tis",
  Onsdag: "Ons",
  Torsdag: "Tor",
};

export function getTodayScheduleDay(): ScheduleDay | null {
  const now = new Date();
  const todayKey = `${now.getDate()}/${now.getMonth() + 1}`;
  return aktivitetsschema.find((day) => day.date === todayKey) ?? null;
}

export function scrollToScheduleDay(date: string) {
  document.getElementById(dayAnchorId(date))?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
