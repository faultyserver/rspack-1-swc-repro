const { HtmlRspackPlugin } = require('@rspack/core');
const path = require('node:path');

module.exports = {
  experiments: {
    css: true
  },
  entry: {
    main: './src/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.tsx', '.jsx', '.ts', '.js', '.json'],
    alias: {
      '@dep': path.resolve('./separate-package')
    }
  },
  module: {
    parser: {
      'css/module': {
        namedExports: false,
      },
    },
    generator: {
      'css/module': {
        localIdentName: '[name]__[local]__[hash:6]',
      },
    },
    rules: [
      {
        test: /\.messages\.js/,
        use: '@discord/rspack-intl-loader'
      },
      {
        test: /\.tsx$/,
        use: {
          loader: 'builtin:swc-loader',
          options: {
            jsc: {
              parser: {
                syntax: 'typescript',
                tsx: true,
              },
              experimental: {
                // Just using a string here causes rspack/swc to error out immediately
                // with "failed to get node_modules path", seemingly because it doesn't
                // correctly give context for how the module should be resolved. Using
                // `require.resolve` directly creates an absolute path for rspack to load
                // directly instead.
                //
                // This plugin is responsible for obfuscating and minimizing intl message
                // _usages_ across every source file, to match the compiled _definitions_
                // that are handled by rspack-intl-loader in a separate rule.
                plugins: [
                  [
                    require.resolve('@discord/swc-intl-message-transformer'),
                    {},
                  ],
                ],
              }
            },
          },
        },
        type: 'javascript/auto',
      },
    ],
  },
  plugins: [new HtmlRspackPlugin()]
};
