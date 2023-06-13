/*import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserloginComponent } from './userlogin.component';

describe('UserloginComponent', () => {
  let component: UserloginComponent;
  let fixture: ComponentFixture<UserloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});*/
import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { UserloginComponent } from './userlogin.component';




describe('UserloginComponent', () => {
    let component: UserloginComponent;
    let fixture: ComponentFixture<UserloginComponent>;
    let el: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UserloginComponent],
            imports: [FormsModule, HttpClientModule, RouterTestingModule, ReactiveFormsModule],
            providers: []
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UserloginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

   

    it('Should call the Login method', () => {
        fakeAsync(() => {
            fixture.detectChanges();
            spyOn(component, 'UserlogIn');
            el = fixture.debugElement.query(By.css('Login')).nativeElement;
            el.click();
            expect(component.UserlogIn).toHaveBeenCalledTimes(0);
        })

    });

    it('Form should be invalid', async(() => {
        component.userloginForm.controls['email'].setValue('');
        component.userloginForm.controls['password'].setValue('');
        expect(component.userloginForm.valid).toBeFalsy();
    }));

    it('Form should be valid', async(() => {
        component.userloginForm.controls['email'].setValue('sai@gmail.com');
        component.userloginForm.controls['password'].setValue('Sai@123');
        expect(component.userloginForm.valid).toBeTruthy();
    }));

});

