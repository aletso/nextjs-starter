import { Button } from '@/components/ui/button';
import { ExternalLinkIcon } from 'lucide-react';
import Link from 'next/link';
import { Fragment } from 'react';

export default function AuthPage() {
  return (
    <Fragment>
      <header className="pt-16">
        <h1 className="font-bold text-4xl">Authentication — BetterAuth</h1>
      </header>
      <section>
        <Button asChild variant="outline" size="sm">
          <Link href="https://better-auth.com/docs" target="_blank">
            View documentation <ExternalLinkIcon />
          </Link>
        </Button>
      </section>
    </Fragment>
  );
}
