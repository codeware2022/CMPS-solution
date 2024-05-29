import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBrandManagerComponent } from './view-brand-manager.component';

describe('ViewBrandManagerComponent', () => {
  let component: ViewBrandManagerComponent;
  let fixture: ComponentFixture<ViewBrandManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewBrandManagerComponent]
    });
    fixture = TestBed.createComponent(ViewBrandManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
