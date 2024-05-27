import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductGenericComponent } from './add-product-generic.component';

describe('AddProductGenericComponent', () => {
  let component: AddProductGenericComponent;
  let fixture: ComponentFixture<AddProductGenericComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddProductGenericComponent]
    });
    fixture = TestBed.createComponent(AddProductGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
