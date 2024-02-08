import { render } from '@testing-library/react';
import { expect, test } from 'vitest';

import { Home } from './';

test('Home', () => {
  render(<Home />);
  expect(true).toBe(true);
});
