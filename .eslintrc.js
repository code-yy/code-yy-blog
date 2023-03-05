module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import"],
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  rules: {
    "import/order": [
      "warn",
      { groups: ["builtin", "external", "internal", "parent", "sibling", "index", "object", "type"] },
    ],
    "@next/next/no-img-element": "off",
    "no-console": ["error", { allow: ["error", "warn"] }],
    "react/prop-types": "off",
    "react/no-array-index-key": "warn",
    "react-hooks/rules-of-hooks": "error",

    /**
     * @url https://github.com/facebook/react/issues/18235#issuecomment-898636301
     * useCallbackなどの以前関係を保存時に自動保管
     */
    "react-hooks/exhaustive-deps": ["warn", { enableDangerousAutofixThisMayCauseInfiniteLoops: true }],
  },
};
