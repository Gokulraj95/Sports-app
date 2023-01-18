import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {


  username:string | undefined;
  password:string | undefined;
  

  constructor(private router: Router){}
  ngOnInit(): void {

  }

loginPage(){ 
if( this.username == `admin` && this.password == `admin`){

this.router.navigateByUrl('home');
console.log("login working");

} else{ console.log(" login fail")}}

}
