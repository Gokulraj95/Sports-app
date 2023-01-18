import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { sport } from 'src/app/Shared/Sports';
import { CartService } from 'src/services/cart.service';
import { SportsService } from 'src/services/sports.service';

@Component({
  selector: 'app-sport-page',
  templateUrl: './sport-page.component.html',
  styleUrls: ['./sport-page.component.css']
})
export class SportPageComponent implements OnInit {

  sport!:sport;

  constructor(activatedRoute:ActivatedRoute,private sportService:SportsService, private cartService:CartService,private router: Router)
  {
    activatedRoute.params.subscribe(param => 
      {
        if(param.id) 
        this.sport = sportService.getsportById(param.id);
      })

   
  }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  addToCart(){
    this.cartService.addToCart(this.sport);
    this.router.navigateByUrl('/cart-page');
  }

}
