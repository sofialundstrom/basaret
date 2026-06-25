import { dayAccentColors } from "../data/nollebok-colors";
import type { ScheduleDay } from "../types/schedule";
import { dayAnchorId } from "../utils/aktivitet";
import { AktivitetActivity } from "./AktivitetActivity";
import { NollebokSectionLabel } from "./NollebokSectionLabel";

type AktivitetDaySectionProps = {
  day: ScheduleDay;
  isLast?: boolean;
};

export function AktivitetDaySection({ day, isLast = false }: AktivitetDaySectionProps) {
  const accent = dayAccentColors[day.color];

  return (
    <section
      id={dayAnchorId(day.date)}
      className={`scroll-mt-6 w-full max-w-2xl md:scroll-mt-8 ${isLast ? "" : "pb-12 md:pb-16"}`}
    >
      <div className="mb-6 pr-1 md:mb-8 md:pr-0">
        <NollebokSectionLabel as="h2" size="lg" color={day.color}>
          {day.weekday} – {day.date}
        </NollebokSectionLabel>
      </div>

      <ol className="relative space-y-0">
        {day.activities.map((activity, index) => (
          <li
            key={`${activity.header}-${activity.time}`}
            className="relative pl-8 pb-8 last:pb-0 md:pl-10"
          >
            {index < day.activities.length - 1 && (
              <span
                aria-hidden
                className="absolute left-[0.4375rem] top-3 bottom-0 w-0.5 md:left-[0.5625rem]"
                style={{ backgroundColor: accent }}
              />
            )}
            <span
              aria-hidden
              className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-nollebok-ink md:top-2 md:h-[1.125rem] md:w-[1.125rem]"
              style={{ backgroundColor: accent }}
            />
            <AktivitetActivity activity={activity} />
          </li>
        ))}
      </ol>
    </section>
  );
}
