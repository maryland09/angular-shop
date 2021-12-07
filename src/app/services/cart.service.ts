import {Injectable} from '@angular/core';
import {Product} from "../types/product";
import {relativeToRootDirs} from "@angular/compiler-cli/src/transformers/util";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // public cartMap = new Map<Product, number>([[{
  //   "id": 16,
  //   "company": "Apple",
  //   "title": "Watch Series 4 link Braclet",
  //   "price": 71992,
  //   "image": "https://avatars.mds.yandex.net/get-mpic/96484/img_id7765255541283425686/9hq",
  //   "rating": 5,
  //   "category": "smartwatch"
  // }, 5]])

  public cartMap = new Map<Product, number>()


  private countSource = new BehaviorSubject(0)
  public currentCount = this.countSource.asObservable()

  isCartEmpty() {
    return this.cartMap.size == 0
  }

  getCartCount(){
    let count = 0
    for (let value of this.cartMap.values()) {
      count += value
    }
    return count
  }

  addToCart(product: Product) {

    if (this.cartMap.has(product)) {
      console.log('has')
      let newCount: number | undefined = this.cartMap.get(product)
      newCount! += 1
      this.cartMap.set(product, newCount!)
    } else {
      console.log('new')
      this.cartMap.set(product, 1)
    }

    this.countSource.next(this.getCartCount())
    // for (let [key, value] of this.cartMap) {
    //   console.log(key, value);
    // }

  }


  constructor() {
  }
}
