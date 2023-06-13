// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { SignupComponent } from './signup.component';

// describe('SignupComponent', () => {
//   let component: SignupComponent;
//   let fixture: ComponentFixture<SignupComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ SignupComponent ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(SignupComponent);
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
import { SignupComponent } from './signup.component';




describe('SignupComponent', () => {
    let component:SignupComponent;
    let fixture: ComponentFixture<SignupComponent>;
    let el: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SignupComponent],
            imports: [FormsModule, HttpClientModule, RouterTestingModule, ReactiveFormsModule],
            providers: []
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SignupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

   

    it('Should call the Signup method', () => {
        fakeAsync(() => {
            fixture.detectChanges();
            spyOn(component, 'signUp');
            el = fixture.debugElement.query(By.css('Signup')).nativeElement;
            el.click();
            expect(component.signUp).toHaveBeenCalledTimes(0);
        })

    });

    it('Form should be invalid', async(() => {
      component.signupForm.controls['name'].setValue('');
        component.signupForm.controls['email'].setValue('');
        component.signupForm.controls['mobile'].setValue('');
        component.signupForm.controls['password'].setValue('');
        expect(component.signupForm.valid).toBeFalsy();
    }));

    it('Form should be valid', async(() => {
      component.signupForm.controls['name'].setValue('sai');
        component.signupForm.controls['email'].setValue('sai@gmail.com');
        component.signupForm.controls['mobile'].setValue('8889997776');
        component.signupForm.controls['password'].setValue('Sai@123');
        expect(component.signupForm.valid).toBeTruthy();
    }));
  


});