import Footer from '@/components/navigation/footer';
import Header from '@/components/navigation/header';
import { Fragment } from 'react';

export default function WebsiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <Fragment>
      <Header />
      <main className="bg-background px-gutter h-[calc(100vh-var(--spacing-header))] min-h-[calc(100vh-var(--spacing-footer))] pt-header">
        {children}
      </main>
      <Footer />
    </Fragment>
  );
}
