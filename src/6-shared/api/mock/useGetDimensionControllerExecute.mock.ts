import {
  DimensionItem,
  useGetAgesControllerExecuteSuspense,
  useGetApproachesControllerExecuteSuspense,
  useGetFormsControllerExecuteSuspense,
  useGetQuestionsControllerExecuteSuspense,
  useGetSpecialtiesControllerExecuteSuspense,
  useGetTermsControllerExecuteSuspense,
  useGetThemesControllerExecuteSuspense,
} from '.';

export type DimensionAlias =
  | 'specialties'
  | 'ages'
  | 'approaches'
  | 'forms'
  | 'terms'
  | 'themes';

export type Headings = {
  primary: string;
  secondary: string;
};

export type ParentLink = {
  headings: Headings;
  href: string;
};

export type Dimension = {
  headings: Headings;
  href?: string;
  items: DimensionItem[];
};

export type DimensionWithParentLink = Dimension & {
  parentLink: ParentLink;
};

export function useGetDimensionControllerExecuteSuspense(
  alias: DimensionAlias,
) {
  const dimensions = new Map<DimensionAlias, Dimension>([
    ['specialties', useGetSpecialtiesControllerExecuteSuspense()],
    ['approaches', useGetApproachesControllerExecuteSuspense()],
    ['ages', useGetAgesControllerExecuteSuspense()],
    ['forms', useGetFormsControllerExecuteSuspense()],
    ['terms', useGetTermsControllerExecuteSuspense()],
    ['themes', useGetThemesControllerExecuteSuspense()],
  ]);
  const dimension = dimensions.get(alias);

  const { headings, href } = useGetQuestionsControllerExecuteSuspense();
  const parentLink = { parentLink: { headings: headings, href: href } };

  return { ...dimension, ...parentLink } as DimensionWithParentLink;
}
