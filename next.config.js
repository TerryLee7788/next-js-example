const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const path = require('path')

const CONFIG = {
    webpack: (config) => {

        // Fixes npm packages that depend on `fs` module
        config.node = {
            fs: 'empty',
        };

        config.module.rules.push(
            // sass 設置
            {
                test: /\.(s[ac]ss|css)$/,
                use: [
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss'
                        }
                    },
                    'sass-loader'
                ]
            }
        );

        config.resolve.alias = {
            ...config.resolve.alias,
            '@Style': path.join(__dirname, 'style'),
        }
        config.resolve.extensions = ['.js', '.scss', '.css']

        return config;

    },
    // 設置一些其他的設定
    publicRuntimeConfig: {
        staticFolder: '/static'
    },
    // server 的設定
    serverRuntimeConfig: {},
    cssModules: true,
};

module.exports = withCSS(withSass(CONFIG));
