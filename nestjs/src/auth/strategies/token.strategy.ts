import { AuthService } from '../auth.service';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { Strategy } from 'passport-jwt';

const cookieExtractor = (req: Request): string | null => {
  let login_token = null;
  if (req && req.cookies) {
    login_token = req.cookies.login_token;
  }
  return login_token;
};

@Injectable()
export class LoginJwtStrategy extends PassportStrategy(Strategy, 'login_token') {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: cookieExtractor,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  validate(payload) {
    return this.authService.validate(payload);
  }
}
