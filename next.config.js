const isGithubActions = process.env.GITHUB_ACTIONS === 'true'

module.exports = {
  reactStrictMode: true,
  assetPrefix: isGithubActions ? '' : '',
  basePath: isGithubActions ? '' : ''
}
