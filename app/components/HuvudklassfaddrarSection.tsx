import { huvudklassfaddrare } from "../data/huvudklassfaddrare";
import { PolaroidMentorSection } from "./PolaroidMentorSection";

export function HuvudklassfaddrarSection() {
  return (
    <PolaroidMentorSection
      title="Huvudklassfaddrar"
      labelColor="beige"
      description="Huvudklassfaddrarna, även kallade HKF, ansvarar för aktiviteterna under Nolleveckan som ligger utanför schemalagd studietid. Du kan också höra av dig till HKF om något känns oklart under dina första veckor på Linköpings universitet och Campus Norrköping."
      people={huvudklassfaddrare}
      rotations={[
        "rotate-2 md:rotate-3",
        "-rotate-2 md:-rotate-2",
        "rotate-1 md:rotate-2",
      ]}
    />
  );
}
