import { Tractor } from "lucide-react";
import MenuItem from "@/components/dashboard/MenuItem";
import { navigationData } from "@/data/navigation";
import type { NavigationSection } from "@/types/navigation";

export const Sidebar = ({ isCollapsed }: { isCollapsed: boolean }) => {
  return (
    <aside
      className={`fixed top-0 left-0 z-0 h-screen border-[#4a6386] border-r bg-[#374c69] transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      <div
        className={`border-[#4a6386] border-b p-4 py-2 ${
          isCollapsed ? "flex items-center justify-center" : ""
        }`}
      >
        <div className="flex h-12 items-center">
          <Tractor
            className="h-6 min-h-6 w-6 min-w-6 flex-shrink-0 text-white"
            name="shopping-bag"
          />
          {!isCollapsed && (
            <span className="ml-3 font-bold text-2xl text-white">
              Erf1<span className="font-extralight">Community</span>
            </span>
          )}
        </div>
      </div>
      <nav className="mt-4 space-y-6 px-2">
        {navigationData.map((section) => (
          <div className="space-y-2" key={section.title}>
            {!isCollapsed && (
              <h3 className="px-4 font-semibold text-white text-xs uppercase tracking-wider">
                {section.title}
              </h3>
            )}
            <div className="space-y-1">
              {section.items.map((item: NavigationSection["items"][0]) => (
                <MenuItem
                  isCollapsed={isCollapsed}
                  item={item}
                  key={item.label}
                />
              ))}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
};
