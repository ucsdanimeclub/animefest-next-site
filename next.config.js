const useSubDirectory = process.env.USE_SUB_DIRECTORY === 'true'

const nextConfig = {
  reactStrictMode: true,
}

if (useSubDirectory) {
  nextConfig.assetPrefix = '/animefest-next-site/'
  nextConfig.basePath = '/animefest-next-site/'
}

module.exports = nextConfig
