module.exports = {
  plugins: ['@neatfreak'],
  extends: [
    'plugin:@neatfreak/base',
    'plugin:@neatfreak/jest auto',
    'plugin:@neatfreak/react auto',
    'plugin:@neatfreak/typescript auto',
    'plugin:@neatfreak/prettier'
  ],
  overrides: [
    {
      files: ['*.js'],
      extends: ['plugin:@neatfreak/node']
    }
  ]
}
