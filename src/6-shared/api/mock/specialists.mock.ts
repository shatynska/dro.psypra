export const specialistsHeadings = {
  primary: 'Фахівці',
  secondary: 'До кого звернутися?',
};

export type Specialist = {
  name: string;
  specialties: [string];
};

export const specialists = new Map([
  [
    'berchuk',
    {
      name: 'Берчук Володимир',
      specialties: ['психолог', 'психотерапевт'],
    },
  ],
  [
    'bilas',
    {
      name: 'Білас Юлія',
      specialties: ['психолог'],
    },
  ],
  [
    'gambarova',
    {
      name: 'Гамбарова Еляна',
      specialties: ['психолог'],
    },
  ],
  [
    'drobchak',
    {
      name: 'Дробчак Ольга',
      specialties: ['психолог', 'психотерапевт'],
    },
  ],
  [
    'kocyuba',
    {
      name: 'Коцюба Галина',
      specialties: ['психолог'],
    },
  ],
  [
    'leh',
    {
      name: 'Наталя Лех',
      specialties: ['психіатр, психотерапевт'],
    },
  ],
  [
    'nekrasova',
    {
      name: 'Некрасова Валентина',
      specialties: ['психолог', 'психотерапевт'],
    },
  ],
  [
    'parashchak',
    {
      name: 'Паращак Надія',
      specialties: ['психіарт'],
    },
  ],
  [
    'petryshyn',
    {
      name: 'Петришин Ольга',
      specialties: ['психотерапевт'],
    },
  ],
  [
    'sozanska',
    {
      name: 'Созанська Ірина',
      specialties: ['психотерапевт'],
    },
  ],
  [
    'franchuk',
    {
      name: 'Франчук Тетяна',
      specialties: ['психіатр', 'невропатолог'],
    },
  ],
  [
    'chaplya',
    {
      name: 'Чапля Уляна',
      specialties: ['психолог'],
    },
  ],
  [
    'shatynska',
    {
      name: 'Шатинська Олена',
      specialties: ['психолог', 'психотерапевт'],
    },
  ],
]);
