module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["xo", "prettier"],
  overrides: [
    {
      extends: ["xo-typescript", "prettier"],
      files: ["*.ts", "*.tsx"],
      rules: {
        "new-cap": "off",
        "@typescript-eslint/consistent-type-definitions": [
          "error",
          "interface",
        ],
        "no-implicit-coercion": "off",
      },
    },
    {
      files: ["src/**/models/**/*.ts"],
      rules: {
        "@typescript-eslint/naming-convention": "off",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {},
};
