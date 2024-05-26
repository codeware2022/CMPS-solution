import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductMasterCategoryComponent } from './add-product-master-category.component';

describe('AddProductMasterCategoryComponent', () => {
  let component: AddProductMasterCategoryComponent;
  let fixture: ComponentFixture<AddProductMasterCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddProductMasterCategoryComponent]
    });
    fixture = TestBed.createComponent(AddProductMasterCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
