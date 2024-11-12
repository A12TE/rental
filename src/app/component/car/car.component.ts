import { Component } from '@angular/core';
import { VehicleService } from '../../service/vehicle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {
  constructor(private service:VehicleService,private router:Router){}

  bikes:any;
  ngOnInit(){
      this.service.getcar().subscribe((data)=>{
          this.bikes=data;
          console.log(this.bikes);
      })
  }
  openvehicle(id:any){
    console.log(id);
      this.router.navigateByUrl('/user/viewvehicle/'+id);
  }
}
