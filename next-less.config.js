const cssLoaderConfig = require('@zeit/next-css/css-loader-config')

module.exports = (nextConfig = {}) => {
    return Object.assign({}, nextConfig, {
        webpack(config, options) {
            if (!options.defaultLoaders) {
                throw new Error(
                    'This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade'
                )
            }
            const { dev, isServer } = options
            const {
                cssModules,
                cssLoaderOptions,
                postcssLoaderOptions,
                lessLoaderOptions = {}
            } = nextConfig
            if (isServer) {
                const antStyles = /antd\/.*?\/style.*?/
                const origExternals = [...config.externals]
                config.externals = [
                    (context, request, callback) => {
                        if (request.match(antStyles)) return callback()
                        if (typeof origExternals[0] === 'function') {
                            origExternals[0](context, request, callback)
                        } else {
                            callback()
                        }
                    },
                    ...(typeof origExternals[0] === 'function' ? [] : origExternals),
                ]

                config.module.rules.unshift({
                    test: antStyles,
                    use: 'null-loader',
                })
            }
            options.defaultLoaders.less = cssLoaderConfig(config, {
                extensions: ['less'],
                cssModules,
                cssLoaderOptions,
                postcssLoaderOptions,
                dev,
                isServer,
                loaders: [
                    {
                        loader: 'less-loader',
                        options: lessLoaderOptions
                    }
                ]
            })

            config.module.rules.push({
                test: /\.less$/,
                exclude: /node_modules/,
                use: options.defaultLoaders.less
            })

            // 我们禁用了antd的cssModules
            config.module.rules.push({
                test: /\.less$/,
                include: /node_modules/,
                use: cssLoaderConfig(config, {
                    extensions: ['less'],
                    cssModules: false,
                    cssLoaderOptions: {},
                    dev,
                    isServer,
                    loaders: [
                        {
                            loader: 'less-loader',
                            options: lessLoaderOptions
                        }
                    ]
                })
            })

            if (typeof nextConfig.webpack === 'function') {
                return nextConfig.webpack(config, options)
            }

            return config
        }
    })
}