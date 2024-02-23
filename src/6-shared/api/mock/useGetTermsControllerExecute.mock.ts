export function useGetTermsControllerExecuteSuspense() {
  return {
    headings: {
      primary: 'Тривалість',
      secondary: 'Як довго триватиме?',
    },
    href: '/terms',
    items: [
      {
        alias: '1',
        headings: { primary: 'Разові консультації', secondary: '' },
      },
      {
        alias: '2',
        headings: { primary: 'Короткотривала психотерапія', secondary: '' },
      },
      {
        alias: '3',
        headings: { primary: 'Довготвривала психотерапія', secondary: '' },
      },
    ],
  };
}
