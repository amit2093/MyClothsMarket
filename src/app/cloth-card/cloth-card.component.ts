import { Options } from '@angular-slider/ngx-slider';
import { Component, Input, OnInit } from '@angular/core';
import AppConsts from '../Constants/AppConsts';

@Component({
  selector: 'app-cloth-card',
  templateUrl: './cloth-card.component.html',
  styleUrls: ['./cloth-card.component.css']
})
export class ClothCardComponent implements OnInit {

  shoppingCartColor: any;
  isShoppingCartButtonColorChange: boolean = false;
  favouriteColor: any;
  isFavouriteColorChange: boolean = false;
  
  favConst = AppConsts.FAVOURITE;
  addToCartConst = AppConsts.ADD_TO_CART;
  currencyIconConst = AppConsts.CURRENCY_ICON;
  
  @Input() item: any;

  constructor() { }

  ngOnInit(): void {
    
  }

  addToCart(id: any){
    console.log("inside method addToCart and id: ", id);   
    this.isShoppingCartButtonColorChange = !this.isShoppingCartButtonColorChange;
    if(this.isShoppingCartButtonColorChange){
      this.shoppingCartColor = AppConsts.GREEN_COLOR;
    } else {
      this.shoppingCartColor = AppConsts.MAROON_COLOR;
    }
  }

  setFavourite(id: any){
    console.log("inside method setFavourite and id: ", id);
    this.isFavouriteColorChange = !this.isFavouriteColorChange;
    if(this.isFavouriteColorChange){
      this.favouriteColor = AppConsts.GREEN_COLOR;
    } else {
      this.favouriteColor = AppConsts.MAROON_COLOR;
    }
  }
}
