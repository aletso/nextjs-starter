import { getServerSession } from '@/server/auth/utils';
import { redirect } from 'next/navigation';
import { Fragment } from 'react';

export default async function ProfilePage() {
  const session = await getServerSession();

  if (!session) {
    redirect('/login?callbackUrl=/profile');
  }

  return (
    <Fragment>
      <header className="pt-16">
        <h1>Profile</h1>
      </header>
      <p>{session.user?.email}</p>
    </Fragment>
  );
}
