import React from 'react'

const categories = [
  {
    name: 'Clothes',
    count: 983,
    icon: (
      <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M16 3l2.29 2.29a1 1 0 0 1-.21 1.63L12 9 5.92 6.92a1 1 0 0 1-.21-1.63L8 3" />
        <path d="M12 9v12" />
        <path d="M8 21h8" />
      </svg>
    ),
  },
  {
    name: 'Ladies Bag',
    count: 142,
    icon: (
      <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M16 7V5a4 4 0 0 0-8 0v2" />
      </svg>
    ),
  },
  {
    name: 'Shoes',
    count: 476,
    icon: (
      <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M4 19h16v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2z" />
        <path d="M12 3v6" />
      </svg>
    ),
  },
  {
    name: 'Ornaments',
    count: 849,
    icon: (
      <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="14" r="7" />
        <path d="M12 3v4" />
      </svg>
    ),
  },
  {
    name: 'Watches',
    count: 253,
    icon: (
      <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="7" />
        <path d="M12 9v3l2 2" />
        <rect x="9" y="2" width="6" height="2" rx="1" />
        <rect x="9" y="20" width="6" height="2" rx="1" />
      </svg>
    ),
  },
  {
    name: 'Smart Phones',
    count: 94,
    icon: (
      <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <circle cx="12" cy="18" r="1" />
      </svg>
    ),
  },
]

export default function CategoryGrid() {
  return (
    <section className="py-12 container mx-auto">
      <h2 className="text-3xl font-extrabold text-center mb-10">Select a category to get started</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8  mx-auto">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="flex items-center gap-6 bg-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="text-gray-400">{cat.icon}</div>
            <div>
              <div className="font-bold text-lg text-gray-900">{cat.name}</div>
              <div className="text-gray-500 text-sm">{cat.count} Available Products</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}