module.exports = {
  publishCommand: ({ defaultCommand }) => `${defaultCommand} --access public`,
  pullRequestReviewer: ['globis-org/jser '],
  monorepo: {
    mainVersionFile: 'package.json',
    packagesToBump: ['packages/*'],
    packagesToPublish: ['packages/*'],
  },
  buildCommand: () => null,
}
