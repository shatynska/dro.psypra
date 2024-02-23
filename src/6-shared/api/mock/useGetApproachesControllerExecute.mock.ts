export function useGetApproachesControllerExecuteSuspense() {
  return {
    headings: {
      primary: 'Напрями терапії',
      secondary: 'Які методи роботи?',
    },
    href: '/approaches',
    items: [
      {
        alias: '1',
        headings: { primary: 'Гештальт', secondary: '' },
      },
      {
        alias: '2',
        headings: { primary: 'Клієнт-центрована', secondary: '' },
      },
      {
        alias: '3',
        headings: { primary: 'ЕМДР', secondary: '' },
      },
      {
        alias: '3',
        headings: { primary: 'Позитивна', secondary: '' },
      },
      {
        alias: '3',
        headings: { primary: 'Психоаналітична', secondary: '' },
      },
      {
        alias: '3',
        headings: { primary: 'Системно-сімейна', secondary: '' },
      },
    ],
  };
}
