import { Context } from 'koa';
import { CompanyEmployee } from '../models/Company/CompanyEmployee';
import { Company } from '../models/Company/Company';
import { CompanyImage } from '../models/Company/CompanyImage';
import { CompanySearchPreferences } from '../models/Company/CompanySearchPreferences';
import { CompanyRecruitmentPreferences } from '../models/Company/CompanyRecruitmentPreferences';
import { CompanyProfile } from '../models/Company/CompanyProfile';
import { Model } from 'sequelize-typescript';
import { ModelStatic } from 'sequelize/types';

const subTables = {
  employees: CompanyEmployee,
  images: CompanyImage,
  recruitmentPreferences: CompanyRecruitmentPreferences,
  searchPreferences: CompanySearchPreferences,
  profile: CompanyProfile,
};

type SubTableNames = keyof typeof subTables;

const subTableNames: SubTableNames[] = [
  'employees',
  'images',
  'recruitmentPreferences',
  'searchPreferences',
  'profile',
];

export const getAll = async (ctx: Context): Promise<void> => {
  ctx.body = await Company.findAll();
};

export const getOne = async (
  ctx: Context,
  id?: string,
): Promise<void> => {
  id = id || ctx.params.id;
  const type = ctx.params.type || 'all';
  try {
    if (type === 'all') {
      const currentCompany = await Company.findByPk(id, {
        include: subTableNames,
      });
      if (!currentCompany) {
        ctx.status = 404;
        return;
      } else {
        ctx.status = 200;
        ctx.body = currentCompany;
      }
    } else {
      const currentCompany = await Company.findByPk(id);
      if (!currentCompany) {
        ctx.status = 404;
        return;
      }
      if (type === 'basic') {
        ctx.status = 200;
        ctx.body = currentCompany;
      } else if (type === 'signup') {
        const signupPage = currentCompany?.onboardingPage;
        const stages = [1, 4, 5, 6];
        const include = [];
        for (let i = 0; i <= stages.length; i++) {
          if (signupPage && signupPage <= stages[i]) {
            include.push(subTableNames[i]);
          }
        }
        let signupInfo;
        if (include.length === 0) {
          signupInfo = await Company.findByPk(id);
        } else {
          signupInfo = await Company.findByPk(id, { include });
        }
        ctx.status = 200;
        ctx.body = signupInfo;
      } else {
        for (const subTableName of subTableNames) {
          if (type === subTableName) {
            const currentTable = subTables[subTableName];
            const specialInfo = await currentTable.findAll.call(
              currentTable,
              {
                where: {
                  companyId: id,
                },
              },
            );
            ctx.status = 200;
            ctx.body = specialInfo;
          }
        }
      }
    }
  } catch (err) {
    console.error(err);
    ctx.status = 500;
  }
};

export const getOneFromEmployee = async (
  ctx: Context,
): Promise<void> => {
  const employeeId = ctx.params.employeeId;
  try {
    const employee = await CompanyEmployee.findByPk(employeeId);
    const companyId = employee?.CompanyId;
    if (companyId) {
      getOne(ctx, companyId);
    } else {
      ctx.status = 404;
    }
  } catch (err) {
    ctx.status = 500;
  }
};

const addOrUpdateSubtable = async (
  companyTable: ModelStatic<Model>,
  value: Company,
  id: string,
) => {
  const [signingUpCompany, created] = await Model.findOrCreate.call(
    companyTable,
    {
      where: {
        CompanyId: id,
      },
      defaults: value,
    },
  );
  if (!created) {
    signingUpCompany.update(value);
  }
};

