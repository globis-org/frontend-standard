module.exports = {
  publishCommand: ({ defaultCommand }) => `${defaultCommand} --access public`,
  monorepo: {
    mainVersionFile: 'package.json',
    packagesToBump: '["packages/*"]',
    packagesToPublish: '["packages/*"]',
  },
  buildCommand: () => null,
}
