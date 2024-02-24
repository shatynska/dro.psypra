export function useGetQuestionsControllerExecuteSuspense() {
  return {
    headings: {
      primary: 'Критерії пошуку',
      secondary: 'Багато питань?',
    },
    href: '/#questions',
    items: [
      {
        title: 'Хто є хто?',
        href: '/specialties',
      },
      {
        title: 'До кого звернутися?',
        href: '/specialists',
      },
      {
        title: 'Які форми роботи?',
        href: '/forms',
      },
      {
        title: 'З ким працюють?',
        href: '/ages',
      },
      {
        title: 'З якими темами?',
        href: '/themes',
      },
      {
        title: 'Як довго триватиме?',
        href: '/terms',
      },
      {
        title: 'Які методи роботи?',
        href: '/approaches',
      },
      {
        title: 'Скільки коштує?',
        href: '/#costs',
      },
      {
        title: 'Де проводиться?',
        href: '/#locations',
      },
      {
        title: 'Коли приймають?',
        href: '/#times',
      },
      {
        title: 'Як зв\u0027язатися?',
        href: '/#contacts',
      },
    ],
  };
}
