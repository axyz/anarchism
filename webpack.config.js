/* eslint-env node */
const path = require('path');
const webpack = require('webpack');
const ENVIRONMENT = process.env.NODE_ENV || 'production';

const conf = {
    output: {
        filename: 'anarchism.js',
        library: 'anarchism',
        libraryTarget: 'umd',
        path: './dist/'
    },
    devtool: 'cheap-module-source-maps',
    entry: './index',
    externals: {},
    resolve: {
        alias: {},
        modulesDirectories: ['node_modules']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: path.join(__dirname, 'node_modules'),
                loader: 'babel'
            },
            {
                test: /\.css$/,
                include: path.join(__dirname, 'node_modules'),
                loader: 'style!css'
            },
            {
                test: /\.svg$/,
                loaders: ['raw']
            }
        ],
        preLoaders: [{
            test: /\.jsx?$/,
            exclude: path.join(__dirname, 'node_modules'),
            loader: 'eslint'
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        })
    ]
};

if (ENVIRONMENT === 'production') {
    conf.externals['react'] = 'react';
    conf.externals['react-dom'] = 'react-dom';
}

module.exports = conf;
