import { Context } from 'koa';
import { CompanyEmployee } from '../models/Company/CompanyEmployee';
import { Company } from '../models/Company/Company';
import { CompanyImage } from '../models/Company/CompanyImage';
import { CompanySearchPreferences } from '../models/Company/CompanySearchPreferences';
import { CompanyRecruitmentPreferences } from '../models/Company/CompanyRecruitmentPreferences';
import { CompanyProfile } from '../models/Company/CompanyProfile';
import { Model } from 'sequelize-typescript';
import { ModelStatic } from 'sequelize/types';
import { handleError, textToJson } from './helpers';
import { CompanyArray } from '../types/company';

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
  const type = ctx.params.type || 'signup';
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
          if (signupPage && stages[i] <= signupPage) {
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
    handleError(err, ctx);
  }
};

export const getOneFromEmployee = async (
  ctx: Context,
  id?: string,
): Promise<void> => {
  const employeeId = id || ctx.params.employeeId;
  try {
    const employee = await CompanyEmployee.findByPk(employeeId);
    if (!employee) {
      ctx.status = 404;
      ctx.body = textToJson(
        `No employee with id ${employeeId} in db`,
      );
      return;
    } else {
      const companyId = employee.CompanyId;
      if (companyId) {
        await getOne(ctx, companyId);
      } else {
        ctx.status = 404;
      }
    }
  } catch (err) {
    handleError(err, ctx);
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

const addAll = async (candidate: Company) => {
  const createdCompany = await Company.create(candidate);
  const CompanyId = createdCompany.id;
  const include = [];
  for (const subTableName of subTableNames) {
    if (
      Object.prototype.hasOwnProperty.call(candidate, subTableName)
    ) {
      const currentTable = subTables[subTableName];
      if (Array.isArray(candidate[subTableName])) {
        const enrichedEntries = (candidate[
          subTableName
        ] as CompanyArray).map((item) => ({ ...item, CompanyId }));
        await Model.bulkCreate.call(currentTable, enrichedEntries);
      } else {
        // candidate is single item
        const enrichedEntry = { ...candidate, CompanyId };
        await new currentTable(enrichedEntry).save();
      }
      include.push(subTableName);
    }
  }
  if (include.length === 0) {
    return createdCompany;
  } else {
    const returnValue = await Company.findByPk(CompanyId, {
      include,
    });
    return returnValue;
  }
};

export const addOne = async (
  ctx: Context,
  id?: string,
): Promise<void> => {
  id = id || ctx.params.id;
  let fromDb;
  const type =
    ctx.params.type ||
    (ctx.params.id === undefined ? 'signup' : 'all');
  const companyCandidate = ctx.request.body;
  if (!companyCandidate) {
    ctx.status = 400;
    return;
  }
  if (type === 'all') {
    try {
      fromDb = Company.create(companyCandidate);
    } catch (err) {
      handleError(err, ctx);
      return;
    }
  } else if (type === 'signup') {
    try {
      if (id === undefined) {
        fromDb = await addAll(companyCandidate);
      } else {
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
          await signingUpCompany.update(companyCandidate);
        }
        fromDb = signingUpCompany;
      }
    } catch (err) {
      handleError(err, ctx);
      return;
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
            handleError(err, ctx);
            return;
          }
        } else {
          try {
            fromDb = await addOrUpdateSubtable(
              currentSubTable,
              companyCandidate,
              id as string,
            );
          } catch (err) {
            handleError(err, ctx);
            return;
          }
        }
      }
    }
  }
  ctx.status = 201;
  ctx.body = fromDb;
};

export const addOneFromEmployee = async (
  ctx: Context,
): Promise<void> => {
  const employeeId = ctx.params.employeeId;
  try {
    const employee = await CompanyEmployee.findByPk(employeeId);
    if (!employee) {
      ctx.status = 404;
      ctx.body = textToJson(
        `there is no employee with id ${employeeId} in the db.`,
      );
      return;
    }
    const companyId = employee.CompanyId;
    await addOne(ctx, companyId);
  } catch (err) {
    handleError(err, ctx);
    return;
  }
};

export const updateOne = async (ctx: Context): Promise<void> => {
  const id = ctx.params.id;
  const type = ctx.params.type || 'all';
  try {
    const existingEntry = await Company.findByPk(id);
    if (!existingEntry) {
      ctx.status = 404;
      ctx.body = textToJson(
        `There is no company with id ${id} in the database`,
      );
      return;
    }
    const companyCandidate = ctx.request.body;
    let updatedCompany;
    if (type === 'all') {
      try {
        updatedCompany = await existingEntry.update(companyCandidate);
      } catch (err) {
        handleError(err, ctx, 'while updating the db');
        return;
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
              handleError(err, ctx, `while updating ${type} array`);
              return;
            }
          } else {
            try {
              updatedCompany = await Model.update.call(
                currentTable,
                companyCandidate,
                { where: { CompanyId: id } },
              );
            } catch (err) {
              handleError(err, ctx, `while updating ${type} item`);
              return;
            }
          }
        }
      }
    }
    if (updatedCompany) {
      ctx.status = 200;
      ctx.body = updatedCompany;
    }
  } catch (err) {
    handleError(err, ctx);
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
    handleError(err, ctx, `while deleting from db`);
  }
};
