'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import { useGetSpecialistsControllerExecuteSuspense } from '~/shared/api';
import { cn } from '~/shared/lib';
import {
  Card,
  CardContent,
  CardHeader,
  CardSubTitle,
  CardTitle,
} from '~/shared/ui/Card';
import { CarouselApi, CarouselItem } from '~/shared/ui/Carousel';
import { CarouselWrapper } from '~/shared/ui/CarouselWrapper';
import ImageWithFallback from '~/shared/ui/ImageWithFallback';
import { Section } from '~/shared/ui/Section';

export function SpecialistsSection() {
  const { headings, href, items } =
    useGetSpecialistsControllerExecuteSuspense();

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
    <Section headings={headings} href={href}>
      <CarouselWrapper
        variant={items.length > 3 ? 'downward' : 'default'}
        setApi={setApi}
      >
        {items.map((specialist, index) => (
          <CarouselItem
            key={index}
            className="sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
          >
            <Link
              href={`${href}/${specialist.alias}`}
              className="flex justify-center"
            >
              <Card
                key={specialist.alias}
                className={cn(
                  'max-w-80 overflow-hidden md:transition md:duration-700 md:ease-in-out',
                  selectedIndex >= index
                    ? 'md:translate-y-0'
                    : selectedIndex === index - 1
                      ? 'md:translate-y-16 lg:translate-y-8 xl:translate-y-5'
                      : selectedIndex === index - 2
                        ? 'md:translate-y-16 xl:translate-y-10'
                        : 'md:mb-16 md:translate-y-16 xl:translate-y-[3.75rem]',
                )}
              >
                <CardContent>
                  <ImageWithFallback
                    key={specialist.alias}
                    width={320}
                    height={320}
                    srcFallback="/images/specialists/default.jpg"
                    src={`/images/specialists/${specialist.alias}.jpg`}
                    alt={specialist.data.title}
                    className="mb-4 rounded-3xl"
                    priority
                  />
                </CardContent>
                <CardHeader className="pb-0">
                  <CardTitle>{specialist.data.title}</CardTitle>
                  <CardSubTitle>
                    {specialist.data.specialties.join(', ')}
                  </CardSubTitle>
                </CardHeader>
              </Card>
            </Link>
          </CarouselItem>
        ))}
      </CarouselWrapper>
    </Section>
  );
}
