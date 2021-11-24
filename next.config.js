const isGithubActions = process.env.GITHUB_ACTIONS === 'true'

module.exports = {
  reactStrictMode: true,
  assetPrefix: isGithubActions ? '/animefest-next-site/' : '',
  basePath: isGithubActions ? '/animefest-next-site' : ''
}
