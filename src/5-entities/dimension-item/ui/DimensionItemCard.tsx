import parse from 'html-react-parser';
import DOMPurify from 'isomorphic-dompurify';
import Link from 'next/link';
import { AnchorHTMLAttributes } from 'react';

import { cn } from '~/shared/lib';
import { Card, CardContent, CardHeader, CardTitle } from '~/shared/ui/Card';

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  item: {
    title: string;
    href: string;
    description?: string;
  };
};

export function DimensionItemCard({ item, className, ...props }: Props) {
  return (
    <Link
      href={item.href}
      className={cn('relative flex justify-center', className)}
      {...props}
    >
      <Card className="md:max-w-80">
        <CardHeader>
          <CardTitle>{item.title}</CardTitle>
        </CardHeader>
        <CardContent className="line-clamp-12 text-justify md:line-clamp-10 md:hyphens-none md:text-left">
          {item.description && parse(DOMPurify.sanitize(item.description))}
        </CardContent>
      </Card>
    </Link>
  );
}
