import {
  useGetAgesControllerExecuteSuspense,
  useGetApproachesControllerExecuteSuspense,
  useGetFormsControllerExecuteSuspense,
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

export type DimensionHeadings = {
  primary: string;
  secondary: string;
};

export type DimensionItem = {
  alias: string;
  title: string;
  content?: string;
  image?: string;
};

export type Dimension = {
  headings: DimensionHeadings;
  href?: string;
  items: DimensionItem[];
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

  return dimensions.get(alias) as Dimension;
}
