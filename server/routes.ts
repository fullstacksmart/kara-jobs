import Router from '@koa/router';

const router = new Router();

router.get('/', () => {
  console.log('get');
});

console.log('no');

export default router;
