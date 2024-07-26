module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
  ],
  env: {
    i18n: {
      plugins: [
        [
          'formatjs',
        ],
      ],
    },
    test: {
      presets: [
        '@babel/preset-env',
      ],
    },
  },
};
