import React from "react";
import MenuItem from "@/components/MenuItem";
import { navigationData } from "@/data/navigation";
import { Tractor } from "lucide-react";
import { NavigationSection } from "@/types/navigation";

export const Sidebar = ({ isCollapsed }: { isCollapsed: boolean }) => {
  return (
    <aside
      className={`bg-[#374c69] border-r border-[#4a6386] h-screen transition-all duration-300 fixed left-0 top-0 z-0 ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      <div
        className={`p-4 py-2 border-b border-[#4a6386] ${
          isCollapsed ? "flex justify-center items-center" : ""
        }`}
      >
        <div className="flex items-center h-12">
          <Tractor
            name="shopping-bag"
            className="w-6 h-6 min-w-6 min-h-6 flex-shrink-0 text-white"
          />
          {!isCollapsed && (
            <span className="text-2xl font-bold text-white ml-3">
              Erf1<span className="font-extralight">Community</span>
            </span>
          )}
        </div>
      </div>
      <nav className="mt-4 px-2 space-y-6">
        {navigationData.map((section) => (
          <div key={section.title} className="space-y-2">
            {!isCollapsed && (
              <h3 className="px-4 text-xs font-semibold text-white uppercase tracking-wider">
                {section.title}
              </h3>
            )}
            <div className="space-y-1">
              {section.items.map((item: NavigationSection["items"][0]) => (
                <MenuItem
                  key={item.label}
                  item={item}
                  isCollapsed={isCollapsed}
                />
              ))}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
};
