"use client";

import { useSyncExternalStore } from "react";
import {
  formatScheduleDate,
  getTodayScheduleDay,
  scrollToScheduleDay,
} from "../utils/aktivitet";

function subscribe() {
  return () => {};
}

function getToday() {
  return getTodayScheduleDay();
}

function getServerToday() {
  return null;
}

export function AktivitetTodayButton() {
  const today = useSyncExternalStore(subscribe, getToday, getServerToday);

  if (!today) return null;

  const label = formatScheduleDate(today.date, today.weekday);

  return (
    <div className="flex justify-center">
      <button
        type="button"
        onClick={() => scrollToScheduleDay(today.date)}
        aria-label={`Tryck för att se dagens aktiviteter, ${label}`}
        className="flex w-full max-w-md items-center gap-3 rounded-2xl border-2 border-nollebok-ink bg-nollebok-beige px-4 py-3.5 text-left transition hover:bg-nollebok-beige/80 md:gap-4 md:px-5 md:py-4"
      >
        <span className="shrink-0 rounded-lg border-2 border-nollebok-ink bg-nollebok-lila px-2.5 py-1 text-sm font-bold uppercase tracking-wide md:text-base">
          Idag
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-base font-bold md:text-lg">{label}</span>
          <span className="mt-1 block text-sm text-nollebok-ink/70 md:text-base">
            Tryck här för dagens aktiviteter
          </span>
        </span>
        <span aria-hidden className="shrink-0 text-2xl leading-none md:text-3xl">
          ↓
        </span>
      </button>
    </div>
  );
}
