/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
};

// module.exports = nextConfig;

module.exports = {
    nextConfig,
    images: {
        domains: ['media.giphy.com', 'cdn.sanity.io'],
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },
};
