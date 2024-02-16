'use client';

import { useEffect, useState } from 'react';

import { specialtiesHeadings, specialtyItems } from '~/shared/api/mock';
import { cn } from '~/shared/lib';
import { Card, CardContent, CardHeader, CardTitle } from '~/shared/ui/Card';
import { CarouselApi, CarouselItem } from '~/shared/ui/Carousel';
import { CarouselWrapper } from '~/shared/ui/CarouselWrapper';
import { Section } from '~/shared/ui/Section';

export function SpecialtiesSection() {
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
    <Section
      variant="dark"
      headings={specialtiesHeadings}
      className="[&>div]:items-center"
    >
      <CarouselWrapper
        variant={specialtyItems.length > 3 ? 'upward' : 'default'}
        setApi={setApi}
      >
        {specialtyItems.map((specialty, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
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
          </CarouselItem>
        ))}
      </CarouselWrapper>
    </Section>
  );
}
