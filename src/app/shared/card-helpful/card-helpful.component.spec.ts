import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHelpfulComponent } from './card-helpful.component';

describe('CardHelpfulComponent', () => {
  let component: CardHelpfulComponent;
  let fixture: ComponentFixture<CardHelpfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardHelpfulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHelpfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
