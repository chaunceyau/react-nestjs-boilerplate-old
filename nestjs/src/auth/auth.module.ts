import { AuthResolver } from './auth.resolver'
import { AuthService } from './auth.service'
import { JwtModule } from '@nestjs/jwt'
import { LoginJwtStrategy } from './strategies/token.strategy'
import { Module } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'
import { PrismaModule } from '../prisma/prisma.module'

@Module({
  imports: [
    PrismaModule,
    PassportModule.register({
      defaultStrategy: 'login_token',
    }),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: 3600, // 1 hour
      },
    }),
  ],
  providers: [AuthService, AuthResolver, LoginJwtStrategy]
})

export class AuthModule {}
