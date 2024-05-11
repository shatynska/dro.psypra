import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    API_BASE_URL: z.string().url(),
    REVALIDATE_TOKEN: z.string(),
  },
  experimental__runtimeEnv: {},
  skipValidation: process.env.npm_lifecycle_event === 'lint',
});
