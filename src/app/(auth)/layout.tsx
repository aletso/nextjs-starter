import Link from 'next/link';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <section className="flex w-full max-w-sm flex-col gap-6">
        <Link
          href="https://aletso.com"
          className="flex items-center gap-2 self-center font-medium text-2xl"
        >
          Aletso
        </Link>
        {children}
      </section>
    </main>
  );
}
