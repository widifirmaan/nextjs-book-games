import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isCloudflareWorker =
    process.env.CLOUDFLARE_WORKER === '1' ||
    process.env.WORKERS_CI === '1' ||
    process.env.CF_PAGES === '1';

/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: false,
    },
    experimental: {
        serverComponentsExternalPackages: ['@libsql/client'],
    },
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.pravatar.cc',
            },
        ],
    },
    webpack: (config) => {
        if (isCloudflareWorker) {
            config.resolve.alias['@/lib/db-adapter.mjs'] = path.join(__dirname, 'lib/cloudflare-db-noop.mjs');
        }
        return config;
    },
};

export default nextConfig;
