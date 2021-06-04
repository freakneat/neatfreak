module.exports = {
  plugins: ['@neatfreak'],
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      extends: ['plugin:@neatfreak/typescript']
    }
  ]
}
