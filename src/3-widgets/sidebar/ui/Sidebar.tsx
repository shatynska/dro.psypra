'use client';

import { Menu } from 'lucide-react';

import { Button } from '~/shared/ui/Button';
import { Sheet, SheetContent, SheetTrigger } from '~/shared/ui/Sheet';

import { SidebarNavigation } from './SidebarNavigation';

export function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger
        className="fixed right-4 top-4 sm:right-8 lg:hidden"
        autoFocus
        asChild
      >
        <Button size="icon" variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="text-foreground">
        <SidebarNavigation />
      </SheetContent>
    </Sheet>
  );
}
