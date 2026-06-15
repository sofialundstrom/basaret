"use client";

import { useEffect, useId, useRef, useState } from "react";
import {
  BASARET_INSTAGRAM_HANDLE,
  BASARET_INSTAGRAM_URL,
} from "../data/social";

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

export function InstagramFab() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const popoverId = useId();

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className="fixed bottom-7 right-6 z-50 md:bottom-8 md:right-8"
    >
      {open && (
        <div
          id={popoverId}
          role="dialog"
          aria-label="Följ basåret på Instagram"
          className="absolute bottom-[calc(100%+0.75rem)] right-0 w-[13.5rem]"
        >
          <span
            aria-hidden
            className="absolute inset-0 translate-x-1 translate-y-1 border-2 border-nollebok-ink bg-nollebok-bla"
          />
          <div className="relative border-2 border-nollebok-ink bg-nollebok-beige px-4 py-3.5">
            <p className="text-sm font-bold leading-snug">
              Följ basåret på Insta
            </p>
            <a
              href={BASARET_INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center gap-1.5 text-sm font-bold underline decoration-nollebok-ink/35 underline-offset-2 transition hover:decoration-nollebok-ink"
            >
              <InstagramIcon className="h-4 w-4 shrink-0" />
              {BASARET_INSTAGRAM_HANDLE}
            </a>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={open ? popoverId : undefined}
        aria-haspopup="dialog"
        aria-label={
          open ? "Stäng Instagram-meny" : "Öppna Instagram-länk för basåret"
        }
        className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-nollebok-ink bg-nollebok-lila shadow-[2px_3px_0_rgba(18,18,13,0.15)] transition hover:bg-nollebok-lila/90"
      >
        {open ? (
          <span className="text-2xl leading-none" aria-hidden>
            ×
          </span>
        ) : (
          <InstagramIcon className="h-7 w-7" />
        )}
      </button>
    </div>
  );
}
