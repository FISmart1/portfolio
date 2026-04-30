/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// next.config.js - Tambahkan domain eksternal
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
      },
    ],
  },
}

export default nextConfig;
