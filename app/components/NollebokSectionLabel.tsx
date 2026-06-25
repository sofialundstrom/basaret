import type { ReactNode } from "react";
import type { DayColor } from "../types/schedule";

const borderOverlayClassName =
  "pointer-events-none absolute inset-0 z-10 border-2 border-nollebok-ink bg-transparent";

const colorOffsetClassName = (color: DayColor, extra: string) =>
  `relative z-0 block translate-x-2 translate-y-2 text-nollebok-ink ${nollebokLabelColorClasses[color]} ${extra}`;

export const nollebokLabelColorClasses: Record<DayColor, string> = {
  bla: "bg-nollebok-bla",
  ljusrosa: "bg-nollebok-ljusrosa",
  lila: "bg-nollebok-lila",
  gron: "bg-nollebok-gron",
  beige: "bg-nollebok-beige",
  rosa: "bg-nollebok-rosa",
};

const sizeClasses = {
  lg: "px-4 pt-1.5 pb-2.5 text-xl font-black uppercase tracking-wide md:px-5 md:pb-3 md:text-2xl",
  sm: "px-5 pt-2 pb-2.5 text-sm font-bold uppercase tracking-wide md:px-6 md:pt-2.5 md:pb-3 md:text-base",
};

type NollebokOffsetBoxProps = {
  children: ReactNode;
  color: DayColor;
  className?: string;
  innerClassName?: string;
};

export function NollebokOffsetBox({
  children,
  color,
  className = "",
  innerClassName = "",
}: NollebokOffsetBoxProps) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span aria-hidden className={borderOverlayClassName} />
      <span className={colorOffsetClassName(color, innerClassName)}>
        {children}
      </span>
    </span>
  );
}

type NollebokSectionLabelProps = {
  children: ReactNode;
  color?: DayColor;
  size?: "lg" | "sm";
  as?: "span" | "h2";
  id?: string;
};

export function NollebokSectionLabel({
  children,
  color = "ljusrosa",
  size = "lg",
  as: Tag = "span",
  id,
}: NollebokSectionLabelProps) {
  return (
    <span className="relative inline-block">
      <span aria-hidden className={borderOverlayClassName} />
      <Tag
        id={id}
        className={colorOffsetClassName(color, sizeClasses[size])}
      >
        {children}
      </Tag>
    </span>
  );
}
