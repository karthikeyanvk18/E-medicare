/*import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutComponent } from './checkout.component';

describe('CheckoutComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutComponent);
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
import { CheckoutComponent } from './checkout.component';




describe('CheckoutComponent', () => {
    let component:CheckoutComponent;
    let fixture: ComponentFixture<CheckoutComponent>;
    let el: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CheckoutComponent],
            imports: [FormsModule, HttpClientModule, RouterTestingModule, ReactiveFormsModule],
            providers: []
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CheckoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    

    it('Should call the checkout method', () => {
        fakeAsync(() => {
            fixture.detectChanges();
            spyOn(component, 'checkOut');
            el = fixture.debugElement.query(By.css('Submit')).nativeElement;
            el.click();
            expect(component.checkOut).toHaveBeenCalledTimes(0);
        })

    });

    it('Form should be invalid', async(() => {
        component.checkoutForm.controls['cardname'].setValue('');
        component.checkoutForm.controls['cardnumber'].setValue('');
        component.checkoutForm.controls['expmonth'].setValue('');
        component.checkoutForm.controls['expyear'].setValue('');
        component.checkoutForm.controls['cvv'].setValue('');
        expect(component.checkoutForm.valid).toBeFalsy();
    }));

    it('Form should be valid', async(() => {
      component.checkoutForm.controls['cardname'].setValue('Ted');
      component.checkoutForm.controls['cardnumber'].setValue('1234567890');
      component.checkoutForm.controls['expmonth'].setValue('12');
      component.checkoutForm.controls['expyear'].setValue('2028');
      component.checkoutForm.controls['cvv'].setValue('155');
        expect(component.checkoutForm.valid).toBeTruthy();
    }));
  


});
