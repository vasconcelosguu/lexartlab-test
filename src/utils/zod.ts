import { z } from 'zod';

const EmailValidate = z.string().email();
const PasswordValidate = z.string().min(6).max(14);

export const UserSchema = z.object({
  email: EmailValidate,
  password: PasswordValidate,
});

export const ProductSchema = z.object({
  name: z.string(),
  brand: z.string(),
  model: z.string(),
  data: z.array(z.object({
    price: z.number(),
    color: z.string(),
  })),
});