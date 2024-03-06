import { NextResponse } from "next/server";
import Product from "@/database/models/products";

export async function GET() {
  const products = await Product.findAll();

  if(!products) return NextResponse.json({ message: "No products found" }, { status: 404 });

  return NextResponse.json({ products });
}