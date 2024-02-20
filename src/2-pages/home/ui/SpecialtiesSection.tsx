'use client';

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
    <Section variant="dark" height="fixed" headings={headings} href={href}>
      <CarouselWrapper
        variant={items.length > 3 ? 'upward' : 'default'}
        setApi={setApi}
      >
        {items.map((specialty, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <Link href={`${href}/${specialty.alias}`}>
              <Card
                key={specialty.title}
                className={cn(
                  selectedIndex >= index
                    ? 'lg:mt-20'
                    : selectedIndex === index - 1
                      ? 'lg:mt-10'
                      : 'lg:mt-0',
                )}
              >
                <CardHeader>
                  <CardTitle>{specialty.title}</CardTitle>
                </CardHeader>
                <CardContent className="line-clamp-10 text-justify md:hyphens-none md:text-left lg:line-clamp-7">
                  {specialty.content}
                </CardContent>
              </Card>
            </Link>
          </CarouselItem>
        ))}
      </CarouselWrapper>
    </Section>
  );
}
