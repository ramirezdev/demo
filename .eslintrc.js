module.exports = {
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "modules": true,
            "spread" : true,
            "restParams" : true,
            "jsx": true,
            "experimentalObjectRestSpread": true
        },
    },
    "rules": {
        "indent": [
            2,
            "tab"
        ],
        "quotes": [
            2,
            "single"
        ],
        "linebreak-style": [
            2,
            "unix"
        ],
        "semi": [
            2,
            "always"
        ]
    },
    "env": {
        "es6": true,
        "browser": true
    },
    
    "extends": "eslint:recommended",
   
    "plugins": [
        "react"
    ]
};
