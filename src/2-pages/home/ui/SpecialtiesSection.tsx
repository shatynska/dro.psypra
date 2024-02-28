'use client';

import parse from 'html-react-parser';
import DOMPurify from 'isomorphic-dompurify';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { useGetSpecialtiesControllerExecuteSuspense } from '~/shared/api';
import { cn } from '~/shared/lib';
import { Card, CardContent, CardHeader, CardTitle } from '~/shared/ui/Card';
import { CarouselApi, CarouselItem } from '~/shared/ui/Carousel';
import { CarouselWrapper } from '~/shared/ui/CarouselWrapper';
import { Section } from '~/shared/ui/Section';

export function SpecialtiesSection() {
  const { headings, href, items } =
    useGetSpecialtiesControllerExecuteSuspense();

  const [api, setApi] = useState<CarouselApi>();

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on('select', () => {
      setSelectedIndex(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <Section headings={headings} href={href} background="dark" height="fixed">
      <CarouselWrapper
        variant={items.length > 3 ? 'upward' : 'default'}
        setApi={setApi}
      >
        {items.map((specialty, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <Link
              href={`${href}/${specialty.alias}`}
              className="flex justify-center"
            >
              <Card
                key={specialty.alias}
                className={cn(
                  'md:mb-16 md:max-w-80 md:transition md:duration-700 md:ease-in-out',
                  selectedIndex >= index
                    ? 'md:translate-y-16'
                    : selectedIndex === index - 1
                      ? 'md:translate-y-0 lg:translate-y-8'
                      : 'md:translate-y-0',
                )}
              >
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
      </CarouselWrapper>
    </Section>
  );
}
