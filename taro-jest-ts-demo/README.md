# 工程介绍
本工程通过typescript编译ts代码，通过jest进行单元测试

# 运行本工程的单元测试代码
1. `yarn install`
1. `yarn build:h5`
1. `yarn test`

# taro+jest+typescript单元测试环境搭建步骤
1. 创建taro工程
    - 用`taro init`进行工程初始化
    - 选择typescript
    - 如果要用javascript，请参考：[taro-jest-babel-demo](../taro-jest-babel-demo/README.md)
1. 配置jest
    - `yarn add --dev @types/jest jest ts-jest nerv-server nerv-test-utils`
    - 新建文件：`jest.config.js`
    ```javascript
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
    ```
1. 新建文件：`__mock__/styleMock.js`
    > 这个文件是用来mock资源文件的，参考的是[taro-ui](https://github.com/NervJS/taro-ui)的配置
1. `package.json`中添加script: `"test": "TARO_ENV=h5 jest"`
    > 根据taro文档，目前nerv-server仅支持h5环境，所以先运行`yarn build:h5`，再测试`.temp/`下编译好的h5控件
1. 写一个简单的控件：`src/pages/index/HelloWorld.tsx`
    > 依赖mobx、redux的控件，nerv-server-render有问题，所以简单写一个自己的控件做测试
    ```typescript
    import Taro, { Component } from '@tarojs/taro'
    import { View, Text } from '@tarojs/components'
    
    class HelloWorld extends Component {
      render () {
        return (
          <View><Text>Hello, World</Text></View>
        )
      }
    }
    
    export default HelloWorld
    ```
    
1. 编写测试代码：`src/pages/__tests__/index.test.tsx`
    ```typescript
    import Nerv from 'nervjs'
    import { renderToString } from 'nerv-server'
    import HelloWorld from '../../../.temp/pages/index/HelloWorld'
    
    test('HelloWorld', () => {
      const component = renderToString(
        <HelloWorld />
      )
      expect(component)
        .toMatchSnapshot()
    })
    ```
