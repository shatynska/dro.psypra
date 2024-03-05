import { Headings, ParentLink, SpecialistProps } from '.';

export type SpecialistOverview = {
  headings: Headings;
  parentLink: ParentLink;
  data: {
    cells: string[];
    emails: string[];
    sites: string[];
    addresses: string[];
    messengers: [string, string][];
  };
};

export function useGetSpecialistOverviewControllerExecuteSuspense({
  alias,
}: SpecialistProps) {
  const overview = overviews.get(alias);

  return (overview ?? overviews.get('shatynska')) as SpecialistOverview;
}

const overviews = new Map<string, SpecialistOverview>([
  [
    'shatynska',
    {
      headings: {
        primary: 'Шатинська Олена',
        secondary: 'Психолог, психотерапевт',
      },
      parentLink: {
        headings: {
          primary: 'Фахівці',
          secondary: 'До кого звернутися?',
        },
        href: '/specialists',
      },
      data: {
        cells: ['+380(97)897-68-47'],
        emails: ['shatynska@gmail.com'],
        sites: ['https://shatynska.in.ua'],
        addresses: ['м.Дрогобич, вул.Лесі Українки 36'],
        messengers: [
          ['skype', ''],
          ['telegram', ''],
        ],
      },
    },
  ],
  [
    'berchuk',
    {
      headings: {
        primary: 'Берчук Володимир',
        secondary: 'Психолог, психотерапевт',
      },
      parentLink: {
        headings: {
          primary: 'Фахівці',
          secondary: 'До кого звернутися?',
        },
        href: '/specialists',
      },
      data: {
        cells: ['+380(67)239-02-35'],
        emails: ['shatynska@gmail.com'],
        sites: [],
        addresses: ['м.Дрогобич, вул.Лесі Українки 36'],
        messengers: [
          ['skype', ''],
          ['telegram', ''],
        ],
      },
    },
  ],
]);
