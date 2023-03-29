import type { StorybookConfig } from '@storybook/react-webpack5';
import { Configuration } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  webpackFinal: async (config: Configuration, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.
    // Check docs here: https://storybook.js.org/docs/react/configure/webpack#extending-storybooks-webpack-config

    // Replace mjs|tsx?|jsx? loader
    // Add Linaria loader after babel-loader
    if (config?.module?.rules) {
      const isMatchTsx = (rule: any) =>
        rule.test.toString() === '/\\.(mjs|tsx?|jsx?)$/';
      const tsxKey = config?.module?.rules?.findIndex(isMatchTsx);
      if (tsxKey !== undefined && config?.module?.rules) {
        config.module.rules[tsxKey] = {
          test: /\.(mjs|tsx?|jsx?)$/,
          use: [
            {
              loader: require.resolve('babel-loader'),
            },
            {
              loader: require.resolve('@linaria/webpack-loader'),
              options: {
                sourceMap: true,
              },
            },
          ],
        };
      }

      // Replace CSS loader
      const isMatchCss = (rule: any) => rule.test.toString() === '/\\.css$/';
      const cssKey = config?.module?.rules?.findIndex(isMatchCss);
      if (cssKey !== undefined) {
        config.module.rules[cssKey] = {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
              options: { sourceMap: true },
            },
          ],
        };
      }
    }

    config?.plugins?.push(
      new MiniCssExtractPlugin({
        filename: 'styles.css',
      })
    );
    return config;
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
