"use client";
import type { Session } from "better-auth/types";
import MainHeader from "@/components/frontpage/header/MainHeader";
import NavigationBar from "@/components/frontpage/header/NavigationBar";

interface HeaderProps {
  session?: Session;
}

const Header = ({ session }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50">
      <MainHeader session={session} />
      <NavigationBar />
    </header>
  );
};

export default Header;
