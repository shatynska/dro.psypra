import { Headings, SpecialistProps } from '.';

export type SpecialistSchedule = {
  headings: Headings;
  data: string;
};

export function useGetSpecialistScheduleControllerExecuteSuspense({
  alias,
}: SpecialistProps) {
  const overview = overviews.get(alias);

  return (overview ?? overviews.get('shatynska')) as SpecialistSchedule;
}

const overviews = new Map<string, SpecialistSchedule>([
  [
    'shatynska',
    {
      headings: {
        primary: 'Графік роботи',
        secondary: 'Коли приймаю?',
      },
      data: 'З понеділка по ...',
    },
  ],
]);
