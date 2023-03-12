const useSubDirectory = process.env.USE_SUB_DIRECTORY === 'true'

// To host on ucsd.moe and animefest.ucsd.edu:
// assetPrefix: useSubDirectory ? '/animefest-next-site/' : '',
// basePath: useSubDirectory ? '/animefest-next-site' : ''

// To host on animeclub.ucsd.edu:
// assetPrefix: '/~animeclub/animefest/',
// basePath: '/~animeclub/animefest'

module.exports = {
  reactStrictMode: true,
  assetPrefix: useSubDirectory ? '/animefest-next-site/' : '',
  basePath: useSubDirectory ? '/animefest-next-site' : ''
}
