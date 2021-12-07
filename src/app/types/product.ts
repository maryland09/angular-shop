export interface Product {
  id: number,
  company: string,
  title: string,
  price: number,
  image: string,
  rating: number,
  category: string
}

export interface Meta{
  totalItems: number
  itemCount: number
  itemsPerPage: number
  totalPages: number
  currentPage: number
}

export interface HttpProductResponse {
  items: Array<Product>
  meta: Meta
}

export interface IInCart {
  product: Product,
  count: number
}




// export interface ProductCache{
//   url: string,
//   response: HttpProductResponse
// }
