module.exports = {
  presets: [
    ['@babel/preset-env', {
      // Preserving modules (modules: false) is required for webpack tree-shaking.
      modules: false,
    }],
    [
      '@babel/preset-react', {
        runtime: 'automatic',
        // Per Babel docs, set both of these to true "if targeting modern browsers".
        // All our target browsers support {...spread} and Object.assign() etc.
        useSpread: true,
        useBuiltIns: true,
      },
    ],
  ],
  plugins: [
    [
      'transform-imports',
      {
        '@fortawesome/free-brands-svg-icons': {
          transform: '@fortawesome/free-brands-svg-icons/${member}',
          skipDefaultConversion: true,
        },
        '@fortawesome/free-regular-svg-icons': {
          transform: '@fortawesome/free-regular-svg-icons/${member}',
          skipDefaultConversion: true,
        },
        '@fortawesome/free-solid-svg-icons': {
          transform: '@fortawesome/free-solid-svg-icons/${member}',
          skipDefaultConversion: true,
        },
      },
    ],
  ],
  env: {
    i18n: {
      plugins: [
        [
          'formatjs',
        ],
      ],
    },
  },
};
