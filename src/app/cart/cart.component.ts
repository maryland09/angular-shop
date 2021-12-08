import {Component, OnInit} from '@angular/core';
import {CartService} from "../services/cart.service";
import {Product} from "../types/product";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public product: Product = {
    "id": 23,
    "company": "Huawei",
    "title": "MatePad LTE 64Gb",
    "price": 15192,
    "image": "https://avatars.mds.yandex.net/get-mpic/1713519/img_id270577006705469654.jpeg/9hq",
    "rating": 5,
    "category": "tablet"
  }


  constructor(public cartService: CartService) {
  }

  ngOnInit(): void {
  }

  increaseCount(product: Product){
    this.cartService.addToCart(product)
  }

  deleteFromCart(product: Product){
    this.cartService.removeProduct(product)
  }

  decreaseCount(product: Product){
    this.cartService.decreaseCount(product)
  }

}
