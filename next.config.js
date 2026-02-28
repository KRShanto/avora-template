/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true, // This ignores ts errors during build
  },
};

module.exports = nextConfig;
