import {
  NOLLEBOK_PDF_FILENAME,
  NOLLEBOK_PDF_URL,
} from "../data/nollebok";
import { NollebokButton } from "./NollebokButton";
import { NollebokReader } from "./NollebokReader";
import { NollebokSectionLabel } from "./NollebokSectionLabel";

export function NollebokSection() {
  return (
    <section className="relative scroll-mt-28 px-6 pb-16 pt-8 md:scroll-mt-32 md:px-12 md:pb-20 md:pt-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
        <div className="max-w-2xl">
          <NollebokSectionLabel as="h2" id="nollebok" color="lila">
            Nolleboken
          </NollebokSectionLabel>
          <p className="mt-4 text-base leading-relaxed md:text-lg">
            Här kan Nollan läsa Nolleboken inför starten på basåret. Den
            innehåller information om Nolleveckan, aktiviteterna och annat som
            är bra att ha koll på. Boken går att bläddra i direkt här på sidan
            eller ladda ner för att ha nära till hands.
          </p>
          <div className="mt-8 flex justify-center">
            <NollebokButton
              href={NOLLEBOK_PDF_URL}
              download={NOLLEBOK_PDF_FILENAME}
            >
              Ladda ner Nolleboken
            </NollebokButton>
          </div>
        </div>

        <div className="mt-12 w-full md:mt-16">
          <NollebokReader />
        </div>
      </div>
    </section>
  );
}
