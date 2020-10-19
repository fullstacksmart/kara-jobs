import { Context } from 'koa';
import { CompanyEmployee } from '../models/Company/CompanyEmployee';
import { Company } from '../models/Company/Company';
import { CompanyImage } from '../models/Company/CompanyImage';
import { CompanySearchPreferences } from '../models/Company/CompanySearchPreferences';
import { CompanyRecruitmentPreferences } from '../models/Company/CompanyRecruitmentPreferences';
import { CompanyProfile } from '../models/Company/CompanyProfile';

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

export const getOne = async (ctx: Context): Promise<void> => {
  const id = ctx.params.id;
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
      if (type === 'signup') {
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
