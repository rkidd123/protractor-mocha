//https://eslint.org/docs/user-guide/configuring
module.exports = {
    "env": {
        "mocha": true,
        "node": true,
        "es6": true,
    },
    "ecmaFeatures": {
        // env=es6 doesn't include modules, which we are using
        "modules": true
    },
    "extends": "eslint:recommended",
    "globals":
    {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parseOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        // enable additional rules
        "indent": ["error", 4],
        "quotes": ["error", "double"],
        "semi": ["error", "always"],
        "no-cond-assing": ["error", "always"],
        "no-extra-parens": ERROR,

        // disable rules from base configurations
        "no-console": "error",
        "no-inline-comments": "warn"
    }
};