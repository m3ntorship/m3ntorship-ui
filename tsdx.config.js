/* eslint-disable @typescript-eslint/no-var-requires */
const postcss = require('rollup-plugin-postcss');

module.exports = {
  rollup(config) {
    config.plugins.push(
      postcss({
        plugins: [],
        modules: true,
        inject: false,
        extract: true,
      })
    );
    return config;
  },
};
