import { Context } from 'koa';
import { ReturnTalent, TalentCandidate } from '../types/talent';
import { Talent } from '../models/Talent/Talent';
import { TalentDocument } from '../models/Talent/TalentDocument';
import { TalentAboutMe } from '../models/Talent/TalentAboutMe';
import { TalentApprobation } from '../models/Talent/TalentApprobation';
import { TalentExperience } from '../models/Talent/TalentExperience';
import { TalentLanguage } from '../models/Talent/TalentLanguage';
import { TalentOtherSkill } from '../models/Talent/TalentOtherSkill';
import { Error } from 'sequelize';
import { TalentRegistrationExperience } from '../models/Talent/TalentRegistrationExperience';
import { TalentRegistrationQualification } from '../models/Talent/TalentRegistrationQualification';
import { TalentQualification } from '../models/Talent/TalentQualification';

const subTables = {
  registrationExperience: TalentRegistrationExperience,
  registrationQualification: TalentRegistrationQualification,
  approbations: TalentApprobation,
  documents: TalentDocument,
  aboutMe: TalentAboutMe,
  experiences: TalentExperience,
  qualifications: TalentQualification,
  languages: TalentLanguage,
  skills: TalentOtherSkill,
};

const subTableNames: [keyof typeof subTables] = Object.keys(
  subTables,
) as [keyof typeof subTables];

const fetchTalent = async (
  id: string,
  info: string,
): Promise<ReturnTalent | null> => {
  if (info === 'all') {
    return Talent.findByPk(id, {
      include: [
        'registrationExperience',
        'registrationExperience',
        'documents',
        'approbations',
        'aboutMe',
        'experiences',
        'languages',
        'skills',
      ],
    });
  } else if (info === 'signup') {
    const fullTalent = await Talent.findByPk(id);
    if (!fullTalent) return null;
    const onBoardingStatus =
      fullTalent.onboardingPage <= 2
        ? 0
        : fullTalent.onboardingPage <= 5
        ? 1
        : fullTalent.onboardingPage <= 6
        ? 2
        : 3;
    switch (onBoardingStatus) {
      case 0:
        return fullTalent;
      case 1:
        return Talent.findByPk(id, {
          include: [
            'registrationQualification',
            'registrationExperience',
          ],
        });
      case 2:
        return Talent.findByPk(id, {
          include: [
            'registrationQualification',
            'registrationExperience',
            'documents',
          ],
        });
      case 3:
      default:
        return Talent.findByPk(id, {
          include: [
            'registrationQualification',
            'registrationExperience',
            'documents',
            'approbations',
          ],
        });
    }
  } else {
    for (const subTableName of subTableNames) {
      if (info === subTableName) {
        const table = subTables[subTableName];
        table.findByPk.call(table, id);
      }
    }
    return null;
  }
};

const addTalent = async (
  talentCandidate: Record<string, unknown>,
): Promise<ReturnTalent | Error | null> => {
  let newTalent;
  try {
    newTalent = new Talent(talentCandidate);
    const savedTalent = await newTalent.save();
    for (const subTableName of subTableNames) {
      if (talentCandidate[subTableName]) {
        const newSubTalent = new subTables[subTableName](
          talentCandidate[subTableName] as Record<string, unknown>,
        );
        // savedTalent[subTableName] = await newSubTalent.save();
      }
    }
    return savedTalent;
  } catch (err) {
    return err;
  }
};

const isConsistent = (candidate: TalentCandidate, id: string) => {
  return candidate.id === id;
};

export const getOne = async (ctx: Context): Promise<void> => {
  const type = ctx.params.type || 'all';
  const id = ctx.params.id;
  try {
    const talent = await fetchTalent(id, type);
    if (talent) {
      ctx.status = 200;
      ctx.body = talent;
    } else {
      ctx.status = 400;
      ctx.body = `No info of type ${type} for talent with id ${id}`;
    }
  } catch (err) {
    console.error('there was a problem accessing the database:', err);
    ctx.status = 500;
  }
};

// TODO: remove
export const getAll = async (ctx: Context): Promise<void> => {
  const allTalents = await Talent.findAll();
  ctx.body = allTalents;
};

export const addOne = async (ctx: Context): Promise<void> => {
  const id = ctx.params.id;
  ctx.status = 401;
  try {
    const existingTalent = await Talent.findByPk(id);
    if (existingTalent) {
      ctx.body = `Talent with id ${id} already exists`;
      return;
    } else {
      const talentCandidate = ctx.request.body;
      if (!isConsistent(talentCandidate, id)) {
        ctx.body = 'Request is inconsistent with path';
        return;
      } else {
        try {
          const newTalent = await addTalent(talentCandidate);
          if (newTalent instanceof Error) {
            throw new Error(newTalent.message);
          }
          ctx.status = 201;
          ctx.body = newTalent;
          return;
        } catch (err) {
          ctx.status = 401;
          ctx.body = `Talent does not have the right format to be included in db:\n${err}`;
          return;
        }
      }
    }
  } catch (err) {
    ctx.status = 500;
  }
};
