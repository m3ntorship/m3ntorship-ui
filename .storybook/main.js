module.exports = {
  stories: ['../src/**/*.stories.@(ts|tsx|js|jsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-css-modules-preset',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async config => {
    // Default rule for images /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/
    const fileLoaderRule = config.module.rules.find(
      rule => rule.test && rule.test.test('.svg')
    );
    fileLoaderRule.exclude = /\.svg$/;

    config.module.rules.push({
      test: /\.svg$/,
      enforce: 'pre',
      loader: require.resolve('@svgr/webpack'),
    });

    return config;
  },
};
