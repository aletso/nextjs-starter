'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { MoonIcon, SunIcon } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function UiCard() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Initialize state based on current theme
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDark;
    setIsDark(newMode);

    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <Card className="pb-3">
      <CardHeader className="gap-0">
        <CardTitle>
          <Link href="/ui" className="hover:underline">
            UI — Shadcn & Tailwind
          </Link>
        </CardTitle>
        <CardDescription>Styling and components using Shadcn and Tailwind CSS.</CardDescription>
      </CardHeader>
      <CardContent className="grow px-3 flex flex-col">
        <p className="text-xs text-muted-foreground">Demo</p>
        <div className="p-3 flex-1 justify-between inset-shadow-sm rounded-md border bg-background">
          <Label>Dark mode</Label>
          <Button
            variant="outline"
            size="icon"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
          >
            {isDark ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
