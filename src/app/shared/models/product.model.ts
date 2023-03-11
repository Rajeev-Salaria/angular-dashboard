export interface Product {
    products: ProductArray[]
    total: number,
    skip: number,
    limit: number,
}

export interface ProductArray{
  id: number,
  title: string,
  description: string,
  price: number,
  discountPercentage:number,
  rating: number,
  stock: number,
  brand:  string,
  category:  string,
  thumbnail: string,
  images: string[],
}

