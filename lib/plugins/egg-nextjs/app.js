module.exports = app => {
  app.config.middleware.unshift('nextFilter');
  console.log(app.next);
  app.next.prepare();
};
