module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    '@nuxtjs/eslint-config-typescript',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 2022,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  rules: {
    // js
    'comma-dangle': ['error', 'always-multiline'],
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'no-console': 0,

    // ts
    '@typescript-eslint/no-var-requires': 'off',

    // vue
    'vue/v-bind-style': ['error', 'longform'],
    'vue/v-on-style': ['error', 'longform'],
    'vue/v-slot-style': ['error', {
      atComponent: 'longform',
      default: 'longform',
      named: 'longform',
    }],
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 1,
      },
      multiline: {
        max: 1,
      },
    }],
    'vue/no-v-html': 0,
    'vue/multi-word-component-names': 0,

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
  },
}
