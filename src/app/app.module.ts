import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { UserdashboardComponent } from './component/userdashboard/userdashboard.component';
import { AdmindashboardComponent } from './component/admindashboard/admindashboard.component';
import { CarComponent } from './component/car/car.component';
import { BikesComponent } from './component/bikes/bikes.component';
import { ViewvehicleComponent } from './component/viewvehicle/viewvehicle.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { BookingsComponent } from './component/bookings/bookings.component';
import { AddvehicleComponent } from './component/addvehicle/addvehicle.component';
import { ManagevehicleComponent } from './component/managevehicle/managevehicle.component';
import { ViewordersComponent } from './component/vieworders/vieworders.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserdashboardComponent,
    AdmindashboardComponent,
    CarComponent,
    BikesComponent,
    ViewvehicleComponent,
    WishlistComponent,
    BookingsComponent,
    AddvehicleComponent,
    ManagevehicleComponent,
    ViewordersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
