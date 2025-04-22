'use client';

import { api } from '@/trpc/react';

export function PublicRouteDemo() {
  const { data } = api.post.hello.useQuery({ text: 'from tRPC' });

  return (
    <div className="text-sm border-l border-muted-foreground pl-2 italic">
      {data?.greeting ?? '...'}
    </div>
  );
}
