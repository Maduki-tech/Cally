/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
export default {
  tabWidth: 4,
  printWidth: 120,
  singleQuote: true,
  trailingComma: "all",
  arrowParens: "always",
  semi: true,
  useTabs: false,
  endOfLine: "lf",
  quoteProps: "as-needed",
  bracketSpacing: true,
  jsxBracketSameLine: false,
  htmlWhitespaceSensitivity: "strict",
  vueIndentScriptAndStyle: false,
  plugins: ["prettier-plugin-tailwindcss"],
};
