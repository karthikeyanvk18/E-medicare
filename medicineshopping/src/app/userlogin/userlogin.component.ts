import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../cart/cart.service';
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  public totalItem: number = 0;

  

  
  userloginForm!:FormGroup;

  constructor(private formBuilder:FormBuilder,
    private _http:HttpClient, private router:Router,private cartService: CartService) { }
    ngOnInit(): void {
      this.cartService.getProducts()
        .subscribe(res => {
          this.totalItem = res.length;
        })
    
 
    this.userloginForm = this.formBuilder.group({
      email:['', [Validators.required]],
      password:['',[Validators.required]]
    })
  }
//login method Define
UserlogIn(){
  this._http.get<any>("http://localhost:3000/signup").subscribe(res =>{
    const user = res.find((a:any)=>{
      return a.email === this.userloginForm.value.email && a.password === this.userloginForm.value.password

    })
    if(user){
      alert("Login Successful ");
      this.userloginForm.reset();
      this.router.navigate(['allproducts']);
      
    }
    else{
      alert("User Not Found  !! ")
    }
  },err=>{
    alert("Something went wrong 404 error 0")

  }
  )
}

}
