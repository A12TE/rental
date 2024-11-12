import { Component } from '@angular/core';
import { VehicleService } from '../../service/vehicle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrl: './bikes.component.css'
})
export class BikesComponent {
  constructor(private service:VehicleService,private router:Router){}

  bikes:any;
  ngOnInit(){
      this.service.getbike().subscribe((data)=>{
          this.bikes=data;
          console.log(this.bikes);
      })
  }
  openvehicle(id:any){
      this.router.navigateByUrl('user/viewvehicle/'+id);
  }

}
