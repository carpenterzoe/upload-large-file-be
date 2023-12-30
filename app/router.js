/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.upload.index);
  router.get('/upload_already', controller.upload.upload_already);
  router.get('/upload_chunk', controller.upload.upload_chunk);
  router.get('/upload_merge', controller.upload.upload_merge);
};
