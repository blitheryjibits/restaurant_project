
const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        index: './src/header.js',
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'), 
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
}
