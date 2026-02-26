const { getDefaultConfig } = require("expo/metro-config");
const { withUniwindConfig } = require("uniwind/metro");

const config = getDefaultConfig(__dirname);

// Important: withUniwindConfig must be the outermost wrapper in your Metro config. If you use other Metro config wrappers, make sure withUniwindConfig wraps them all.

module.exports = withUniwindConfig(config, {
  cssEntryFile: "./src/global.css",
  dtsFile: "./src/uniwind-types.d.ts",
});
