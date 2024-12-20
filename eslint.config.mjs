import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-unsafe-function-type": "off",
      "react/no-unescaped-entities": "off", // Désactiver la règle des entités non échappées
      "@next/next/no-page-custom-font": "off", // Désactiver la règle concernant les polices personnalisées
      "@typescript-eslint/no-explicit-any": "error", // Activer la règle pour interdire 'any'
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_", // Ignorer les arguments commençant par "_"
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_", // Ignorer les erreurs capturées commençant par "_"
          destructuredArrayIgnorePattern: "^_", // Ignorer les tableaux destructurés commençant par "_"
          varsIgnorePattern: "^_", // Ignorer les variables commençant par "_"
          ignoreRestSiblings: true,
        },
      ],
    },
  },
];

export default eslintConfig;

