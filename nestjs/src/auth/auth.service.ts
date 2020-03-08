import * as bcryptjs from 'bcryptjs';

import { GraphQLError } from 'graphql';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '../prisma/generated/prisma-client';
import { Response } from 'express';
import { CreateAccountInput } from 'src/graphql/graphql.schema.generated';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
  ) {}

  async validate({ id }): Promise<User> {
    let user;
    try {
      user = await this.prisma.client.user({ id });
    } catch (err) {
      console.log(err);
    }
    if (!user) {
      throw Error('Authenticate validation error');
    }
    return user;
  }

  async loginUser(email, password, res: Response): Promise<User> {
    const user = await this.prisma.client.user({ email });
    if (!user) {
      throw new GraphQLError('Email or password incorrect');
    }
    const valid = await bcryptjs.compare(password, user.password);
    if (!valid) {
      throw new GraphQLError('Email or password incorrect');
    }

    const jwt = this.jwt.sign({ id: user.id });
    res.cookie('login_token', jwt, { httpOnly: true });

    return user;
  }

  async createAccount(email, password): Promise<User> {
    const emailExists = await this.prisma.client.$exists.user({ email });
    if (emailExists) {
      throw Error('Email is already in use');
    }
    const hashed_password = await bcryptjs.hash(password, 10);

    const user = await this.prisma.client.createUser({
      email,
      password: hashed_password,
    });
    return user;
  }

  async logout(res: Response) {
    res.clearCookie('login_token');
    return 'success';
  }
}
