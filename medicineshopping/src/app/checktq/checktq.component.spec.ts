import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecktqComponent } from './checktq.component';

describe('ChecktqComponent', () => {
  let component: ChecktqComponent;
  let fixture: ComponentFixture<ChecktqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChecktqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecktqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
