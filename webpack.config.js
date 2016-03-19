module.exports = {
    entry: "./src/js/app.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test:/\.js$/, loader: "babel-loader",
              query: { presets: ['react', 'es2015']}
            }
        ]
    }
};