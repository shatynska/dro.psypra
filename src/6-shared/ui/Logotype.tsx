import React from 'react';

import { cn } from '../lib';

type Props = React.HTMLAttributes<HTMLUListElement>;

export function Logotype(props: Props) {
  const { className } = props;

  return (
    <ul className={cn(className)}>
      <li>психологи</li>
      <li>психотерапевти</li>
      <li>психіатри</li>
    </ul>
  );
}
