module.exports = {
    output: {
        filename: 'app.js'
    },
    module: {
        loaders: [
            { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
    }
};
