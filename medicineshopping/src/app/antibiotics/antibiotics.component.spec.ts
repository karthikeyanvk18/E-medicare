import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntibioticsComponent } from './antibiotics.component';

describe('AntibioticsComponent', () => {
  let component: AntibioticsComponent;
  let fixture: ComponentFixture<AntibioticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntibioticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AntibioticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
