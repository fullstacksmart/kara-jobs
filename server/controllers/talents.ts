import { Context } from 'koa';
import { ReturnTalent } from '../types/talent';
import { Talent } from '../models/Talent/Talent';
import { TalentDocument } from '../models/Talent/TalentDocument';
import { TalentAboutMe } from '../models/Talent/TalentAboutMe';
import { TalentApprobation } from '../models/Talent/TalentApprobation';
import { TalentExperience } from '../models/Talent/TalentExperience';
import { TalentLanguage } from '../models/Talent/TalentLanguage';
import { TalentOtherSkill } from '../models/Talent/TalentOtherSkill';

export const getAll = async (ctx: Context): Promise<void> => {
  const allTalents = await Talent.findAll();
  ctx.body = allTalents;
};

const fetchTalent = async (
  id: string,
  info: string,
): Promise<ReturnTalent | null> => {
  switch (info) {
    case 'all': {
      const fullTalent = await Talent.findByPk(id);
      if (!fullTalent) return null;
      const onBoardingStatus =
        fullTalent.onboardingPage < 2
          ? 0
          : fullTalent.onboardingPage < 5
          ? 1
          : 2;
      switch (onBoardingStatus) {
        case 0:
          return fullTalent;
        case 1:
          return Talent.findByPk(id, {
            include: 'registrationEducation',
          });
        default:
          return Talent.findByPk(id, {
            include: [
              'registrationEducation',
              'registrationQualification',
              'documents',
            ],
          });
      }
    }
    case 'general':
      return Talent.findByPk(id);
    case 'about-me':
      return TalentAboutMe.findByPk(id);
    case 'approbation':
      return TalentApprobation.findByPk(id);
    case 'documents':
      return TalentDocument.findByPk(id);
    case 'experiences':
      return TalentExperience.findByPk(id);
    case 'languages':
      return TalentLanguage.findByPk(id);
    case 'other-skills':
      return TalentOtherSkill.findByPk(id);
    default:
      return null;
  }
};

export const getOne = (ctx: Context): void => {
  const type = ctx.params.type || 'all';
  const id = ctx.params.id;
  try {
    const talent = fetchTalent(id, type);
    if (talent) {
      ctx.status = 200;
      ctx.body = talent;
    } else {
      ctx.status = 400;
    }
  } catch (err) {
    console.error('there was a problem accessing the database:', err);
    ctx.status = 500;
  }
};
