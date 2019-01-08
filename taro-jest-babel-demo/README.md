# 工程介绍
本工程通过babel编译js代码，通过jest进行单元测试

# 运行本工程的单元测试代码
1. `yarn install`
1. `yarn build:h5`
1. `yarn test`

# taro单元测试搭建步骤
1. 创建taro工程
    - 用`taro init`进行工程初始化
    - 本demo为mobx模板，检出后可进行测试
    - 如果要用typescript，请参考：[taro-jest-ts-demo](../taro-jest-ts-demo/README.md)
1. 配置jest
    - `yarn add --dev jest nerv-server nerv-test-utils`
    - 新建文件：`jest.config.js`
    ```javascript
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
    ```
1. 配置babel-jest
    - `yarn add --dev babel-jest babel-core@^7.0.0-bridge.0 @babel/core`
    - `yarn add --dev @babel/preset-env @babel/plugin-proposal-class-properties @babel/plugin-proposal-decorators`
    - `yarn add --dev @babel/plugin-transform-react-jsx @babel/plugin-proposal-object-rest-spread`
    - 新建文件：`babel.config.js`
    ```javascript
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
    ```
1. 新建文件：`__mock__/styleMock.js`
    > 这个文件是用来mock资源文件的，参考的是[taro-ui](https://github.com/NervJS/taro-ui)的配置
1. `package.json`中添加script: `"test": "TARO_ENV=h5 jest"`
    > 根据taro文档，目前nerv-server仅支持h5环境，所以先运行`yarn build:h5`，再测试`.temp/`下编译好的h5控件
1. 编写测试代码：`src/pages/__tests__/index.test.jsx`
    ```javascript
    import Nerv from 'nervjs'
    import { renderToString } from 'nerv-server'
    import { Provider } from '@tarojs/mobx'
    import Index from '../../../.temp/pages/index'
    import counterStore from '../../store/counter'
    
    const store = {
      counterStore
    }
    
    describe('ui test', () => {    
      it('with mobx', () => {
        const component = renderToString(
          <Provider store={store}>
            <Index />
          </Provider>
        )
        expect(component)
          .toMatchSnapshot()
      })
    })

    ```
