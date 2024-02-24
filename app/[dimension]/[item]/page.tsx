import { DimensionAlias } from '~/shared/api';

import { DimensionItem } from '~/pages/dimension-item';

type Props = {
  params: {
    dimension: DimensionAlias;
    item: string;
  };
};

export default function DimensionItemPage({ params }: Props) {
  return (
    <DimensionItem dimensionAlias={params.dimension} itemAlias={params.item} />
  );
}
