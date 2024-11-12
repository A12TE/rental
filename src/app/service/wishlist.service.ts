import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  length: any;

  constructor() { }

  wishlist:any=[];

  getvehicle(){
     return of (this.wishlist);
  }

  addtowishlist(newvehicle:any){
      this.wishlist.push(newvehicle)
  }
  getallwishlength(){
    return this.wishlist.length;
 }
 
}
