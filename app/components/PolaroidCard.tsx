import { Caveat } from "next/font/google";
import Image from "next/image";
import type { Mentor } from "../types/mentor";
import { formatPhone, phoneToTel } from "../utils/phone";

const polaroidHandwriting = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const imageFocusClasses = {
  center: "object-center",
  face: "scale-125 object-[50%_12%]",
};

function PhoneIcon({ className }: { className?: string }) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
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
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export type PolaroidPerson = Mentor & { rotation?: string };

export function PolaroidCard({ person }: { person: PolaroidPerson }) {
  return (
    <article className="flex justify-center">
      <div
        className={`w-64 bg-white p-3 pb-8 shadow-[0_8px_24px_rgba(18,18,13,0.12)] sm:w-72 ${person.rotation ?? ""}`}
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
          <Image
            src={person.image}
            alt={person.name}
            fill
            className={`object-cover ${imageFocusClasses[person.imageFocus ?? "center"]}`}
            sizes="(max-width: 768px) 85vw, 288px"
          />
        </div>

        <div className="mt-4 px-1 text-center">
          <p
            className={`${polaroidHandwriting.className} text-2xl leading-tight text-nollebok-ink md:text-3xl`}
          >
            {person.name}
          </p>

          <div className="mt-3 space-y-1.5">
            {person.phone ? (
              <a
                href={`tel:${phoneToTel(person.phone)}`}
                className="inline-flex items-center justify-center gap-1.5 text-sm tabular-nums hover:underline md:text-base"
              >
                <PhoneIcon className="h-3.5 w-3.5 shrink-0 md:h-4 md:w-4" />
                {formatPhone(person.phone)}
              </a>
            ) : (
              <p className="inline-flex items-center justify-center gap-1.5 text-sm text-nollebok-ink/50">
                <PhoneIcon className="h-3.5 w-3.5 shrink-0 opacity-50" />
                Telefon kommer snart
              </p>
            )}

            {person.email ? (
              <a
                href={`mailto:${person.email}`}
                className="inline-flex max-w-full items-center justify-center gap-1.5 break-all text-xs leading-snug hover:underline md:text-sm"
              >
                <MailIcon className="h-3.5 w-3.5 shrink-0 md:h-4 md:w-4" />
                {person.email}
              </a>
            ) : (
              <p className="inline-flex items-center justify-center gap-1.5 text-sm text-nollebok-ink/50">
                <MailIcon className="h-3.5 w-3.5 shrink-0 opacity-50" />
                Mejl kommer snart
              </p>
            )}
          </div>

          {person.program ? (
            <p className="mt-3 text-sm leading-snug text-nollebok-ink/70 md:text-base">
              {person.program}
            </p>
          ) : null}
        </div>
      </div>
    </article>
  );
}
