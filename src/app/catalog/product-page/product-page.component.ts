import {Component, DoCheck, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Product} from "../../types/product";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../services/product.service";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  public product!: Product
  public productId!: number;

  constructor(private readonly route: ActivatedRoute,
              private readonly productService: ProductService,
              private readonly cartService: CartService,
              ) {
    this.productId = this.route.snapshot.params['id']
    this.productService.getProductById(this.productId).subscribe(data => this.product = data)
  }

  ngOnInit(): void {
  }

  addToCart(product: Product){
    this.cartService.addToCart(product)
  }

  starsChecked(rating: number) {
    return new Array(rating);
  }

  starsUnchecked(rating: number) {
    return new Array(5 - rating);
  }


}
