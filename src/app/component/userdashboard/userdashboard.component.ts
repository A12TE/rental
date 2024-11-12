import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WishlistComponent } from '../wishlist/wishlist.component';
import { WishlistService } from '../../service/wishlist.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrl: './userdashboard.component.css'
})
export class UserdashboardComponent {
   title:any;
   user:any;
   username:any;
   len:any;
      constructor(private bs:Router,private wish:WishlistService){}
      ngOnInit(){
           if(localStorage.getItem("Loggedin")==null){
               this.bs.navigateByUrl("/");
           }
           else{
                this.user=localStorage.getItem("Loggedin");
                this.username=JSON.parse(this.user).username;
           }
      }
      ngDoCheck(){
      this.len=this.wish.getallwishlength();
      console.log(this.len);
      }



     }
