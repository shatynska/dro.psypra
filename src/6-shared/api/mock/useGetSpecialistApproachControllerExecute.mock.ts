import { Headings, SpecialistProps } from '.';

export type SpecialistApproach = {
  headings: Headings;
  data: string;
};

export function useGetSpecialistApproachControllerExecuteSuspense({
  alias,
}: SpecialistProps) {
  const overview = overviews.get(alias);

  return (overview ?? overviews.get('shatynska')) as SpecialistApproach;
}

const overviews = new Map<string, SpecialistApproach>([
  [
    'shatynska',
    {
      headings: {
        primary: 'Мій підхід',
        secondary: 'Як я працюю?',
      },
      data: 'Мій підхід полягає в тому, що ...',
    },
  ],
]);
