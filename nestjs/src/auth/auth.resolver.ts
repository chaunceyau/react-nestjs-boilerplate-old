import { Response } from 'express';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { ResGql } from '../shared/decorators/decorators';
import {
  LoginInput,
  CreateAccountInput,
} from '../graphql/graphql.schema.generated';

@Resolver('Auth')
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation()
  async login(
    @Args('loginInput') { email, password }: LoginInput,
    @ResGql() res: Response,
  ) {
    return this.authService.loginUser(email, password, res);
  }

  @Mutation('createAccount')
  async createAccount(@Args('createAccountInput')
  {
    email,
    password,
  }: CreateAccountInput) {
    return this.authService.createAccount(email, password);
  }

  @Mutation('logout')
  async logout(@ResGql() res: Response) {
    return this.authService.logout(res);
  }
}
