// src\app\(site)\layout.tsx
import Header from "@/components/header/Header";
import SmallHeader from "@/components/header/SmallHeader";
import Footer from "@/components/footer/Footer";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Desktop Header (md and up) */}
      <div className="hidden md:block">
        {/* Header is a client component, but layout is not */}
        <Header />
      </div>
      {/* Mobile Header (screens smaller than md) */}
      <div className="md:hidden">
        <SmallHeader />
      </div>
      {children}
      <Footer />
    </>
  );
}