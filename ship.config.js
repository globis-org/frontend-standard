module.exports = {
  buildCommand: () => null,
  monorepo: {
    mainVersionFile: 'package.json',
    packagesToBump: ['packages/*'],
    packagesToPublish: ['packages/*'],
  },
  publishCommand: ({ defaultCommand }) => `${defaultCommand} --access public`,
  pullRequestTeamReviewers: ['globis-org/jser'],
}
