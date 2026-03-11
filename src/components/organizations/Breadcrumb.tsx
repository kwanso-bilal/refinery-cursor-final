import { Link } from 'react-router-dom';

export type BreadcrumbItem = { label: string; to?: string };

/**
 * Breadcrumb for dashboard pages: Dashboard • Organizations [• current].
 */
export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="flex items-center gap-4 text-sm leading-[22px] text-[var(--auth-text-primary)]" aria-label="Breadcrumb">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-4">
          {i > 0 && <span className="text-[#919eab]" aria-hidden>•</span>}
          {item.to ? (
            <Link to={item.to} className="font-normal text-[var(--auth-text-primary)] hover:underline">
              {item.label}
            </Link>
          ) : (
            <span className="font-normal text-[var(--auth-text-disabled)]">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
