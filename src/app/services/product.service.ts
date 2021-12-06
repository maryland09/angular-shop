import { Injectable } from '@angular/core';
import {HttpProductResponse} from "../types/product";
import {HttpService} from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private readonly httpService: HttpService) { }

  // public getProductsFromServer(queryParam: { [key: string]: string | number } = {}): Observable<HttpProductResponse> {
  //   const params = new HttpParams({fromObject: queryParam})
  //   const url = `https://localhost:3000/api/products`
  //   return this.httpService.get<HttpProductResponse>(url, params)
  // }

  getProducts() {
    return this.httpService.get<HttpProductResponse>('https://localhost:3000/api/products/?page=1&limit=51&orderBy=title')
  }

  getProductsById(id: number) {
    return this.httpService.get<HttpProductResponse>('https://localhost:3000/api/products/' + id)
  }


}
