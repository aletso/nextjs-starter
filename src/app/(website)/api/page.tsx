import { Fragment } from 'react';

import { Button } from '@/components/ui/button';
import { ExternalLinkIcon } from 'lucide-react';
import Link from 'next/link';

export default function ApiPage() {
  return (
    <Fragment>
      <header className="pt-16 flex gap-8 items-end">
        <h1 className="font-bold text-4xl">API — tRPC</h1>
      </header>
      <section>
        <Button asChild variant="outline" size="sm">
          <Link href="https://trpc.io/docs/" target="_blank">
            View documentation <ExternalLinkIcon />
          </Link>
        </Button>
      </section>
    </Fragment>
  );
}
