import { ChangeContext, Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import AppConsts from '../Constants/AppConsts';
import { AppService } from '../services/app-service.service';
import { BackendApiService } from '../services/backend-api.service';

@Component({
  selector: 'app-category-and-item-section',
  templateUrl: './category-and-item-section.component.html',
  styleUrls: ['./category-and-item-section.component.css']
})
export class CategoryAndItemSectionComponent implements OnInit {
  currencyIconConst = AppConsts.CURRENCY_ICON;
  filterText = "Filter";
  selectedTab = null;

  categoryData: any[] = new Array();
  categoryFor: any;
  minValue: any;
  changeValue: any;
  options: Options = {
    floor: 0,
    ceil: 0,
  };
  logText: string = '';
  categoryItemData: any;
  categoryItems: any[] = new Array();
  categoryItems2: any[] = new Array();
  urlId: any = null;

  constructor(private route: ActivatedRoute, 
    private service: BackendApiService,
    private appService: AppService) { 
   
  }

  ngOnInit() {
    this.route.url.subscribe(url => {
      this.urlId = url[0].path;
      this.leftSideCategories();
      this.rightSideCategoryData();
    });

    this.appService.getSearchText().subscribe(data => {
      console.log("getSearchText -----------> ", data);
    });
  }

  private rightSideCategoryData() {
    this.categoryItems = [];
    this.service.getcategoryItem().subscribe((data: any = []) => {
      data.forEach((value: any, key: any) => {
        if (this.urlId === value.for) {
          this.categoryItemData = data[key];
          this.categoryItems2 = this.categoryItemData.items;
          this.categoryItems = this.categoryItemData.items;
          this.changeValue = this.categoryItems[0].priceAfterDiscount;
          this.minValue = this.categoryItems[0].priceAfterDiscount;
          this.options = {
            floor: this.categoryItems[0].priceAfterDiscount,
            ceil: this.categoryItems[this.categoryItems.length - 1].priceAfterDiscount,
          };
        }
      });
    });

    this.categoryItems = this.categoryItems2;
  }

  private leftSideCategories() {
    this.service.getCategory().subscribe((data: any) => {
      data.forEach((value: any, key: any) => {
        if (this.urlId === value.for) {
          this.categoryFor = this.urlId;
          this.categoryData = value.items;
          this.selectedTab = value.items[0];
        }
      });
    });
  }

  changeSubCategory(subCategory: any){
    this.selectedTab = subCategory;
  }

  onUserChangeFilter(changeContext: ChangeContext): void {
    this.changeValue = changeContext.value;    
    let cItems = this.categoryItems2;
    this.categoryItems = [];
    for (let i = 0; i < cItems.length; i++) {
      if(this.changeValue <= cItems[i].priceAfterDiscount){
        this.categoryItems.push(cItems[i]);
      }
    }
  }
}
