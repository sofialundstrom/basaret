"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HashLink } from "./HashLink";

const navItems = [
  { label: "Aktivitetsschema", href: "/aktivitet" },
  {
    label: "Schema Basår",
    href: "https://cloud.timeedit.net/liu/web/schema/ri167XQQ591Z50Qm37070gZ6y5Y7305Q6Y95Y7.html",
    external: true,
  },
  { label: "Nolleboken", href: "/#nollebok", hash: true },
] as const;

function NavLinks({
  onNavigate,
  linkClassName = "leading-tight hover:underline",
}: {
  onNavigate?: () => void;
  linkClassName?: string;
}) {
  return (
    <>
      {navItems.map((item) =>
        "external" in item && item.external ? (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className={linkClassName}
            onClick={onNavigate}
          >
            {item.label}
          </a>
        ) : "hash" in item && item.hash ? (
          <HashLink
            key={item.label}
            href={item.href}
            className={linkClassName}
            onClick={onNavigate}
          >
            {item.label}
          </HashLink>
        ) : (
          <Link
            key={item.label}
            href={item.href}
            className={linkClassName}
            onClick={onNavigate}
          >
            {item.label}
          </Link>
        ),
      )}
    </>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="bg-nollebok-cream px-5 py-3 md:px-10 md:py-4">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="relative block w-36 shrink-0 sm:w-40 md:w-48"
            onClick={closeMenu}
          >
            <Image
              src="/images/logos/liu.png"
              alt="Linköpings universitet"
              width={2250}
              height={592}
              priority
              className="h-auto w-full object-contain"
            />
          </Link>

          <nav className="hidden flex-wrap justify-end gap-x-4 gap-y-1 text-lg font-normal sm:gap-x-6 sm:text-xl md:flex md:gap-x-10 md:text-2xl lg:text-3xl">
            <NavLinks />
          </nav>

          <button
            type="button"
            className="flex h-16 w-16 shrink-0 items-center justify-center md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Stäng meny" : "Öppna meny"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">{menuOpen ? "Stäng meny" : "Meny"}</span>
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              className="h-10 w-10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              {menuOpen ? (
                <>
                  <path d="M6 6l12 12" />
                  <path d="M18 6 6 18" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <nav
            id="mobile-nav"
            className="mt-5 flex flex-col gap-6 border-t-2 border-nollebok-ink/15 py-6 md:hidden"
          >
            <NavLinks
              onNavigate={closeMenu}
              linkClassName="block py-2 text-2xl leading-snug hover:underline sm:text-[1.75rem]"
            />
          </nav>
        )}
      </div>
    </header>
  );
}
