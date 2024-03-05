import { Headings, SpecialistProps } from '.';

export type SpecialistExperience = {
  headings: Headings;
  data: string;
};

export function useGetSpecialistExperienceControllerExecuteSuspense({
  alias,
}: SpecialistProps) {
  const overview = overviews.get(alias);

  return (overview ?? overviews.get('shatynska')) as SpecialistExperience;
}

const overviews = new Map<string, SpecialistExperience>([
  [
    'shatynska',
    {
      headings: {
        primary: 'Професійний шлях',
        secondary: 'Який досвід?',
      },
      data: 'Роки навчання ...',
    },
  ],
]);
