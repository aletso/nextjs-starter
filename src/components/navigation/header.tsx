import { getServerSession } from '@/server/auth/utils';
import Link from 'next/link';
import { Fragment } from 'react';
import { LogOutButton } from '../auth/logout-button';
import { Button } from '../ui/button';

const navigationItems = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'API',
    href: '/api',
  },
  {
    label: 'Auth',
    href: '/auth',
  },
  {
    label: 'Database',
    href: '/database',
  },
  {
    label: 'UI',
    href: '/ui',
  },
];

export default async function Header() {
  const session = await getServerSession();

  return (
    <header className="px-gutter h-header fixed top-0 inset-x-0 z-10 grid grid-cols-[1fr_auto_1fr] items-center">
      <nav aria-label="Main navigation" className="flex items-center gap-1.5 text-sm">
        {navigationItems.map((item, index) => (
          <Link key={index} href={item.href} className="hover:underline px-3">
            {item.label}
          </Link>
        ))}
      </nav>
      <p className="text-xs">Header</p>
      <nav
        aria-label="Secondary navigation"
        className="flex items-center justify-end gap-1.5 text-sm"
      >
        {session ? (
          <Fragment>
            <Button variant="link" size="sm" asChild>
              <Link href="/profile">{session.user?.email}</Link>
            </Button>
            <LogOutButton size="sm" />
          </Fragment>
        ) : (
          <Button size="sm" asChild>
            <Link href="/login">Login</Link>
          </Button>
        )}
      </nav>
    </header>
  );
}
