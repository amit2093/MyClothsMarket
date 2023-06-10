import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { CategoryAndItemSectionComponent } from './category-and-item-section/category-and-item-section.component';
import { HomePageDealsComponent } from './home-page-deals/home-page-deals.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { ClothCardComponent } from './cloth-card/cloth-card.component';
import { XmlPipePipe } from './xml-pipe.pipe';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { GlowingTextComponent } from './glowing-text/glowing-text.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActionButtonComponent } from './action-button/action-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    SearchBarComponent,
    HomeCarouselComponent,
    CategoryAndItemSectionComponent,
    HomePageDealsComponent,
    ClothCardComponent,
    XmlPipePipe,
    GlowingTextComponent,
    ActionButtonComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSliderModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
