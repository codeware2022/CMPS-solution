import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSalesRepComponent } from './view-sales-rep.component';

describe('ViewSalesRepComponent', () => {
  let component: ViewSalesRepComponent;
  let fixture: ComponentFixture<ViewSalesRepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewSalesRepComponent]
    });
    fixture = TestBed.createComponent(ViewSalesRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
