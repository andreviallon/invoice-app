module.exports = {
  stories: [
    "../stories/*.stories.tsx"
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "storybook-addon-themes"],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        "css-loader",
        "postcss-loader",
        "sass-loader"
      ]
    })

    return config
  },
};
