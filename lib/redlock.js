
'use strict';

const assert = require('assert');
const _ = require('lodash');
const Redis = require('ioredis');
const Redlock = require('redlock');
let count = 0;

module.exports = app => {
  app.addSingleton('redlock', async (config, app) => {
    assert(config.redis, `[egg-redlock] 'redis: ${config.redis}' are required on config`);
    const clients = [];
    if (_.isArray(config.redis)) {
      _.forEach(config.redis, (v) => {
        clients.push(new Redis(v));
      })
    } else if (_.isObject(config.redis)) {
      clients.push(new Redis(config.redis));
    } else {
      clients.push(new Redis());
    }
    const redlock = new Redlock(
      clients,
      config.options
    );

    app.beforeStart(() => {
      const index = count++;
      app.coreLogger.info(`[egg-redlock] instance[${index}] status OK`);
    });
    return redlock;
  });
};
