import {Injectable} from '@angular/core';
import {Product} from "../types/product";
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

  constructor() {
  }

  isCartEmpty() {
    return this.cartMap.size == 0
  }

  getCartCount() {
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

  decreaseCount(product: Product) {
    if (this.cartMap.has(product)) {
      let newCount = this.cartMap.get(product)
      newCount! -= 1
      if (newCount! == 0) {
        this.removeProduct(product)
      }
      else{
        this.cartMap.set(product, newCount!)
      }
    }
    this.countSource.next(this.getCartCount())
  }

  removeProduct(product: Product) {
    this.cartMap.delete(product)
    this.countSource.next(this.getCartCount())
 }

  getTotalPrice() {
    let totalPrice = 0
    for (let [key, value] of this.cartMap) {
      totalPrice += key.price * value
    }
    return totalPrice
  }

  removeAll(){
    this.cartMap.clear()
    this.countSource.next(this.getCartCount())
  }


}
