import type { DayColor } from "../types/schedule";

export const nollebokHex = {
  bla: "#97d0bb",
  ljusrosa: "#f08691",
  lila: "#dcbed9",
  gron: "#dfecbf",
  beige: "#fbd4b7",
  rosa: "#ec6a7a",
  cream: "#faf3e9",
  ink: "#12120d",
} as const;

export const dayAccentColors: Record<DayColor, string> = {
  bla: nollebokHex.bla,
  ljusrosa: nollebokHex.ljusrosa,
  lila: nollebokHex.lila,
  gron: nollebokHex.gron,
  beige: nollebokHex.beige,
  rosa: nollebokHex.rosa,
};
