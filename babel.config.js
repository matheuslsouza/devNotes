module.exports = function (api) {
  // api.cache(true) enables caching of the Babel configuration for better performance.
  api.cache(true);

  // The configuration object is returned.
  return {
    presets: ["babel-preset-expo"],
  };
};
