import type { ScheduleActivity } from "../types/schedule";
import { AlkoholfriIcon } from "./AlkoholfriIcon";

type AktivitetActivityProps = {
  activity: ScheduleActivity;
};

export function AktivitetActivity({ activity }: AktivitetActivityProps) {
  const times = activity.time.split(",").map((time) => time.trim());

  return (
    <article className="border-t-2 border-nollebok-ink/10 px-4 py-4 first:border-t-0 md:px-5 md:py-5">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        {times.map((time) => (
          <p key={time} className="text-sm font-bold tabular-nums md:text-base">
            {time}
          </p>
        ))}
        <p className="text-sm text-nollebok-ink/75 md:text-base">
          {activity.location}
        </p>
      </div>

      <div className="mt-1.5 flex flex-wrap items-center gap-2">
        <h3 className="text-lg font-bold md:text-xl">{activity.header}</h3>
        {!activity.alcohol && <AlkoholfriIcon size={22} />}
      </div>

      <p className="mt-2 text-sm leading-relaxed text-nollebok-ink/90 md:text-base">
        {activity.description}
      </p>
    </article>
  );
}
