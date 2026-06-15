"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { scrollToId } from "../utils/scroll";

type HashLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

export function HashLink({ href, children, className, onClick }: HashLinkProps) {
  const pathname = usePathname();
  const hashIndex = href.indexOf("#");
  const targetPath = hashIndex === -1 ? href : href.slice(0, hashIndex) || "/";
  const hash = hashIndex === -1 ? "" : href.slice(hashIndex + 1);

  const scrollToTarget = () => {
    if (!hash) return;
    scrollToId(hash);
  };

  return (
    <Link
      href={href}
      className={className}
      onClick={(event) => {
        if (pathname === targetPath && hash) {
          event.preventDefault();
          scrollToTarget();
        }
        onClick?.();
      }}
    >
      {children}
    </Link>
  );
}
