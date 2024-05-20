import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalRepComponent } from './medical-rep.component';

describe('MedicalRepComponent', () => {
  let component: MedicalRepComponent;
  let fixture: ComponentFixture<MedicalRepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicalRepComponent]
    });
    fixture = TestBed.createComponent(MedicalRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
