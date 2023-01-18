import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SportPageComponent } from './components/pages/sport-page/sport-page.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search/:searchTerm', component: HomeComponent },
  { path:'sport/:id', component: SportPageComponent},
  { path:'cart-page', component: CheckoutPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }