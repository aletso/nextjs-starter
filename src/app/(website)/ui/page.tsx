import { Button } from '@/components/ui/button';
import { ExternalLinkIcon } from 'lucide-react';
import Link from 'next/link';
import { Fragment } from 'react';

export default function StylingPage() {
  return (
    <Fragment>
      <header className="pt-16">
        <h1 className="font-bold text-4xl">UI — Shadcn & Tailwind</h1>
      </header>
      <section className="flex gap-1.5">
        <Button asChild variant="outline" size="sm">
          <Link href="https://ui.shadcn.com/docs" target="_blank">
            View Shadcn/UI documentation <ExternalLinkIcon />
          </Link>
        </Button>
        <Button asChild variant="outline" size="sm">
          <Link href="https://tailwindcss.com/docs" target="_blank">
            View Tailwind documentation <ExternalLinkIcon />
          </Link>
        </Button>
      </section>
    </Fragment>
  );
}
