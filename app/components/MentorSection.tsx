import type { Mentor } from "../types/mentor";
import { NollebokSectionLabel } from "./NollebokSectionLabel";
import { PersonCircleCard } from "./PersonCircleCard";

type MentorSectionProps = {
  title: string;
  labelColor?: "ljusrosa" | "beige";
  description: string;
  people: Mentor[];
};

export function MentorSection({
  title,
  labelColor = "ljusrosa",
  description,
  people,
}: MentorSectionProps) {
  return (
    <section className="relative bg-nollebok-cream px-6 py-16 md:px-12 md:py-20">
      <div className="relative mx-auto max-w-6xl">
        <NollebokSectionLabel color={labelColor}>{title}</NollebokSectionLabel>

        <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed md:text-lg lg:text-xl">
          {description}
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-8 sm:gap-10 md:mt-10 md:gap-12 lg:gap-16">
          {people.map((person) => (
            <PersonCircleCard key={person.name} person={person} />
          ))}
        </div>
      </div>
    </section>
  );
}
