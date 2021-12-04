const useSubDirectory = process.env.USE_SUB_DIRECTORY === 'true'

module.exports = {
  reactStrictMode: true,
  assetPrefix: useSubDirectory ? '/animefest-next-site/' : '',
  basePath: useSubDirectory ? '/animefest-next-site' : ''
}
