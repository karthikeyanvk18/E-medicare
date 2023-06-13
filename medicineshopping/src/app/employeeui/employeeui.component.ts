import { Component } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import { EmployeeModel } from './employee-ui model';
import { ApiService } from '../api.service';
import { CartService } from '../cart/cart.service';
@Component({
  selector: 'app-employeeui',
  templateUrl: './employeeui.component.html',
  styleUrls: ['./employeeui.component.css']
})
export class EmployeeuiComponent  {
  pageNumber: number = 3;
  currentPg: number = 1;
  onSubmit(data:''){
    console.warn(data='');
  }
  filteredString: string = '';


  

  //create a object named empoyeemodelobj to pass the model to server for post method


  employeeModelObj:EmployeeModel =new EmployeeModel();
  formValue !:FormGroup;
  employeeData!:any;
  showAdd !:boolean;
  showUpdate !: boolean;

  constructor(private formBuilder:FormBuilder,
    private api:ApiService) { }
   
  ngOnInit() :void{
    this.formValue =this.formBuilder.group({
      id:[''],
      img:[''],
      productName:[''],
      brand:[''],
      qty:[''],
      price:[''],
      



    })
    this.getAllEmployee();
  }
  clickddEmployee(){
    this.formValue.reset();
    this.showAdd =true;
    this.showUpdate=false;
  }
  
    postEmployeeDetails(){
      this.employeeModelObj.id=this.formValue.value.id;
      this.employeeModelObj.img=this.formValue.value.img;
      this.employeeModelObj.productName=this.formValue.value.productName;
      this.employeeModelObj.brand=this.formValue.value.brand;
      this.employeeModelObj.qty=this.formValue.value.qty;
      this.employeeModelObj.price=this.formValue.value.price;
      
      this.api.postEmployee(this.employeeModelObj)
      .subscribe(res=>{
        console.log(res);
        alert("added")
        let ref =document.getElementById('cancel')
        this.formValue.reset();
        this.getAllEmployee();
      },
      _err=>{
          alert("went wrong");
      })
        
    }
getAllEmployee(){
  this.api.getEmployee()
  .subscribe(res=>{
  this.employeeData=res;
  })
 }

 deleteEmployee(row:any){
   this.api.deleteEmployee(row.id)
   .subscribe(res=>{
     alert("product deleted")
     this.getAllEmployee();
   })
 }
onEdit1(row:any){
  this.showAdd =false;
  this.showUpdate=true;
  this.employeeModelObj.id=row.id;
  this.formValue.controls['id'].setValue(row.id)
  this.formValue.controls['img'].setValue(row.img)
  this.formValue.controls['productName'].setValue(row.productName)
  this.formValue.controls['brand'].setValue(row.brand)
  this.formValue.controls['qty'].setValue(row.qty)
  this.formValue.controls['price'].setValue(row.price)
  

}

updateEmployeeDetails(){
  this.employeeModelObj.id=this.formValue.value.id;
  this.employeeModelObj.img=this.formValue.value.img;
  this.employeeModelObj.productName=this.formValue.value.productName;
  this.employeeModelObj.brand=this.formValue.value.brand;
  this.employeeModelObj.qty=this.formValue.value.qty;
  this.employeeModelObj.price=this.formValue.value.price;
 this.api.updateEmployee(this.employeeModelObj,this.employeeModelObj.id)
 .subscribe(res=>{
   alert("update  sucesfully");
   let ref =document.getElementById('cancel')
   this.formValue.reset();
   this.getAllEmployee();
 })
} 
}
