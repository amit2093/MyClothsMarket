import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public categoryToCategoryItem: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public searchText: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor() { }

  getCategoryToCategoryItem(): Observable<any> {
    return this.categoryToCategoryItem.asObservable();
  }
  setCategoryToCategoryItem(data: any): any{
    this.categoryToCategoryItem.next(data);
  }

  getSearchText(): Observable<any> {
    return this.searchText.asObservable();
  }
  setSearchText(data: any): any{
    this.searchText.next(data);
  }
}
