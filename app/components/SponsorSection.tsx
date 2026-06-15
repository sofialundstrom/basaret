import Image from "next/image";

export function SponsorSection() {
  return (
    <section className="bg-nollebok-cream px-6 py-12 md:px-12 md:py-16">
      <div className="mx-auto flex max-w-6xl justify-center">
        <Image
          src="/images/logos/ica-nara-strommen.png"
          alt="ICA nära Strömmen"
          width={480}
          height={240}
          className="h-auto w-44 object-contain sm:w-52 md:w-60"
        />
      </div>
    </section>
  );
}
