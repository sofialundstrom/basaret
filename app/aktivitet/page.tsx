import { AktivitetDaySection } from "../components/AktivitetDaySection";
import { AktivitetTodayButton } from "../components/AktivitetTodayButton";
import { AlkoholfriIcon } from "../components/AlkoholfriIcon";
import { Breadcrumb } from "../components/Breadcrumb";
import { Header } from "../components/Header";
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

      <main className="flex-1 bg-nollebok-cream px-4 pb-16 pt-8 text-nollebok-ink md:px-8 md:pb-20 md:pt-12">
        <div className="mx-auto max-w-2xl">
          <Breadcrumb
            items={[
              { label: "Basåret", href: "/" },
              { label: "Aktivitetsschema" },
            ]}
          />

          <header className="text-center">
            <h1 className="text-3xl font-black tracking-tight md:text-4xl lg:text-5xl">
              Aktivitetsschema
            </h1>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-nollebok-ink/75 md:text-base">
              Nolleveckans aktiviteter utanför schemalagd tid. Alla aktiviteter
              är frivilliga!
            </p>
          </header>

          <div className="mt-8 flex items-center justify-center gap-2.5 md:mt-10">
            <AlkoholfriIcon size={28} />
            <p className="text-sm md:text-base">= Alkoholfri aktivitet</p>
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
      </main>
    </>
  );
}
