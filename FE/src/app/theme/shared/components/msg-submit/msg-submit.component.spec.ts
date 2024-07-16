import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgSubmitComponent } from './msg-submit.component';

describe('MsgSubmitComponent', () => {
  let component: MsgSubmitComponent;
  let fixture: ComponentFixture<MsgSubmitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MsgSubmitComponent]
    });
    fixture = TestBed.createComponent(MsgSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
