"use client";

import { useEffect, useState } from "react";
import {
  BASARET_INSTAGRAM_HANDLE,
  BASARET_INSTAGRAM_URL,
} from "../data/social";

const DISMISS_KEY = "basaret-insta-postit-dismissed";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function InstagramPostIt() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(DISMISS_KEY)) return;

    const showTimer = window.setTimeout(() => {
      setMounted(true);
      requestAnimationFrame(() => setVisible(true));
    }, 1800);

    return () => window.clearTimeout(showTimer);
  }, []);

  const dismiss = () => {
    sessionStorage.setItem(DISMISS_KEY, "1");
    setVisible(false);
    window.setTimeout(() => setMounted(false), 300);
  };

  if (!mounted) return null;

  return (
    <div
      className={`fixed bottom-28 left-4 z-50 w-[12.25rem] -rotate-1 transition-all duration-500 ease-out sm:bottom-24 sm:w-[13rem] md:bottom-16 md:left-auto md:right-14 md:w-[13.5rem] md:rotate-[2.5deg] ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
      role="complementary"
      aria-label="Följ basåret på Instagram"
    >
      <div
        aria-hidden
        className="absolute -top-2.5 left-1/2 h-5 w-12 -translate-x-1/2 -rotate-1 border border-nollebok-ink/10 bg-nollebok-cream/90 shadow-sm"
      />

      <div className="relative bg-nollebok-lila px-3.5 pb-3.5 pt-5 shadow-[3px_4px_0_rgba(18,18,13,0.12)] md:px-4 md:pb-4">
        <button
          type="button"
          onClick={dismiss}
          title="Ta bort lappen"
          className="absolute right-1.5 top-1.5 flex h-6 w-6 items-center justify-center text-lg leading-none text-nollebok-ink/40 transition hover:text-nollebok-ink"
          aria-label="Ta bort lappen"
        >
          ×
        </button>

        <p className="text-sm font-black uppercase tracking-wide md:text-base">
          Psst!
        </p>
        <p className="mt-1 text-xs leading-snug md:text-sm">Följ oss på Insta</p>

        <a
          href={BASARET_INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className="-ml-1 mt-2 flex items-center gap-1 text-[0.7rem] font-bold leading-tight underline decoration-nollebok-ink/35 underline-offset-2 transition hover:decoration-nollebok-ink sm:text-xs md:text-sm"
        >
          <InstagramIcon className="h-3.5 w-3.5 shrink-0 md:h-4 md:w-4" />
          <span>{BASARET_INSTAGRAM_HANDLE}</span>
        </a>
      </div>
    </div>
  );
}
