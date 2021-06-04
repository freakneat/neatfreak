<h1 align="center">✨ <a href="https://github.com/freakyneat/neatfreak">neatfreak</a> ✨🧹💨</h1>
<p align="center"><em>Cleans up nicely</em></p>

---

## `@neatfreak/eslint-plugin`

This plugin provides _**opinionated, sensible rules**_ that...

1. Help **simplify** ESLint setup.
2. Help you adhere to **best practices**.
3. Identify probable issue vectors in your code (**pitfalls** and **code smells**).
4. Maximize **readability** and understanding of your code.
5. Maximize ease of **maintaining** and **refactoring** your code.
6. Maximize **consistency** of style and practices.
7. Are designed to augment and/or compliment as opposed to override or conflict when using Prettier.

> _Rules that might cause excessive errors and are not auto-fixable are set
> to "warn"._

For these reasons, many rules are enabled and, of those, most are using the
recommended configuration except where it makes sense for achieving said goals.
When used with Prettier, conflicting rules are disabled.

If there is a rule you just can't stomach, simply override it. This way you have a solid starting point. Publish your version publicly or privately and share it within your organization to maintain consistency between all your projects!

If you feel like any rule is just too cumbersome or restrictive, in general, **please consider contributing to this project** and let's make it better together!

> 💁‍♂️ You might also consider using
> [@therealklanni/prettier-config](https://github.com/therealklanni/prettier-config)

## Available configurations

_(and what they configure)_

- `plugin:@neatfreak/base` _(must always be applied first)_
- `plugin:@neatfreak/typescript`
  - [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint)
- `plugin:@neatfreak/react`
  - [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)
  - [eslint-plugin-react-hooks](https://github.com/yannickcr/eslint-plugin-react)
  - [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
- `plugin:@neatfreak/jest`
  - [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest)
  - [eslint-plugin-jest-formatting](https://github.com/dangreenisrael/eslint-plugin-jest-formatting)
- `plugin:@neatfreak/node` or `plugin:@neatfreak/cli`
  - [eslint-plugin-node](https://github.com/mysticatea/eslint-plugin-node)
- `plugin:@neatfreak/prettier` _(must always be applied **last**)_
  - [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
  - [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)

## Usage

1. Install required dependencies
   ```
   npm install -D @neatfreak/eslint-plugin eslint
   ```
2. Optionally, view and install any additional dependencies, as needed

   ```
   # list dependencies
   npm view @neatfreak/eslint-plugin peerDependencies

   # install what you need
   npm install -D eslint-plugin-{jest,node,react} @neatfreak/prettier-config ...
   ```

3. Configure as shown here (more examples below)
   ```jsonc
   {
     // the only plugin you need to specify is this one
     // or any plugin not provided by this one
     "plugins": ["@neatfreak"],
     "extends": ["plugin:@neatfreak/base", "plugin:@neatfreak/prettier"]
   }
   ```
4. ???
5. Profit

### "Hard mode" example

DIY file globs. Allows for more control over how configs are applied.

```jsonc
{
  "plugins": ["@neatfreak"],
  "extends": [
    "some-unrelated-config",
    // apply @neatfreak configs after unrelated configs
    "plugin:@neatfreak/base"
  ],
  "overrides": [
    // if you need other unrelated overrides, add them first
    {
      "files": ["*.js"],
      "rules": {
        "semi": ["error", "always"]
      }
    },
    {
      "files": ["*.ts"],
      "extends": [
        "some-unrelated-config",
        // apply @neatfreak configs after unrelated configs
        "plugin:@neatfreak/typescript"
      ],
      "rules": {
        "@typescript-eslint/semi": ["error", "always"],
        "@typescript-eslint/init-declarations": "off"
      }
    },
    {
      "files": ["**/__tests__/**"],
      // base config will get applied by above overrides
      "extends": ["plugin:@neatfreak/jest"],
      "rules": {
        "jest/no-if": "warn"
      }
    },
    // Apply last when using Prettier config
    {
      "files": ["*.?(ts,js)"],
      "extends": ["plugin:@neatfreak/prettier"]
    }
  ]
}
```

### "Easy mode" example

Applies configs automatically wrapped in an `override` with a default `files`
glob.

```jsonc
{
  "plugins": ["@neatfreak"],
  "extends": [
    "some-unrelated-config",
    // apply @neatfreak configs after unrelated configs
    "plugin:@neatfreak/base",
    // applied using pattern matching
    "plugin:@neatfreak/jest auto",
    "plugin:@neatfreak/typescript auto",
    // applied globally
    "plugin:@neatfreak/prettier"
  ],
  // example rules overrides
  "rules": {
    "semi": ["error", "always"],
    "@typescript-eslint/semi": ["error", "always"],
    "@typescript-eslint/init-declarations": "off",
    "jest/no-if": "warn"
  }
}
```

> Note: the `prettier`, `node`, and `cli` configs do not have an "auto" config,
> as these don't typically require an override.

### "Lazy mode" example

Automatically applies everything.

> Note: requires installing all optional peer dependencies (see [Usage](#Usage))

```jsonc
{
  "plugins": ["@neatfreak"],
  "extends": ["plugin:@neatfreak/lazy"],
  // example rules overrides
  "rules": {
    "semi": ["error", "always"],
    "@typescript-eslint/semi": ["error", "always"],
    "@typescript-eslint/init-declarations": "off",
    "jest/no-if": "warn"
  }
}
```
