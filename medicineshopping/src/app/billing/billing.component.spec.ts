// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { BillingComponent } from './billing.component';

// describe('BillingComponent', () => {
//   let component: BillingComponent;
//   let fixture: ComponentFixture<BillingComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ BillingComponent ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(BillingComponent);
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
import { BillingComponent } from './billing.component';




describe(' BillingComponent', () => {
    let component: BillingComponent;
    let fixture: ComponentFixture< BillingComponent>;
    let el: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ BillingComponent],
            imports: [FormsModule, HttpClientModule, RouterTestingModule, ReactiveFormsModule],
            providers: []
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent( BillingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    

    it('Should call the Billing method', () => {
        fakeAsync(() => {
            fixture.detectChanges();
            spyOn(component, 'Billing');
            el = fixture.debugElement.query(By.css('Proceed to Payment')).nativeElement;
            el.click();
            expect(component.Billing).toHaveBeenCalledTimes(0);
        })

    });

    it('Form should be invalid', async(() => {
        component.billingForm.controls['firstname'].setValue('');
        component.billingForm.controls['address1'].setValue('');
        component.billingForm.controls['address2'].setValue('');
        component.billingForm.controls['city'].setValue('');
        component.billingForm.controls['state'].setValue('');
        component.billingForm.controls['zip'].setValue('');
        expect(component.billingForm.valid).toBeFalsy();
    }));

    it('Form should be valid', async(() => {
      component.billingForm.controls['firstname'].setValue('Ted');
      component.billingForm.controls['address1'].setValue('123 lane');
      component.billingForm.controls['address2'].setValue('456 lane');
      component.billingForm.controls['city'].setValue('Seattle');
      component.billingForm.controls['state'].setValue('Washington');
      component.billingForm.controls['zip'].setValue('500014');
        expect(component.billingForm.valid).toBeTruthy();
    }));
  


});