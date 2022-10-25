/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['mdbootstrap.com', "localhost"],
  },
}

module.exports = nextConfig
