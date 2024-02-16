import { CategoryAlias } from '~/shared/api/mock';

import { Category } from '~/pages/category';

type Props = {
  params: {
    category: CategoryAlias;
  };
};

export default function CategoryPage({ params }: Props) {
  return <Category alias={params.category} />;
}
