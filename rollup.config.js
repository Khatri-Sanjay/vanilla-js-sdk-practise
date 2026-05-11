// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';

export default {
    input: 'greeting-sdk.js',
    output: {
        file: 'dist/greeting-sdk-rollup.bundle.js', // Output file path
        format: 'iife', // Immediately Invoked Function Expression
        name: 'GreetingSDK', // Global variable name
    },
    plugins: [
        resolve(), // Use the node-resolve plugin
    ],
};