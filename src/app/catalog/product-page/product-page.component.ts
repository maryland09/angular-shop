import {Component, OnInit} from '@angular/core';
import {Product} from "../../types/product";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  public product: Product = {
    "id": 12,
    "company": "Honor",
    "title": "MagicWatch 2 46mm",
    "price": 7873.6,
    "image": "https://avatars.mds.yandex.net/get-mpic/1680954/img_id1015335036853981239.jpeg/9hq",
    "rating": 4,
    "category": "smartwatch"
  }

  public productId!: number;


  constructor(private readonly route: ActivatedRoute,
              private readonly service: ProductService) {
    this.productId = this.route.snapshot.params['id']
    this.product = service.getProductById(this.productId)

  }

  ngOnInit(): void {
  }

  starsChecked(rating: number) {
    return new Array(rating);
  }

  starsUnchecked(rating: number) {
    return new Array(5 - rating);
  }


}
