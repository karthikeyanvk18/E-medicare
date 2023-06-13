import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.css']
})
export class ChangeComponent implements OnInit {

  changepForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private _http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.changepForm = this.formBuilder.group({
      email:['', [Validators.required]],
      password:['', [Validators.required,Validators.maxLength(10)]],
      password1:['', [Validators.required,Validators.minLength(6)]],
    })
  }

  changePa(){
    this._http.post<any>("http://localhost:3000/signup",this.changepForm.value).subscribe(res=>{
      alert("Done Successfully");
      this.changepForm.reset();
      this.router.navigate(['userlogin'])
    }, err=>{
      alert("Something went wrong")
    }
    )
   
  }
}
