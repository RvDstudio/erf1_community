import type { NavigationSection } from "../types/navigation";

export const navigationData: NavigationSection[] = [
  {
    title: "Main",
    items: [
      { label: "Dashboard", icon: "layoutDashboard", href: "/dashboard" },
      { label: "Profile", icon: "user", href: "/dashboard/profile" },
      { label: "blog", icon: "rss", href: "/dashboard/profile" },
      { label: "Podcast", icon: "Podcast", href: "/dashboard/profile" },
    ],
  },

  {
    title: "Admin",
    items: [
      { label: "Products", icon: "user", href: "/dashboard/products" },
      { label: "Orders", icon: "ShoppingBag", href: "/dashboard/orders" },
      { label: "Users", icon: "Users", href: "/dashboard/users" },
      { label: "Settings", icon: "Settings", href: "/dashboard/settings" },
    ],
  },
];
