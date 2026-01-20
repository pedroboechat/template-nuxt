// @ts-check
import vue from "eslint-plugin-vue";
import typescript from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";

export default [
  // Ignore generated Nuxt files
  {
    ignores: [".nuxt/**"],
  },
  // Vue configs (already an array)
  ...vue.configs["flat/recommended"],
  // TypeScript config for files that are in the project
  {
    files: ["**/*.ts"],
    ignores: [".nuxt/**", "**/*.d.ts", "app/plugins/*.ts", "nuxt.config.ts"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "@typescript-eslint": typescript,
    },
    rules: {
      ...typescript.configs.recommended.rules,
    },
  },
  // TypeScript config for plugin files (no project requirement)
  {
    files: ["app/plugins/*.ts", "nuxt.config.ts"],
    languageOptions: {
      parser: typescriptParser,
    },
    plugins: {
      "@typescript-eslint": typescript,
    },
    rules: {
      ...typescript.configs.recommended.rules,
    },
  },
  // Override Vue rules
  {
    files: ["**/*.vue"],
    rules: {
      "vue/multi-word-component-names": [
        "error",
        {
          ignores: ["index", "default"],
        },
      ],
      "vue/max-attributes-per-line": [
        "warn",
        {
          singleline: 3,
          multiline: 1,
        },
      ],
    },
  },
];
