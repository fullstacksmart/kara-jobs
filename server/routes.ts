import Router from '@koa/router';

import * as talentController from './controllers/talents';

const router = new Router();

// TODO: add routes
router.get('/talents', talentController.getAll);

router.get('/talents/:id', talentController.getOne);

router.get('/talents/:id/:type', talentController.getOne);

router.post('/talents/:id', talentController.addOne);

router.post('/talents/:id/:type', talentController.addOne);

router.put('/talents/:id', talentController.updateOne);

router.put('/talents/:id/:type', talentController.updateOne);

router.delete('/talents/:id', talentController.deleteOne);

router.delete('/talents/:id/:type', talentController.deleteOne);

router.delete(
  '/talents/:id/:type/:typeId',
  talentController.deleteOne,
);

export default router;
