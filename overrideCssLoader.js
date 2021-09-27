const _ = require('lodash');
const overrideCssLoader = () => (config) => {
  const items = config.module.rules.find((v) => !!v.oneOf).oneOf.filter((v) => _.isRegExp(v.test) && (v.test.test('*.css') || v.test.test('*.less')));
  items.forEach((item) => {
    item.use.forEach((item) => {
      if (item.loader && item.loader.includes('css-loader')) {
        item.options.url = (url) => !url.startsWith('/');
      }
    });
  });

  return config;
};

module.exports = overrideCssLoader;
