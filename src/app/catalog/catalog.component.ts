import { Component, OnInit } from '@angular/core';
import {Product} from "../types/product";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  public products!: Array<Product>

  constructor(productService: ProductService) {
    productService.getProducts().subscribe(data => this.products = data.items)
    // productService.getProducts().subscribe(data => console.log(data))

  }

  ngOnInit(): void {
  }

}
