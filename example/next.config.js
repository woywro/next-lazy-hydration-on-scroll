/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    return config
  },
  experimental: {
    optimizeCss: true, // enabling this will enable SSR for Tailwind
  },
}

module.exports = nextConfig
