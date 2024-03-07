import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import normalize from '@/utils/normalize';
import { decodeToken } from '@/utils/descript';
import { JwtPayload } from "jsonwebtoken";
import Product from "@/database/models/products";

interface Produto {
  name: string;
  brand: string;
  model: string;
  price: number;
  color: string;
  user: string;
}

export async function POST(request: NextRequest) {
  try {
    const cookie = cookies();
    const token = cookie.get("token");
    console.log(token);

    const requestBody = await request.json();
    if (!token) {
      return NextResponse.json({ error: "User token not found in cookies" }, { status: 400 });
    }
    const { value } = token;
    const decodedData = decodeToken(value);
    const { email } = decodedData as JwtPayload;

    const normalizedData = normalize(requestBody, email);
    console.log(normalizedData);

    const createdProduct = await Promise.all(normalizedData.map((data: Produto) => Product.create(data)));


    return NextResponse.json({ createdProduct, status: 201 });
  } catch (error) {
    console.error("An error occurred:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}