import React from 'react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="text-gray-500 text-sm">
      <ol className="flex items-center space-x-1">
        {items.map((item, idx) => (
          <li className="flex items-center" key={item.label}>
            {item.href && idx !== items.length - 1 ? (
              <a
                className="font-medium transition-colors hover:text-[#374C69]"
                href={item.href}
              >
                {item.label}
              </a>
            ) : (
              <span className="font-semibold text-gray-700">{item.label}</span>
            )}
            {idx < items.length - 1 && (
              <svg
                aria-hidden="true"
                className="mx-2 h-4 w-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  d="M9 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
