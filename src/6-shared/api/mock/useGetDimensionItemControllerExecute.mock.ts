import {
  Headings,
  ParentLink,
  useGetDimensionControllerExecuteSuspense,
  type DimensionAlias,
} from './';

export type DimensionItem = {
  alias: string;
  headings: Headings;
  content?: string;
  image?: string;
};

export type DimensionItemWithParentLink = DimensionItem & {
  parentLink: ParentLink;
};

export function useGetDimensionItemControllerExecuteSuspense(
  dimensionAlias: DimensionAlias,
  itemAlias: string,
) {
  const dimension = useGetDimensionControllerExecuteSuspense(dimensionAlias);

  const dimensionItem = dimension.items.find(
    (item) => item.alias === itemAlias,
  );

  const { items, ...dimensionItemParentLink } = dimension;

  return {
    ...dimensionItem,
    parentLink: dimensionItemParentLink,
  } as DimensionItemWithParentLink;
}
