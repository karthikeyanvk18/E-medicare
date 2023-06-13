import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { AnalgesicsComponent } from './analgesics/analgesics.component';
import { AntibioticsComponent } from './antibiotics/antibiotics.component';
import { AntipyreticsComponent } from './antipyretics/antipyretics.component';
import { BillingComponent } from './billing/billing.component';
import { CartComponent } from './cart/cart.component';
import { ChangeComponent } from './change/change.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ChecktqComponent } from './checktq/checktq.component';
import { ContactComponent } from './contact/contact.component';
import { EmployeeuiComponent } from './employeeui/employeeui.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';
import { UserloginComponent } from './userlogin/userlogin.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'analgesics',component:AnalgesicsComponent},
  {path:'antibiotics',component:AntibioticsComponent},
  {path:'antipyretics',component:AntipyreticsComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'employeeui',component:EmployeeuiComponent},
  {path:'cart',component:CartComponent},
  {path:'allproducts',component:AllproductsComponent},
  {path:'signup',component:SignupComponent},
  {path:'checktq',component:ChecktqComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'userlogin',component:UserloginComponent},
  {path:'logout',component:LogoutComponent},
  {path:'billing',component:BillingComponent},
  {path:'change',component:ChangeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
