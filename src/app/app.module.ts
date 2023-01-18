import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {  FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SportsService } from 'src/services/sports.service';
import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './components/partials/search/search.component';
import { SportPageComponent } from './components/pages/sport-page/sport-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { FirstPageComponent } from './components/pages/first-page/first-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    SportPageComponent,
    CheckoutPageComponent,
    LoginPageComponent,
    FirstPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [SportsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
