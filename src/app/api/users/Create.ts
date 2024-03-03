import { VercelRequest, VercelResponse } from '@vercel/node';
import User from '@/database/models/users';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  try {
    const { email, password } = request.body;

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return response.status(400).json({ error: 'Email Alredy Cadastred!' });
    }

    const newUser = await User.create({ email, password });

    return response.status(200).json({ user: newUser });
  } catch (error) {
    const err = error as Error;
    return response.status(500).json({ error: err.message });
  }
}