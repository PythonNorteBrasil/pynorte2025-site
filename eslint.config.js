import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";
import eslintPluginNext from "@next/eslint-plugin-next";

export default tseslint.config(
  {
    ignores: [
      "dist",
      ".next",
    ]
  },
  {
    plugins: {
      '@next/next': eslintPluginNext
    },
    rules: {
      ...eslintPluginNext.configs.recommended.rules,
      "@next/next/no-img-element": "off",
    }
  },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-empty-object-type": "off",
    },
  }
);
