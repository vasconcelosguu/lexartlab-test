import { z } from 'zod';

const EmailValidate = z.string().email();
const PasswordValidate = z.string().min(6).max(14);

export const UserSchema = z.object({
  email: EmailValidate,
  password: PasswordValidate,
});