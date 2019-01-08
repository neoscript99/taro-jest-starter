module.exports = {
  verbose: true,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  /**
   * 测试代码本身为typescript，需要ts-jest进行调用
   * taro代码先通过h5:build编译到.temp中，再通过babel-jest进行测试
   *
   * */
  transform: {
    '\\.(ts|tsx)$': 'ts-jest',
    '\\.(js|jsx)$': 'babel-jest'
  },
  /**
   * 本身还是es6的依赖库，需要babel-jest做transform
   * babel-jest的transform依赖babel.config.js
   *
   * */
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
