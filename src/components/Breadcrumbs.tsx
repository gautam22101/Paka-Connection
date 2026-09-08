import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const allItems = [{ label: 'Home', path: '/' }, ...items];

  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center gap-1.5 text-sm flex-wrap" itemScope itemType="https://schema.org/BreadcrumbList">
        {allItems.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            {i > 0 && <ChevronRight className="w-3.5 h-3.5 text-gray-400" />}
            {item.path && i < allItems.length - 1 ? (
              <Link to={item.path} className="text-gray-500 hover:text-nc-orange transition-colors" itemProp="item">
                <span itemProp="name">{i === 0 ? <Home className="w-3.5 h-3.5" /> : item.label}</span>
              </Link>
            ) : (
              <span className="text-nc-orange font-medium" itemProp="name">{item.label}</span>
            )}
            <meta itemProp="position" content={String(i + 1)} />
          </li>
        ))}
      </ol>
    </nav>
  );
}
