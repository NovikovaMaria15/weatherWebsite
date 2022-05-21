module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
  },
  globals: {
    __dirname: true,
    process: true,
    window: true,
    document: true,
    localStorage: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: ".",
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      typescript: {},
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    },
    "html/xml-extensions": [
      ".html"
    ],
    "html/indent": "+2",
    "html/report-bad-indent": "error",
  },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "prettier",
    "eslint:recommended",
    "eslint-config-prettier",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:unicorn/recommended",
    "plugin:sonarjs/recommended",
    "plugin:optimize-regex/recommended",
  ],
  plugins: [
    "babel",
    "import",
    "jsx-a11y",
    "react",
    "react-hooks",
    "@typescript-eslint",
    "unicorn",
    "sonarjs",
    "prettier",
    "optimize-regex",
    "html",
    "no-use-extend-native",
  ],
  rules: {
    "prettier/prettier": ["error", { "singleQuote": true }],
    "react/prop-types": 0,
    "react/destructuring-assignment": 0,
    "react/static-property-placement": 0,
    "react/jsx-props-no-spreading": 0,
    "import/prefer-default-export": 0,
    "@typescript-eslint/no-unsafe-assignment": 0,
    "@typescript-eslint/no-use-before-define": 0,
    "@typescript-eslint/interface-name-prefix": 0,
    "@typescript-eslint/no-empty-function": 0,
    "@typescript-eslint/unbound-method": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "no-use-before-define": 0,
    "react/jsx-filename-extension": [
      0,
      { extensions: [
          ".jsx",
          ".tsx"
        ]
      }
    ],
    "@typescript-eslint/explicit-module-boundary-types": [
      0,
      { extensions: [
          ".js",
          ".jsx"
        ]
      }
    ],
    "@typescript-eslint/no-unsafe-member-access": [
      0,
      { extensions: [
          ".js",
          ".jsx"
        ]
      }
    ],
    "@typescript-eslint/no-unsafe-call": [
      0,
      { extensions: [
          ".js",
          ".jsx"
        ]
      }
    ],
    "@typescript-eslint/restrict-plus-operands": [
      0,
      { extensions: [
          ".js",
          ".jsx"
        ]
      }
    ],
    "@typescript-eslint/no-unsafe-return": [
      0,
      { extensions: [
          ".js",
          ".jsx"
        ]
      }
    ],
    "jsx-a11y/label-has-associated-control": 0,
    "no-restricted-syntax": 0,
    "unicorn/no-null": 0,
    "jsx-a11y/anchor-is-valid": 1,
    "react/require-default-props": [
      1,
      { ignoreFunctionalComponents: true
      }
    ],
    "unicorn/filename-case": [
      1,
      { cases: { camelCase: true, pascalCase: true
        }, ignore: [
          "URL",
          "API"
        ]
      },
    ],
    "unicorn/no-new-array": 0,
    "no-plusplus": [
      2,
      { allowForLoopAfterthoughts: true
      }
    ],
    "sonarjs/prefer-immediate-return": 0,
    "import/no-extraneous-dependencies": [
      2,
      { devDependencies: true
      }
    ],
    "import/extensions": 0,
    "@typescript-eslint/no-unsafe-assignment": 0,
    "@typescript-eslint/no-unsafe-member-access": 0,
    "@typescript-eslint/no-unsafe-call": 0,
    "@typescript-eslint/no-explicit-any": 1, // позднее заменить на 0
    "@typescript-eslint/no-unsafe-return": 0,
    "@typescript-eslint/restrict-template-expressions": 0,
    "no-underscore-dangle": 0,
    "unicorn/no-array-for-each": 0,
    "unicorn/prevent-abbreviations": 0,
    "react/function-component-definition": 0,
    "import/no-unresolved": [
      2
    ],
    "consistent-return": 0,
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 1,
    "no-console": 1,
  },
};

 /*
 "off" or 0 - turn the rule off
 "warn" or 1 - turn the rule on as a warning (doesn"t affect exit code)
 "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)
 */
