import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getServerSession } from '@/server/auth/utils';
import { api, HydrateClient } from '@/trpc/server';
import Link from 'next/link';
import { LatestPost } from './latest-post';

export async function DatabaseCard() {
  const session = await getServerSession();

  /**
   * Prefetch the latest post for the user if they are logged in
   * to prevent UNAUTHORIZED error in the LatestPost component.
   * And for faster response when the LatestPost component fetches
   * the data on the client.
   */
  if (session?.user) {
    void api.post.getLatest.prefetch();
  }

  return (
    <HydrateClient>
      <Card className="pb-3">
        <CardHeader className="gap-0">
          <CardTitle>
            <Link href="/database" className="hover:underline">
              Database — Drizzle
            </Link>
          </CardTitle>
          <CardDescription>Database setup using Drizzle.</CardDescription>
        </CardHeader>
        <CardContent className="grow px-3 flex flex-col">
          <div className="p-3 flex-1 justify-between inset-shadow-sm rounded-md border bg-background flex flex-col gap-6">
            {session ? (
              <LatestPost />
            ) : (
              <p className="text-sm">You need to be logged in to see your posts.</p>
            )}
          </div>
        </CardContent>
      </Card>
    </HydrateClient>
  );
}
