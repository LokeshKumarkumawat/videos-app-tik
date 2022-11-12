/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors:true,
  },
  
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: [
      'lh3.googleusercontent.com',
      'images.ctfassets.net'
    ]
  }
}

module.exports = nextConfig
