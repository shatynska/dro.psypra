'use client';

import parse from 'html-react-parser';
import DOMPurify from 'isomorphic-dompurify';
import Link from 'next/link';

import { DimensionItem } from '~/shared/api';
import { cn } from '~/shared/lib';
import { Card, CardContent, CardHeader, CardTitle } from '~/shared/ui/Card';
import { CarouselItem, useCarousel } from '~/shared/ui/Carousel';

type Props = {
  items: DimensionItem[];
};

export function SpecialtiesSectionCards({ items }: Props) {
  const { selectedIndex } = useCarousel();

  return (
    <>
      {items.map((specialty, index) => (
        <CarouselItem
          key={specialty.alias}
          className={cn(
            'md:basis-1/2 lg:basis-1/3',
            'md:mb-16 md:transition md:duration-700 md:ease-in-out',
            selectedIndex >= index
              ? 'md:translate-y-16'
              : selectedIndex === index - 1
                ? 'md:translate-y-0 lg:translate-y-8'
                : 'md:translate-y-0',
          )}
        >
          <Link
            href={`specialties/${specialty.alias}`}
            className="relative flex justify-center"
          >
            <Card className="md:max-w-80">
              <CardHeader>
                <CardTitle>{specialty.headings.primary}</CardTitle>
              </CardHeader>
              <CardContent className="line-clamp-12 text-justify md:line-clamp-10 md:hyphens-none md:text-left">
                {specialty.content &&
                  parse(DOMPurify.sanitize(specialty.content))}
              </CardContent>
            </Card>
          </Link>
        </CarouselItem>
      ))}
    </>
  );
}
