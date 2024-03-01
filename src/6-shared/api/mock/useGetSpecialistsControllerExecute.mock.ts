import {
  Headings,
  ParentLink,
  Specialist,
  useGetQuestionsControllerExecuteSuspense,
} from './';

export type Specialists = {
  headings: Headings;
  href: string;
  items: Specialist[];
};

export type SpecialistsWithParentLink = Specialists & {
  parentLink: ParentLink;
};

export function useGetSpecialistsControllerExecuteSuspense() {
  const { headings, href } = useGetQuestionsControllerExecuteSuspense();
  const parentLink = { parentLink: { headings: headings, href: href } };

  return {
    ...specialists,
    ...parentLink,
  } as SpecialistsWithParentLink;
}

export function useGetRandomizedSpecialistsControllerExecuteSuspense() {
  const { headings, href } = useGetQuestionsControllerExecuteSuspense();
  const parentLink = { parentLink: { headings: headings, href: href } };

  let randomizedSpecialists = specialists;
  const randomizedSpecialistsItems = shuffleArray(randomizedSpecialists.items);
  randomizedSpecialists.items = randomizedSpecialistsItems;

  return {
    ...randomizedSpecialists,
    ...parentLink,
  } as SpecialistsWithParentLink;
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

const specialists = {
  headings: {
    primary: 'Фахівці',
    secondary: 'До кого звернутися?',
  },
  href: '/specialists',
  items: [
    {
      alias: 'berchuk',
      data: {
        title: 'Берчук Володимир',
        specialties: ['психолог', 'психотерапевт'],
      },
    },
    {
      alias: 'bilas',
      data: {
        title: 'Білас Юлія',
        specialties: ['психолог'],
      },
    },
    {
      alias: 'hambarova',
      data: {
        title: 'Гамбарова Еляна',
        specialties: ['психолог'],
      },
    },
    {
      alias: 'drobchak',
      data: {
        title: 'Дробчак Ольга',
        specialties: ['психолог', 'психотерапевт'],
      },
    },
    {
      alias: 'kotsiuba',
      data: {
        title: 'Коцюба Галина',
        specialties: ['психолог'],
      },
    },
    {
      alias: 'lekh',
      data: {
        title: 'Лех Наталя',
        specialties: ['психіатр, психотерапевт'],
      },
    },
    {
      alias: 'nekrasova',
      data: {
        title: 'Некрасова Валентина',
        specialties: ['психолог', 'психотерапевт'],
      },
    },
    {
      alias: 'parashchak',
      data: {
        title: 'Паращак Надія',
        specialties: ['психіарт'],
      },
    },
    {
      alias: 'petryshyn',
      data: {
        title: 'Петришин Ольга',
        specialties: ['психотерапевт'],
      },
    },
    {
      alias: 'sozanska',
      data: {
        title: 'Созанська Ірина',
        specialties: ['психотерапевт'],
      },
    },
    {
      alias: 'franchuk',
      data: {
        title: 'Франчук Тетяна',
        specialties: ['психіатр', 'невропатолог'],
      },
    },
    {
      alias: 'chaplia',
      data: {
        title: 'Чапля Уляна',
        specialties: ['психолог'],
      },
    },
    {
      alias: 'shatynska',
      data: {
        title: 'Шатинська Олена',
        specialties: ['психолог', 'психотерапевт'],
      },
    },
  ],
};
