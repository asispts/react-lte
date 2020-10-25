const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@demo': 'demo',
  })(config);

  return config;
};
