import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandCoordinatorComponent } from './brand-coordinator.component';

describe('BrandCoordinatorComponent', () => {
  let component: BrandCoordinatorComponent;
  let fixture: ComponentFixture<BrandCoordinatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrandCoordinatorComponent]
    });
    fixture = TestBed.createComponent(BrandCoordinatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
