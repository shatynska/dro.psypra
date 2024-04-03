import Link from 'next/link';
import { AnchorHTMLAttributes } from 'react';

import { cn } from '~/shared/lib';
import {
  Card,
  CardContent,
  CardHeader,
  CardSubTitle,
  CardTitle,
} from '~/shared/ui/Card';
import ImageWithFallback from '~/shared/ui/ImageWithFallback';

export type Specialist = {
  alias: string;
  href: string;
  fullName: string;
  specialties: string;
};

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  specialist: Specialist;
};

export function SpecialistCard({ specialist, className, ...props }: Props) {
  return (
    <Link
      href={specialist.href}
      className={cn('relative flex justify-center', className)}
      {...props}
    >
      <Card className="max-w-80">
        <CardContent>
          <ImageWithFallback
            key={specialist.alias}
            width={320}
            height={320}
            srcFallback="/images/specialists/default.jpg"
            src={`/images/specialists/${specialist.alias}.jpg`}
            alt={specialist.fullName}
            className="rounded-3xl"
            priority
          />
        </CardContent>
        <CardHeader>
          <CardTitle>{specialist.fullName}</CardTitle>
          <CardSubTitle>{specialist.specialties}</CardSubTitle>
        </CardHeader>
      </Card>
    </Link>
  );
}
