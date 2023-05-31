module.exports = {
  defaultSeverity: 'error',
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-standard-vue/scss',
    'stylelint-config-property-sort-order-smacss'
  ],
  rules: {
    indentation: 2,

    // 'alpha-value-notation': null,
    // 'at-rule-empty-line-before': null,
    // 'at-rule-no-unknown': null,
    // 'block-no-empty': null,
    // 'color-function-notation': null,
    'declaration-block-no-redundant-longhand-properties': null,
    // 'declaration-colon-newline-after': null,
    // 'max-empty-lines': null,
    // 'max-line-length': null,
    'no-duplicate-selectors': null,
    // 'no-descending-specificity': null,
    'no-empty-source': null,
    // 'property-no-unknown': [
    //   true,
    //   { 'ignoreProperties': ['/^color_/'] }
    // ],
    // 'selector-pseudo-class-no-unknown': [
    //   true,
    //   { 'ignorePseudoClasses': ['export'] }
    // ],
    // 'selector-pseudo-element-no-unknown': [
    //   true,
    //   { 'ignorePseudoElements':['v-deep'] }
    // ],
    // 'value-list-comma-newline-after': 'never-multi-line',

    // 'scss/at-import-no-partial-leading-underscore': null,
    // 'scss/comment-no-empty': null,
    // 'scss/double-slash-comment-empty-line-before': null,
    // 'scss/dollar-variable-empty-line-before': null,
    // 'scss/no-global-function-names': null,

    // // kebab-case以外も許容
    'selector-id-pattern': null,
    'selector-class-pattern': null,
    'keyframes-name-pattern': null,
    'scss/at-mixin-pattern': null,
    // 'scss/dollar-variable-pattern': null,
    'scss/percent-placeholder-pattern': null
  }
}
