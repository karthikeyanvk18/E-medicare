import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntipyreticsComponent } from './antipyretics.component';

describe('AntipyreticsComponent', () => {
  let component: AntipyreticsComponent;
  let fixture: ComponentFixture<AntipyreticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntipyreticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AntipyreticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
