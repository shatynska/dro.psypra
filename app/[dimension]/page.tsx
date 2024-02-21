import { DimensionAlias } from '~/shared/api';

import { Dimension } from '~/pages/dimension';

type Props = {
  params: {
    dimension: DimensionAlias;
  };
};

export default function DimensionPage({ params }: Props) {
  return <Dimension alias={params.dimension} />;
}
