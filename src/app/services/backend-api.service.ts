import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  private categoryUrl: string = 'assets/category.json';
  private carousalUrl: string = 'assets/carousal.json';
  private categoryItem: string = 'assets/categoryItem.json';
  private navBarMenu: string = 'assets/navBarMenu.json';
  private homePageDeals: string = 'assets/homePageDeals.json';
  private test: string = 'assets/test.json';
  private some: string = 'assets/some.json';
  private test2: string = 'assets/test2.json';

  constructor(private http: HttpClient) { }

  getCategory() {
    return this.http.get(this.categoryUrl);
  }

  getCarousal() {
    return this.http.get(this.carousalUrl);
  }

  getcategoryItem() {
    return this.http.get(this.categoryItem);
  }

  getNavBarMenu() {
    return this.http.get(this.navBarMenu);
  }

  getHomePageDeals() {
    return this.http.get(this.homePageDeals);
  }

  getTestData() {
    return this.http.get(this.test);
  }

  getSomeData() {
    return this.http.get(this.some);
  }

  getTest2Data() {
    return this.http.get(this.test2);
  }
}


