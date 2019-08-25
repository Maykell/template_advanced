module.exports = api => {
  api.cache(true);

  return {
    env: {
      production: {
        plugins: ['transform-remove-console'],
      },
    },
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'babel-plugin-root-import',
        {
          rootPathSuffix: 'src',
        },
      ],
    ],
  };
};
