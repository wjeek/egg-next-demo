const pkg = require('./package');

const { description } = pkg;

const config = {
  development: {
    title: description,
    serverUrl: 'https://easy-mock.com/mock/5b5808b436d0751a61c15291/next-api/development',
  },
  mock: {
    title: description,
    serverUrl: 'https://easy-mock.com/mock/5b5808b436d0751a61c15291/next-api/mock',
  },
  test: {
    title: description,
    serverUrl: 'https://easy-mock.com/mock/5b5808b436d0751a61c15291/next-api/test',
  },
  production: {
    title: description,
    serverUrl: 'https://easy-mock.com/mock/5b5808b436d0751a61c15291/next-api/production',
  },
  default: {
    title: description,
    serverUrl: 'https://easy-mock.com/mock/5b5808b436d0751a61c15291/next-api',
  },
};

export const get = env => config[env] || config.default;
