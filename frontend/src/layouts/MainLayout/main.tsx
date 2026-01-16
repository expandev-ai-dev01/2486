import { ErrorBoundary } from '@/router/error-boundary';
import { useNavigation } from '@/core/hooks/useNavigation';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { LoadingSpinner } from '@/core/components/loading-spinner';
import { ContactForm } from '@/domain/contact/components/ContactForm';
import { Separator } from '@/core/components/separator';

function MainLayout() {
  const { location } = useNavigation();

  return (
    <ErrorBoundary resetKey={location.pathname}>
      <div className="bg-background relative flex min-h-screen flex-col font-sans antialiased">
        <header className="px-9 py-9"></header>
        <main className="flex h-full min-h-fit flex-1">
          <div className="max-w-dvw container flex-1 px-9 py-0">
            <Suspense
              fallback={
                <div className="flex h-full w-full items-center justify-center">
                  <LoadingSpinner />
                </div>
              }
            >
              <Outlet />
            </Suspense>
          </div>
        </main>
        <footer className="bg-muted/30 border-t px-9 py-12">
          <div className="max-w-dvw container">
            <div className="mx-auto flex max-w-2xl flex-col gap-8">
              <div className="flex flex-col gap-4 text-center">
                <h2 className="text-2xl font-semibold tracking-tight">
                  Tenho Interesse nos Produtos Naturais
                </h2>
                <p className="text-muted-foreground">
                  Preencha o formulário abaixo e entraremos em contato em breve
                </p>
              </div>
              <Separator className="mx-auto w-24" />
              <ContactForm />
            </div>
          </div>
        </footer>
      </div>
    </ErrorBoundary>
  );
}

export { MainLayout };
