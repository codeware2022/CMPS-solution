import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRangeComponent } from './add-range.component';

describe('AddRangeComponent', () => {
  let component: AddRangeComponent;
  let fixture: ComponentFixture<AddRangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddRangeComponent]
    });
    fixture = TestBed.createComponent(AddRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
