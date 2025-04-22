import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { ProtectedRouteDemo } from './protected-route-demo';
import { PublicRouteDemo } from './public-route-demo';

export default function TrpcCard() {
  return (
    <Card className="pb-3">
      <CardHeader className="gap-0">
        <CardTitle>
          <Link href="/api" className="hover:underline">
            API — tRPC
          </Link>
        </CardTitle>
        <CardDescription>Type-safe API calls.</CardDescription>
      </CardHeader>
      <CardContent className="grow px-3 flex flex-col">
        <div className="p-3 flex-1 inset-shadow-sm rounded-md border bg-background flex flex-col gap-6">
          <div>
            <h3 className="text-base font-medium">Protected Route</h3>
            <p className="text-xs text-muted-foreground">/api/trpc/post.getSecretMessage</p>
            <ProtectedRouteDemo />
          </div>
          <div>
            <h3 className="text-base font-medium">Public Route</h3>
            <p className="text-xs text-muted-foreground">/api/trpc/post.hello</p>
            <PublicRouteDemo />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
