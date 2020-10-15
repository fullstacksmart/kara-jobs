import Router from '@koa/router';

import * as talentController from './controllers/talents';

const router = new Router();

// TODO: add routes
router.get('/', talentController.getAll);

export default router;
