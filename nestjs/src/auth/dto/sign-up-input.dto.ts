import { IsEmail, MinLength } from 'class-validator';
import { CreateAccountInput } from '../../graphql/graphql.schema.generated';

export class CreateAccountInputDto extends CreateAccountInput {
  @IsEmail()
  readonly email: string;

  @MinLength(6)
  readonly password: string;
}
