import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { ChangeComponent } from './change.component';




describe('ChangeComponent', () => {
    let component:ChangeComponent;
    let fixture: ComponentFixture<ChangeComponent>;
    let el: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ChangeComponent],
            imports: [FormsModule, HttpClientModule, RouterTestingModule, ReactiveFormsModule],
            providers: []
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ChangeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

   

    it('Should call the changePa method', () => {
        fakeAsync(() => {
            fixture.detectChanges();
            spyOn(component, 'changePa');
            el = fixture.debugElement.query(By.css('Submit')).nativeElement;
            el.click();
            expect(component.changePa).toHaveBeenCalledTimes(0);
        })

    });

    it('Form should be invalid', async(() => {
      component.changepForm.controls['email'].setValue('');
      component.changepForm.controls['password'].setValue('');
      component.changepForm.controls['password1'].setValue('');
        expect(component.changepForm.valid).toBeFalsy();
    }));

    it('Form should be valid', async(() => {
      component.changepForm.controls['email'].setValue('sai@gmail.com');
        component.changepForm.controls['password'].setValue('sai@123');
        component.changepForm.controls['password1'].setValue('sai@123');
        
        expect(component.changepForm.valid).toBeTruthy();
    }));
  


});
