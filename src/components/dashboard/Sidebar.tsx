import { Boxes, Tractor } from "lucide-react";
import MenuItem from "@/components/dashboard/MenuItem";
import { navigationData } from "@/data/navigation";
import type { NavigationSection } from "@/types/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const Sidebar = ({ isCollapsed }: { isCollapsed: boolean }) => {
  return (
    <TooltipProvider delayDuration={100}>
      <aside
        className={`fixed top-0 left-0 z-0 bg-sidebar-primary h-screen border-sidebar-border  border-r transition-all duration-300 ${
          isCollapsed ? "w-16" : "w-64"
        }`}
      >
        <div
          className={`border-sidebar-border border-b p-4 py-2 ${
            isCollapsed ? "flex items-center justify-center" : ""
          }`}
        >
          <div className="flex h-12 items-center">
            {isCollapsed ? (
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center justify-center">
                    <Tractor
                      className="h-6 min-h-6 w-6 min-w-6 flex-shrink-0 text-white"
                      name="shopping-bag"
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className="bg-gray-900 text-white border-gray-700"
                >
                  <p>Q | Editor</p>
                </TooltipContent>
              </Tooltip>
            ) : (
              <>
                <Tractor
                  className="h-6 min-h-6 w-6 min-w-6 flex-shrink-0 text-white"
                  name="shopping-bag"
                />
                <span className="ml-3 font-normal text-xl text-white">
                  Erf 1 Zuivel & <span className="font-extralight"> Meer</span>
                </span>
              </>
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
    </TooltipProvider>
  );
};
