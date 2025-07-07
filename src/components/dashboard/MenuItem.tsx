import { clsx } from "clsx";
import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Icon } from "@/components/shared/Icon";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface MenuItemProps {
  item: {
    label: string;
    icon: string;
    href?: string;
    submenu?: MenuItemProps["item"][];
  };
  isCollapsed: boolean;
}

const MenuItem = ({ item, isCollapsed }: MenuItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasSubmenu = item.submenu && item.submenu.length > 0;
  const pathname = usePathname();

  const isActive =
    (item.href && pathname === item.href) ||
    (item.submenu &&
      item.submenu.some((sub) => sub.href && pathname === sub.href));

  const content = (
    <>
      <Icon
        className={clsx(
          "h-5 min-h-5 w-5 min-w-5 flex-shrink-0",
          isActive && "text-[#44C57C]"
        )}
        name={item.icon}
      />
      {!isCollapsed && (
        <>
          <span className="ml-3 flex-1 text-left">{item.label}</span>
          {hasSubmenu && (
            <span className="ml-auto">
              {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </span>
          )}
        </>
      )}
    </>
  );

  const menuElement = item.href ? (
    <Link
      className={clsx(
        "flex w-full items-center rounded-lg py-2 transition-colors",
        {
          "justify-center": isCollapsed,
          "px-4": !isCollapsed,
          "border border-[#05443b] bg-[#03322B] text-gray-200": isActive,
          "border border-transparent text-gray-200 hover:border hover:border-[#05443b] hover:bg-[#03322B]":
            !isActive,
        }
      )}
      href={item.href}
    >
      {content}
    </Link>
  ) : (
    <button
      className={clsx(
        "flex w-full items-center rounded-lg py-2 transition-colors",
        {
          "justify-center": isCollapsed,
          "px-4": !isCollapsed,
          "border-[#05443b] bg-[#03322B] text-gray-200": isActive,
          "border border-transparent text-gray-200 hover:border hover:border-[#3f3f42] hover:bg-[#2C2C2E]":
            !isActive,
        }
      )}
      onClick={() => hasSubmenu && setIsOpen(!isOpen)}
    >
      {content}
    </button>
  );

  return (
    <div className="relative">
      {isCollapsed ? (
        <Tooltip>
          <TooltipTrigger asChild>{menuElement}</TooltipTrigger>
          <TooltipContent
            side="right"
            className="bg-gray-900 text-white border-gray-700"
          >
            <p>{item.label}</p>
          </TooltipContent>
        </Tooltip>
      ) : (
        menuElement
      )}
      {hasSubmenu && isOpen && !isCollapsed && (
        <div className="mt-1 ml-4 space-y-1">
          {item.submenu &&
            item.submenu.map((subItem) => (
              <MenuItem
                isCollapsed={isCollapsed}
                item={subItem}
                key={subItem.label}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default MenuItem;
