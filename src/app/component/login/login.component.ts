import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VehicleService } from '../../service/vehicle.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username:any;
  password:any;
  reqpwd:any;
  loginform:FormGroup=new FormGroup({});

  constructor(private bs:Router,private service:VehicleService,private fb:FormBuilder){
    this.loginform=this.fb.group({
        username:['',Validators.required],
        password:['',Validators.required]
    })
  }
  checklogin(){
      this.reqpwd=this.loginform.value.username.slice(0,3)+"123";
       if(this.loginform.value.username=="admin" &&  this.loginform.value.password==this.reqpwd){
        Swal.fire({
          title: "Good job!",
          text: "Admin Dashboard",
          icon: "success"
        });
          localStorage.setItem("Loggedin",JSON.stringify(this.loginform.value));
          this.bs.navigateByUrl("admin");
       }
       else if(this.loginform.value.password==this.reqpwd){
        Swal.fire({
          title: "Good job!",
          text: "user Dashboard",
          icon: "success"
        });
        localStorage.setItem("Loggedin",JSON.stringify(this.loginform.value));
        this.bs.navigateByUrl("user/cars");
       }
       else{
        Swal.fire({
        
          text: "Login failed credentials",
          icon: "error"
        });
       }
  }
}
