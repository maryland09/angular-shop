import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../types/product";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() product: Product = {
    "id": 32,
    "company": "Google",
    "title": "Home",
    "price": 7120,
    "image": "https://avatars.mds.yandex.net/get-mpic/331398/img_id3734318606388092981.jpeg/9hq",
    "rating": 3,
    "category": "smartspeaker"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
