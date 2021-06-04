module.exports = {
  overrides: [
    {
      files: [
        '**/__?(tests|mocks)__/**',
        '**/*?(.|_)(test|spec).*',
        '**/*(Test|Spec).*'
      ],
      plugins: ['@neatfreak', 'jest-formatting'],
      extends: [
        'plugin:jest-formatting/strict',
        'plugin:@neatfreak/jest'
      ],
      rules: {
        'jest-formatting/padding-around-all': 'error'
      }
    }
  ]
}
