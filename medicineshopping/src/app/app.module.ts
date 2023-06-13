import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AntipyreticsComponent } from './antipyretics/antipyretics.component';
import { AnalgesicsComponent } from './analgesics/analgesics.component';
import { AntibioticsComponent } from './antibiotics/antibiotics.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FilterPipe } from './filter.pipe';
import { PipeFilter } from './pipe.filter';
import { EmployeeuiComponent } from './employeeui/employeeui.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { SignupComponent } from './signup/signup.component';
import { ChecktqComponent } from './checktq/checktq.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { LogoutComponent } from './logout/logout.component';
import { BillingComponent } from './billing/billing.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { NgxPaginationModule } from 'ngx-pagination';
import { ChangeComponent } from './change/change.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    PipeFilter,
    HomeComponent,
        AntipyreticsComponent,
        AnalgesicsComponent,
        AntibioticsComponent,
        AboutComponent,
        ContactComponent,
        CheckoutComponent,
        EmployeeuiComponent,
        CartComponent,
        AllproductsComponent,
        SignupComponent,
        ChecktqComponent,
        AdminloginComponent,
        UserloginComponent,
        LogoutComponent,
        BillingComponent,
        ChangeComponent

      
       
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    Ng2SearchPipeModule,
    FlexLayoutModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
