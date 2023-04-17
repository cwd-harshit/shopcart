/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.vox-cdn.com", "nayemdevs.com"],
  },
};

module.exports = nextConfig;
