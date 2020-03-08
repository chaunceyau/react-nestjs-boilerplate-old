import { Response } from 'express';
import { User } from '../../prisma/generated/prisma-client';
import { createParamDecorator } from '@nestjs/common';

export const ResGql = createParamDecorator(
  (data, [root, args, ctx, info]): Response => ctx.res,
);

export const CurrentUser = createParamDecorator(
  (data, [root, args, ctx, info]): User => ctx.req && ctx.req.user,
);

export const UserB = createParamDecorator(
  (data, [root, args, ctx, info]) => ctx.user,
);

export const GetUser = createParamDecorator((data, req) => req.user);