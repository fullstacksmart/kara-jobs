import Router from '@koa/router';

const router = new Router();

// TODO: add routes
router.get('/', (ctx) => {
  ctx.body = 'getting there';
});

export default router;
