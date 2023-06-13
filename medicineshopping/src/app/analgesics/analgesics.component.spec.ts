import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalgesicsComponent } from './analgesics.component';

describe('AnalgesicsComponent', () => {
  let component: AnalgesicsComponent;
  let fixture: ComponentFixture<AnalgesicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalgesicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalgesicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
