import type { ReactNode } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";

import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

type AppShellProps = {
  sidebar: ReactNode;
  rightRail: ReactNode;
  children: ReactNode;
  mainClassName?: string;
};

export function AppShell({
  sidebar,
  rightRail,
  children,
  mainClassName,
}: AppShellProps) {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-background text-foreground min-h-screen w-full">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-background focus:px-3 focus:py-2 focus:text-sm focus:shadow"
      >
        Skip to main content
      </a>
      <div className="md:hidden sticky top-0 z-40 border-b border-border bg-background/85 supports-backdrop-filter:backdrop-blur-sm">
        <div className="mx-auto w-full max-w-6xl px-4 py-2 flex items-center justify-between">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label="Open navigation menu"
              >
                <IconMenu2 />
              </Button>
            </DialogTrigger>
            <DialogContent
              showCloseButton={false}
              className="top-0 left-0 h-svh w-[76vw] max-w-[280px] -translate-x-0 -translate-y-0 rounded-none rounded-r-xl p-4 sm:max-w-[280px]"
            >
              <DialogTitle className="sr-only">Navigation menu</DialogTitle>
              <DialogDescription className="sr-only">
                Open app sections, create a post, or log out.
              </DialogDescription>
              <div className="-mt-1 -mr-1 flex justify-end">
                <DialogClose asChild>
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    aria-label="Close navigation menu"
                  >
                    <IconX />
                  </Button>
                </DialogClose>
              </div>
              <div className="flex h-full flex-col gap-4 overflow-y-auto">{sidebar}</div>
            </DialogContent>
          </Dialog>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md px-1 py-0.5 transition-colors hover:bg-muted/60"
            aria-label="Scroll to top"
            onClick={handleScrollToTop}
          >
            <Logo size="md" name="Social" />
          </button>

          <div className="size-7" aria-hidden="true" />
        </div>
      </div>
      <div className="mx-auto grid w-full max-w-6xl gap-6 p-4 md:grid-cols-[240px_minmax(0,1fr)] xl:grid-cols-[240px_minmax(0,1fr)_240px]">
        <aside className="hidden md:block md:sticky md:top-4 md:h-[calc(100vh-2rem)]">
          <div className="flex h-full flex-col gap-4">{sidebar}</div>
        </aside>

        <main id="main-content" className={cn("space-y-4", mainClassName)}>
          {children}
        </main>

        <aside className="xl:sticky xl:top-4 xl:h-[calc(100vh-2rem)] hidden xl:block">
          <div className="flex flex-col gap-4">{rightRail}</div>
        </aside>
      </div>
    </div>
  );
}
