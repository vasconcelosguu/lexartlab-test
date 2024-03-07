import { NextRequest, NextResponse } from "next/server";
import User from "@/database/models/users";
import { hashPassword } from "@/utils/auth";
import jwt from "jsonwebtoken";
import "dotenv/config";

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  if (!email || !password) {
    return NextResponse.json(
      { message: "Please fill in all fields" },
      { status: 400 }
    );
  }

  const hashedPassword = await hashPassword(password);

  const user = await User.create({ email, password: hashedPassword });

  const token = jwt.sign(
    { email: user.email, id: user.id },
    process.env.JWT_SECRET!,
    { expiresIn: "1h" }
  );

  return NextResponse.json({ token, userId: user.id });
}
