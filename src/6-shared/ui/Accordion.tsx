'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import * as React from 'react';

import { cn } from '../lib';

import { SheetClose } from './Sheet';

export const Accordion = AccordionPrimitive.Root;

export const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn('my-2', className)}
    {...props}
  />
));
AccordionItem.displayName = 'AccordionItem';

export const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'flex h-16 flex-1 select-none items-center gap-4 space-y-1 rounded-md px-4 py-4 font-medium leading-none no-underline outline-none transition-all hover:bg-muted hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none [&[data-state=open]>svg]:rotate-180',
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

export const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn('pb-4 pt-0', className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export const AccordionListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, href = '/', children, ...props }, ref) => {
  return (
    <li>
      <SheetClose asChild>
        <Link
          ref={ref}
          href={href}
          className={cn(
            'mx-4 my-1 block select-none space-y-1 rounded-md px-4 py-4 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none',
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </SheetClose>
    </li>
  );
});
AccordionListItem.displayName = 'AccordionListItem';

export const AccordionTopListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, href = '/', children, ...props }, ref) => {
  return (
    <SheetClose asChild>
      <Link
        ref={ref}
        href={href}
        className={cn(
          'flex h-16 select-none items-center space-y-1 rounded-md px-4 py-4 font-medium leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none',
          className,
        )}
        {...props}
      >
        <div className="text-base font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-base leading-snug">{children}</p>
      </Link>
    </SheetClose>
  );
});
AccordionTopListItem.displayName = 'AccordionTopListItem';
