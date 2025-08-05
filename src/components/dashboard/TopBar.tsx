"use client";

import { Search } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MobileSidebar } from "@/components/dashboard/mobile-sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { authClient } from "@/lib/auth-client";

export const TopBar = ({
  onToggleSidebar,
}: {
  onToggleSidebar: () => void;
}) => {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/sign-in");
        },
      },
    });
  };

  return (
    <header className="sticky top-0 z-10 flex h-16 w-full items-center justify-between border-sidebar-border border-b bg-[#374C69] px-6 shadow-sm">
      <div className="flex max-w-xl flex-1 items-center gap-4">
        <MobileSidebar
          isOpen={isMobileSidebarOpen}
          onClose={() => setIsMobileSidebarOpen(false)}
        />
        <button
          aria-label="Open Mobile Menu"
          className="block cursor-pointer p-1 text-white lg:hidden"
          onClick={() => setIsMobileSidebarOpen(true)}
          type="button"
        >
          ☰
        </button>
        <button
          aria-label="Toggle Sidebar"
          className="hidden cursor-pointer p-1 text-white lg:block"
          onClick={onToggleSidebar}
          type="button"
        >
          ☰
        </button>
        <div className="relative ml-4 flex-1 lg:ml-0">
          <Search className="-translate-y-1/2 absolute top-1/2 left-3 h-5 w-5 transform" />
          <input
            className="w-full rounded-lg border border-[#05443b] bg-white py-2 pr-4 pl-10 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#7a7a7a]"
            placeholder="Search anything here..."
            type="text"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex cursor-pointer items-center space-x-2 rounded-lg border border-[#424242] bg-white px-2 py-1 hover:bg-[#4A6386] hover:text-white focus:outline-none">
            {isPending ? (
              <div className="h-8 w-8 animate-pulse rounded-full bg-[#424242]" />
            ) : (
              <Image
                alt={session?.user?.name || "Username"}
                className="h-8 w-8 rounded-full"
                height={32}
                src={session?.user?.image || "/placeholder.png"}
                width={32}
              />
            )}
            <span className="font-medium text-black text-sm hover:text-white">
              {isPending ? "Loading..." : session?.user?.name || "Guest"}
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-56 border border-[#4a6386] bg-[#4a6386] text-white"
          >
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-[#424242]" />
            <DropdownMenuItem
              className="hover:bg-[#424242]"
              onClick={() => router.push("/dashboard/profile")}
            >
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-[#424242]">
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-[#424242]">
              Billing
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-[#424242]" />
            <DropdownMenuItem
              className="cursor-pointer text-red-600"
              onClick={handleSignOut}
            >
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};
