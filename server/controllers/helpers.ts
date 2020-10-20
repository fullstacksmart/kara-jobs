import { ValidationError } from 'sequelize';
import { Context } from 'koa';
import { DatabaseError } from 'sequelize';

export const handleError = (
  err: Error,
  ctx: Context,
  message?: string,
): void => {
  ctx.status = 400;
  if (err instanceof ValidationError) {
    ctx.body = `Validation error: ${message ? message + ': ' : ''}${
      err.message
    }`;
  } else if (err instanceof DatabaseError) {
    ctx.body = `Database error: ${err.message}`;
  } else {
    ctx.status = 500;
  }
};
