export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen text-white">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 [background-size:40px_40px]" />
      <div className="relative flex h-screen flex-col items-center justify-center px-4 pt-16">
        <div className="w-full max-w-xl">{children}</div>
      </div>
    </main>
  );
}
