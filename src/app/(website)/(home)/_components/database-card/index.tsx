import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';

export function DatabaseCard() {
  return (
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
        <div className="p-3 flex-1 justify-between inset-shadow-sm rounded-md border bg-background flex flex-col gap-6"></div>
      </CardContent>
    </Card>
  );
}
