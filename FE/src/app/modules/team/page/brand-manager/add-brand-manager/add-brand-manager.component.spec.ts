import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBrandManagerComponent } from './add-brand-manager.component';

describe('AddBrandManagerComponent', () => {
  let component: AddBrandManagerComponent;
  let fixture: ComponentFixture<AddBrandManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBrandManagerComponent]
    });
    fixture = TestBed.createComponent(AddBrandManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
