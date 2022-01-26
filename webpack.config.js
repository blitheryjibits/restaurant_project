
const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        index: './src/header.js',
        home: './src/create_body.js',
    },
    output: {
        filename: '[name].main.js',
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
