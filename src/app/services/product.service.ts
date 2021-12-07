import {Injectable} from '@angular/core';
import {HttpProductResponse, Product} from "../types/product";
import {HttpService} from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _allProducts!: Array<Product>

  constructor(private readonly httpService: HttpService) {
  this.getAllProducts().subscribe(data => this._allProducts = data.items)

  }

  // public getProductsFromServer(queryParam: { [key: string]: string | number } = {}): Observable<HttpProductResponse> {
  //   const params = new HttpParams({fromObject: queryParam})
  //   const url = `https://localhost:3000/api/products`
  //   return this.httpService.get<HttpProductResponse>(url, params)
  // }

  getAllProducts() {
    return this.httpService.get<HttpProductResponse>('https://localhost:3000/api/products/?page=1&limit=51&orderBy=title')
  }


  getProductsByCategory(category: string) {
    let products: Array<Product> = this._allProducts
    if (category !== 'all') {
     products = this._allProducts.filter(prod => prod.category == category)
    }
    return products
  }

  getProductById(id: number){
    let product: Array<Product> = this._allProducts.filter(prods => prods.id == id)
    return product[0]
  }


}
