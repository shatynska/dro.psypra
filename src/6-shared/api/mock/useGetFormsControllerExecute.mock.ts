export function useGetFormsControllerExecuteSuspense() {
  return {
    headings: {
      primary: 'Форми роботи',
      secondary: 'Які форми роботи?',
    },
    href: '/forms',
    items: [
      {
        alias: '1',
        headings: { primary: 'Індивідуальна', secondary: '' },
      },
      {
        alias: '2',
        headings: { primary: 'парна', secondary: '' },
      },
      {
        alias: '3',
        headings: { primary: 'сімейна', secondary: '' },
      },
      {
        alias: '4',
        headings: { primary: 'групова', secondary: '' },
      },
    ],
  };
}
