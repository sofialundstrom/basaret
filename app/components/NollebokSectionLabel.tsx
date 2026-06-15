import type { ReactNode } from "react";
import type { DayColor } from "../types/schedule";

const offsetClassName =
  "absolute inset-0 z-0 translate-x-1.5 translate-y-1.5 border-2 border-nollebok-ink bg-nollebok-gron";

export const nollebokLabelColorClasses: Record<DayColor, string> = {
  bla: "bg-nollebok-bla",
  ljusrosa: "bg-nollebok-ljusrosa",
  lila: "bg-nollebok-lila",
  gron: "bg-nollebok-gron",
  beige: "bg-nollebok-beige",
  rosa: "bg-nollebok-rosa",
};

const sizeClasses = {
  lg: "px-4 py-1.5 text-xl font-black uppercase tracking-wide md:px-5 md:text-2xl",
  sm: "px-5 py-2 text-sm font-bold uppercase tracking-wide md:px-6 md:py-2.5 md:text-base",
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
      <span aria-hidden className={offsetClassName} />
      <span
        className={`relative z-10 block border-2 border-nollebok-ink text-nollebok-ink ${nollebokLabelColorClasses[color]} ${innerClassName}`}
      >
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
};

export function NollebokSectionLabel({
  children,
  color = "ljusrosa",
  size = "lg",
  as: Tag = "span",
}: NollebokSectionLabelProps) {
  return (
    <span className="relative inline-block">
      <span aria-hidden className={offsetClassName} />
      <Tag
        className={`relative z-10 block border-2 border-nollebok-ink text-nollebok-ink ${nollebokLabelColorClasses[color]} ${sizeClasses[size]}`}
      >
        {children}
      </Tag>
    </span>
  );
}
