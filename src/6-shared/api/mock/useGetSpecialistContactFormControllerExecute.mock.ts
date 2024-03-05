import { Headings, SpecialistProps } from '.';

export type SpecialistContactForm = {
  headings: Headings;
  data: string;
};

export function useGetSpecialistContactFormControllerExecuteSuspense({
  alias,
}: SpecialistProps) {
  const overview = overviews.get(alias);

  return (overview ?? overviews.get('shatynska')) as SpecialistContactForm;
}

const overviews = new Map<string, SpecialistContactForm>([
  [
    'shatynska',
    {
      headings: {
        primary: 'Контактна форма',
        secondary: 'Ще питання?',
      },
      data: 'Напишіть',
    },
  ],
]);
