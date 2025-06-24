"use client";
import React, { useEffect, useState } from "react";
import TopBar from "@/components/frontpage/header/TopBar";
import MainHeader from "@/components/frontpage/header/MainHeader";
import NavigationBar from "@/components/frontpage/header/NavigationBar";

const Header = () => {
  const [hideTopBar, setHideTopBar] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setHideTopBar(window.scrollY > 30);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {!hideTopBar && <TopBar />}
      <MainHeader />
      <NavigationBar />
    </header>
  );
};

export default Header;
