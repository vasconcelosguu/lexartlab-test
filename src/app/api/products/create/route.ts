import { NextRequest, NextResponse } from "next/server";
import Product from "@/database/models/products";

export async function POST(request: NextRequest) {
  const { user, name, brand, model, price, color } = await request.json();

  if (!user || !name || !brand || !model || !price || !color) {
    return NextResponse.json(
      { message: "Please fill in all fields" },
      { status: 400 }
    );
  }

  const product = await Product.create({ user, name, brand, model, price, color });

  if (!product) {
    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 401 }
    );
  }

  return NextResponse.json({ product });
}