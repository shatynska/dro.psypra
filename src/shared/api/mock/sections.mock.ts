type Section = {
  title: string;
  href: string;
  description: string;
};

export const sections: Section[] = [
  {
    title: 'Спеціальності',
    href: '/specialties',
    description: 'психологи, психотерапевти, психіатри',
  },
  {
    title: 'Форми роботи',
    href: '/forms',
    description: 'індивідуальна, парна, сімейна, групова',
  },
  {
    title: 'Вікові групи',
    href: '/ages',
    description:
      'дошкільники, молодші школярі, підлітки, юнаки, дорослі, зрілі',
  },
  {
    title: 'Основні теми',
    href: '/themes',
    description: 'конфлікти, страхи, втрати, стреси, залежності, депресія',
  },
  {
    title: 'Тривалість',
    href: '/terms',
    description: 'консультації, короткотривала терапія, довготривала терапія',
  },
  {
    title: 'Напрями терапії',
    href: '/approaches',
    description:
      'психоаналітична, гештальт-терапія, клієнт-центрована, позитивна',
  },
];
