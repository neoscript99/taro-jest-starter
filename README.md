# 工程介绍
本工程是taro框架引入jest做逻辑和界面单元测试的starter工程

# babel工程初始化步骤

1. 创建taro工程
    用`taro init`进行工程初始化，可以选择mobx或redux模板（taro-jest-babel选择的是mobx模板，js代码）
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
      testMatch: ['**/__tests__/**/*.(spec|test).js?(x)'],
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
        [
          '@babel/env',
          {
            spec: true,
            useBuiltIns: false
          }
        ]
      ],
      plugins: [
        '@babel/plugin-proposal-class-properties',
        [
          '@babel/plugin-transform-react-jsx',
          {
            pragma: 'Nerv.createElement'
          }
        ],
        ['@babel/plugin-proposal-object-rest-spread']
      ]
    }
    ```
1. 工程目录新建文件：`__mock__/styleMock.js`
    > 这个文件是用来mock资源文件的，参考的是[taro-ui](https://github.com/NervJS/taro-ui)的配置
1. `package.json`中添加script: `"test": "TARO_ENV=h5 jest"`
    > 根据taro文档，目前nerv-server仅支持h5环境，所以先运行`yarn build:h5`，再测试`.temp/`下编译好的h5控件
