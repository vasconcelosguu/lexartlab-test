import Product from '.';

interface Product {
  user: string;
  name: string;
  brand: string;
  model: string;
  price: number;
  color: string;
}

export async function createProduct(product: Product) {
  const newProduct = await Product.create(product);

  if(newProduct) {
    return newProduct;
  } else {
    throw new Error('Product not found');
  }
}