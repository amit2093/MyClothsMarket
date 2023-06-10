
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import AppConsts from '../Constants/AppConsts';
import { AppService } from '../services/app-service.service';
import { BackendApiService } from '../services/backend-api.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public brandName: string = AppConsts.BRAND_NAME;
  public mark: string = AppConsts.REGISTERED_MARK;

  selectedTab: any;
  navBarMenu: any;
  searchText: any;

  constructor(private service: BackendApiService,
    private router: Router,
    private appService: AppService) { 
     
  }

  ngOnInit(): void {
    this.service.getNavBarMenu().subscribe(data => {
      this.navBarMenu = data;
    });
  }

  search(val: any): void{
    this.searchText = val;
    this.appService.setSearchText(val);
  }

  navigateTo(to: string){
    this.selectedTab = to;
    this.router.navigate(["/" + to]);
  }

  navigateToHome(){
    this.selectedTab = null;
    this.router.navigate(["/"]);
  }
}
