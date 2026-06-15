import { NOLLEBOK_PDF_FILENAME, NOLLEBOK_PDF_URL } from "../data/nollebok";
import { NollebokButton } from "./NollebokButton";
import { NollebokReader } from "./NollebokReader";

export function NollebokSection() {
  return (
    <section className="relative bg-nollebok-cream px-6 pb-16 pt-8 md:px-12 md:pb-20 md:pt-10">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="nollebok"
            className="text-3xl font-black tracking-tight md:text-4xl"
          >
            Nolleboken
          </h2>
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
              Ladda ner nolleboken
            </NollebokButton>
          </div>
        </div>

        <div className="mt-12 md:mt-16">
          <NollebokReader />
        </div>
      </div>
    </section>
  );
}
