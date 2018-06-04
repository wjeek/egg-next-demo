'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1527990157034_4851';

  // add your config here
  config.middleware = [];

  config.next = {
    dev: process.env.NODE_ENV !== 'production',
  };

  return config;
};
