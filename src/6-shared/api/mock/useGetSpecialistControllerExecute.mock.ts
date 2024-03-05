import {
  Headings,
  ParentLink,
  useGetSpecialistsControllerExecuteSuspense,
} from './';

export type Specialist = {
  alias: string;
  data: {
    title: string;
    specialties: string[];
  };
};

export type SpecialistWithParentLink = Specialist & {
  headings: Headings;
  parentLink: ParentLink;
};

export type SpecialistProps = {
  alias: string;
};

export function useGetSpecialistControllerExecuteSuspense(alias: string) {
  const specialists = useGetSpecialistsControllerExecuteSuspense();

  const specialist = specialists.items.find(
    (item) => item.alias === alias,
  ) as Specialist;

  const headings = {
    primary: specialist.data.title,
    secondary: specialist.data.specialties.join(', '),
  };

  const { items, ...parentLink } = specialists;

  return {
    ...specialist,
    headings: headings,
    parentLink: parentLink,
  } as SpecialistWithParentLink;
}
