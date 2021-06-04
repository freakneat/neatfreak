module.exports = {
  plugins: ['@neatfreak'],
  overrides: [
    {
      files: ['**/*.?(t|j)sx'],
      extends: ['plugin:@neatfreak/react']
    }
  ]
}
