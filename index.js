moduel.exports = {
  extends: [
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:vue/recommended",
  ],
  rules: {
    // "no-console": "off",

    // ** General rules

    // Enforce import order
    "import/order": "error",

    // Imports should com first
    "import/first": "error",

    // Other import rules
    "import/no-mutable-exports": "error",

    // Allow unresolved imports
    "import/no-unresolved": "off",

    // Allow async-await
    "generator-star-spacing": "off",

    // Prefer const over let
    "prefer-const": [
      "error",
      {
        destructuring: "any",
        ignoreReadBeforeAssign: false,
      },
    ],

    // No single if in an "else" block
    "no-lonely-if": "error",

    // Force curly braces for control flow
    // including if blocks with a single statement
    curly: ["error", "all"],

    // No async functions without await
    "require-await": "error",

    // Force dot notation when possible
    "dot-notation": "error",

    "no-var": "error",

    // Force object shorthand where possible
    "object-shorthand": "error",

    // No useless destructuring/importing/exporting renames
    "no-useless-rename": "error",

    // ** Vue rules

    // Disable template errors regarding invalid end tags
    "vue/no-parsing-error": [
      "error",
      {
        "x-invalid-end-tag": false,
      },
    ],

    // Maximum 5 attributes per line instead of one
    "vue/max-attributes-per-line": [
      "error",
      {
        signleline: 5,
      },
    ],

    // ** ESLint Vue Plugin rules

    "vue/html-indent": ["off"],
    "vue/order-in-components": [
      "error",
      {
        order: [
          "el",
          "name",
          "parent",
          "functional",
          ["delimiters", "comments"],
          ["components", "directives", "filters"],
          "extends",
          "mixins",
          "inheritAttrs",
          "model",
          ["props", "propsData"],
          "fetch",
          "asyncData",
          "data",
          "computed",
          "watch",
          "methods",
          "LIFECYCLE_HOOKS",
          "head",
          ["template", "render"],
          "renderError",
        ],
      },
    ],

    "vue/html-self-closing": ["off"],

    // https://eslint.vuejs.org/rules/attributes-order.html
    "vue/attributes-order": [
      "error",
      {
        order: [
          "DEFINITION",
          "LIST_RENDERING",
          "CONDITIONALS",
          "RENDER_MODIFIERS",
          "GLOBAL",
          "UNIQUE",
          "TWO_WAY_BINDING",
          "OTHER-DIRECTIVES",
          "OTHER_ATTR",
          "EVENTS",
          "CONTENT",
        ],
      },
    ],
    "vue/require-default-prop": ["off"],
  },
};
