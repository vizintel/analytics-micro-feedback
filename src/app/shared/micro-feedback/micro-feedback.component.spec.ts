import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroFeedbackComponent } from './micro-feedback.component';

describe('MicroFeedbackComponent', () => {
  let component: MicroFeedbackComponent;
  let fixture: ComponentFixture<MicroFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicroFeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
