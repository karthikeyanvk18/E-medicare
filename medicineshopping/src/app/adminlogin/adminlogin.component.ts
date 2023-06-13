import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  adminloginForm!:FormGroup;

  constructor(private formBuilder:FormBuilder,
    private _http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.adminloginForm = this.formBuilder.group({
      email:['', [Validators.required]],
      password:['', [Validators.required]]
    })
  }
//login method Define
AdminlogIn(){
  this._http.get<any>("http://localhost:3000/adminlogin").subscribe(res =>{
    const user = res.find((a:any)=>{
      return a.email === this.adminloginForm.value.email && a.password === this.adminloginForm.value.password

    })
    if(user){
      alert("Login Successful");
      this.adminloginForm.reset();
      this.router.navigate(['employeeui'])
    }
    else{
      alert("User Not Found  !! 0 ")
    }
  },err=>{
    alert("Something went wrong 404 error 0")

  }
  )
}
}
