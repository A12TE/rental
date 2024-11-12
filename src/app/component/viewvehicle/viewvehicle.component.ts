import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleService } from '../../service/vehicle.service';
import { WishlistService } from '../../service/wishlist.service';
import { OrderService } from '../../service/order.service';

@Component({
  selector: 'app-viewvehicle',
  templateUrl: './viewvehicle.component.html',
  styleUrl: './viewvehicle.component.css'
})
export class ViewvehicleComponent {
  vid:any;
  vehicle:any;
  orderedvehicles:any;
  uname:any;
  uaddress:any;
  utime:any;
  neworder:any;
  constructor(private route:ActivatedRoute,private service:VehicleService,private wish:WishlistService
     ,private router:Router,private or:OrderService

  ){}
  ngOnInit(){
      this.vid=this.route.snapshot.params['id'];
      console.log(this.vid);
      if(this.vid!=null){
          this.vehicle=this.service.getallvehicleByid(this.vid);
          console.log(this.vehicle);
          
      } 
  }
  //wishlist logic from get value
  addtowishlist(vehicle:any){
    this.wish.addtowishlist(this.vehicle);
    this.router.navigateByUrl("/user/wishlist");
    alert("successfull")
 }
 //get value from html
 ordernow(){
       this.neworder={
           vehicleId:this.orderedvehicles.vehicleId,
           vehicleName:this.orderedvehicles.vehicleName,
           vehiclePrice:this.orderedvehicles.vehiclePrice,
           username:this.uname,
           address:this.uaddress,
           time:this.utime
       }
       console.log(this.neworder);
       this.or.addtowishlist(this.neworder);
       alert("add sucessfully");
       this.router.navigateByUrl("/user/vieworders")
 }
 openorder(order:any){
   this.orderedvehicles=order;
 }
  

 
}
