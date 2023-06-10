import { Component } from '@angular/core';
import AppConsts from './Constants/AppConsts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = AppConsts.BRAND_NAME + AppConsts.REGISTERED_MARK;

  data = {
    "Members": {
      "123": {
        "Name": "Amitabh",
        "Surname": "Bacchan 1"
      }
    }
  } ;

  data2 = {
    "Name": "Amitabh"
  }

  cyclicData = {
    list: [
      1,
      2,
      3,
    ] as any[],
  };

  depth: any;
  constructor() {
    this.cyclicData.list.push(
      this.cyclicData,
      this.cyclicData,
      this.cyclicData.list,
    );


  }

}
