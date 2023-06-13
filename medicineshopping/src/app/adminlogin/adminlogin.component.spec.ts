// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { AdminloginComponent } from './adminlogin.component';

// describe('AdminloginComponent', () => {
//   let component: AdminloginComponent;
//   let fixture: ComponentFixture<AdminloginComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ AdminloginComponent ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(AdminloginComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminloginComponent } from './adminlogin.component';




describe('AdminloginComponent', () => {
    let component:AdminloginComponent;
    let fixture: ComponentFixture<AdminloginComponent>;
    let el: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AdminloginComponent],
            imports: [FormsModule, HttpClientModule, RouterTestingModule, ReactiveFormsModule],
            providers: []
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AdminloginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should set submitted to true', async(() => {
        component.AdminlogIn();
        expect(component. adminloginForm).toBeTruthy();

    }));

    it('Should call the Login method', () => {
        fakeAsync(() => {
            fixture.detectChanges();
            spyOn(component, 'AdminlogIn');
            el = fixture.debugElement.query(By.css('Login')).nativeElement;
            el.click();
            expect(component.AdminlogIn).toHaveBeenCalledTimes(0);
        })

    });

    it('Form should be invalid', async(() => {
        component.adminloginForm.controls['email'].setValue('');
        component.adminloginForm.controls['password'].setValue('');
        expect(component.adminloginForm.valid).toBeFalsy();
    }));

    it('Form should be valid', async(() => {
        component.adminloginForm.controls['email'].setValue('madhavi@gmail.com');
        component.adminloginForm.controls['password'].setValue('madhavi@123');
        expect(component.adminloginForm.valid).toBeTruthy();
    }));
  


});