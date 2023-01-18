import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { FirstPageComponent } from './components/pages/first-page/first-page.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { SportPageComponent } from './components/pages/sport-page/sport-page.component';


const routes: Routes = [
  { path: '', component: FirstPageComponent },
  {path: 'login', component:LoginPageComponent},
  { path: 'home', component: HomeComponent },
  { path: 'search/:searchTerm', component: HomeComponent },
  { path:'sport/:id', component: SportPageComponent},
  { path:'cart-page', component: CheckoutPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }