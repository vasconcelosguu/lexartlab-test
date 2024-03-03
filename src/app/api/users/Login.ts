import { VercelRequest, VercelResponse } from '@vercel/node';
import User from '@/database/models/users';
import { hashPassword } from '@/utils/auth';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
){
  try {
    const { email, password } = request.body;
    const hashedPassword = await hashPassword(password);
    const user = await User.findOne({ where: { email, password: hashedPassword } });
    if (!user) {
      return response.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, { expiresIn: '1h' });
    return response.status(200).json({ token });
  } catch (error) {
    response.status(500).json({ message: 'Internal server error' });
  }
}