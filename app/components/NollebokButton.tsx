import type { ButtonHTMLAttributes, ReactNode } from "react";

type NollebokButtonProps = {
  href: string;
  children: ReactNode;
  external?: boolean;
  download?: string;
};

type NollebokActionButtonProps = {
  children: ReactNode;
  size?: "sm" | "lg" | "icon";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const baseClassName =
  "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border-0 font-bold shadow-[4px_5px_5px_rgba(18,18,13,0.17)] transition-all bg-nollebok-gron hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-nollebok-bla hover:shadow-[5px_6px_6px_rgba(18,18,13,0.17)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_3px_3px_rgba(18,18,13,0.15)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-nollebok-ink disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:bg-nollebok-gron disabled:hover:shadow-[4px_5px_5px_rgba(18,18,13,0.17)]";

const sizeClassName = {
  lg: "gap-2.5 px-7 py-3.5 text-base md:px-9 md:py-4 md:text-lg",
  sm: "px-4 py-2 text-sm md:px-5 md:py-2.5 md:text-base",
  icon: "h-10 w-14 p-0 text-xl md:h-11 md:w-16",
};

export function nollebokActionButtonClassName(size: "sm" | "lg" | "icon" = "lg") {
  return `${baseClassName} ${sizeClassName[size]}`;
}

function DownloadIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 4v10" />
      <path d="m8 11 4 4 4-4" />
      <path d="M5 20h14" />
    </svg>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function NollebokActionButton({
  children,
  size = "lg",
  className = "",
  ...props
}: NollebokActionButtonProps) {
  return (
    <button
      type="button"
      className={`${nollebokActionButtonClassName(size)} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function NollebokButton({
  href,
  children,
  external = true,
  download,
}: NollebokButtonProps) {
  const className = nollebokActionButtonClassName("lg");
  const iconClassName =
    "h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1 md:h-[1.35rem] md:w-[1.35rem]";

  const inner = (
    <>
      {children}
      {download ? (
        <DownloadIcon className={iconClassName} />
      ) : (
        <ArrowIcon className={iconClassName} />
      )}
    </>
  );

  if (download) {
    return (
      <a href={href} download={download} className={className}>
        {inner}
      </a>
    );
  }

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={className}
      >
        {inner}
      </a>
    );
  }

  return (
    <a href={href} className={className}>
      {inner}
    </a>
  );
}
