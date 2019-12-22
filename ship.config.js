module.exports = {
  publishCommand: ({ defaultCommand }) => `${defaultCommand} --access public`,
  mergeStrategy: { toSameBranch: ['master'] },
  monorepo: {
    mainVersionFile: 'package.json',
    packagesToBump: '["packages/*"]',
    packagesToPublish: '["packages/*"]',
  },
  buildCommand: () => null,
}
