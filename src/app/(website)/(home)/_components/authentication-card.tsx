import { LogOutButton } from '@/components/auth/logout-button';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { getServerSession } from '@/server/auth/utils';
import Link from 'next/link';
import { Fragment } from 'react';

export default async function AuthenticationCard() {
  const session = await getServerSession();

  return (
    <Card className="pb-3">
      <CardHeader className="gap-0">
        <CardTitle>
          <Link href="/auth" className="hover:underline">
            Authentication — BetterAuth
          </Link>
        </CardTitle>
        <CardDescription>Authentication setup using BetterAuth.</CardDescription>
      </CardHeader>
      <CardContent className="grow px-3 flex flex-col">
        <p className="text-xs text-muted-foreground">Demo</p>
        <div className="p-3 flex-1 justify-between inset-shadow-sm rounded-md border bg-background">
          {session ? (
            <Fragment>
              <p className="text-sm font-medium">User {session.user.name} is logged in</p>
              <div className="flex gap-1.5 pt-3">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">
                      <p>View session</p>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-3xl">
                    <pre className="whitespace-pre-wrap overflow-auto max-h-[80vh] text-sm">
                      {JSON.stringify(session, null, 2)}
                    </pre>
                  </DialogContent>
                </Dialog>
                <LogOutButton />
              </div>
            </Fragment>
          ) : (
            <div>
              <p>User is not logged in</p>
              <Button variant="outline" asChild>
                <Link href="/login?callbackUrl=/">Login</Link>
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
