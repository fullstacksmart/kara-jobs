import { Context } from 'koa';
import { TalentRegistrationProficiency } from '../models/TalentRegistrationProficiency';
import { Model } from 'sequelize-typescript';
import { Talent } from '../models/Talent';

export const getAll = async (ctx: Context): Promise<void> => {
  const newTalent = await Talent.create({
    id: 'a',
    firstName: 'Max',
    lastName: 'Muster',
    isoCode: 'GER',
    country: 'Germany',
    zipCode: '10115',
    city: 'Berlin',
    onboardingComplete: false,
    onboardingPage: 1,
  });
  const newProfish = await TalentRegistrationProficiency.create({
    TalentId: 'a',
    occupationId: 2,
    positionName: 'coder',
    occupationStatusId: 0,
    employerName: 'Stadt Berlin',
  });
  ctx.body = newTalent;
};
export const getOne = (ctx: Context, type: string): void => {
  ctx.body = `getting ${type} info from talent ${ctx.params.id}`;
};
