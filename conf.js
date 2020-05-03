
const path = require('path');
require("babel-register")({
    presets: ["es2015"]
});

exports.config = {
    directConnect: true,
    specs: "./1Test.js",
    slow: 30000,
    timeout: 300000,
    verbose: true,

};