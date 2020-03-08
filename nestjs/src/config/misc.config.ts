import { registerAs } from '@nestjs/config';

export default registerAs('misc', () => ({
  PORT: 4000,
}));
