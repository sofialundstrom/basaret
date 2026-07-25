import Image from "next/image";
import { HashScrollOnLoad } from "./components/HashScrollOnLoad";
import { Header } from "./components/Header";
import { HuvudklassfaddrarSection } from "./components/HuvudklassfaddrarSection";
import { KlassforstandareSection } from "./components/KlassforstandareSection";
import { NollebokSection } from "./components/NollebokSection";
import { NollebokButton } from "./components/NollebokButton";
import { NollebokEdgeDecor } from "./components/NollebokEdgeDecor";
import { NollebokSectionDivider } from "./components/NollebokSectionDivider";
import { SponsorSection } from "./components/SponsorSection";

const nolleEnkatUrl = "https://forms.gle/KUT7PoUNN38byMLD8";

export default function Home() {
  return (
    <>
      <HashScrollOnLoad />
      <Header />

      <main className="bg-nollebok-cream text-nollebok-ink">
        <div className="relative h-[32vh] w-full overflow-hidden md:h-[58vh]">
          <Image
            src="/images/group.jpg"
            alt="Basårets faddrar framför Linköpings universitet"
            fill
            priority
            className="object-cover object-[50%_27%]"
          />
        </div>

        <div className="-mt-12 md:-mt-20">
          <div aria-hidden className="h-12 bg-nollebok-cream md:h-20" />

          <div className="relative md:px-40 lg:px-48 xl:px-56">
            <NollebokEdgeDecor />

            <div className="bg-nollebok-cream px-6 pb-16 pt-6 md:px-12 md:pb-20 md:pt-8">
              <div className="mx-auto max-w-3xl text-center">
                <h1 className="text-3xl font-black tracking-tight md:text-4xl lg:text-5xl">
                  Välkommen Nollan!
                </h1>

                <div className="mt-8 space-y-6 text-left text-base leading-relaxed md:text-lg lg:text-xl">
                  <p>
                    På denna sida hittar Nollan information om vad som händer
                    under första veckan på Linköpings Universitet, den så kallade
                    &rdquo;Nolle-veckan&rdquo;. Nolle-veckan består av både
                    undervisning och roliga aktiviteter där alla Basårsnollan
                    får chans att lära känna varandra. Aktiviteterna är såklart
                    frivilliga, men vi hoppas att du vill vara med på så mycket
                    som möjligt, Nollan!
                  </p>

                  <p>
                    Viktigt att veta är att Linköpings Universitet tar kraftigt
                    avstånd från förnedrande och kränkande nollningar som
                    Nollan kanske hört talas om. Syftet med denna vecka är att
                    ge Nollan en rolig start på basåret och en introduktion till
                    livet som universitetsstudent! Vi som kommer att ta hand om
                    dig under denna roliga period är en frisk blandning av
                    studenter från olika tekniska utbildningar här på Campus
                    Norrköping. För att se till så att du får en så bra start på
                    studentlivet som möjligt kommer vi faddrar att vägleda dig
                    genom din första vecka av studier och roliga aktiviteter.
                  </p>

                  <p>Det ska bli kul att ses!</p>

                  <div className="flex justify-center pt-4 md:pt-6">
                    <NollebokButton href={nolleEnkatUrl}>
                      Fyll i Nolle-enkäten
                    </NollebokButton>
                  </div>
                </div>
              </div>
            </div>

            <NollebokSectionDivider />
            <KlassforstandareSection />
            <NollebokSectionDivider />
            <HuvudklassfaddrarSection />
            <NollebokSectionDivider />
            <NollebokSection />
            <NollebokSectionDivider />
            <SponsorSection />
          </div>
        </div>
      </main>
    </>
  );
}
