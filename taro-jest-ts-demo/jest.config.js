module.exports = {
  verbose: true,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transform: {
    '\\.(ts|tsx|js|jsx)$': 'ts-jest'
  },
  transformIgnorePatterns: [
    'node_modules/(?!(taro-ui|@tarojs/mobx-h5)/)'
  ],
  testMatch: ['**/__tests__/**/*.(spec|test).ts?(x)'],
  moduleNameMapper: {
    react: 'nervjs',
    'react-addons-test-utils': 'nerv-test-utils',
    'react-dom': 'nervjs',
    'weui': '<rootDir>/__mock__/styleMock.js',
    '\\.(css|less|sass|scss)$': '<rootDir>/__mock__/styleMock.js'
  },
  //https://kulshekhar.github.io/ts-jest/user/config/diagnostics#ignoring-some-error-codes
  globals: {
    'ts-jest': {
      tsConfig: {
        "target": "es6",
        //测试代码中的jsx需要转为代码
        'jsx': 'react',
        'jsxFactory': 'Nerv.createElement'
      },
      diagnostics: {
        warnOnly: true
      }
    }
  }
}
