const prettier = require("eslint-plugin-prettier");
const globals = require("globals");

module.exports = [
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    ignores: ["**/node_modules/**", "**/dist/**"],
    plugins: {
      prettier: prettier,
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
      },
    },
    rules: {
      // Indique que les points-virgules (;) doivent toujours être présents
      semi: ["error", "always"],
      // exemple afin de simuler une erreur
      // "quotes": ["error", "single"],
      // Ignorer les console.log dans le fichier JS afin de pouvoir l'utiliser sans provoquer d'erreur
      "no-console": "off",
    },
  },
];
