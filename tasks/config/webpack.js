var path = require("path");
var project_dir = __dirname + '/../../';
var webpack = require("webpack");

var prod = process.env.NODE_ENV && process.env.NODE_ENV === 'production';

var pluggins = [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin()
];

if (prod)
    pluggins.push(new webpack.optimize.UglifyJsPlugin({
        mangle: true,
        sourcemap: false,
        minimize: true,
    }));

module.exports = function(grunt) {
    grunt.config.set('webpack', {
        dev: {
            context: 'assets/js/app',
            entry: './app.jsx',
            module: {
                loaders: [{
                    test: /\.jsx$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['react', 'es2015'],
                        plugins: [],
                    }
                },
                { test: /\.css$/, loader: "style!css" },
                { test: /\.(png|jpg|jpeg|gif|woff)$/, loader: 'url?limit=8192' },
                { test: /\.(otf|eot|ttf)$/, loader: "file?prefix=font/" },
                { test: /\.svg$/, loader: "file" }
              ]
            },
            resolve: {
                root: [
                    path.resolve(project_dir)
                ],
                extensions: ['', '.js', '.jsx', '.json']
            },
            output: {
                path: ".tmp/public/js",
                filename: prod ? "app.min.js" : "app.js"
            },
            plugins: pluggins,

            hot: false,
            inline: false,
            keepalive: false,
            watch: false,
            progress: false,

            stats: {
                colors: true,
                hash: false,
                version: false,
                timings: true,
                assets: true,
                chunks: true,
                modules: true,
                reasons: false,
                children: false,
                source: false,
                errors: true,
                errorDetails: true,
                warnings: false,
                publicPath: false
            }
        }
    });

    grunt.loadNpmTasks('grunt-webpack');
};
