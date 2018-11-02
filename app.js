'use strict';
const redlock = require('./lib/redlock');

module.exports = app => {
  if (app.config.redlock.app) redlock(app);
};
