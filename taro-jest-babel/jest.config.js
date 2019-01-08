module.exports = {
  verbose: true,
  moduleFileExtensions: [
    'js',
    'jsx'
  ],
  transform: {
    '\\.(js|jsx)$': 'babel-jest'
  },
  transformIgnorePatterns: [
    'node_modules/(?!(taro-ui|@tarojs/mobx-h5)/)'
  ],
  testMatch: ['<rootDir>/src/**/__tests__/**/*.(spec|test).js?(x)'],
  moduleNameMapper: {
    react: 'nervjs',
    'react-addons-test-utils': 'nerv-test-utils',
    'react-dom': 'nervjs',
    'weui': '<rootDir>/__mock__/styleMock.js',
    '\\.(css|less|sass|scss)$': '<rootDir>/__mock__/styleMock.js'
  }
}
