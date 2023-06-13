//  import { async, ComponentFixture, TestBed } from '@angular/core/testing';

//  import { EmployeeuiComponent } from './employeeui.component';

//  describe('EmployeeuiComponent', () => {
//    let component: EmployeeuiComponent;
//    let fixture: ComponentFixture<EmployeeuiComponent>;

//    beforeEach(async(() => {
//      TestBed.configureTestingModule({
//        declarations: [ EmployeeuiComponent ]
//      })
//      .compileComponents();
//    }));

//    beforeEach(() => {
//      fixture = TestBed.createComponent(EmployeeuiComponent);
//      component = fixture.componentInstance;
//      fixture.detectChanges();
//    });

//    it('should create', () => {
//      expect(component).toBeTruthy();
//    });
//  });
import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';
import { Component } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import { EmployeeModel } from './employee-ui model';
import { ApiService } from '../api.service';
import { EmployeeuiComponent } from './employeeui.component';
import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
describe('ApiService', () => {
	let service: ApiService;
  let httpController: HttpTestingController;

	let url = 'localhost:3000/';
	
	  beforeEach(() => {
	    TestBed.configureTestingModule({
	      imports: [HttpClientTestingModule],
	    });
	    service = TestBed.inject(ApiService);
	    httpController = TestBed.inject(HttpTestingController);
	  });


	it('should call getEmployee and return an array of Products', () => {
			
			// 1
		  service.getEmployee().subscribe((res) => {
				//2
	      expect(res).toEqual(EmployeeModel);
	    });
	
			//3
	    const req = httpController.expectOne({
	      method: 'GET',
	      url: `${url}/posts`,
	    });

			//4
	    req.flush(EmployeeModel);
	  });
  });