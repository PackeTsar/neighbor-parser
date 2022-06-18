module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
  },
  overrides: [
    {
      files: [
        "**/*.js"
      ],
      env: {
        jest: true
      }
    }
  ]
}