export const addOne = async (
  ctx: Context,
  id?: string,
): Promise<void> => {
  id = id || ctx.params.id;
  let fromDb;
  let dbErr;
  const type = ctx.params.type;
  const companyCandidate = ctx.request.body;
  if (!companyCandidate) {
    ctx.status = 400;
    return;
  }
  if (type === 'all') {
    try {
      fromDb = Company.create(companyCandidate);
    } catch (err) {
      dbErr = err;
    }
  } else if (type === 'signup') {
    try {
      const [
        signingUpCompany,
        created,
      ] = await Model.findOrCreate.call(Company, {
        where: {
          id: id,
        },
        defaults: companyCandidate,
      });
      if (!created) {
        signingUpCompany.update(companyCandidate);
      }
      fromDb = signingUpCompany;
    } catch (err) {
      dbErr = err;
    }
  } else {
    for (const subTableName of subTableNames) {
      if (type === subTableName) {
        const currentSubTable = subTables[subTableName];
        if (Array.isArray(companyCandidate)) {
          try {
            fromDb = await Promise.all(
              companyCandidate.map(async (item) => {
                return await addOrUpdateSubtable(
                  currentSubTable,
                  item,
                  id as string,
                );
              }),
            );
          } catch (err) {
            dbErr = err;
          }
        } else {
          try {
            fromDb = await addOrUpdateSubtable(
              currentSubTable,
              companyCandidate,
              id as string,
            );
          } catch (err) {
            dbErr = err;
          }
        }
      }
    }
  }
  if (dbErr !== undefined) {
    ctx.status = 400;
    ctx.body = dbErr;
    return;
  }
  ctx.status = 201;
  ctx.body = fromDb;
};

export const addOneFromEmployee = async (ctx: Context) => {
  const employeeId = ctx.params.employeeId;
  try {
    const employee = await CompanyEmployee.findByPk(employeeId);
    if (!employee) {
      ctx.status = 400;
      ctx.body = `there is no employee with id ${employeeId} in the db.`;
      return;
    }
    const companyId = employee.CompanyId;
    addOne(ctx, companyId);
  } catch (err) {
    ctx.status = 500;
    ctx.body = `There was an error accessing the database: ${err}`;
  }
};

export const updateOne = async (ctx: Context): Promise<void> => {
  const id = ctx.params.id;
  const type = ctx.params.type || 'all';
  try {
    const existingEntry = await Company.findByPk(id);
    if (!existingEntry) {
      ctx.status = 400;
      ctx.body = `There is no company with id ${id} in the database`;
      return;
    }
    const companyCandidate = ctx.request.body;
    let updatedCompany;
    let dbError;
    if (type === 'all') {
      try {
        updatedCompany = await existingEntry.update(companyCandidate);
      } catch (err) {
        dbError = `Error updating company: ${err}`;
      }
    } else {
      for (const subTableName of subTableNames) {
        if (type === subTableName) {
          const currentTable = subTables[subTableName];
          if (Array.isArray(companyCandidate)) {
            try {
              updatedCompany = await Promise.all(
                companyCandidate.map(async (item) => {
                  Model.update.call(currentTable, item, {
                    where: {
                      CompanyId: id,
                    },
                  });
                }),
              );
            } catch (err) {
              dbError = `Error updating ${type} array: ${err}`;
            }
          } else {
            try {
              updatedCompany = await Model.update.call(
                currentTable,
                companyCandidate,
                { where: { CompanyId: id } },
              );
            } catch (err) {
              dbError = `Error updating ${type} item: ${err}`;
            }
          }
        }
      }
    }
    if (updatedCompany !== undefined) {
      ctx.status = 200;
      ctx.send(updatedCompany);
      return;
    }
    ctx.status = 400;
    ctx.send(dbError);
  } catch (err) {
    ctx.status = 500;
  }
};

export const deleteOne = async (ctx: Context): Promise<void> => {
  const id = ctx.params.id;
  const type = ctx.params.type || 'all';
  try {
    if (!(await Company.findByPk(id))) {
      ctx.status = 404;
      return;
    }
    if (type === 'all') {
      Company.destroy({ where: { id } });
      ctx.status = 204;
      return;
    } else {
      for (const subTableName of subTableNames) {
        if (type === subTableName) {
          const currentTable = subTables[subTableName];
          if (
            !(await Model.findOne.call(currentTable, {
              where: { CompanyId: id },
            }))
          ) {
            ctx.status = 404;
            return;
          }
          Model.destroy.call(currentTable, {
            where: { CompanyId: id },
          });
          ctx.status = 204;
          return;
        }
        ctx.status = 400;
        ctx.body = `Type ${type} not recognized`;
      }
    }
  } catch (err) {
    ctx.status = 500;
    ctx.send = `Error deleting from the db: ${err}`;
  }
};
