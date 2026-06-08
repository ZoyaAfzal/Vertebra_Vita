import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

interface Crumb { label: string; to?: string; }

export function BreadcrumbNav({ items }: { items: Crumb[] }) {
  return (
    <nav className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-stone">
      {items.map((c, i) => (
        <span key={i} className="flex items-center gap-2">
          {c.to ? (
            <Link to={c.to} className="hover:text-forest transition-colors">{c.label}</Link>
          ) : (
            <span className="text-forest">{c.label}</span>
          )}
          {i < items.length - 1 && <ChevronRight className="w-3 h-3" />}
        </span>
      ))}
    </nav>
  );
}
