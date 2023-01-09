const createExpoWebpackConfigAsync = require('./webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync({ ...env, mode: 'production' }, argv);

  // Process any JS outside of the app with Babel.
  // Unlike the application JS, we only compile the standard ES features.
  config.module.rules.push({
    test: /\.(js|mjs)$/,
    exclude: /@babel(?:\/|\\{1,2})runtime/,
    loader: require.resolve('babel-loader'),
    options: {
      babelrc: false,
      configFile: false,
      compact: false,
      presets: [[require.resolve('babel-preset-react-app/dependencies'), { helpers: true }]],
      cacheDirectory: true,
      // See #6846 for context on why cacheCompression is disabled
      cacheCompression: false,

      // Babel sourcemaps are needed for debugging into node_modules
      // code.  Without the options below, debuggers like VSCode
      // show incorrect code and set breakpoints on the wrong lines.
      sourceMaps: true,
      inputSourceMap: true
    }
  });

  config.module.rules.push({
    test: /\.mjs$/,
    include: /node_modules/,
    type: 'javascript/auto'
  });

  return config;
};
