import { Module, ValidationPipe } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { GraphqlOptions } from './graphql/graphql.options';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import miscConfig from './config/misc.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [miscConfig],
      isGlobal: true,
    }),
    GraphQLModule.forRootAsync({
      useClass: GraphqlOptions,
    }),
    PrismaModule,
    AuthModule,
    UserModule,
  ],
  providers: [ValidationPipe],
})
export class AppModule {}
