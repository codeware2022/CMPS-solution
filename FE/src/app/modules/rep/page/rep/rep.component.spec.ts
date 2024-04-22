import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepComponent } from './rep.component';

describe('RepComponent', () => {
  let component: RepComponent;
  let fixture: ComponentFixture<RepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepComponent]
    });
    fixture = TestBed.createComponent(RepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
