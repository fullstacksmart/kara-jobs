import { Context } from 'koa';
import { getOneFromEmployee } from './companies';
import { handleError } from './helpers';
import { fetchTalent } from './talents';

export const getOne = async (ctx: Context): Promise<void> => {
  const id = ctx.params.id;
  try {
    const talent = await fetchTalent(id, 'signup');
    if (talent) {
      ctx.status = 200;
      ctx.body = talent;
    } else {
      await getOneFromEmployee(ctx, id);
    }
  } catch (err) {
    handleError(err, ctx);
  }
};
