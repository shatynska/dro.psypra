'use client';

import Link from 'next/link';
import { AnchorHTMLAttributes } from 'react';

import { Specialist } from '~/shared/api';
import { cn } from '~/shared/lib';
import {
  Card,
  CardContent,
  CardHeader,
  CardSubTitle,
  CardTitle,
} from '~/shared/ui/Card';
import ImageWithFallback from '~/shared/ui/ImageWithFallback';

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  specialist: Specialist;
};

export function SpecialistCard({ specialist, className, ...props }: Props) {
  return (
    <Link
      href={`/specialists/${specialist.alias}`}
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
            alt={specialist.data.title}
            className="rounded-3xl"
            priority
          />
        </CardContent>
        <CardHeader>
          <CardTitle>{specialist.data.title}</CardTitle>
          <CardSubTitle>{specialist.data.specialties.join(', ')}</CardSubTitle>
        </CardHeader>
      </Card>
    </Link>
  );
}
