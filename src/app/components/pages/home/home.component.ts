import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { sport } from 'src/app/Shared/Sports';
import { SportsService } from 'src/services/sports.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

sports:sport[]= [];
constructor(private sportService:SportsService, activatedRoute:ActivatedRoute){
  activatedRoute.params.subscribe((params) => {
    if(params.searchTerm)
    this.sports = this.sportService.getAllsportsBySearchTerm(params.searchTerm);
    else
    this.sports = sportService.getAll();
  })
 
}

ngOnInit():void{


}
}


