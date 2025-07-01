// src\app\(site)\layout.tsx

import type { Session } from "better-auth/types";
import { headers } from "next/headers";
import Footer from "@/components/frontpage/footer/Footer";
import Header from "@/components/frontpage/header/header";
import SmallHeader from "@/components/frontpage/header/SmallHeader";
import { auth } from "@/lib/auth";

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let session: Session | undefined;
  try {
    const headersList = await headers();
    const sessionResult = await auth.api.getSession({ headers: headersList });
    session = sessionResult?.session || undefined;
  } catch {
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
