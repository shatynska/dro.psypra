import createClient from 'openapi-fetch';

import { env } from '../config/env';

import type { paths } from './generated';

export const apiClient = createClient<paths>({
  baseUrl: env.API_BASE_URL,
});
