import React from 'react';

import { cn } from '../../lib';

type Props = React.HTMLAttributes<HTMLUListElement>;

export function Logotype({ className, ...props }: Props) {
  return (
    <ul className={cn(className)} {...props}>
      <li>психологи</li>
      <li>психотерапевти</li>
      <li>психіатри</li>
    </ul>
  );
}
