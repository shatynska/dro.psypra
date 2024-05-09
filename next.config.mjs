/** @type {import('next').NextConfig} */
import { fileURLToPath } from 'node:url';

import createJiti from 'jiti';

const jiti = createJiti(fileURLToPath(import.meta.url));

// Import env to validate during build
jiti('./src/6-shared/config/env');

const nextConfig = {
  output: 'standalone',
};

export default nextConfig;
