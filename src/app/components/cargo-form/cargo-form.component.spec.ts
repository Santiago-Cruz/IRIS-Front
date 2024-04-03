import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoFormComponent } from './cargo-form.component';

describe('CargoFormComponent', () => {
  let component: CargoFormComponent;
  let fixture: ComponentFixture<CargoFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CargoFormComponent]
    });
    fixture = TestBed.createComponent(CargoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
