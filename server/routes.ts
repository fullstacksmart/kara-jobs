import Router from '@koa/router';

import * as talentController from './controllers/talents';
import * as companyController from './controllers/companies';
import * as userController from './controllers/users';

const router = new Router();

// talents
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

// companies
router.get('/companies', companyController.getAll);

router.get('/companies/:id', (ctx) => companyController.getOne(ctx));

router.get('/companies/:id/:type', (ctx) =>
  companyController.getOne(ctx),
);

router.get('/employees/:employeeId/:type', (ctx) =>
  companyController.getOneFromEmployee(ctx),
);

router.post('/companies', (ctx) => companyController.addOne(ctx));

router.post('/companies/:id', (ctx) => companyController.addOne(ctx));

router.post('/companies/:id/:type', (ctx) =>
  companyController.addOne(ctx),
);

router.post(
  '/employees/:employeeId/:type',
  companyController.addOneFromEmployee,
);

router.put('/companies/:id', companyController.updateOne);

router.put('/companies/:id/:type', companyController.updateOne);

router.delete('/companies/:id', companyController.deleteOne);

router.delete('/companies/:id/:type', companyController.deleteOne);

// users
router.get('/users/:id', userController.getOne);

export default router;
