module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "commonjs",
      globals: {
        module: "readonly",
        require: "readonly",
        process: "readonly",
        __dirname: "readonly",
      },
    },
  },
];
