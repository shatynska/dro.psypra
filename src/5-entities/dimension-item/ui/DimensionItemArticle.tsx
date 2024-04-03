import parse from 'html-react-parser';
import DOMPurify from 'isomorphic-dompurify';
import { HTMLAttributes } from 'react';

import { Article } from '~/shared/ui/Article';

type Props = HTMLAttributes<HTMLDivElement> & {
  title?: string;
  content?: string;
};

export function DimensionItemArticle({ content, title, ...props }: Props) {
  return (
    <Article title={title} {...props}>
      {content && parse(DOMPurify.sanitize(content))}
    </Article>
  );
}
