import Link from 'next/link';
import { Fragment } from 'react';
import AuthenticationCard from './_components/authentication-card';
import { DatabaseCard } from './_components/database-card';
import TrpcCard from './_components/trpc-card';
import { UiCard } from './_components/ui-card';

export default async function Home() {
  return (
    <Fragment>
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
    </Fragment>
  );
}
