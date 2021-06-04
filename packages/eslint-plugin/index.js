const base = require('./base')
const jestConfig = require('./jest')
const jestAutoConfig = require('./jest/auto')
const nodeConfig = require('./node')
const nodeCliConfig = require('./cli')
const reactConfig = require('./react')
const reactAutoConfig = require('./react/auto')
const typescriptConfig = require('./typescript')
const typescriptAutoConfig = require('./typescript/auto')
const prettierConfig = require('./prettier')
const lazyConfig = require('./lazy')

module.exports = {
  configs: {
    base,
    jest: jestConfig,
    'jest auto': jestAutoConfig,
    node: nodeConfig,
    cli: nodeCliConfig,
    react: reactConfig,
    'react auto': reactAutoConfig,
    typescript: typescriptConfig,
    'typescript auto': typescriptAutoConfig,
    prettier: prettierConfig,
    lazy: lazyConfig
  }
}
