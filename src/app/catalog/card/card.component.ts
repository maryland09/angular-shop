import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../types/product";
import {Router} from "@angular/router";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() product!: Product
  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  goToProduct(id: number){
    this.router.navigateByUrl('/products/' + id)
  }

}
