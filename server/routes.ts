import Router from '@koa/router';

import * as talentController from './controllers/talents';
import * as companyController from './controllers/companies';

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

router.get(
  '/companies/employee/:employeeId/:type',
  companyController.getOneFromEmployee,
);

router.post('/companies/:id', (ctx) => companyController.addOne(ctx));

router.post('/companies/:id/:type', (ctx) =>
  companyController.addOne(ctx),
);

router.post('/companies/empoyee/:employeeId/:type', (ctx) =>
  companyController.addOneFromEmployee(ctx),
);

router.put('/companies/:id', companyController.updateOne);

router.put('/companies/:id/:type', companyController.updateOne);

router.delete('/companies/:id', companyController.deleteOne);

router.delete('/companies/:id/:type', companyController.deleteOne);

export default router;
