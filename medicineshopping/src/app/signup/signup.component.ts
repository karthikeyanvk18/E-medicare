import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private _http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name:['', [Validators.required]],
      email:['', [Validators.required]],
      mobile:['', [Validators.required,Validators.maxLength(10)]],
      password:['', [Validators.required,Validators.minLength(6)]],
    })
  }

  signUp(){
    this._http.post<any>("http://localhost:3000/signup",this.signupForm.value).subscribe(res=>{
      alert("Registration Successfully");
      this.signupForm.reset();
      this.router.navigate(['userlogin'])
    }, err=>{
      alert("Something went wrong")
    }
    )
   
  }
  
}
