import { NextRequest, NextResponse } from 'next/server';
import User from '@/database/models/users';
import { comparePassword } from '@/utils/auth';
import jwt from 'jsonwebtoken';
import 'dotenv/config';


export async function POST(request: NextRequest) {
    const requestBody = await request.json();
    const { email, password } = requestBody;

    const user = await User.findOne({ where: { email } });

    const isMatch = await comparePassword(password, user!.password);
    console.log(isMatch);

    if (!isMatch) {
        return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    const token = jwt.sign({ email: user!.email, id: user!.id }, process.env.JWT_SECRET!, { expiresIn: '1h' });

    return NextResponse.json({ token, userId: user!.id });
  }
