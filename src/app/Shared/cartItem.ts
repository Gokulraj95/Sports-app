import { FormsModule } from "@angular/forms"
import {sport} from "./Sports"


export class CartItem{
    constructor(public sport:sport){}

quantity:number = 1;
price:number = this.sport.price;
}