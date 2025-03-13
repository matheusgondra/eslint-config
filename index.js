import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default [
  {
    languageOptions: {
      globals: globals.node,
      parser: "@typescript-eslint/parser",
    },
    rules: {
      "prettier/prettier": [
        "error",
        {
          semi: true,
          singleQuote: false,
          tabWidth: 2,
          useTabs: true,
          trailingComma: "none",
          arrowParens: "always",
          printWidth: 120,
        },
      ],
    },
    files: ["src/**/*.{js,mjs,ts,tsx}", "test/**/*.{js,mjs,ts,tsx}"],
    ignores: ["node_modules", "dist"],
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  eslintPluginPrettier,
];
