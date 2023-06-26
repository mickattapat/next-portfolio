/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    domains: ["localhost","placehold.co" , 'attapat.iamlabs.me', 'iamlabs.me'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.placehold.co",
      },
    ],
  },
  
}

module.exports = nextConfig
