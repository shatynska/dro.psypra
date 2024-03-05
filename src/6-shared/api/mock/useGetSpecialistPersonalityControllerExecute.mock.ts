import { Headings, SpecialistProps } from '.';

export type SpecialistPersonality = {
  headings: Headings;
  data: string;
};

export function useGetSpecialistPersonalityControllerExecuteSuspense({
  alias,
}: SpecialistProps) {
  const overview = overviews.get(alias);

  return (overview ?? overviews.get('shatynska')) as SpecialistPersonality;
}

const overviews = new Map<string, SpecialistPersonality>([
  [
    'shatynska',
    {
      headings: {
        primary: 'Про себе',
        secondary: 'Трохи особистого?',
      },
      data: 'Я ...',
    },
  ],
]);
