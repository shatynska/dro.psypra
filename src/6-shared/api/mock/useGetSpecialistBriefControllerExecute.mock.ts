import { Headings, SpecialistProps } from '.';

type DimensionBrief = {
  title: string;
  href: string;
  value: string;
};

export type SpecialistBrief = {
  headings: Headings;
  data: DimensionBrief[];
};

export function useGetSpecialistBriefControllerExecuteSuspense({
  alias,
}: SpecialistProps) {
  const overview = overviews.get(alias);

  return (overview ?? overviews.get('shatynska')) as SpecialistBrief;
}

const overviews = new Map<string, SpecialistBrief>([
  [
    'shatynska',
    {
      headings: {
        primary: 'Короткий огляд',
        secondary: 'Досьє',
      },
      data: [
        {
          title: 'Спеціальності',
          href: '/specialties',
          value: 'психолог, психотерапевт',
        },
        {
          title: 'Форми роботи',
          href: '/forms',
          value: 'індивідуальна, парна, сімейна, групова',
        },
        {
          title: 'Вікові групи',
          href: '/ages',
          value: 'від 16 років до 60 років',
        },
        {
          title: 'Тривалість',
          href: '/terms',
          value:
            'разові консультації, короткострокова та довгострокова терапія',
        },
        {
          title: 'Напрями терапії',
          href: '/approaches',
          value: 'гештальт-терапія, арт-терапія',
        },
        {
          title: 'Орієнтовні ціні',
          href: '/#rates',
          value: '800 грн',
        },
      ],
    },
  ],
  [
    'berchuk',
    {
      headings: {
        primary: 'Короткий огляд',
        secondary: 'Досьє',
      },
      data: [
        {
          title: 'Спеціальності',
          href: '/specialties',
          value: 'психолог, психотерапевт',
        },
        {
          title: 'Форми роботи',
          href: '/forms',
          value: 'індивідуальна, парна, сімейна, групова',
        },
        {
          title: 'Вікові групи',
          href: '/ages',
          value: 'від 16 років до 60 років',
        },
        {
          title: 'Тривалість',
          href: '/terms',
          value: 'консультації, короткотривала терапія, довготривала терапія',
        },
        {
          title: 'Напрями терапії',
          href: '/approaches',
          value: 'гештальт-терапія, арт-терапія',
        },
        {
          title: 'Орієнтовні ціні',
          href: '/#rates',
          value: 'від 400 грн до 800 грн',
        },
      ],
    },
  ],
]);
