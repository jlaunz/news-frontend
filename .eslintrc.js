module.exports = {
  extends: [
    "airbnb",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  settings: {
    "import/resolver": {
      node: {
        paths: ["./"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
  },
  ignorePatterns: ["**/*.scss", "**/*.config.js", "**/*.test.*", "**/*.mock.*"],
  plugins: [
    "@typescript-eslint/eslint-plugin",
    "jsx-a11y",
    "react-hooks",
  ],
  rules: {
    "max-len": [
      "warn",
      {
        code: 120,
        tabWidth: 2,
        ignoreTrailingComments: true,
        ignoreUrls: true,
      },
    ],
    "react/prop-types": 0,
    "object-curly-spacing": ["warn", "always"],
    "no-console": [1, { allow: ["warn", "error"] }],
    quotes: [2, "double", { avoidEscape: true }],
    "jsx-quotes": [2, "prefer-double"],
    "import/extensions": [0, "never"],
    "import/prefer-default-export": [0, "never"],
    "no-use-before-define": [0],
    "react/jsx-props-no-spreading": [0, "never"],
    "react/no-unused-prop-types": ["warn"],
    "react/require-default-props": [0, "never"],
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "react/button-has-type": [0],
    "@typescript-eslint/explicit-module-boundary-types": [0, "never"],
    "@typescript-eslint/no-use-before-define": [1],
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        multiline: {
          delimiter: "semi",
          requireLast: true,
        },
        singleline: {
          delimiter: "semi",
          requireLast: false,
        },
        multilineDetection: "brackets",
      },
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": [
      "warn",
    ],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": ["error"],
    "jsx-a11y/no-onchange": "off", // deprecated
  },
};
