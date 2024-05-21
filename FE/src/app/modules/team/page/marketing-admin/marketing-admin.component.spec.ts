import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingAdminComponent } from './marketing-admin.component';

describe('MarketingAdminComponent', () => {
  let component: MarketingAdminComponent;
  let fixture: ComponentFixture<MarketingAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarketingAdminComponent]
    });
    fixture = TestBed.createComponent(MarketingAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
