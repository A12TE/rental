import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { UserdashboardComponent } from './component/userdashboard/userdashboard.component';
import { CarComponent } from './component/car/car.component';
import { BikesComponent } from './component/bikes/bikes.component';
import { ViewvehicleComponent } from './component/viewvehicle/viewvehicle.component';
import { ViewordersComponent } from './component/vieworders/vieworders.component';
import { BookingsComponent } from './component/bookings/bookings.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { AdmindashboardComponent } from './component/admindashboard/admindashboard.component';
import { AddvehicleComponent } from './component/addvehicle/addvehicle.component';
import { ManagevehicleComponent } from './component/managevehicle/managevehicle.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'user',component:UserdashboardComponent,
      children:[
         {path:'cars',component:CarComponent},
         {path:'bike',component:BikesComponent},
         {path:'viewvehicle/:id',component:ViewvehicleComponent},
         {path:'vieworders',component:ViewordersComponent},
         {path:'booking',component:BookingsComponent},
         {path:'wishlist',component:WishlistComponent},
         
      ]
  },
  {path:'admin',component:AdmindashboardComponent,
    children:[
       {path:'cars',component:CarComponent},
       {path:'bike',component:BikesComponent},
       {path:'vieworders',component:ViewordersComponent},
       {path:'addvehicle',component:AddvehicleComponent},
       {path:'managevehicle',component:ManagevehicleComponent},
       
    ]
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
