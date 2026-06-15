import type { ReactNode } from "react";

type NollebokButtonProps = {
  href: string;
  children: ReactNode;
  external?: boolean;
  download?: string;
};

export function NollebokButton({
  href,
  children,
  external = true,
  download,
}: NollebokButtonProps) {
  const className =
    "relative inline-block transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5";

  const inner = (
    <>
      <span
        aria-hidden
        className="absolute inset-0 translate-x-1.5 translate-y-1.5 border-2 border-nollebok-ink bg-nollebok-bla"
      />
      <span className="relative block border-2 border-nollebok-ink bg-nollebok-gron px-6 py-3 text-base font-bold md:px-8 md:py-3.5 md:text-lg">
        {children}
      </span>
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
