module.exports = strapi => {
  return {
    initialize() {
      strapi.app.use(async (ctx, next) => {
        await next();
        const { url, method, body } = ctx.request
        if (['POST', 'PUT', 'PATCH', 'DELETE'].includes(method)) {
          strapi.log.debug(method, url, body)
        }
      });
    },
  };
};
