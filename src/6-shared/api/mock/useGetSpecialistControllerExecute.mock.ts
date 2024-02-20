import {
  useGetSpecialistsControllerExecuteSuspense,
  type Specialist,
} from './';

export function useGetSpecialistControllerExecuteSuspense(alias: string) {
  const specialist = useGetSpecialistsControllerExecuteSuspense().items.find(
    (item) => item.alias === alias,
  ) as Specialist;

  return {
    headings: {
      primary: specialist.title,
      secondary: specialist.specialties.join(' '),
    },
  };
}
