const prettierPluginTailwind = await import("prettier-plugin-tailwindcss");

module.exports = {
  plugins: [prettierPluginTailwind.default],
  singleQuote: true,
};
