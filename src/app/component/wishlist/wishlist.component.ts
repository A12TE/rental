import { Component } from '@angular/core';
import { WishlistService } from '../../service/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent{

  vehicles:any;
  constructor(private wish:WishlistService){}

ngOnInit(){
    this.wish.getvehicle().subscribe((res)=>{
        this.vehicles=res;
        console.log(this.vehicles);
    })
  
}
getallwishlength(){
   return this.wish.length;
}



}
