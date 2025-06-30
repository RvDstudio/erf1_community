// src\app\(site)\layout.tsx
import Header from "@/components/frontpage/header/Header";
import SmallHeader from "@/components/frontpage/header/SmallHeader";
import Footer from "@/components/frontpage/footer/Footer";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let session = undefined;
  try {
    const headersList = await headers();
    session = await auth.api.getSession({ headers: headersList });
  } catch (error) {
    // ignore, session stays undefined
  }
  return (
    <>
      {/* Desktop Header (md and up) */}
      <div className="hidden md:block">
        {/* Header is a client component, but layout is not */}
        <Header session={session} />
      </div>
      {/* Mobile Header (screens smaller than md) */}
      <div className="md:hidden">
        <SmallHeader session={session} />
      </div>
      <div className="pt-[160px] md:pt-[180px]">{children}</div>
      <Footer />
    </>
  );
}
