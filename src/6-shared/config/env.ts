import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    API_BASE_URL: z.string().url(),
    REVALIDATE_TOKEN: z.string(),
  },
  runtimeEnv: {
    API_BASE_URL: process.env.API_BASE_URL,
    REVALIDATE_TOKEN: process.env.REVALIDATE_TOKEN,
  },
});
