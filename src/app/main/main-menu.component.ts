import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CartService} from "../services/cart.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent implements OnInit, OnDestroy {

  public cartCount!: number
  private subscription!: Subscription

  constructor(private router: Router,
              private cartService: CartService) {
    this.subscription = this.cartService.currentCount.subscribe(count => this.cartCount = count)
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
