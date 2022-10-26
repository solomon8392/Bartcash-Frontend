/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['mdbootstrap.com', "localhost", "bartcash.onrender.com"],
  },
}

module.exports = nextConfig
