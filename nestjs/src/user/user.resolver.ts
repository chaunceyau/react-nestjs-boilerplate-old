import {
  Parent,
  ResolveProperty,
  Resolver,
  Query,
  Args,
} from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
//
import { PrismaService } from '../prisma/prisma.service';
import { CurrentUser } from '../shared/decorators/decorators';
import { GqlAuthGuard } from '../auth/guards/auth-required';
import { User } from '../graphql/graphql.schema.generated';

@Resolver('User')
export class UserResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query('user')
  @UseGuards(GqlAuthGuard)
  async getUserById(@Args('id') id: string, @CurrentUser() user: User) {
    if (!user || (user && user.id !== id)) throw new Error('Bad request...');
    return this.prisma.client.user({ id });
  }

  @Query('currentUser')
  @UseGuards(GqlAuthGuard)
  async getCurrentUser(@CurrentUser() user: User) {
    return this.prisma.client.user({ id: user.id });
  }

  @ResolveProperty('email')
  async email(@Parent() { id, email }: User, @CurrentUser() user: User) {
    if (!user || (user && user.id !== id)) return 'hiddenemail@protonmail.com';
    return email;
  }
}
