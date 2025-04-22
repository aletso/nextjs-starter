'use client';

import { api } from '@/trpc/react';

export function ProtectedRouteDemo() {
  /**
   * If you don't check for a session, the query will retry 3 times.
   * Then it will display the error message. To make this more user friendly,
   * we can check for a session and display a message to the user,
   * or redirect to the login page.
   *
   * This is a client component, so we use the authClient to check for a session.
   */
  // const session = authClient.useSession();
  // const router = useRouter();

  // if (!session.data?.user) {
  //   // Display unauthenticated message
  //   return <div>Not logged in</div>;

  //   // Or redirect to login page
  //   router.push('/login');
  // }

  const { data, error } = api.post.getSecretMessage.useQuery();

  return (
    <div className="text-sm border-l border-muted-foreground pl-2">
      Response:{' '}
      <span className="italic">
        "{data ? data : error ? error.message : 'tRPC failed, retrying... '}"
      </span>
    </div>
  );
}
