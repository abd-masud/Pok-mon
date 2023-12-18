/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // productionBrowserSourceMaps: true, 
  images:{
    domains:['images.pokemontcg.io']
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/cardRouter',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig