module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    strict: 2,
    'no-multiple-empty-lines': [
      'error', {
        max: 1
      }
    ]
  },
  overrides: [
    {
      files: [
        '**/*.js'
      ],
      env: {
        jest: true
      }
    }
  ]
}
