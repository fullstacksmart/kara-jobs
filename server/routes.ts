import Router from '@koa/router';

import * as talentController from './controllers/talents';

const router = new Router();

// TODO: add routes
router.get('/talents', talentController.getAll);

router.get('/talents/:id', talentController.getOne);

router.get('/talents/:id/:type', talentController.getOne);

export default router;
