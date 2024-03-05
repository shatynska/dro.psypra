import { Headings, SpecialistProps } from '.';
type Theme = {
  title: string;
  href: string;
};

type SpecialistThemes = {
  headings: Headings;
  data: Theme[];
};

export function useGetSpecialistThemesControllerExecuteSuspense({
  alias,
}: SpecialistProps) {
  const overview = overviews.get(alias);

  return (overview ?? overviews.get('shatynska')) as SpecialistThemes;
}

const overviews = new Map<string, SpecialistThemes>([
  [
    'shatynska',
    {
      headings: {
        primary: 'Основні запити',
        secondary: 'З якими темами?',
      },
      data: [
        {
          title: 'Депресія',
          href: '/themes',
        },
        {
          title: 'Втрати',
          href: '/themes',
        },
        {
          title: 'Кризи',
          href: '/themes',
        },
        {
          title: 'Розлучення',
          href: '/themes',
        },
        {
          title: 'Тривога',
          href: '/themes',
        },
        {
          title: 'Орієнтовні ціні',
          href: '/themes',
        },
      ],
    },
  ],
]);
