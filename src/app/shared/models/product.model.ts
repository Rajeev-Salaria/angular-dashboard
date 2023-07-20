export interface Product {
  id: string,
  title:  string,
  price: number,
  description:  string,
  category: string,
  image:  string,
  rating: {
      rate: number,
      count:  string,
  }
}

// export interface ProductArray{
//   id: number,
//   title: string,
//   description: string,
//   price: number,
//   discountPercentage:number,
//   rating: number,
//   stock: number,
//   brand:  string,
//   category:  string,
//   thumbnail: string,
//   images: string[],
// }

