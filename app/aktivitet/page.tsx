import { AktivitetDaySection } from "../components/AktivitetDaySection";
import { AktivitetTodayButton } from "../components/AktivitetTodayButton";
import { AlkoholfriIcon } from "../components/AlkoholfriIcon";
import { Breadcrumb } from "../components/Breadcrumb";
import { Header } from "../components/Header";
import { NollebokEdgeDecor } from "../components/NollebokEdgeDecor";
import { aktivitetsschema } from "../data/aktivitetsschema";

export const metadata = {
  title: "Basåret",
  description:
    "Schema över aktiviteter under Nolleveckan för tekniskt basår på Linköpings universitet.",
};

export default function AktivitetPage() {
  return (
    <>
      <Header />

      <main className="flex-1 bg-nollebok-cream text-nollebok-ink">
        <div className="relative md:px-40 lg:px-48 xl:px-56">
          <NollebokEdgeDecor />

          <div className="px-6 pb-16 pt-8 md:px-8 md:pb-20 md:pt-12">
            <div className="mx-auto max-w-2xl">
              <Breadcrumb
                items={[
                  { label: "Basåret", href: "/" },
                  { label: "Aktivitetsschema" },
                ]}
                className="text-base md:text-lg"
              />

              <header className="text-center">
                <h1 className="text-4xl font-black tracking-tight md:text-5xl lg:text-6xl">
                  Aktivitetsschema
                </h1>
                <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-nollebok-ink/75 md:text-lg">
                  Nolleveckans aktiviteter utanför schemalagd tid. Alla
                  aktiviteter är frivilliga!
                </p>
              </header>

              <div className="mt-8 flex items-center justify-center gap-2.5 md:mt-10">
                <AlkoholfriIcon size={32} />
                <p className="text-base md:text-lg">= Alkoholfri aktivitet</p>
              </div>

              <div className="mt-8 md:mt-10">
                <AktivitetTodayButton />
              </div>

              <div className="mt-10 md:mt-12">
                {aktivitetsschema.map((day, index) => (
                  <AktivitetDaySection
                    key={day.date}
                    day={day}
                    isLast={index === aktivitetsschema.length - 1}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
