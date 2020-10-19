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
  searchPreferences: CompanySearchPreferences,
  recruitmentPreferences: CompanyRecruitmentPreferences,
  profile: CompanyProfile,
};

export const getAll = async (ctx: Context) => {
  ctx.body = await Company.findAll();
};

// export const getOne = async (ctx: Context) => {
//   const type = ctx.params.type || 'all';
//   if (type === all) {

//   }
// };
