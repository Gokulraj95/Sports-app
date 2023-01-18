import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SportsService } from 'src/services/sports.service';
import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './components/partials/search/search.component';
import { SportPageComponent } from './components/pages/sport-page/sport-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    SportPageComponent,
    CheckoutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SportsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
