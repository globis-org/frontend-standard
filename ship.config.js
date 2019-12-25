module.exports = {
  publishCommand: ({ defaultCommand }) =>
    `${defaultCommand} --access public --scope=globis`,
  monorepo: {
    mainVersionFile: 'package.json',
    packagesToBump: ['packages/*'],
    packagesToPublish: ['packages/*'],
  },
  buildCommand: () => null,
}
