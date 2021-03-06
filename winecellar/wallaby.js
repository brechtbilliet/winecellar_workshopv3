const wallabyWebpack = require('wallaby-webpack');

const webpackPostprocessor = wallabyWebpack({
  entryPatterns: [
    'src/wallaby-bundle.js',
    'src/**/*.spec.js'
  ],

  module: {
    loaders: [
      {test: /\.css$/, loader: 'raw-loader'},
      {test: /\.html$/, loader: 'raw-loader'},
      {test: /\.js$/, loader: 'angular2-template-loader', exclude: /node_modules/},
      {test: /\.json$/, loader: 'json-loader'},
      {
        test: /\.svg$/,
        loader: 'url-loader?limit=10000'
      },
      {test: /\.less$/, loaders: ['raw-loader', 'less-loader']},
      {test: /\.(jpg|png)$/, loader: 'url-loader?limit=128000'}
    ]
  }
});

const compilerOptions = require('./tsconfig.json').compilerOptions;

module.exports = function (wallaby) {

  return {
    files: [
      {pattern: 'src/**/*.ts', load: false},
      {pattern: 'src/**/*.d.ts', ignore: true},
      {pattern: 'src/**/*.css', load: false},
      {pattern: 'src/**/*.less', load: false},
      {pattern: 'src/**/*.html', load: false},
      {pattern: 'src/**/*.spec.ts', ignore: true}
    ],
    tests: [
      {pattern: 'src/**/*.spec.ts', load: false}

    ],
    testFramework: 'jasmine',
    compilers: {
      '**/*.ts': wallaby.compilers.typeScript(compilerOptions)
    },
    postprocessor: webpackPostprocessor,
    setup: function () {
      window.__moduleBundler.loadTests();
    },
    debug: true
  };
};
