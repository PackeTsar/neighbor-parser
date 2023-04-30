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
    strict: 2
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
