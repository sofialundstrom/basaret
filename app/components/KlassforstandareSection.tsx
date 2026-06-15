import { klassforstandare } from "../data/klassforstandare";
import { PolaroidMentorSection } from "./PolaroidMentorSection";

export function KlassforstandareSection() {
  return (
    <PolaroidMentorSection
      title="Klassföreståndare"
      labelColor="ljusrosa"
      description="Klassföreståndaren är en student vid LiU som finns till för att hjälpa dig få en bra start på studietiden. Hör av dig före, under eller efter Nolleveckan med precis vad som helst!"
      people={klassforstandare}
      rotations={[
        "-rotate-2 md:-rotate-3",
        "rotate-2 md:rotate-3",
        "-rotate-1 md:-rotate-2",
      ]}
    />
  );
}
