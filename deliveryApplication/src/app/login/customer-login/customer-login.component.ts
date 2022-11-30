import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {

  constructor( private authService:AuthService, private router :Router) { }

  ngOnInit(): void {

    console.log("authid" + this.authService.id);
    if (this.authService.id == '') {
        console.log("login failed");
        this.router.navigate(["login"]);
    }
  }
  public logout(){
    this.authService.id = '';


    console.log("clicked logout button");
    this.router.navigate(["home"]);

  }

}
