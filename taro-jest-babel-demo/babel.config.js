/* eslint-disable import/no-commonjs */
module.exports = {
  presets: [
    ['@babel/env', { spec: true, useBuiltIns: false }]
  ],
  plugins: [
    ['@babel/plugin-transform-react-jsx', { pragma: 'Nerv.createElement' }],
    ['@babel/plugin-proposal-decorators', { 'legacy': true }],
    ['@babel/plugin-proposal-class-properties', { 'loose': true }],
    ['@babel/plugin-proposal-object-rest-spread', { 'loose': true, 'useBuiltIns': false }]
  ]
}
