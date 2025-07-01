import { ChevronRight } from 'lucide-react';
import React from 'react';

interface BreadcrumbsProps {
  items: { label: string; href: string }[];
}

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <nav aria-label="Breadcrumb" className="flex">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li className="flex items-center" key={item.href}>
            {index > 0 && (
              <ChevronRight className="mx-2 h-4 w-4 text-[#A0A0A0]" />
            )}
            <a
              className={`text-sm ${
                index === items.length - 1
                  ? 'font-medium text-[#A0A0A0]'
                  : 'text-[#A0A0A0] hover:text-[#A0A0A0]'
              }`}
              href={item.href}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};
