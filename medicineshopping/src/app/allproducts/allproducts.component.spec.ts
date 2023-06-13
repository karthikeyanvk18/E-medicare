import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllproductsComponent } from './allproducts.component';
import { By } from '@angular/platform-browser';

describe('AllproductsComponent', () => {
  let component: AllproductsComponent;
  let fixture: ComponentFixture<AllproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display ALL PRODUCTS on the h1 element', () => {

    const el = fixture.debugElement.query(By.css('h1'));
    expect(el.nativeElement.innerText).toEqual('ALL PRODUCTS');
 })
});
