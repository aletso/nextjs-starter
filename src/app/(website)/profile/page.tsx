import { getServerSession } from '@/server/auth/utils';
import { Fragment } from 'react';

export default async function ProfilePage() {
  const session = await getServerSession();

  return (
    <Fragment>
      <header className="pt-16">
        <h1>Profile</h1>
      </header>
      <p>{session?.user?.email}</p>
    </Fragment>
  );
}
