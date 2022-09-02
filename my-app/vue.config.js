const { defineConfig } = require('@vue/cli-service')
const path = require("path");
const resolve = dir => path.join(__dirname, dir);

const isDev = process.env.NODE_ENV;
console.log(22222, 'ddddddddd')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/', // 项目部署基本路径，默认根路径
  outputDir: 'dist', // 输出文件名,
  assetsDir: 'static', // 存放静态资源文件的文件夹名
  indexPath: 'index.html', // 生成再putputPath下的那个文件里
  filenameHashing: true, // 默认再生成姿态资源文件名忠包含hash以控制缓存
  lintOnSave: true, // 是否再开发环境下每次保存都校验lint错误，true不会导致编译失败，error编译失败并显示再浏览器中
  runtimeCompiler: false, // 是否使用包含运行时编译器的Vue构建版本，设置为true就i可以用template，但会使应用额外增加10kb左右
  transpileDependencies: [], //默认情况下babel-loader会忽略所有node_modules中的文件。如果你想要通过Babel显式转译一个依赖，可以在这个选项中列出来。
  productionSourceMap: true, // 如果不需要生成环境的source map,keyi shezhi wei false,可以加速生产环境构建
  css: {
    // modules: false, // 默认是false，如果设置true，css文件名可以省略module
    extract: false, // 是否讲组件中的css提取至一个独立的css文件中，当作为一个库构建时，可以讲其设置为false免得用户自己导入css，生产环境默认是true，开发环境是false
    sourceMap: false, // 是否为css开启source map，设置true可能会影响构建的性能
    // 为预处理器loader传递自定义选项
    loaderOptions: {
      sass: {
        prependData: ''// 预设全局变量
      },
      css: {}, // 传递给css-loader
    }
  },
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve("src"))
      .set('assets', resolve('src/assets'))
      .set("components", resolve('src/components'))
  }
  ,
  // 配置代理
  devServer: {
    port: 8080, // 端口号
    host: 'localhost',
    https: false,
    hot: true,
    open: true, // 自动打开浏览器
    proxy: {
      "/api": {
        target: 'http://www.test.com', // 目标主机ip
        ws: true, // 代理的websockets
        changOrigin: true,  // 需要虚拟主机站点
        pathRewrite: { // 将/api重写
          "^/api": ''
        }
      }
    },
  }
})
