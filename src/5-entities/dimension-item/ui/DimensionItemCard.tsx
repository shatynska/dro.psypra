import parse from 'html-react-parser';
import DOMPurify from 'isomorphic-dompurify';
import Link from 'next/link';

import { DimensionItem } from '~/shared/api';
import { Card, CardContent, CardHeader, CardTitle } from '~/shared/ui/Card';

type Props = {
  item: DimensionItem;
  parentAlias: string;
};

export function DimensionItemCard({ item, parentAlias }: Props) {
  return (
    <Link
      href={`/${parentAlias}/${item.alias}`}
      className="relative flex justify-center"
    >
      <Card className="md:max-w-80">
        <CardHeader>
          <CardTitle>{item.headings.primary}</CardTitle>
        </CardHeader>
        <CardContent className="line-clamp-12 text-justify md:line-clamp-10 md:hyphens-none md:text-left">
          {item.content && parse(DOMPurify.sanitize(item.content))}
        </CardContent>
      </Card>
    </Link>
  );
}
