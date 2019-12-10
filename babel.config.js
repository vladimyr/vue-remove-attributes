module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/typescript'
  ],
  comments: false,
  plugins: ['add-module-exports'],
};
