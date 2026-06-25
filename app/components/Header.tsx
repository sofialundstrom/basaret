"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { MouseEvent } from "react";
import { useEffect, useState } from "react";
import { HashLink } from "./HashLink";

type NavItem =
  | { label: string; href: string; external: true }
  | { label: string; href: string; hash: true }
  | { label: string; href: string };

const undervisningsschema: NavItem = {
  label: "Undervisningsschema",
  href: "https://cloud.timeedit.net/liu/web/schema/ri167XQQ591Z50Qm37070gZ6y5Y7305Q6Y95Y7.html",
  external: true,
};

const aktivitetsschema: NavItem = {
  label: "Aktivitetsschema",
  href: "/aktivitet",
};

const nolleboken: NavItem = {
  label: "Nolleboken",
  href: "/#nollebok",
  hash: true,
};

const desktopNavItems: NavItem[] = [
  undervisningsschema,
  aktivitetsschema,
  nolleboken,
];

const mobileNavItems: NavItem[] = [
  nolleboken,
  aktivitetsschema,
  undervisningsschema,
];

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    >
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </svg>
  );
}

function NavLinks({
  items,
  onNavigate,
  linkClassName = "nav-hover-link leading-tight",
}: {
  items: NavItem[];
  onNavigate?: () => void;
  linkClassName?: string;
}) {
  return (
    <>
      {items.map((item) =>
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
  const pathname = usePathname();
  const router = useRouter();

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (media.matches) setMenuOpen(false);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const goToTop = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    closeMenu();

    if (pathname !== "/") {
      router.push("/");
      return;
    }

    if (window.location.hash) {
      window.history.replaceState(null, "", "/");
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="relative z-50 bg-nollebok-cream px-5 py-3 md:px-10 md:py-4">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="relative block w-36 shrink-0 sm:w-40 md:w-48"
            onClick={goToTop}
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

          <nav className="hidden items-center justify-end gap-x-8 text-2xl font-normal lg:flex xl:gap-x-10 xl:text-3xl">
            <NavLinks items={desktopNavItems} />
          </nav>

          <button
            type="button"
            className="flex h-20 w-20 shrink-0 items-center justify-center lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Stäng meny" : "Öppna meny"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">{menuOpen ? "Stäng meny" : "Meny"}</span>
            {menuOpen ? (
              <CloseIcon className="h-12 w-12" />
            ) : (
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                className="h-12 w-12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-nollebok-ink/20 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!menuOpen}
        onClick={closeMenu}
      />

      <nav
        id="mobile-nav"
        aria-hidden={!menuOpen}
        className={`fixed inset-y-0 right-0 z-50 flex w-[min(88vw,22rem)] flex-col border-l-2 border-nollebok-ink/10 bg-nollebok-cream/95 px-6 py-6 shadow-2xl backdrop-blur-md transition-transform duration-300 ease-out lg:hidden ${
          menuOpen ? "translate-x-0" : "pointer-events-none translate-x-full"
        }`}
      >
        <div className="flex justify-end">
          <button
            type="button"
            onClick={closeMenu}
            className="flex h-16 w-16 items-center justify-center"
            aria-label="Stäng meny"
          >
            <CloseIcon className="h-12 w-12" />
          </button>
        </div>

        <div className="flex flex-col gap-8 pt-4">
          <Link
            href="/"
            onClick={goToTop}
            className="nav-hover-link block py-1 text-3xl leading-snug"
          >
            Hem
          </Link>
          <NavLinks
            items={mobileNavItems}
            onNavigate={closeMenu}
            linkClassName="nav-hover-link block py-1 text-3xl leading-snug"
          />
        </div>
      </nav>
    </header>
  );
}
