import React from "react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="text-sm text-gray-500" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-1">
        {items.map((item, idx) => (
          <li key={item.label} className="flex items-center">
            {item.href && idx !== items.length - 1 ? (
              <a
                href={item.href}
                className="hover:text-[#374C69] transition-colors font-medium"
              >
                {item.label}
              </a>
            ) : (
              <span className="text-gray-700 font-semibold">{item.label}</span>
            )}
            {idx < items.length - 1 && (
              <svg
                className="mx-2 h-4 w-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
} 