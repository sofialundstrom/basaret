import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Brödsmulor" className="mb-6 md:mb-8">
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm md:text-base">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-x-1.5">
            {index > 0 && (
              <span aria-hidden className="text-nollebok-ink/35">
                /
              </span>
            )}
            {item.href ? (
              <Link href={item.href} className="font-bold hover:underline">
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
