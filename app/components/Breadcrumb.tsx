import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export function Breadcrumb({ items, className = "text-sm md:text-base" }: BreadcrumbProps) {
  return (
    <nav aria-label="Brödsmulor" className="mb-6 md:mb-8">
      <ol
        className={`flex flex-wrap items-center gap-x-1.5 gap-y-1 ${className}`}
      >
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-x-1.5">
            {index > 0 && (
              <span aria-hidden className="text-nollebok-ink/35">
                /
              </span>
            )}
            {item.href ? (
              <Link href={item.href} className="nav-hover-link font-bold">
                {item.label}
              </Link>
            ) : (
              <span className="text-nollebok-ink/65">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
