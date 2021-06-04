'use strict'

const eslintPlugin = require('../')

describe('@neatfreak/eslint-plugin', () => {
  it('provides eslint configs', () => {
    expect(eslintPlugin.configs).toMatchSnapshot()
  })
})
