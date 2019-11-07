const path = require('path');
module.exports = {
  env: {
    "es6": true,
    "browser": true,
    "jest": true
  },
  parser: "@typescript-eslint/parser",
  extends:  [
    "plugin:react/recommended",  // Uses the recommended rules from @eslint-plugin-react
    "prettier/@typescript-eslint",
    "plugin:@typescript-eslint/recommended"  // Uses the recommended rules from @typescript-eslint/eslint-plugin
  ],
  parserOptions: {
    "project": path.resolve(__dirname, './tsconfig.json'),
    "tsconfigRootDir": __dirname,
    "ecmaVersion": 2019, // Allows for the parsing of modern ECMAScript features
    "sourceType": 'module', // Allows for the use of imports
    "ecmaFeatures": {
        "jsx": true // Allows for the parsing of JSX
    }
  },
  plugins: ["@typescript-eslint", "react", "react-hooks"],
  globals: {
    "document": true,
    "process": true,
    "window": true,
    "console": true
  },
  rules: {
    "max-len": [1, 80, 2, { "ignoreComments": true }],
    "semi": ["error", "always"],
    "quotes": ["error", "single"],
    "no-console": ["off"],
    "react/prop-types": ["off"],
    "@typescript-eslint/no-explicit-any": ["off"]
  },
  settings:  {
    "react":  {
      "pragma": "React",
      "version":  "detect"  // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  }
}
