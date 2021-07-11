module.exports = {
  extends: ['airbnb-typescript'],
  parserOptions: {
   project: './tsconfig.json',
  },
  rules: {
  "no-param-reassign": 0,
  "react-in-jsx-scope": 0,
  "react/prop-types": "off"
  }
}
