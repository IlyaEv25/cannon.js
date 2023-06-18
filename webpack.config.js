let path = require("path");

module.exports = [
  {
    devtool: "source-map",
    mode: "production",

    entry: {
      model: {
        import: "./src/Cannon.js",
        filename: "model.js",
        library: { type: "module" },
      },
    },

    output: {
      path: path.resolve("./build/"),
    },

    experiments: {
      outputModule: true,
    },
  },
];
