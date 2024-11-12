import { Injectable } from '@angular/core';
import { vehicles } from './vehicletype';
import {of} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
     orders:any=[];
  constructor() { }
  getorders(){
    return of (this.orders);
 }

 addtowishlist(newvehicle:any){
     this.orders.push(newvehicle)
 }

}
