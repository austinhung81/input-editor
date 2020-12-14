module.exports = function (api) {
  api.cache(false);
  const presets = [
    ['@babel/preset-typescript'],
    [
        '@babel/preset-env',
        {
          'targets': {
            'ie': '11'
          }
        }
    ]
  ];
  const plugins = [
    ['@babel/plugin-proposal-decorators', { 'decoratorsBeforeExport': true }],
    ['@babel/plugin-proposal-class-properties'],
  ];
  return {
      presets,
      plugins
  };
};