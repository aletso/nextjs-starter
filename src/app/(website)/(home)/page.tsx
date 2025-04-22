import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { getServerSession } from '@/server/auth/utils';
import { api, HydrateClient } from '@/trpc/server';
import Link from 'next/link';
import AuthenticationCard from './_components/authentication-card';
import { DatabaseCard } from './_components/database-card';
import TrpcCard from './_components/trpc-card';
import { UiCard } from './_components/ui-card';

export default async function Home() {
  const hello = await api.post.hello({ text: 'from tRPC' });
  const session = await getServerSession();

  if (session?.user) {
    void api.post.getLatest.prefetch();
  }

  return (
    <HydrateClient>
      <section className="row-start-2 text-center pt-16">
        <h1>Next.js starter template</h1>
        <p className="font-light">
          By{' '}
          <Link href="https://aletso.com" className="hover:underline">
            Aletso
          </Link>
        </p>
      </section>
      <section className="grid grid-cols-4 row-start-3 gap-4 pt-8">
        <TrpcCard />
        <AuthenticationCard />
        <DatabaseCard />
        <UiCard />
      </section>
    </HydrateClient>
  );
}
