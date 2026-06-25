"use client";

import { useEffect, useId, useRef, useState } from "react";
import {
  BASARET_INSTAGRAM_HANDLE,
  BASARET_INSTAGRAM_URL,
} from "../data/social";
import { NollebokOffsetBox } from "./NollebokSectionLabel";

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
          className="absolute bottom-[calc(100%+0.75rem)] right-0 w-[15.5rem] md:w-60"
        >
          <NollebokOffsetBox
            color="bla"
            className="block w-full"
            innerClassName="px-5 py-4 md:px-5 md:py-4"
          >
            <p className="text-base font-bold leading-snug md:text-base">
              Följ basåret på Insta
            </p>
            <a
              href={BASARET_INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center gap-2 text-base font-bold underline decoration-nollebok-ink/35 underline-offset-2 transition hover:decoration-nollebok-ink md:text-base"
            >
              <InstagramIcon className="h-5 w-5 shrink-0 md:h-5 md:w-5" />
              {BASARET_INSTAGRAM_HANDLE}
            </a>
          </NollebokOffsetBox>
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
        className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-nollebok-ink bg-nollebok-lila shadow-[2px_3px_0_rgba(18,18,13,0.15)] transition hover:bg-nollebok-lila/90 md:h-[4.5rem] md:w-[4.5rem]"
      >
        {open ? (
          <span className="text-3xl leading-none md:text-3xl" aria-hidden>
            ×
          </span>
        ) : (
          <InstagramIcon className="h-8 w-8 md:h-9 md:w-9" />
        )}
      </button>
    </div>
  );
}
