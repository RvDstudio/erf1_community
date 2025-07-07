import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { DashboardLayoutClient } from "@/components/dashboard/dashboard-layout-client.tsx";
import { auth } from "@/lib/auth";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  try {
    const headersList = await headers();
    const session = await auth.api.getSession({
      headers: headersList,
    });
    console.log("session :", session);
    if (!session) {
      redirect("/sign-in");
    }
  } catch (error: unknown) {
    if (error instanceof Error && error.message !== "NEXT_REDIRECT")
      console.error("Auth error:", error);
    redirect("/sign-in");
  }

  return (
    <div className="flex min-h-screen bg-[#F5F5F5]">
      <DashboardLayoutClient>{children}</DashboardLayoutClient>
    </div>
  );
}
