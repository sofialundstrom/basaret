import Image from "next/image";
import type { Mentor } from "../types/mentor";
import { formatPhone, phoneToTel } from "../utils/phone";

type PersonCircleCardProps = {
  person: Mentor;
};

const imageFocusClasses = {
  center: "object-center",
  face: "scale-125 object-[50%_12%]",
};

export function PersonCircleCard({ person }: PersonCircleCardProps) {
  return (
    <article className="flex w-40 shrink-0 flex-col items-center sm:w-44 md:w-56">
      <div className="relative mb-1 mr-1 h-36 w-36 sm:h-40 sm:w-40 md:h-52 md:w-52">
        <div
          aria-hidden
          className="absolute left-2 top-2 h-full w-full rounded-full bg-[#dfecbf] md:left-3 md:top-3"
        />
        <div className="relative z-10 h-full w-full overflow-hidden rounded-full border-[3px] border-nollebok-ink bg-neutral-100">
          <Image
            src={person.image}
            alt={person.name}
            fill
            className={`object-cover ${imageFocusClasses[person.imageFocus ?? "center"]}`}
            sizes="(max-width: 768px) 160px, 208px"
          />
        </div>
      </div>

      <div className="mt-5 w-full text-center">
        <p className="text-base font-bold leading-tight md:text-lg">
          {person.name}
        </p>

        <div className="mt-2 space-y-1 text-xs leading-snug md:text-sm">
          {person.phone ? (
            <a
              href={`tel:${phoneToTel(person.phone)}`}
              className="block hover:underline"
            >
              {formatPhone(person.phone)}
            </a>
          ) : (
            <p className="text-nollebok-ink/50">Telefon kommer snart</p>
          )}

          {person.email ? (
            <a
              href={`mailto:${person.email}`}
              className="block break-all hover:underline"
            >
              {person.email}
            </a>
          ) : (
            <p className="text-nollebok-ink/50">Mejl kommer snart</p>
          )}
        </div>
      </div>
    </article>
  );
}
