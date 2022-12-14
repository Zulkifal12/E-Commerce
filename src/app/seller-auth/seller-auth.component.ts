import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import {Router} from "@angular/router"
import { SignUP } from '../data-type';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  constructor(private seller:SellerService,private router:Router) { }
  authError:string = '';
  showLogin = false;
  ngOnInit(): void {
    this.seller.reloadSeller();
  }

  signUp(data:SignUP):void{
    this.seller.userSignup({ data })
  }
  login(data:SignUP):void{
    this.authError = ""
    this.seller.userLogin(data);
    this.seller.isLoginError.subscribe((isError)=>{
      if(isError){
        this.authError = "Invalid User Email or Password"
      }
    })
  }

  openLogin(){
   this.showLogin = true;
  }

  openSignUp(){
    this.showLogin = false;
  }
}
