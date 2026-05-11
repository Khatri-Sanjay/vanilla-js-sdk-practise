const path = require('path');

module.exports = {
    entry: './greeting2.js', // Your entry file (the one that contains the Greeting class)
    output: {
        filename: 'greeting2.bundle.js', // The output bundle
        path: path.resolve(__dirname, 'dist'), // Output directory
        library: {
            name: 'Greeting',  // Exposes the class under the global `Greeting` variable
            type: 'umd',       // Ensures compatibility with AMD, CommonJS, and global environments
        },
        globalObject: 'this',  // Ensures the global object is correctly referenced in browsers
    },
    mode: 'development', // Set to 'development' for easier debugging
    devtool: 'source-map', // or 'eval-source-map' for better debugging
};
