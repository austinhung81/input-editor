module.exports = {
  presets: [
    ['@babel/preset-typescript'],
    [
        '@babel/preset-env',
        {
          'debug': true,
          'targets': {
            'ie': '11'
          }
        }
    ]
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', { 'decoratorsBeforeExport': true }],
    ['@babel/plugin-proposal-class-properties'],
  ],
};