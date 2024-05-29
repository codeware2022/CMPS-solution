import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductMasterComponent } from './add-product-master.component';

describe('AddProductMasterComponent', () => {
  let component: AddProductMasterComponent;
  let fixture: ComponentFixture<AddProductMasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddProductMasterComponent]
    });
    fixture = TestBed.createComponent(AddProductMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
