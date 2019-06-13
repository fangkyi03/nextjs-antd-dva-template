/* eslint-disable */
const withLess = require('@zeit/next-less')
const lessToJS = require('less-vars-to-js')
const withImage = require('next-images')
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");
const withProgressBar = require('next-progressbar')
const withInferno = require('next-inferno')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const withPreact = require('@zeit/next-preact')
const getPageFile = require('./utils/getPageFile')
const withLessExcludeAntd = require("./next-less.config.js")
// const withBundleAnalyzer = require("@next/bundle-analyzer")({ enabled: process.env.ANALYZE === "true" });
const withSize = require('next-size')
const fs = require('fs')
const path = require('path')

// Where your antd-custom.less file lives
const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './assets/antd-custom.less'), 'utf8')
)

// fix: prevents error when .less files are required by node
// if (typeof require !== 'undefined') {
//   require.extensions['.less'] = file => { }
// }
module.exports = withPlugins([
  [withBundleAnalyzer, {
    analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
    analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
    bundleAnalyzerConfig: {
      server: {
        analyzerMode: 'static',
        reportFilename: '../bundles/server.html'
      },
      browser: {
        analyzerMode: 'static',
        reportFilename: '../bundles/client.html'
      }
    }
  }],
  [CleanWebpackPlugin, ["out", '.next']],
  [withSize, {}],
  [withProgressBar, {
    progressBar: {
      profile: true
    }
  }],
  [optimizedImages, {
    // these are the default values so you don't have to provide them if they are good enough for your use-case.
    // but you can overwrite them here with any valid value you want.
    inlineImageLimit: 8192,
    imagesFolder: 'images',
    imagesName: '[name]-[hash].[ext]',
    handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
    optimizeImages: true,
    optimizeImagesInDev: false,
    mozjpeg: {
      quality: 80,
    },
    optipng: {
      optimizationLevel: 3,
    },
    pngquant: false,
    gifsicle: {
      interlaced: true,
      optimizationLevel: 3,
    },
    svgo: {
      // enable/disable svgo plugins here
    },
    webp: {
      preset: 'default',
      quality: 75,
    },
  }],
  [withLessExcludeAntd, {
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[path]__[name]__[local]___[hash:base64:5]",
    },
    lessLoaderOptions: {
      javascriptEnabled: true,
      modifyVars: themeVariables, // make your antd custom effective
      cssModules: true
    }
  }],
  // [withInferno,{}],
],{
    exportPathMap: function () {
    const obj = {}
    getPageFile.forEach((e) => {
      obj['/' + e] = { page: '/' + e }
    })
    return obj;
    },
    webpack(config, options) {
      config.output = { ...config.output, globalObject: 'this',}
      config.module.rules.push({
        loader: 'webpack-ant-icon-loader',
        enforce: 'pre',
        include: [
          require.resolve('@ant-design/icons/lib/dist')
        ]
      })
      return config
    },
})