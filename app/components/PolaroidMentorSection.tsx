import type { DayColor } from "../types/schedule";
import type { Mentor } from "../types/mentor";
import { NollebokSectionLabel } from "./NollebokSectionLabel";
import { PolaroidCard, type PolaroidPerson } from "./PolaroidCard";

type PolaroidMentorSectionProps = {
  title: string;
  labelColor?: DayColor;
  description: string;
  people: Mentor[];
  rotations?: string[];
};

export function PolaroidMentorSection({
  title,
  labelColor = "ljusrosa",
  description,
  people,
  rotations = [],
}: PolaroidMentorSectionProps) {
  const cards: PolaroidPerson[] = people.map((person, index) => ({
    ...person,
    rotation: rotations[index],
  }));

  return (
    <section className="px-6 py-16 md:px-12 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex justify-center">
          <NollebokSectionLabel color={labelColor}>{title}</NollebokSectionLabel>
        </div>

        <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed md:text-lg lg:text-xl">
          {description}
        </p>

        <div className="mt-8 flex flex-col items-center gap-10 md:mt-10 md:flex-row md:flex-wrap md:justify-center md:gap-10 lg:gap-12">
          {cards.map((person) => (
            <PolaroidCard key={person.name} person={person} />
          ))}
        </div>
      </div>
    </section>
  );
}
