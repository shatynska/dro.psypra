import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

import Home from '../app/page';

test('Home', () => {
  render(<Home />);
  expect(
    screen.getByRole('heading', {
      level: 1,
      name: 'Психологи, психотерапевти та психіатри Дрогобиччини',
    }),
  ).toBeDefined();
});
