import {
  CanActivate,
  Injectable,
  Type,
  UnauthorizedException,
  mixin,
} from '@nestjs/common';

import { AuthGuard } from '@nestjs/passport';

export interface JwtAuthGuardOptions {
  required: boolean;
}

/**
 * @param required User is required to be present
 */
function createJwtAuthGuard({ required = true } = {}) {
  @Injectable()
  class JwtAuthGuard extends AuthGuard('login_token') {
    handleRequest(err, user, info) {
      if (err || (!user && required)) {
        throw err || new UnauthorizedException();
      }
      return user || null;
    }
  }

  return mixin(JwtAuthGuard);
}

export const JwtAuthGuard: (
  options?: JwtAuthGuardOptions,
) => Type<CanActivate> = (options?) => createJwtAuthGuard(options);
