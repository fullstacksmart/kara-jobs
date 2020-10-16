import { Context } from 'koa';
import { Model } from 'sequelize-typescript';
import { Person } from '../models/Person';
import { Hobby } from '../models/Hobby';

export const getAll = async (ctx: Context): Promise<void> => {
  const newPerson = await Person.create({
    age: 121 / 2,
    firstName: 'Personibus',
  });
  const newHobby = await Hobby.create({
    name: 'sequelize',
    PersonId: newPerson.id,
  });
  const result = await Person.findAll({});
  const completeHobby = await Hobby.findOne({
    include: Person as typeof Model,
  });
  console.log('result', completeHobby);
  ctx.body = completeHobby;
};

export const getOne = (ctx: Context, type: string): void => {
  ctx.body = `getting ${type} info from talent ${ctx.params.id}`;
};
