module.exports = {
  stories: [
    // Paths to the story files
    "../pages/*.stories.mdx",
    "../pages/*.stories.tsx",
    "../components/*.stories.tsx"
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "storybook-addon-themes"],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        "css-loader",
        "postcss-loader",
        // Add the sass loader to process scss files
        "sass-loader",
      ],
    })

    return config
  },
};
